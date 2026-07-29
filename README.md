import os
import subprocess
import sys
import time
from hypium import *
import numpy as np
import threading
from datetime import datetime

# 全局变量
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
    """
    读取从 Excel 复制的 txt 文件
    支持：软件名[空格/制表符]包名
    """
    apps = []
    if not os.path.exists(filename):
        log(f"错误：找不到文件 {filename}")
        return apps
    
    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            # split() 不带参数会自动处理空格和制表符(Tab)
            parts = line.split()
            if len(parts) >= 2:
                apps.append({
                    "display_name": parts[0],
                    "bundle_name": parts[1]
                })
            else:
                log(f"跳过无效行: {line} (需包含软件名和包名)")
    return apps

def split_list(lst, num):
    k, m = divmod(len(lst), num)
    return [lst[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(num)]

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        output = result.stdout.strip() if result.returncode == 0 else result.stderr.strip()
        return output
    except Exception as e:
        return str(e)

def waitForComponent(driver, by, timeout=5):
    for i in range(timeout):
        ret = driver.find_component(by)
        if ret:
            driver.touch(by)
            time.sleep(1)
            return True
        time.sleep(1)
        print(f'正在查找控件 {by}，等待 {timeout - i} 秒...')
    return False

def downloading_other_app(driver, deviceSN, applist):
    log(f'设备 {deviceSN} 开始下载应用列表，共 {len(applist)} 个')
    
    # 判定屏幕是否解锁
    if driver.ScreenLock.is_locked():
        driver.ScreenLock.unlock()
        time.sleep(1)
    
    # 启动应用市场
    run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
    time.sleep(2)
    
    # 处理各种权限弹窗
    waitForComponent(driver, BY.text('同意'), timeout=3)
    if driver.find_component(BY.text('允许')):
        driver.touch(BY.text('允许'))
        time.sleep(1)
    if driver.find_component(BY.text('允许')):
        driver.touch(BY.text('允许'))

    # 点击搜索框坐标 (根据你的机型坐标调整)
    run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
    time.sleep(2)
    
    # 防止小艺输入法弹窗
    if driver.find_component(BY.text('同意')):
        driver.touch(BY.text('同意'))
        time.sleep(1)

    for app in applist:
        name = app['display_name']
        log(f'正在搜索并下载应用：{name}')
        
        # 1. 输入软件名称
        driver.input_text(BY.type('SearchField'), name)
        time.sleep(1)
        
        # 2. 点击搜索按钮 (坐标)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
        time.sleep(3)
        
        # 3. 点击第一项的“安装/下载”按钮 (坐标)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
        time.sleep(2)
        
        # 4. 处理可能出现的“继续”弹窗（如流量下载提示）
        if driver.find_component(BY.text('继续')):
            driver.touch(BY.text('继续'))
        
        # 5. 清空输入框，准备搜下一个 (点击 X 坐标)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
        time.sleep(1)
        log(f'应用 {name} 已触发下载任务')

    driver.stop_app('com.huawei.hmsapp.appgallery')

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动应用（包名）：{bundle_name}')
    try:
        driver.stop_app(bundle_name)
        time.sleep(1)
        driver.start_app(bundle_name)
        time.sleep(8) # 启动等待时间设长一点，确保能看到界面
        log(f'{bundle_name} 启动成功')
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'{bundle_name} 启动失败：{e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i, device_apps):
    log(f'===== 设备 {deviceSN} 开始处理 =====')
    try:
        driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
        
        # 步骤1：下载（传入软件名）
        downloading_other_app(driver, deviceSN, device_apps)
        
        log(f'设备 {deviceSN} 下载指令发送完毕，等待 15 秒（安装缓冲）...')
        time.sleep(15)
        
        # 步骤2：启动（传入包名）
        for app in device_apps:
            launch_app(driver, deviceSN, app['bundle_name'])
            
    except Exception as e:
        log(f"设备 {deviceSN} 运行异常: {e}")
    log(f'===== 设备 {deviceSN} 处理完成 =====')

def generate_summary(log_filename, total_apps, device_count):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总")
    summary_lines.append("=" * 60)
    summary_lines.append(f"设备数量：{device_count}")
    summary_lines.append(f"应用总数：{total_apps}")

    if launch_failures:
        summary_lines.append(f"\n【启动失败】共 {len(launch_failures)} 个:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app} ({reason})")
    else:
        summary_lines.append("\n【启动失败】无")

    success_count = total_apps - len(launch_failures)
    rate = (success_count / total_apps * 100) if total_apps > 0 else 0
    summary_lines.append(f"\n【统计】启动成功率：{success_count}/{total_apps} ({rate:.2f}%)")
    summary_lines.append("=" * 60 + "\n")

    summary_text = "\n".join(summary_lines)
    print(summary_text)
    with open(log_filename, "a", encoding="utf-8") as f:
        f.write(summary_text)

if __name__ == '__main__':
    current_path = os.getcwd()
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_filename = os.path.join(current_path, f"execution_log_{timestamp}.txt")
    
    log_file = open(log_filename, "w", encoding="utf-8")
    
    # 获取命令行传入的设备 SN 列表
    deviceSN_list = sys.argv[1:]
    if not deviceSN_list:
        print("错误：请在命令行传入设备 SN 号，例如：python script.py SN1 SN2")
        sys.exit(1)

    log(f'日志文件：{log_filename}')
    log(f'检测到设备列表：{deviceSN_list}')

    # 读取所有应用数据
    all_apps = read_app_list("app-list.txt")
    if not all_apps:
        log("错误：app-list.txt 为空或不存在")
        sys.exit(1)

    # 按照设备数量平分应用列表
    devicenum = len(deviceSN_list)
    split_apps_list = split_list(all_apps, devicenum)

    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        # 将分配给该设备的应用子集传入
        t = threading.Thread(target=run, args=(deviceSN, i, split_apps_list[i]))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()

    log('脚本执行结束')
    generate_summary(log_filename, len(all_apps), devicenum)
    log_file.close()
