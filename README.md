import os
import subprocess
import sys
import time
from hypium import *
import numpy as np
import threading
from datetime import datetime

log_file = None
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
    弹窗扫描与强效唤醒：确保一晚上不熄屏。
    """
    try:
        # 发送唤醒指令，重置系统的休眠倒计时
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
                log(f"【拦截弹窗】已处理按钮: {text}")
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

def run_cmd(command):
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True)
        return result.stdout.strip()
    except:
        return ""

def is_installed(deviceSN, bundle_name):
    """检查应用是否在系统中"""
    res = run_cmd(f"hdc -t {deviceSN} shell bm dump -n {bundle_name}")
    return bundle_name in res

def process_single_app(driver, deviceSN, app_info):
    """
    无人值守单应用流程：下载 -> 验证安装 -> 启动测试 -> 强制删除释放空间
    """
    name = app_info[0]
    bundle_name = app_info[1]
    
    try:
        log(f"--- 正在处理：{name} ---")
        
        # 1. 下载阶段
        run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
        time.sleep(2)
        handle_common_popups(driver, deviceSN)

        # 搜索框坐标 (1169 217)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1169 217")
        time.sleep(1.5)
        driver.input_text(BY.type('SearchField'), name)
        time.sleep(1)
        
        # 搜索按钮坐标 (1091 214)
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
        
        # 寻找下载按钮
        target_btn = None
        for _ in range(15):
            handle_common_popups(driver, deviceSN)
            target_btn = driver.find_component(BY.text('安装')) or \
                         driver.find_component(BY.text('下载')) or \
                         driver.find_component(BY.text('更新'))
            if target_btn:
                break
            time.sleep(1)
        
        if target_btn:
            driver.touch(target_btn)
            time.sleep(2)
            # 2. 等待安装（最长等10分钟）
            log(f"等待 {name} 下载安装...")
            for _ in range(60):
                if is_installed(deviceSN, bundle_name):
                    break
                time.sleep(10)
                handle_common_popups(driver, deviceSN)
        else:
            log(f"搜不到应用 {name}，跳过下载")

        # 3. 启动阶段（如果装上了就测，没装上会自动报错并跳过）
        try:
            if is_installed(deviceSN, bundle_name):
                driver.stop_app(bundle_name)
                time.sleep(2)
                driver.start_app(bundle_name)
                # 启动后监控弹窗
                for _ in range(6):
                    time.sleep(1.5)
                    handle_common_popups(driver, deviceSN)
                log(f"应用 {name} 冷启动测试完成")
                driver.stop_app(bundle_name)
            else:
                log(f"应用 {name} 未能成功安装，跳过启动测试")
                launch_failures.append((deviceSN, name, "未安装成功"))
        except Exception as launch_e:
            log(f"启动 {name} 失败: {launch_e}")
            launch_failures.append((deviceSN, name, f"启动报错: {launch_e}"))

        # 4. 空间释放（不管装没装上，都强行执行一次卸载）
        # 如果应用不存在，指令会返回失败，但脚本不会崩，直接过
        run_cmd(f"hdc -t {deviceSN} shell bm uninstall -n {bundle_name}")
        time.sleep(1)

        # 5. 重置环境准备下一个
        run_cmd(f"hdc -t {deviceSN} shell aa start -a MainAbility -b com.huawei.hmsapp.appgallery")
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 927 205") # 清除搜索框
        time.sleep(1)

    except Exception as e:
        log(f"处理应用 {name} 流程异常（已跳过）: {e}")
        launch_failures.append((deviceSN, name, f"流程异常: {e}"))

def run(deviceSN, i, my_apps):
    log(f'===== 设备 {deviceSN} 任务开始 =====')
    try:
        driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
        # 初始防熄屏
        run_cmd(f"hdc -t {deviceSN} shell settings put system screen_off_timeout 1800000")

        for app_info in my_apps:
            process_single_app(driver, deviceSN, app_info)
            
    except Exception as e:
        log(f"设备 {deviceSN} 线程由于严重错误中断: {e}")
    log(f'===== 设备 {deviceSN} 任务结束 =====')

def generate_summary(log_filename, total_count):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("300项 无人值守测试汇总报告")
    summary_lines.append("=" * 60)
    summary_lines.append(f"\n任务总计：{total_count}")
    
    if launch_failures:
        summary_lines.append(f"\n【异常项目汇总】:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app} ({reason})")
    else:
        summary_lines.append("\n【运行情况】全部项目均顺利处理完毕")
        
    success_count = total_count - len(launch_failures)
    rate = (success_count * 100 // total_count) if total_count > 0 else 0
    summary_lines.append(f"\n最终成功率：{success_count}/{total_count} ({rate}%)")
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
    
    deviceSN_list = sys.argv[1:]
    if not deviceSN_list:
        print("错误：请在命令行传入设备SN号！")
        sys.exit(1)
        
    all_info = read_app_list("app-list.txt")
    split_apps = split_list(all_info, len(deviceSN_list))
    
    threads = []
    for i, deviceSN in enumerate(deviceSN_list):
        t = threading.Thread(target=run, args=(deviceSN, i, split_apps[i]))
        t.start()
        threads.append(t)
        
    for t in threads:
        t.join()
        
    log('所有任务执行完毕。')
    log_file.close()
    generate_summary(log_filename, len(all_info))
