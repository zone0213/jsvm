import os
import subprocess
import sys
import time
from hypium import *
import numpy as np
import threading
from datetime import datetime

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

def handle_common_popups(driver):
    """
    弹窗扫描函数：支持连续弹窗处理。
    包含了你提到的“允许”发送通知等系统按钮。
    """
    popups = ["允许", "始终允许", "同意", "我知道了", "以后再说", "确定", "继续", "跳过"]
    for text in popups:
        try:
            btn = driver.find_component(BY.text(text))
            if btn:
                driver.touch(btn)
                log(f"【自动避障】检测并处理了弹窗按钮: {text}")
                time.sleep(1.5) # 点完后稍微等一下，方便处理可能弹出的第二个弹窗
                return True # 发现并处理了一个
        except:
            pass
    return False

def read_app_list(filename="app-list.txt"):
    apps = []
    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                parts = line.split()
                if len(parts) >= 2:
                    apps.append(parts)
    return apps

def split_list(list, num):
    k, m = divmod(len(list), num)
    return [list[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(num)]

def downloading_other_app(driver, deviceSN, applist):
    log(f'开始下载应用列表：{applist}')
    status = driver.ScreenLock.is_locked()
    if status:
        driver.ScreenLock.unlock()
    time.sleep(1)
    
    # 下载主循环加了 try，确保其中一个应用下载失败（比如搜不到）不影响后面
    for app_info in applist:
        name = app_info[0]
        try:
            log(f'正在下载应用：{name}')
            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            time.sleep(1)
            handle_common_popups(driver)

            # 点击搜索框 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
            time.sleep(2)
            
            driver.input_text(BY.type('SearchField'), name)
            time.sleep(1)
            
            # 点击搜索 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
            
            # 动态等待搜索结果加载，同时监控可能弹出的干扰
            for _ in range(15):
                handle_common_popups(driver)
                if driver.find_component(BY.text('安装')) or driver.find_component(BY.text('下载')) or driver.find_component(BY.text('更新')):
                    break
                time.sleep(1)
            
            # 点击下载 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
            time.sleep(2)
            
            # 处理下载点击后可能连续出现的弹窗（比如流量提醒+通知允许）
            for _ in range(3):
                handle_common_popups(driver)
                time.sleep(1)
                
            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            # 点击输入框的 x (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
            time.sleep(0.5)
        except Exception as e:
            log(f"应用 {name} 下载指令发送异常（已跳过）: {e}")
            continue

    driver.stop_app('com.huawei.hmsapp.appgallery')

def waitForComponent(driver, by, timeout=5):
    for i in range(timeout):
        handle_common_popups(driver)
        ret = driver.find_component(by)
        if ret:
            driver.touch(by)
            return
        time.sleep(1)

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout.strip() if result.returncode == 0 else result.stderr.strip()
    except Exception as e:
        return str(e)

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动应用（包名）：{bundle_name}')
    try:
        driver.stop_app(bundle_name)
        time.sleep(1)
        driver.start_app(bundle_name)
        
        # --- 重点：连续弹窗监控区 ---
        # 启动后 10 秒内，高频扫描弹窗，解决“弹完第一个还有第二个”的问题
        for i in range(6): 
            time.sleep(1.5)
            handle_common_popups(driver)
            
        log(f'{bundle_name} 启动成功')
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'应用 {bundle_name} 启动失败（已跳过）: {e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始处理 =====')
    try:
        driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
        
        # 屏幕常亮指令 (30分钟，保留原始逻辑)
        run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 1800000")

        log(f'设备 {deviceSN} 开始下载应用...')
        downloading_other_app(driver, deviceSN, OTHER_NAME[i])
        
        log(f'设备 {deviceSN} 下载指令发送完毕，等待 10 秒后开始启动...')
        time.sleep(10)
        
        # 启动循环也加了 try，确保一个 APP 崩了不影响后面
        for app_info in OTHER_NAME[i]:
            try:
                launch_app(driver, deviceSN, app_info[1])
            except:
                continue
                
    except Exception as e:
        log(f"设备 {deviceSN} 处理线程发生异常: {e}")
    log(f'===== 设备 {deviceSN} 处理完成 =====')

def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总 (已自动跳过异常项)")
    summary_lines.append("=" * 60)
    
    # 重新读取计算总数
    all_data = read_app_list("app-list.txt")
    total_apps = len(all_data)
    total_devices = len(sys.argv[1:]) if sys.argv[1:] else 1

    summary_lines.append(f"\n设备数量：{total_devices}")
    summary_lines.append(f"应用总数：{total_apps}")

    if launch_failures:
        summary_lines.append(f"\n【启动异常/失败汇总】:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app}")
    else:
        summary_lines.append("\n【启动失败】无")

    success_count = total_apps - len(launch_failures)
    rate = (success_count * 100 // total_apps) if total_apps > 0 else 0
    summary_lines.append(f"\n【统计】最终启动成功率：{success_count}/{total_apps} ({rate}%)")
    summary_lines.append("=" * 60 + "\n")

    summary_text = "\n".join(summary_lines)
    print(summary_text)
    with open(log_filename, "a", encoding="utf-8") as f:
        f.write(summary_text)

if __name__ == '__main__':
    current_path = os.getcwd()
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    log_filename = os.path.join(current_path, f"download_log_{timestamp}.txt")
    log_file = open(log_filename, "w", encoding="utf-8")
    
    log(f'日志文件：{log_filename}')
    log(f'设备列表：{sys.argv[1:]}')
    
    deviceSN_list = sys.argv[1:]
    devicenum = len(deviceSN_list) if deviceSN_list else 1
    
    # 获取任务分配列表
    all_app_info = read_app_list("app-list.txt")
    OTHER_NAME = split_list(all_app_info, devicenum)
    
    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        t = threading.Thread(target=run, args=(deviceSN, i))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()
        
    log('所有设备任务执行结束')
    log_file.close()
    generate_summary(log_filename)
