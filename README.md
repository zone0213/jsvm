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

# --- 修改 1：读取逻辑，改为返回字典列表 ---
def read_app_list(filename="app-list.txt"):
    apps = []
    if not os.path.exists(filename):
        log(f"错误：找不到文件 {filename}")
        return apps
    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if ',' in line:
                name, bundle = line.split(',')
                apps.append({'name': name.strip(), 'bundle': bundle.strip()})
    return apps

def split_list(list_data, num):
    k, m = divmod(len(list_data), num)
    return [list_data[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(num)]

# --- 修改 2：下载逻辑，从字典中取 'name' ---
def downloading_other_app(driver, deviceSN, applist):
    log(f'开始下载应用列表，共 {len(applist)} 个')
    
    # 唤醒和解锁建议改用 hdc，防止部分版本 driver.ScreenLock 报错
    run_cmd(f"hdc -t {deviceSN} shell power-shell wakeup")
    run_cmd(f"hdc -t {deviceSN} shell uinput -T -m 500 2000 500 500")
    time.sleep(1)

    run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
    waitForComponent(driver, BY.text('同意'))
    time.sleep(1)
    
    for app_info in applist:
        name = app_info['name']  # 取出软件名用于搜索
        log(f'正在下载应用：{name}')
        
        # 点击搜索框坐标
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
        time.sleep(2)
        
        # 输入内容
        driver.input_text(BY.type('SearchField'), name)
        time.sleep(1)
        
        # 点击搜索
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
        time.sleep(3)
        
        # 点击下载/安装
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
        time.sleep(2)
        
        ret6 = driver.find_component(BY.text('继续'))
        if ret6:
            driver.touch(BY.text('继续'))
            
        # 重新回到搜索状态或清理搜索框
        run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205") # 点击 X
        time.sleep(0.5)
        log(f'应用 {name} 已触发下载')
        
    driver.stop_app('com.huawei.hmsapp.appgallery')
    time.sleep(1)

def waitForComponent(driver, by, timeout=5):
    for i in range(timeout):
        ret = driver.find_component(by)
        if ret:
            driver.touch(by)
            return
        time.sleep(1)
        print(f'正在查找控件 {by}...')

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout.strip() if result.returncode == 0 else result.stderr.strip()
    except Exception as e:
        return str(e)

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动验证（包名）：{bundle_name}')
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

# --- 修改 3：主运行逻辑，协调下载和启动的数据使用 ---
def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始处理 =====')
    driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
    
    # 1. 传递整个字典列表给下载函数
    log(f'设备 {deviceSN} 开始下载应用...')
    downloading_other_app(driver, deviceSN, OTHER_NAME[i])
    
    log(f'设备 {deviceSN} 下载操作完成，等待 15 秒安装时间...')
    time.sleep(15)
    
    # 2. 循环字典列表，取出 'bundle' 用于冷启动
    for app_info in OTHER_NAME[i]:
        bundle = app_info['bundle']
        launch_app(driver, deviceSN, bundle)
        
    log(f'===== 设备 {deviceSN} 处理完成 =====')

def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总")
    summary_lines.append("=" * 60)

    all_apps = read_app_list("app-list.txt")
    total_expected = len(all_apps)

    summary_lines.append(f"\n任务总数：{total_expected}")
    
    if launch_failures:
        summary_lines.append(f"启动失败数：{len(launch_failures)}")
        for device, bundle, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {bundle} ({reason})")
    else:
        summary_lines.append("启动失败：无")

    success_count = total_expected - len(launch_failures)
    success_rate = (success_count / total_expected * 100) if total_expected > 0 else 0
    summary_lines.append(f"\n【统计】启动成功率：{success_count}/{total_expected} ({success_rate:.1f}%)")
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
    if not deviceSN_list:
        print("请在命令行输入设备SN号！")
        sys.exit(1)
        
    log(f'设备列表：{deviceSN_list}')
    
    # 获取完整的字典列表
    all_apps = read_app_list("app-list.txt")
    devicenum = len(deviceSN_list)
    
    # 分配任务
    OTHER_NAME = split_list(all_apps, devicenum)
    
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
