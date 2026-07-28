(.venv) PS D:\文件\pythonCode>  python down_app_and_cold_start.py 5JV0226127000574
[2026-07-28 17:16:36] 日志文件：D:\文件\pythonCode\download_log_20260728_171636.txt
[2026-07-28 17:16:36] 设备列表：['5JV0226127000574']
[2026-07-28 17:16:36] ===== 设备 5JV0226127000574 开始处理 =====
[2026-07-28 17:16:36,969] [12496] [EnvPool] [INFO] [Report path: D:\文件\pythonCode\reports\2026-07-28-17-16-36]
[2026-07-28 17:16:36,969] [12496] [EnvPool] [INFO] [Load Managers ...]
[2026-07-28 17:16:36,970] [12496] [EnvPool] [INFO] [Env pool running in cache mode.]
[2026-07-28 17:16:36,970] [12496] [EnvPool] [INFO] [Prepare to init pool]
[2026-07-28 17:16:36,971] [12496] [EnvPool] [INFO] [Pool is prepared]
[2026-07-28 17:16:36,972] [12496] [EnvPool] [INFO] [Get device by selector]
[2026-07-28 17:16:36,972] [12496] [EnvPool] [INFO] [Apply device in pool]
[2026-07-28 17:16:37,242] [22576] [Hdc] [INFO] [5JV0226127000574                USB     Connected       localhost
COM1            UART    Ready   unknown...
]
[2026-07-28 17:16:37,983] [12496] [EnvPool] [INFO] [Do matches, device:[state:Available, sn:5JV0226127000574, label:phone], selection option:[device sn:['5JV0226127000574'], label:phone]]
[2026-07-28 17:16:37,984] [12496] [EnvPool] [INFO] [Device 5JV0226127000574: extend value: {}]
[2026-07-28 17:16:38,563] [12496] [Device] [INFO] [7.0.0.1]
[2026-07-28 17:16:38,906] [12496] [Device] [INFO] [Init ui proxy by unix socket.]
[2026-07-28 17:16:38,906] [12496] [DeviceUIProxy] [INFO] [Check uitest running status.]
[2026-07-28 17:16:39,073] [12496] [DeviceUIProxy] [INFO] [Finish check uitest running status. Uitest pid: 48918]
[2026-07-28 17:16:39,074] [12496] [Device] [INFO] [uitest version: 7.0.0.1. Using 1.2.2 agent version]
[2026-07-28 17:16:39,217] [12496] [Device] [INFO] [UITEST_AGENT_LIBRARY@v0.0.0#1.2.2
]
[2026-07-28 17:16:39,218] [12496] [Device] [INFO] [local agent version 1.2.2, device agent version 1.2.2]
[2026-07-28 17:16:39,340] [12496] [Device] [INFO] [Device agent is up to date!]
[2026-07-28 17:16:39,611] [12496] [DeviceUIProxy] [INFO] [Harmony ui rpc already start!!!!]
[2026-07-28 17:16:41,690] [12496] [DeviceUIProxy] [INFO] [tcp forward port: 9942 for 5JV0226127000574]
[2026-07-28 17:16:41,761] [12496] [Device] [INFO] [hypium base version: 6.1.0.210]
Exception in thread Thread-1 (run):
Traceback (most recent call last):
  File "D:\Program files\Python312\Lib\threading.py", line 1075, in _bootstrap_inner
    self.run()
  File "D:\Program files\Python312\Lib\threading.py", line 1012, in run
    self._target(*self._args, **self._kwargs)
  File "D:\文件\pythonCode\down_app_and_cold_start.py", line 136, in run
    driver.Screen.set_sleep_time(600)
    ^^^^^^^^^^^^^
  File "D:\文件\pythonCode\.venv\Lib\site-packages\hypium\action\device\uidriver.py", line 168, in __getattr__
    raise AttributeError(f"UiDriver has no attribute [{item}]")
AttributeError: UiDriver has no attribute [Screen]
[2026-07-28 17:16:41] 脚本执行结束

============================================================
执行结果汇总
============================================================

设备数量：1
应用总数：100
每台设备应用数：100

【下载失败】无

【启动失败】无

【统计】启动成功率：100/100 (100%)
============================================================
