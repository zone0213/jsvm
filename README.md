-07 09:13:26,275] [26024] [DeviceTest] [INFO] [
screen_lock.unlock(Phone1.8RC9K26613000662)
]
[2026-08-07 09:13:26,276] [26024] [DeviceTest] [ERROR] [[Script-0203002] 'Device' object has no attribute 'proxy'] [ErrorNo=00000, is_traceback=True]
[2026-08-07 09:13:26,276] [26024] [DeviceTest] [INFO] [flash error msg.]
[2026-08-07 09:13:26,279] [26024] [DeviceTest] [INFO] [
PerformanceDynamic_Douyin_0010, occurred an error!
]
[2026-08-07 09:13:27,133] [26024] [DeviceTest] [INFO] [Screenshot: D:\0806modelcase2\ModelCase_ResourceUsage_OHOS-master-B100_new-8-6\reports\20260807091250699\all\details\PerformanceDynamic_Douyin_0010\8RC9K26613000662.20260807091326279267.jpegPerformanceDynamic_Douyin_0010, occurred an error!]
[2026-08-07 09:13:27,133] [26024] [DeviceTest] [ERROR] [[Script-0203002] 'Device' object has no attribute 'proxy'] [ErrorNo=00000]
[2026-08-07 09:13:27,134] [26024] [DeviceTest] [ERROR] [Traceback (most recent call last):
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1186, in run_keyword
    _ret = func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\hypium\action\os_hypium\screen_lock.py", line 170, in unlock
    if not device.proxy.powerApiHelper.isScreenLocked():
           ^^^^^^^^^^^^
AttributeError: 'Device' object has no attribute 'proxy'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 201, in _exec_func
    func_ret = func(*args)
               ^^^^^^^^^^^
  File "D:\0806modelcase2\ModelCase_ResourceUsage_OHOS-master-B100_new-8-6\ModelCase_ResourceUsage_OHOS-master-B100_new\perfModel\ResourceUsageCase\offload\changjing\PerformanceDynamic_changjing.py", line 617, in test_step_all
    self.test_step_first()
  File "D:\0806modelcase2\ModelCase_ResourceUsage_OHOS-master-B100_new-8-6\ModelCase_ResourceUsage_OHOS-master-B100_new\perfModel\ResourceUsageCase\offload\changjing\PerformanceDynamic_changjing.py", line 376, in test_step_first
    self.d.ScreenLock.unlock()
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1100, in wrapper
    run_k = run_keyword(func, *args, **kwargs)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1167, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 1242, in run_keyword
    _screenshot_and_flash_error_msg(
  File "D:\0806modelcase\ModelCase_ResourceUsage_OHOS-master-B100_new\.venv\Lib\site-packages\devicetest\core\test_case.py", line 994, in _screenshot_and_flash_error_msg
    raise DeviceTestError(error_msg)
devicetest.core.exception.DeviceTestError: [Script-0203002] 'Device' object has no attribute 'proxy'
] [ErrorNo=00000]
[2026-08-07 09:13:27,134] [26024] [DeviceTest] [INFO] [****************************Test test_step_all result is: Failed]
[2026-08-07 09:13:27,134] [26024] [DeviceTest] [INFO] [TestMethod: test_step_all result is Failed]
[2026-08-07 09:13:27,134] [26024] [DeviceTest] [INFO] [TestMethod: test_step
