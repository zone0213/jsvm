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
    with open(filename, "r", encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]


def split_list(list, num):
    k, m = divmod(len(list), num)
    return [list[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(num)]


def downloading_other_app(driver, deviceSN, applist):
    log(f'开始下载应用列表：{applist}')
    # 判定屏幕是否解锁，未解锁就进行解锁
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
    # 防止有小艺输入法弹窗
    ret5 = driver.find_component(BY.text('同意'))
    if ret5:
        driver.touch(BY.text('同意'))
        time.sleep(1)
    for name in applist:
        log(f'正在下载应用：{name}')
        # 输入内容
        driver.input_text(BY.type('SearchField'), name)
        time.sleep(1)
        # driver.touch((603, 1805))
        # 搜索
        run_cmd(f"hdc -t {deviceSN} shell uinput -T -c 1091 214")
        time.sleep(3)
        # 下载
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


ERROR_YZ = []


def waitForComponent(driver, by, timeout=5):
    if timeout == 0:
        ret = driver.find_component(by)
        if ret:
            driver.touch(by)
            time.sleep(1)
    else:
        for i in range(timeout):
            time.sleep(1)
            print(f'正在查找控件，请稍等》{4 - i} 秒')
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
        # 1. 强制停止应用（确保是冷启动）
        driver.stop_app(bundle_name)
        time.sleep(1)

        # 2. 直接通过包名启动
        driver.start_app(bundle_name)

        # 3. 验证是否启动成功（检查当前最上层应用是否是它）
        # 这是可选的，通常 start_app 没报错就是启动了
        time.sleep(5)
        log(f'{bundle_name} 启动成功')

        # 4. 再次停止，为下一个应用腾出内存
        driver.stop_app(bundle_name)

    except Exception as e:
        log(f'{bundle_name} 启动失败：{e}')
        launch_failures.append((deviceSN, bundle_name, str(e)))


def run(deviceSN, i):
    log(f'===== 设备 {deviceSN} 开始处理 =====')
    driver = UiDriver.connect(connector="hdc", device_sn=deviceSN)
    #driver.Screen.set_sleep_time(600)
    log(f'设备 {deviceSN} 开始下载应用...')
    downloading_other_app(driver, deviceSN, OTHER_NAME[i])
    log(f'设备 {deviceSN} 应用下载完成，等待 10 秒后开始启动应用...')
    time.sleep(10)
    for app_name in OTHER_NAME[i]:
        launch_app(driver, deviceSN, app_name)
    log(f'===== 设备 {deviceSN} 处理完成 =====')


def generate_summary(log_filename):
    summary_lines = []
    summary_lines.append("\n" + "=" * 60)
    summary_lines.append("执行结果汇总")
    summary_lines.append("=" * 60)

    total_apps = len(read_app_list("app-list.txt"))
    total_devices = len(sys.argv[1:]) if sys.argv[1:] else 1
    apps_per_device = total_apps // total_devices if total_devices > 0 else total_apps

    summary_lines.append(f"\n设备数量：{total_devices}")
    summary_lines.append(f"应用总数：{total_apps}")
    summary_lines.append(f"每台设备应用数：{apps_per_device}")

    if download_failures:
        summary_lines.append(f"\n【下载失败】共 {len(download_failures)} 个:")
        for device, app, reason in download_failures:
            summary_lines.append(f"  - 设备 {device}: {app} ({reason})")
    else:
        summary_lines.append("\n【下载失败】无")

    if launch_failures:
        summary_lines.append(f"\n【启动失败】共 {len(launch_failures)} 个:")
        for device, app, reason in launch_failures:
            summary_lines.append(f"  - 设备 {device}: {app} ({reason})")
    else:
        summary_lines.append("\n【启动失败】无")

    success_count = total_apps * total_devices - len(launch_failures)
    summary_lines.append(
        f"\n【统计】启动成功率：{success_count}/{total_apps * total_devices} ({success_count * 100 // (total_apps * total_devices) if total_apps * total_devices > 0 else 0}%)")
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
