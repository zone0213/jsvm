gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ python run_workload.py --ssh-ip 10.175.69.160 --ssh-user gonglingwen --output out --sn 3DK0224C18003558 --workload_dir app_preheat --modelist litecg asmint --push_so True --daily False --runtimes 1 --branch trunk
2026-07-20 08:44:47 args:Namespace(case='all', process=128, output='out', sdk='/home/gonglingwen', target='generic_generic_arm_64only/hisi_all_phone_standard/clang_x64', ssh_ip='10.175.69.160', ssh_port=22, ssh_user='gonglingwen', ssh_pkey='/home/gonglingwen/.ssh/id_rsa', only_compile=False, mode='all', sn='3DK0224C18003558', workload_dir='app_preheat', datafilefoldername='/home/gonglingwen/Test_Report/20260720', modelist=['litecg', 'asmint'], runtimes='1', branch='trunk', compiler_time=False, push_so='True', compare_path=None, daily='False')
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili_kntr.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili_kntr.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili_kntr 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @lottie/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/lottie.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：lottie 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc OneItems_zsyh.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/OneItems_zsyh.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：OneItems_zsyh 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc gaode.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/gaode.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：gaode 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @shimo/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/shimo.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：shimo 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc sort_pcfilemanager.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/sort_pcfilemanager.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：sort_pcfilemanager 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc arkui.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/arkui.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：arkui 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc tranform_zsyh.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/tranform_zsyh.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：tranform_zsyh 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc testfileinfo.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/testfileinfo.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：testfileinfo 未生成abc文件
2026-07-20 08:44:47 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 08:44:47 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc welink.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/welink.abc
2026-07-20 08:44:47
--- Logging error ---
Traceback (most recent call last):
  File "/usr/lib/python3.10/logging/__init__.py", line 1100, in emit
    msg = self.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 943, in format
    return fmt.format(record)
  File "/usr/lib/python3.10/logging/__init__.py", line 678, in format
    record.message = record.getMessage()
  File "/usr/lib/python3.10/logging/__init__.py", line 368, in getMessage
    msg = msg % self.args
