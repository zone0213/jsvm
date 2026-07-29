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

def handle_common_popups(driver, deviceSN):
    """
    弹窗扫描与防熄屏心跳
    """
    try:
        # 发送安全唤醒信号，重置休眠倒计时。只要这行在跑，30分钟休眠永远不会到期。
        run_cmd(f"hdc -t {deviceSN} shell input keyevent 224")
        if driver.ScreenLock.is_locked():
            driver.ScreenLock.unlock()
            time.sleep(1)
    except:
        pass

    popups = ["允许", "始终允许", "同意", "我知道了", "以后再说", "确定", "继续", "跳过", "退出", "关闭", "取消"]
    for text in popups:
        try:
            btn = driver.find_component(BY.text(text))
            if btn:
                driver.touch(btn)
                log(f"【拦截】处理了弹窗按钮: {text}")
                time.sleep(1.2)
                return True
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
    for app_info in applist:
        name = app_info[0]
        try:
            log(f'--- 正在处理下载：{name} ---')
            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            time.sleep(2)
            handle_common_popups(driver, deviceSN) # 搜索前清理并唤醒

            # 点击搜索框 (坐标保持 1169 217)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
            time.sleep(1.5)
            driver.input_text(BY.type('SearchField'), name)
            time.sleep(1)
            
            # 点击搜索 (坐标保持 1091 214)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
            
            # 动态等待搜索结果加载
            for _ in range(15):
                if driver.find_component(BY.text('安装')) or driver.find_component(BY.text('下载')) or driver.find_component(BY.text('更新')):
                    break
                time.sleep(1)
            
            # 点击下载 (坐标保持 1108 432)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
            time.sleep(2)
            
            # 下载指令发送后不进行按钮检查（应你的要求）

            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            # 点击输入框的 x (坐标保持 927 205)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
            time.sleep(0.5)
        except Exception as e:
            log(f"应用 {name} 下载指令发送异常（已跳过）: {e}")
            continue
    driver.stop_app('com.huawei.hmsapp.appgallery')

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout.strip()
    except:
        return ""

def launch_app(driver, deviceSN, bundle_name):
    log(f'正在冷启动应用（包名）：{bundle_name}')
    try:
        driver.stop_app(bundle_name)
        time.sleep(1)
        handle_common_popups(driver, deviceSN) # 启动前唤醒并清理
        driver.start_app(bundle_name)
        
        # 冷启动后进入 10 秒弹窗监控期，解决权限弹窗问题
        for _ in range(6): 
            time.sleep(1.5)
            handle_common_popups(driver, deviceSN)
            
        log(f'{bundle_name} 启动成功')
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'应用 {bundle_name} 启动失败（已跳过）: {e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始执行 =====')
    try:
        driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
        
        # 初始设置休眠时间为 30 分钟。脚本运行时，每次操作都会重置这30分钟。
        run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 1800000")

        # 1. 下载阶段
        downloading_other_app(driver, deviceSN, OTHER_NAME[i])
        
        # 2. 安装缓冲
        time.sleep(10)
        
        # 3. 启动阶段
        for app_info in OTHER_NAME[i]:
            try:
                launch_app(driver, deviceSN, app_info[1])
            except:
                continue
                
    except Exception as e:
        log(f"设备 {deviceSN} 发生非预期错误: {e}")
    log(f'===== 设备 {deviceSN} 处理结束 =====')

def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总 (冷启动弹窗拦截)")
    summary_lines.append("=" * 60)
    all_data = read_app_list("app-list.txt")
    total_apps = len(all_data)
    total_devices = len(sys.argv[1:]) if sys.argv[1:] else 1
    summary_lines.append(f"\n设备数量：{total_devices}")
    summary_lines.append(f"总计应用数：{total_apps}")
    if launch_failures:
        summary_lines.append(f"\n【异常记录汇总】:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app}")
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
    all_info = read_app_list("app-list.txt")
    OTHER_NAME = split_list(all_info, devicenum)
    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        t = threading.Thread(target=run, args=(deviceSN, i))
        t.start()
        threads.append(t)
    for t in threads:
        t.join()
    log('脚本任务完毕')
    log_file.close()
    generate_summary(log_filename)
