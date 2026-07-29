[2026-07-29 10:25:17,716] [4852] [Device] [INFO] [UITEST_AGENT_LIBRARY@v0.0.0#1.2.2
]
[2026-07-29 10:25:17,716] [4852] [Device] [INFO] [local agent version 1.2.2, device agent version 1.2.2]
[2026-07-29 10:25:17,792] [4852] [Device] [INFO] [Device agent is up to date!]
[2026-07-29 10:25:18,053] [4852] [DeviceUIProxy] [INFO] [Harmony ui rpc already start!!!!]
[2026-07-29 10:25:20,131] [4852] [DeviceUIProxy] [INFO] [tcp forward port: 9963 for 5JV0226127000574]
[2026-07-29 10:25:20,209] [4852] [Device] [INFO] [hypium base version: 6.1.0.210]
[2026-07-29 10:25:20] 开始下载流程，共 100 个应用
Exception in thread Thread-1 (run):
Traceback (most recent call last):
  File "D:\Program files\Python312\Lib\threading.py", line 1075, in _bootstrap_inner
    self.run()
  File "D:\Program files\Python312\Lib\threading.py", line 1012, in run
    self._target(*self._args, **self._kwargs)
  File "D:\文件\pythonCode\down_app_and_cold_start.py", line 164, in run
    downloading_other_app(driver, deviceSN, task_list)
  File "D:\文件\pythonCode\down_app_and_cold_start.py", line 77, in downloading_other_app
    if driver.is_locked():
       ^^^^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\hypium\action\device\uidriver.py", line 168, in __getattr__
    raise AttributeError(f"UiDriver has no attribute [{item}]")
AttributeError: UiDriver has no attribute [is_locked]
