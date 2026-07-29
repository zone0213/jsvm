[2026-07-29 09:04:51,320] [27000] [DeviceTest] [INFO] [<div class='aw'>uidriver.input_text(5JV0226127000574, BY.type('SearchField'), 上学吧危险货物运输题库)</div>]
[2026-07-29 09:04:56,749] [27000] [DeviceTest] [ERROR] [[Script-0203002] Can't find component with [BY.type('SearchField')]] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:04:56,749] [27000] [DeviceTest] [INFO] [flash error msg.]
Exception in thread Thread-1 (run):
Traceback (most recent call last):
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1186, in run_keyword
    _ret = func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\hypium\action\device\uidriver.py", line 851, in input_text
    return self._driver_impl.input_text(component, text, mode)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\hypium\uidriver\ohos\uidriver.py", line 1400, in input_text
    component = _convert_to_uicomponent(driver, component)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\record_actions\record_action.py", line 1298, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\hypium\uidriver\common\enhanced_component_finder.py", line 85, in _convert_to_uicomponent
    raise HypiumComponentNotFoundError(by)
hypium.exception.HypiumComponentNotFoundError: Can't find component with [BY.type('SearchField')]

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "D:\Program files\Python312\Lib\threading.py", line 1075, in _bootstrap_inner
    self.run()
  File "D:\Program files\Python312\Lib\threading.py", line 1012, in run
    self._target(*self._args, **self._kwargs)
  File "D:\文件\pythonCode\down_app_and_cold_start.py", line 147, in run
    downloading_other_app(driver, deviceSN, OTHER_NAME[i])
  File "D:\文件\pythonCode\down_app_and_cold_start.py", line 65, in downloading_other_app
    driver.input_text(BY.type('SearchField'), name)
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1100, in wrapper
    run_k = run_keyword(func, *args, **kwargs)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1167, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1242, in run_keyword
    _screenshot_and_flash_error_msg(
  File "D:\文件\pythonCode\.venv\Lib\site-packages\devicetest\core\test_case.py", line 994, in _screenshot_and_flash_error_msg
    raise DeviceTestError(error_msg)
devicetest.core.exception.DeviceTestError: [Script-0203002] Can't find component with [BY.type('SearchField')]
[2026-07-29 09:04:56] 脚本执行结束

============================================================
执行结果汇总
============================================================

设备数量：1
应用总数：100
每台设备应用数：100

【下载失败】无

【启动失败】无

【统计】启动成功率：100/100 (100%)
