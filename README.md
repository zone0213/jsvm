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
    弹窗扫描 + 安全防熄屏（不使用坐标点击）
    """
    try:
        # 【安全唤醒】：发送 WAKEUP 键，重置系统休眠倒计时，且不触发任何点击动作
        # Keyevent 224 是标准的唤醒键
        run_cmd(f"hdc -t {deviceSN} shell input keyevent 224")
        
        # 如果锁屏了，尝试解锁
        if driver.ScreenLock.is_locked():
            log(f"检测到设备 {deviceSN} 锁屏，正在解锁...")
            driver.ScreenLock.unlock()
            time.sleep(1)
    except:
        pass

    # 弹窗按钮列表（包含你要求的退出、关闭等）
    popups = ["允许", "始终允许", "同意", "我知道了", "以后再说", "确定", "继续", "跳过", "退出", "关闭", "取消"]
    
    for text in popups:
        try:
            btn = driver.find_component(BY.text(text))
            if btn:
                driver.touch(btn)
                log(f"【自动避障】处理了干扰按钮: {text}")
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
                # 适配 Excel 复制格式：软件名[空格/Tab]包名
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
            log(f'--- 正在处理：{name} ---')
            # 确保应用市场在前台
            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            time.sleep(1)
            handle_common_popups(driver, deviceSN)

            # 点击搜索框 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
            time.sleep(1.5)
            
            driver.input_text(BY.type('SearchField'), name)
            time.sleep(1)
            
            # 点击搜索 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
            
            # 动态等待搜索结果加载，同时防熄屏监控弹窗
            for _ in range(15):
                handle_common_popups(driver, deviceSN)
                if driver.find_component(BY.text('安装')) or driver.find_component(BY.text('下载')) or driver.find_component(BY.text('更新')):
                    break
                time.sleep(1)
            
            # 点击下载 (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1108 432")
            time.sleep(2)
            
            # 下载后的连续弹窗监控
            for _ in range(3):
                handle_common_popups(driver, deviceSN)
                time.sleep(1)
                
            run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
            # 点击输入框的 x (原始坐标)
            run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205")
            time.sleep(0.5)
        except Exception as e:
            log(f"应用 {name} 下载异常（已自动跳过）: {e}")
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
        
        # 启动前唤醒并清理弹窗
        handle_common_popups(driver, deviceSN)
        
        driver.start_app(bundle_name)
        
        # 启动后 10 秒监控期，处理连续弹窗（如通知权限申请）
        for _ in range(6): 
            time.sleep(1.5)
            handle_common_popups(driver, deviceSN)
            
        log(f'{bundle_name} 启动测试完成')
        driver.stop_app(bundle_name)
    except Exception as e:
        log(f'应用 {bundle_name} 启动失败（已自动跳过）: {e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))

def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始任务 =====')
    try:
        driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
        
        # 设置休眠时间为 30 分钟 (1800000ms)
        run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 1800000")

        # 下载阶段
        downloading_other_app(driver, deviceSN, OTHER_NAME[i])
        
        # 安装缓冲
        time.sleep(10)
        
        # 启动阶段
        for app_info in OTHER_NAME[i]:
            try:
                launch_app(driver, deviceSN, app_info[1])
            except:
                continue
                
    except Exception as e:
        log(f"设备 {deviceSN} 发生非预期中断: {e}")
    log(f'===== 设备 {deviceSN} 任务结束 =====')

def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总 (防熄屏+自动跳过异常)")
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
    summary_lines.append(f"\n【统计】最终成功率：{success_count}/{total_apps} ({rate}%)")
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
        
    log('所有任务结束')
    log_file.close()
    generate_summary(log_filename)
