import os
import subprocess
import sys
import time
from hypium import *
import threading
from datetime import datetime

# 全局统计变量
log_file = None
download_failures = []
launch_failures = []

def log(message):
    global log_file
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    msg = f"[{timestamp}] {message}"
    print(msg)
    if log_file:
        log_file.write(msg + "\n")
        log_file.flush()

def read_app_list(filename="app-list.txt"):
    """读取 Excel 粘贴过来的 Tab 分隔符数据"""
    apps = []
    if not os.path.exists(filename):
        log(f"错误：找不到 {filename}")
        sys.exit(1)
    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line: continue
            # Excel 粘贴出来默认是 Tab (\t) 分隔
            parts = line.split('\t')
            if len(parts) >= 2:
                apps.append({"name": parts[0].strip(), "bundle": parts[1].strip()})
            else:
                # 如果没搜到 Tab，尝试空格分隔
                parts = line.split()
                if len(parts) >= 2:
                    apps.append({"name": parts[0].strip(), "bundle": parts[1].strip()})
    return apps

def split_list(lst, num):
    k, m = divmod(len(lst), num)
    return [lst[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(num)]

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout.strip()
    except Exception as e:
        return str(e)

def handle_popups(driver):
    """处理常见的首次启动弹窗"""
    popups = ['同意', '允许', '始终允许', '确定', '继续', '跳过', '下一步', '我知道了']
    for text in popups:
        try:
            btn = driver.find_component(BY.text(text))
            if btn:
                log(f"点击弹窗按钮: {text}")
                btn.click()
                time.sleep(1)
        except:
            pass

def downloading_other_app(driver, deviceSN, applist):
    log(f'开始下载流程，共 {len(applist)} 个应用')
    # 确保屏幕解锁
    if driver.is_locked():
        driver.unlock()
        time.sleep(1)
    
    # 启动应用市场
    run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
    time.sleep(3)
    handle_popups(driver)

    for app_info in applist:
        name = app_info['name']
        log(f'正在应用市场搜索并下载：{name}')
        
        # 1. 点击搜索框区域 (坐标保底)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
        time.sleep(2)
        
        # 2. 定位输入框并输入
        try:
            search_box = driver.find_component(BY.type('SearchField')) or driver.find_component(BY.type('TextInput'))
            if search_box:
                search_box.input_text(name)
            else:
                # 备用方案：直接发送文本
                run_cmd(f"hdc -t {deviceSN} shell uinput -T -i {name}")
            
            time.sleep(1)
            # 点击搜索键 (坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
            time.sleep(3)
            
            # 3. 点击第一个“安装”或“下载”按钮
            download_btn = driver.find_component(BY.text('安装')) or driver.find_component(BY.text('下载')) or driver.find_component(BY.text('更新'))
            if download_btn:
                download_btn.click()
                log(f'已点击下载：{name}')
            else:
                # 坐标点击第一个搜索结果的下载位置
                run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
                log(f'通过坐标点击下载：{name}')
            
            time.sleep(2)
            handle_popups(driver) # 处理可能出现的“继续下载”弹窗
            
            # 点击搜索框的 X 准备搜下一个
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
            time.sleep(1)
        except Exception as e:
            log(f"下载 {name} 过程中出错: {e}")
            download_failures.append((deviceSN, name, str(e)))

    # 关闭应用市场
    driver.stop_app('com.huawei.hmsapp.appgallery')

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动验证：{bundle_name}')
    try:
        # 强制停止确保冷启动
        driver.stop_app(bundle_name)
        time.sleep(1)
        
        # 启动
        driver.start_app(bundle_name)
        time.sleep(5) # 等待启动
        
        # 处理首次进入的权限弹窗
        handle_popups(driver)
        
        log(f'应用 {bundle_name} 启动成功')
        # 验证完毕后关闭
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'{bundle_name} 启动失败：{e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i, task_list):
    log(f'===== 设备 {deviceSN} 开始任务 =====')
    # 初始化驱动
    driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
    
    # 保持常亮
    run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 600000")
    
    # 执行下载（如果不想下载，可以注释掉下面这一行）
    downloading_other_app(driver, deviceSN, task_list)
    
    log(f'设备 {deviceSN} 下载阶段结束，等待 15 秒安装时间...')
    time.sleep(15)
    
    # 执行启动验证
    for app_info in task_list:
        launch_app(driver, deviceSN, app_info['bundle'])
        
    log(f'===== 设备 {deviceSN} 任务全部完成 =====')

def generate_summary(log_filename, total_expected):
    summary = f"""
{"="*60}
执行结果汇总
{"="*60}
任务总数：{total_expected}
下载失败数：{len(download_failures)}
启动失败数：{len(launch_failures)}
启动成功率：{(total_expected - len(launch_failures)) / total_expected * 100:.2f}%
{"="*60}
"""
    print(summary)
    with open(log_filename, "a", encoding="utf-8") as f:
        f.write(summary)

if __name__ == '__main__':
    # 初始化环境
    deviceSN_list = sys.argv[1:]
    if not deviceSN_list:
        print("请在命令行输入设备 SN 号！")
        sys.exit(1)
        
    all_apps = read_app_list("app-list.txt")
    devicenum = len(deviceSN_list)
    OTHER_NAME_SPLIT = split_list(all_apps, devicenum)
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_filename = f"task_log_{timestamp}.txt"
    log_file = open(log_filename, "w", encoding="utf-8")
    
    log(f'已加载 {len(all_apps)} 个应用任务')
    
    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        t = threading.Thread(target=run, args=(deviceSN, i, OTHER_NAME_SPLIT[i]))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

    generate_summary(log_filename, len(all_apps))
    log_file.close()
    print("所有任务结束。")
