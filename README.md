[2026-07-29 09:32:48,438] [21820] [Device] [INFO] [hypium base version: 6.1.0.210]
[2026-07-29 09:32:48] 正在冷启动应用（包名）：def launch_app(driver, deviceSN, bundle_name):
[2026-07-29 09:32:48,438] [21820] [DeviceTest] [INFO] [init DeccVariable cur case object]
[2026-07-29 09:32:48,438] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, def launch_app(driver, deviceSN, bundle_name):)</div>]
[2026-07-29 09:32:48,532] [21820] [DeviceTest] [ERROR] [[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 def launch_app(driver, deviceSN, bundle_name): 是否已安装] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:48,532] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:48] def launch_app(driver, deviceSN, bundle_name): 启动失败：[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 def launch_app(driver, deviceSN, bundle_name): 是否已安装
[2026-07-29 09:32:48] 正在冷启动应用（包名）：log(f'正在冷启动应用（包名）：{bundle_name}')
[2026-07-29 09:32:48,533] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, log(f'正在冷启动应用（包名）：{bundle_name}'))</div>]
[2026-07-29 09:32:48,627] [21820] [DeviceTest] [ERROR] [[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 log(f'正在冷启动应用（包名）：{bundle_name}') 是否已安装] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:48,627] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:48] log(f'正在冷启动应用（包名）：{bundle_name}') 启动失败：[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 log(f'正在冷启动应用（包名）：{bundle_name}') 是否已安装
[2026-07-29 09:32:48] 正在冷启动应用（包名）：try:
[2026-07-29 09:32:48,629] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, try:)</div>]
[2026-07-29 09:32:49,055] [21820] [DeviceTest] [ERROR] [[Script-0203002] error: failed to force stop process.
Error Code:10104002  Error Message:Failed to retrieve specified package information.
Error cause: The application corresponding to the specified package name is not installed.
  Try the following:
  > Check if the bundleName is correct
  > Check whether the application corresponding to the specified bundleName is installed

请检查 try: 是否已安装] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:49,055] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:49] try: 启动失败：[Script-0203002] error: failed to force stop process.
Error Code:10104002  Error Message:Failed to retrieve specified package information.
Error cause: The application corresponding to the specified package name is not installed.
  Try the following:
  > Check if the bundleName is correct
  > Check whether the application corresponding to the specified bundleName is installed

请检查 try: 是否已安装
[2026-07-29 09:32:49] 正在冷启动应用（包名）：# 1. 强制停止应用（确保是冷启动）
[2026-07-29 09:32:49,056] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, # 1. 强制停止应用（确保是冷启动）)</div>]
[2026-07-29 09:32:49,793] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, # 1. 强制停止应用（确保是冷启动）) cost: 0.737s</div>]
[2026-07-29 09:32:50,795] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.start_app(5JV0226127000574, # 1. 强制停止应用（确保是冷启动）)</div>]
[2026-07-29 09:32:50,955] [21820] [Device] [ERROR] [Fail get bundle info: JSONDecodeError('Expecting value: line 1 column 1 (char 0)')] [ErrorNo=00000]
[2026-07-29 09:32:50,955] [21820] [DeviceTest] [ERROR] [[Script-0203002] Can't get bundle_info for [# 1. 强制停止应用（确保是冷启动）], please check if application installed] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:50,955] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:50] # 1. 强制停止应用（确保是冷启动） 启动失败：[Script-0203002] Can't get bundle_info for [# 1. 强制停止应用（确保是冷启动）], please check if application installed
[2026-07-29 09:32:50] 正在冷启动应用（包名）：driver.stop_app(bundle_name)
[2026-07-29 09:32:50,956] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, driver.stop_app(bundle_name))</div>]
[2026-07-29 09:32:51,050] [21820] [DeviceTest] [ERROR] [[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 driver.stop_app(bundle_name) 是否已安装] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:51,051] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:51] driver.stop_app(bundle_name) 启动失败：[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 driver.stop_app(bundle_name) 是否已安装
[2026-07-29 09:32:51] 正在冷启动应用（包名）：time.sleep(1)
[2026-07-29 09:32:51,051] [21820] [DeviceTest] [INFO] [<div class='aw'>uidriver.stop_app(5JV0226127000574, time.sleep(1))</div>]
[2026-07-29 09:32:51,140] [21820] [DeviceTest] [ERROR] [[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 time.sleep(1) 是否已安装] [ErrorNo=00000, is_traceback=True]
[2026-07-29 09:32:51,140] [21820] [DeviceTest] [INFO] [flash error msg.]
[2026-07-29 09:32:51] time.sleep(1) 启动失败：[Script-0203002] /bin/sh: syntax error: unexpected '('
请检查 time.sleep(1) 是否已安装
[2026-07-29 09:32:51] 正在冷启动应用（包名）：# 2. 直接通过包名启动
