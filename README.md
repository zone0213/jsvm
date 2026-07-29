def launch_app(driver, deviceSN, app_name):
    log(f'正在冷启动应用：{app_name}')
    try:
        # 回到桌面
        driver.press_key(6) # 6 通常是返回主页的键值，或者使用 driver.go_home()
        time.sleep(1)
        # 在桌面上找应用名字并点击
        app_icon = driver.find_component(BY.text(app_name))
        if app_icon:
            app_icon.click()
            log(f'{app_name} 启动成功')
        else:
            raise Exception(f"在桌面上找不到应用图标: {app_name}")
        time.sleep(2)
    except Exception as e:
        log(f'{app_name} 启动失败：{e}')
        launch_failures.append((deviceSN, app_name, str(e)))
