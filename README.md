gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ python run_workload.py --ssh-ip 10.174.176.201 --ssh-user gonglingwen --output out --sn 5JV0226127000574 --workload_dir app_preheat --modelist litecg asmint --push_so True --daily False --runtimes 1 --branch trunk
2026-07-20 09:59:49 args:Namespace(case='all', process=128, output='out', sdk='/home/gonglingwen', target='generic_generic_arm_64only/hisi_all_phone_standard/clang_x64', ssh_ip='10.174.176.201', ssh_port=22, ssh_user='gonglingwen', ssh_pkey='/home/gonglingwen/.ssh/id_rsa', only_compile=False, mode='all', sn='5JV0226127000574', workload_dir='app_preheat', datafilefoldername='/home/gonglingwen/Test_Report/20260720', modelist=['litecg', 'asmint'], runtimes='1', branch='trunk', compiler_time=False, push_so='True', compare_path=None, daily='False')
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili_kntr.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili_kntr.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili_kntr 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @lottie/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/lottie.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：lottie 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc OneItems_zsyh.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/OneItems_zsyh.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：OneItems_zsyh 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc gaode.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/gaode.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：gaode 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @shimo/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/shimo.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：shimo 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc sort_pcfilemanager.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/sort_pcfilemanager.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：sort_pcfilemanager 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc arkui.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/arkui.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：arkui 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc tranform_zsyh.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/tranform_zsyh.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：tranform_zsyh 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc testfileinfo.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/testfileinfo.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：testfileinfo 未生成abc文件
2026-07-20 09:59:49 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 09:59:49 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc welink.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/welink.abc
2026-07-20 09:59:49
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
2026-07-20 09:59:49 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：welink 未生成abc文件
2026-07-20 09:59:49 out-litecg abc编译完成！
2026-07-20 09:59:50 ++++++++++++++++++
2026-07-20 09:59:50 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 09:59:50 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 09:59:50 Authentication (publickey) failed.
2026-07-20 09:59:50 Authentication (publickey) failed.
2026-07-20 09:59:50 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 09:59:50 SSH 连接异常: Authentication failed.
2026-07-20 09:59:50 建立新的ssh连接，并重试...
2026-07-20 09:59:55 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 09:59:56 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 09:59:56 Authentication (publickey) failed.
2026-07-20 09:59:56 Authentication (publickey) failed.
2026-07-20 09:59:56 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 09:59:56 SSH 连接异常: Authentication failed.
2026-07-20 09:59:56 建立新的ssh连接，并重试...
2026-07-20 10:00:01 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 10:00:01 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:00:02 Authentication (publickey) failed.
2026-07-20 10:00:02 Authentication (publickey) failed.
2026-07-20 10:00:02 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 10:00:02 SSH 连接异常: Authentication failed.
2026-07-20 10:00:02 建立新的ssh连接，并重试...
2026-07-20 10:00:07 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 10:00:07 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:00:07 Authentication (publickey) failed.
2026-07-20 10:00:08 Authentication (publickey) failed.
2026-07-20 10:00:08 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 10:00:08 SSH 连接异常: Authentication failed.
2026-07-20 10:00:08 建立新的ssh连接，并重试...
2026-07-20 10:00:13 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 10:00:13 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:00:13 Authentication (publickey) failed.
2026-07-20 10:00:13 Authentication (publickey) failed.
2026-07-20 10:00:13 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 10:00:13 SSH 连接异常: Authentication failed.
2026-07-20 10:00:13 建立新的ssh连接，并重试...
2026-07-20 10:00:18 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 10:00:18 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:00:19 Authentication (publickey) failed.
2026-07-20 10:00:19 Authentication (publickey) failed.
2026-07-20 10:00:19 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 10:00:19 SSH 连接异常: Authentication failed.
2026-07-20 10:00:19 建立新的ssh连接，并重试...
2026-07-20 10:00:24 SSH开始连接，ssh gonglingwen@10.174.176.201
2026-07-20 10:00:24 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:00:24 Authentication (publickey) failed.
2026-07-20 10:00:25 Authentication (publickey) failed.
2026-07-20 10:00:25 鉴权失败，请检查输入信息是否正确: Authentication failed.
2026-07-20 10:00:25 SSH 连接异常: Authentication failed.
