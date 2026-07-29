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
