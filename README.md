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

def read_app_list(filename="app-list.txt"):
    apps = []
    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                # 适配Excel直接粘贴的格式：软件名[空格/Tab]包名
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
    run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
    waitForComponent(driver, BY.text('同意'))
    time.sleep(1)
    ret2 = driver.find_component(BY.text('允许'))
    if ret2:
        driver.touch((BY.text("允许")))
    time.sleep(1)
    ret3 = driver.find_component(BY.text('允许'))
    if ret3:
        driver.touch((BY.text("允许")))
    time.sleep(1)

    # 点击搜索框
    run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
    time.sleep(2)
    ret5 = driver.find_component(BY.text('同意'))
    if ret5:
        driver.touch(BY.text('同意'))
        time.sleep(1)

    for app_info in applist:
        name = app_info[0] # 取软件名
        log(f'正在下载应用：{name}')
        driver.input_text(BY.type('SearchField'), name)
        time.sleep(1)
        
        # 搜索 (坐标保持不变)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
        
        # 【此处为唯一修改点】：动态等待搜索结果加载，解决网络慢搜不到的问题
        for _ in range(15):
            if driver.find_component(BY.text('安装')) or driver.find_component(BY.text('下载')) or driver.find_component(BY.text('更新')):
                break
            time.sleep(1)
        
        # 下载 (坐标保持不变)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
        time.sleep(2)
        
        ret6 = driver.find_component(BY.text('继续'))
        if ret6:
            driver.touch(BY.text('继续'))
        run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
        # 点击输入框的 x
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
        time.sleep(0.5)
        log(f'应用 {name} 下载完成')

    driver.stop_app('com.huawei.hmsapp.appgallery')
    time.sleep(1)

def waitForComponent(driver, by, timeout=5):
    if timeout == 0:
        ret = driver.find_component(by)
        if ret:
            driver.touch(by)
            time.sleep(1)
    else:
        for i in range(timeout):
            time.sleep(1)
            print(f'正在查找控件，请稍等》{timeout - 1 - i} 秒')
            ret = driver.find_component(by)
            if ret:
                driver.touch(by)
                return

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        if result.returncode == 0:
            output = result.stdout.strip()
            print(output)
            return output
        else:
            output = result.stderr.strip()
            print(output)
            return output
    except Exception as e:
        output = str(e)
        print(output)
        return output

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动应用（包名）：{bundle_name}')
    try:
        driver.stop_app(bundle_name)
        time.sleep(1)
        driver.start_app(bundle_name)
        time.sleep(5)
        log(f'{bundle_name} 启动成功')
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'{bundle_name} 启动失败：{e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始处理 =====')
    driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
    
    # 设置永不熄屏命令
    run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 1800000")

    log(f'设备 {deviceSN} 开始下载应用...')
    downloading_other_app(driver, deviceSN, OTHER_NAME[i])
    log(f'设备 {deviceSN} 应用下载完成，等待 10 秒后开始启动应用...')
    time.sleep(10)
    for app_info in OTHER_NAME[i]:
        bundle_name = app_info[1] # 取包名
        launch_app(driver, deviceSN, bundle_name)
    log(f'===== 设备 {deviceSN} 处理完成 =====')

def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总")
    summary_lines.append("=" * 60)
    
    # 获取总数
    all_apps = read_app_list("app-list.txt")
    total_apps = len(all_apps)
    total_devices = len(sys.argv[1:]) if sys.argv[1:] else 1

    summary_lines.append(f"\n设备数量：{total_devices}")
    summary_lines.append(f"应用总数：{total_apps}")

    if launch_failures:
        summary_lines.append(f"\n【启动失败】共 {len(launch_failures)} 个:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app} ({reason})")
    else:
        summary_lines.append("\n【启动失败】无")

    success_count = total_apps - len(launch_failures)
    rate = (success_count * 100 // total_apps) if total_apps > 0 else 0
    summary_lines.append(f"\n【统计】启动成功率：{success_count}/{total_apps} ({rate}%)")
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
    
    deviceSN_list = sys.argv[1:]
    devicenum = len(deviceSN_list) if deviceSN_list else 1
    OTHER_NAME = split_list(read_app_list("app-list.txt"), devicenum)
    
    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        t = threading.Thread(target=run, args=(deviceSN, i))
        t.start()
        threads.append(t)

    for t in threads:
        t.join()
        
    log('脚本执行结束')
    log_file.close()
    generate_summary(log_filename)