TypeError: not all arguments converted during string formatting
Call stack:
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 557, in main
    compiler_in_linux.build_single_case(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 133, in build_single_case
    if not self.ts2abc(case_name):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 123, in ts2abc
    out = common.execute_command(cmd, WORKLOAD_PATH)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 63, in execute_command
    logging.info(f"命令执行失败", result.stderr)
Message: '命令执行失败'
Arguments: ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n',)
2026-07-20 08:44:47 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：welink 未生成abc文件
2026-07-20 08:44:47 out-litecg abc编译完成！
2026-07-20 08:44:47 ++++++++++++++++++
2026-07-20 08:44:47 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:44:47 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:44:48 Authentication (publickey) failed.
2026-07-20 08:44:48 Authentication (publickey) failed.
2026-07-20 08:44:48 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:44:48 SSH 连接异常: Authentication failed.
2026-07-20 08:44:48 建立新的ssh连接，并重试...
2026-07-20 08:44:53 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:44:53 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:44:53 Authentication (publickey) failed.
2026-07-20 08:44:54 Authentication (publickey) failed.
2026-07-20 08:44:54 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:44:54 SSH 连接异常: Authentication failed.
2026-07-20 08:44:54 建立新的ssh连接，并重试...
2026-07-20 08:44:59 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:44:59 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:44:59 Authentication (publickey) failed.
2026-07-20 08:44:59 Authentication (publickey) failed.
2026-07-20 08:44:59 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:44:59 SSH 连接异常: Authentication failed.
2026-07-20 08:44:59 建立新的ssh连接，并重试...
2026-07-20 08:45:04 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:04 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:05 Authentication (publickey) failed.
2026-07-20 08:45:05 Authentication (publickey) failed.
2026-07-20 08:45:05 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:05 SSH 连接异常: Authentication failed.
2026-07-20 08:45:05 建立新的ssh连接，并重试...
2026-07-20 08:45:10 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:10 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:10 Authentication (publickey) failed.
2026-07-20 08:45:11 Authentication (publickey) failed.
2026-07-20 08:45:11 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:11 SSH 连接异常: Authentication failed.
2026-07-20 08:45:11 建立新的ssh连接，并重试...
2026-07-20 08:45:16 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:16 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:16 Authentication (publickey) failed.
2026-07-20 08:45:17 Authentication (publickey) failed.
2026-07-20 08:45:17 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:17 SSH 连接异常: Authentication failed.
2026-07-20 08:45:17 建立新的ssh连接，并重试...
2026-07-20 08:45:22 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:22 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:22 Authentication (publickey) failed.
2026-07-20 08:45:22 Authentication (publickey) failed.
2026-07-20 08:45:22 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:22 SSH 连接异常: Authentication failed.
2026-07-20 08:45:22 建立新的ssh连接，并重试...
2026-07-20 08:45:27 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:27 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:28 Authentication (publickey) failed.
2026-07-20 08:45:28 Authentication (publickey) failed.
2026-07-20 08:45:28 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:28 SSH 连接异常: Authentication failed.
2026-07-20 08:45:28 建立新的ssh连接，并重试...
2026-07-20 08:45:33 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:33 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:33 Authentication (publickey) failed.
2026-07-20 08:45:34 Authentication (publickey) failed.
2026-07-20 08:45:34 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:34 SSH 连接异常: Authentication failed.
2026-07-20 08:45:34 建立新的ssh连接，并重试...
2026-07-20 08:45:39 SSH开始连接，ssh gonglingwen@10.175.69.160
2026-07-20 08:45:39 Connected (version 2.0, client OpenSSH_for_Windows_9.5)
2026-07-20 08:45:39 Authentication (publickey) failed.
2026-07-20 08:45:39 Authentication (publickey) failed.
2026-07-20 08:45:39 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 08:45:39 SSH 连接异常: Authentication failed.
2026-07-20 08:45:39 建立新的ssh连接，并重试...
^C2026-07-20 08:45:43 workloat result: {}
2026-07-20 08:45:43 failed case: {'bili_kntr': {'litecg'}, 'lottie': {'litecg'}, 'OneItems_zsyh': {'litecg'}, 'gaode': {'litecg'}, 'shimo': {'litecg'}, 'sort_pcfilemanager': {'litecg'}, 'arkui': {'litecg'}, 'tranform_zsyh': {'litecg'}, 'bili': {'litecg'}, 'testfileinfo': {'litecg'}, 'welink': {'litecg'}}
read json file is: /home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../JIT/Workload/v8_data/v8_app_data.json
read json file is: /home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../JIT/Workload/jit_data/jit_app_data.json
read json file is: /home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/case_test_point.json

workload time:
+-----+----------+------+---------------+------------+--------+-----------------+------------------+--------------------+----------------+------------------------+
| Num | Testcase | Case | jit(baseline) | v8(maglev) | asmint | litecg(Current) | litecg(Previous) | Rate(litecg vs v8) | Improved Value | Rate(litecg vs asmint) |
+-----+----------+------+---------------+------------+--------+-----------------+------------------+--------------------+----------------+------------------------+
+-----+----------+------+---------------+------------+--------+-----------------+------------------+--------------------+----------------+------------------------+


read file is: /home/gonglingwen/toolchain/commitid_trunk.txt
Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 23, in _wapper
    self.connect()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 102, in connect
    self.ssh.connect(self.host_ip,
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/client.py", line 477, in connect
    self._auth(
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/client.py", line 779, in _auth
    raise saved_exception
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/client.py", line 755, in _auth
    self._transport.auth_publickey(username, key)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/transport.py", line 1600, in auth_publickey
    return self.auth_handler.wait_for_response(my_event)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/auth_handler.py", line 227, in wait_for_response
    raise e
paramiko.ssh_exception.AuthenticationException: Authentication failed.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 567, in main
    comp_in_phone.run_workload(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 427, in run_workload
    common.clean_phone(self.ssh, self.sn)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 157, in clean_phone
    ssh.hdc_shell("mount /sys_prod -o rw,remount")
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 240, in hdc_shell
    return self.execute_command(f"{self.hdc} shell {cmd}", timeout, disable_output=disable_output)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 30, in _wapper
    time.sleep(self.retry_interval)
KeyboardInterrupt

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 586, in main
    html = HTML(report_data, workload_dir, BRANCH, args.only_compile, args.mode, compiler_time, daily=daily, version=comp_in_phone.version)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/gen_html.py", line 35, in __init__
    self.commitid_info = " ".join(common.read_file(os.path.join(
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 242, in read_file
    with open(file_path, "r", encoding='utf-8', newline=None) as my_file:
FileNotFoundError: [Errno 2] No such file or directory: '/home/gonglingwen/toolchain/commitid_trunk.txt'
