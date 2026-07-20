
gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ python run_workload.py --ssh-ip 10.174.176.201 --ssh-user g50060069 --output out --sn 5JV0226127000574 --workload_dir app_preheat --modelist litecg asmint --push_so True --daily False --runtimes 1 --branch trunk
2026-07-20 10:11:57 args:Namespace(case='all', process=128, output='out', sdk='/home/gonglingwen', target='generic_generic_arm_64only/hisi_all_phone_standard/clang_x64', ssh_ip='10.174.176.201', ssh_port=22, ssh_user='g50060069', ssh_pkey='/home/gonglingwen/.ssh/id_rsa', only_compile=False, mode='all', sn='5JV0226127000574', workload_dir='app_preheat', datafilefoldername='/home/gonglingwen/Test_Report/20260720', modelist=['litecg', 'asmint'], runtimes='1', branch='trunk', compiler_time=False, push_so='True', compare_path=None, daily='False')
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili_kntr.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili_kntr.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili_kntr 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @lottie/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/lottie.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：lottie 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc OneItems_zsyh.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/OneItems_zsyh.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：OneItems_zsyh 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc gaode.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/gaode.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：gaode 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc @shimo/fileInfo.txt  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/shimo.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：shimo 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc sort_pcfilemanager.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/sort_pcfilemanager.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：sort_pcfilemanager 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc arkui.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/arkui.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：arkui 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc tranform_zsyh.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/tranform_zsyh.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：tranform_zsyh 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc bili.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/bili.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：bili 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc testfileinfo.js --extension=js  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/testfileinfo.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：testfileinfo 未生成abc文件
2026-07-20 10:11:57 执行命令路径：/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/suites/workload/app_preheat
2026-07-20 10:11:57 /home/gonglingwen/toolchain/x86_bin/trunk/es2abc welink.ts --extension=ts  --module --merge-abc --target-api-sub-version=beta3 --output /home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build/out-litecg/welink.abc
2026-07-20 10:11:57
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
2026-07-20 10:11:57 ('/bin/sh: 1: /home/gonglingwen/toolchain/x86_bin/trunk/es2abc: not found\n', 127)
case：welink 未生成abc文件
2026-07-20 10:11:57 out-litecg abc编译完成！
2026-07-20 10:11:57 ++++++++++++++++++
2026-07-20 10:11:57 SSH开始连接，ssh g50060069@10.174.176.201
2026-07-20 10:11:57 Connected (version 2.0, client OpenSSH_for_Windows_9.8)
2026-07-20 10:11:57 Authentication (publickey) successful!
2026-07-20 10:11:58 [chan 0] Opened sftp connection (server version 3)
2026-07-20 10:11:58 SSH 连接成功！
2026-07-20 10:11:58 执行远程命令：hdc -t 5JV0226127000574 target mount
2026-07-20 10:12:01 命令输出：
Mount finish

2026-07-20 10:12:01 执行远程命令：hdc -t 5JV0226127000574 shell mount /sys_prod -o rw,remount
2026-07-20 10:12:02 命令输出：

2026-07-20 10:12:02 执行远程命令：hdc -t 5JV0226127000574 shell truncate -s 0 /sys_prod/etc/soc_perf/*.xml
2026-07-20 10:12:04 命令输出：

2026-07-20 10:12:04 执行远程命令：hdc -t 5JV0226127000574 shell mount / -o rw,remount
2026-07-20 10:12:05 命令输出：
mount: '/dev/block/dm-2'->'/': Not supported

2026-07-20 10:12:05 执行远程命令：hdc -t 5JV0226127000574 shell mv /system/etc/soc_perf/socperf_resource_config.xml /system/etc/soc_perf/socperf_resource_config.xml
2026-07-20 10:12:07 命令输出：

2026-07-20 10:12:07 执行远程命令：hdc -t 5JV0226127000574 shell mount /vendor -o rw,remount
2026-07-20 10:12:09 命令输出：

2026-07-20 10:12:09 执行远程命令：hdc -t 5JV0226127000574 shell mv /vendor/etc/soc_perf/socperf_resource_config.xml /vendor/etc/soc_perf/socperf_resource_config.xml.bak
2026-07-20 10:12:10 命令输出：

2026-07-20 10:12:10 执行远程命令：hdc list targets
2026-07-20 10:12:12 命令输出：
5JV0226127000574

2026-07-20 10:12:12 hdc list targets output: 5JV0226127000574

2026-07-20 10:12:12 ******** sn:5JV0226127000574 ********
2026-07-20 10:12:12 执行远程命令：hdc -t 5JV0226127000574 shell setenforce 0
2026-07-20 10:12:13 命令输出：

2026-07-20 10:12:13 执行远程命令：hdc -t 5JV0226127000574 shell if [ -d /data/local/tmp/workload ];then echo 0; else echo 1; fi
2026-07-20 10:12:15 命令输出：
1

2026-07-20 10:12:15 执行远程命令：hdc -t 5JV0226127000574 shell mkdir -p /data/local/tmp/workload
2026-07-20 10:12:17 命令输出：

2026-07-20 10:12:17 执行远程命令：hdc -t 5JV0226127000574 shell \"param get | grep software\"
2026-07-20 10:12:18 命令输出：
    const.software.model = SGT-AL00B
    const.product.software.version = SGT-AL00B 7.0.0.32(C00E32R3P2log)

2026-07-20 10:12:18
--------系统版本: SGT-AL00B 7.0.0.32(C00E32R3P2log)  --------
2026-07-20 10:12:18 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/module/arkcompiler/stub.an ];then echo 0; else echo 1; fi
2026-07-20 10:12:20 命令输出：
0

2026-07-20 10:12:20 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/module/arkcompiler/stub.an /data/local/tmp/workload/stub.an
2026-07-20 10:12:22 命令输出：

2026-07-20 10:12:22 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/stub.an
2026-07-20 10:12:23 命令输出：

2026-07-20 10:12:23 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/bin/ark_aot_compiler ];then echo 0; else echo 1; fi
2026-07-20 10:12:25 命令输出：
0

2026-07-20 10:12:25 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/bin/ark_aot_compiler /data/local/tmp/workload/ark_aot_compiler
2026-07-20 10:12:26 命令输出：

2026-07-20 10:12:26 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/ark_aot_compiler
2026-07-20 10:12:28 命令输出：

2026-07-20 10:12:28 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /data/local/tmp/ark_js_vm ];then echo 0; else echo 1; fi
2026-07-20 10:12:30 命令输出：
1

2026-07-20 10:12:30 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libbacktrace_local.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:31 命令输出：
0

2026-07-20 10:12:31 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libbacktrace_local.so /data/local/tmp/workload/libbacktrace_local.so
2026-07-20 10:12:33 命令输出：

2026-07-20 10:12:33 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libbacktrace_local.so
2026-07-20 10:12:34 命令输出：

2026-07-20 10:12:34 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libark_llvmcodegen.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:36 命令输出：
0

2026-07-20 10:12:36 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/libark_llvmcodegen.so /data/local/tmp/workload/libark_llvmcodegen.so
2026-07-20 10:12:38 命令输出：

2026-07-20 10:12:38 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libark_llvmcodegen.so
2026-07-20 10:12:39 命令输出：

2026-07-20 10:12:39 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/platformsdk/libark_jsruntime.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:41 命令输出：
0

2026-07-20 10:12:41 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/platformsdk/libark_jsruntime.so /data/local/tmp/workload/libark_jsruntime.so
2026-07-20 10:12:43 命令输出：

2026-07-20 10:12:43 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libark_jsruntime.so
2026-07-20 10:12:44 命令输出：

2026-07-20 10:12:44 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libark_jsoptimizer.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:46 命令输出：
0

2026-07-20 10:12:46 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/libark_jsoptimizer.so /data/local/tmp/workload/libark_jsoptimizer.so
2026-07-20 10:12:47 命令输出：

2026-07-20 10:12:47 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libark_jsoptimizer.so
2026-07-20 10:12:49 命令输出：

2026-07-20 10:12:49 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libbegetutil.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:51 命令输出：
0

2026-07-20 10:12:51 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libbegetutil.z.so /data/local/tmp/workload/libbegetutil.z.so
2026-07-20 10:12:52 命令输出：

2026-07-20 10:12:52 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libbegetutil.z.so
2026-07-20 10:12:54 命令输出：

2026-07-20 10:12:54 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libcjson.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:12:55 命令输出：
0

2026-07-20 10:12:55 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libcjson.z.so /data/local/tmp/workload/libcjson.z.so
2026-07-20 10:12:57 命令输出：

2026-07-20 10:12:57 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libcjson.z.so
2026-07-20 10:12:59 命令输出：

2026-07-20 10:12:59 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libdfx_procinfo.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:00 命令输出：
0

2026-07-20 10:13:00 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libdfx_procinfo.z.so /data/local/tmp/workload/libdfx_procinfo.z.so
2026-07-20 10:13:02 命令输出：

2026-07-20 10:13:02 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libdfx_procinfo.z.so
2026-07-20 10:13:03 命令输出：

2026-07-20 10:13:03 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libdfx_signalhandler.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:05 命令输出：
1

2026-07-20 10:13:05 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libfaultloggerd.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:06 命令输出：
0

2026-07-20 10:13:06 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libfaultloggerd.z.so /data/local/tmp/workload/libfaultloggerd.z.so
2026-07-20 10:13:08 命令输出：

2026-07-20 10:13:08 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libfaultloggerd.z.so
2026-07-20 10:13:10 命令输出：

2026-07-20 10:13:10 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/ndk/libffrt.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:11 命令输出：
0

2026-07-20 10:13:11 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/ndk/libffrt.so /data/local/tmp/workload/libffrt.so
2026-07-20 10:13:13 命令输出：

2026-07-20 10:13:13 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libffrt.so
2026-07-20 10:13:15 命令输出：

2026-07-20 10:13:15 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libhilog.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:16 命令输出：
1

2026-07-20 10:13:16 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libhilog_encode.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:18 命令输出：
1

2026-07-20 10:13:18 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libhisysevent.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:19 命令输出：
0

2026-07-20 10:13:19 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libhisysevent.z.so /data/local/tmp/workload/libhisysevent.z.so
2026-07-20 10:13:21 命令输出：

2026-07-20 10:13:21 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhisysevent.z.so
2026-07-20 10:13:22 命令输出：

2026-07-20 10:13:22 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libhitrace_meter.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:24 命令输出：
0

2026-07-20 10:13:24 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libhitrace_meter.so /data/local/tmp/workload/libhitrace_meter.so
2026-07-20 10:13:26 命令输出：

2026-07-20 10:13:26 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhitrace_meter.so
2026-07-20 10:13:27 命令输出：

2026-07-20 10:13:27 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libhitracechain.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:29 命令输出：
0

2026-07-20 10:13:29 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libhitracechain.so /data/local/tmp/workload/libhitracechain.so
2026-07-20 10:13:30 命令输出：

2026-07-20 10:13:30 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhitracechain.so
2026-07-20 10:13:32 命令输出：

2026-07-20 10:13:32 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/platformsdk/libhmicui18n.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:34 命令输出：
0

2026-07-20 10:13:34 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/platformsdk/libhmicui18n.z.so /data/local/tmp/workload/libhmicui18n.z.so
2026-07-20 10:13:35 命令输出：

2026-07-20 10:13:35 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhmicui18n.z.so
2026-07-20 10:13:37 命令输出：

2026-07-20 10:13:37 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/platformsdk/libhmicuuc.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:38 命令输出：
0

2026-07-20 10:13:38 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/platformsdk/libhmicuuc.z.so /data/local/tmp/workload/libhmicuuc.z.so
2026-07-20 10:13:40 命令输出：

2026-07-20 10:13:40 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhmicuuc.z.so
2026-07-20 10:13:42 命令输出：

2026-07-20 10:13:42 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libipc_common.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:43 命令输出：
1

2026-07-20 10:13:43 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libipc_single.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:45 命令输出：
1

2026-07-20 10:13:45 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libjit_code_sign.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:46 命令输出：
0

2026-07-20 10:13:46 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/libjit_code_sign.z.so /data/local/tmp/workload/libjit_code_sign.z.so
2026-07-20 10:13:48 命令输出：

2026-07-20 10:13:48 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libjit_code_sign.z.so
2026-07-20 10:13:50 命令输出：

2026-07-20 10:13:50 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/liblzma.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:51 命令输出：
0

2026-07-20 10:13:51 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/liblzma.z.so /data/local/tmp/workload/liblzma.z.so
2026-07-20 10:13:53 命令输出：

2026-07-20 10:13:53 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/liblzma.z.so
2026-07-20 10:13:54 命令输出：

2026-07-20 10:13:54 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libqos.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:13:56 命令输出：
0

2026-07-20 10:13:56 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/libqos.z.so /data/local/tmp/workload/libqos.z.so
2026-07-20 10:13:58 命令输出：

2026-07-20 10:13:58 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libqos.z.so
2026-07-20 10:13:59 命令输出：

2026-07-20 10:13:59 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libsamgr_proxy.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:01 命令输出：
1

2026-07-20 10:14:01 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libsec_shared.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:02 命令输出：
0

2026-07-20 10:14:02 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libsec_shared.z.so /data/local/tmp/workload/libsec_shared.z.so
2026-07-20 10:14:04 命令输出：

2026-07-20 10:14:04 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libsec_shared.z.so
2026-07-20 10:14:06 命令输出：

2026-07-20 10:14:06 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libshared_libz.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:07 命令输出：
1

2026-07-20 10:14:07 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk/libucollection_client.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:09 命令输出：
1

2026-07-20 10:14:09 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libunwinder.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:10 命令输出：
0

2026-07-20 10:14:10 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libunwinder.z.so /data/local/tmp/workload/libunwinder.z.so
2026-07-20 10:14:12 命令输出：

2026-07-20 10:14:12 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libunwinder.z.so
2026-07-20 10:14:14 命令输出：

2026-07-20 10:14:14 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libutils.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:15 命令输出：
0

2026-07-20 10:14:15 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libutils.z.so /data/local/tmp/workload/libutils.z.so
2026-07-20 10:14:17 命令输出：

2026-07-20 10:14:17 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libutils.z.so
2026-07-20 10:14:18 命令输出：

2026-07-20 10:14:18 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/platformsdk/libuv.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:20 命令输出：
0

2026-07-20 10:14:20 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/platformsdk/libuv.so /data/local/tmp/workload/libuv.so
2026-07-20 10:14:22 命令输出：

2026-07-20 10:14:22 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libuv.so
2026-07-20 10:14:23 命令输出：

2026-07-20 10:14:23 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/librtg_interface.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:25 命令输出：
0

2026-07-20 10:14:25 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/librtg_interface.z.so /data/local/tmp/workload/librtg_interface.z.so
2026-07-20 10:14:26 命令输出：

2026-07-20 10:14:26 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/librtg_interface.z.so
2026-07-20 10:14:28 命令输出：

2026-07-20 10:14:28 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/platformsdk/libasync_stack.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:29 命令输出：
0

2026-07-20 10:14:29 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/platformsdk/libasync_stack.z.so /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:31 命令输出：

2026-07-20 10:14:31 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:33 命令输出：
chmod: chmod '/data/local/tmp/workload/libasync_stack.z.so' to 0755: No such file or directory

2026-07-20 10:14:33 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-sdk-sp/libasync_stack.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:34 命令输出：
0

2026-07-20 10:14:34 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-sdk-sp/libasync_stack.z.so /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:36 命令输出：
cp: /data/local/tmp/workload/libasync_stack.z.so: No such file or directory

2026-07-20 10:14:36 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:38 命令输出：
chmod: chmod '/data/local/tmp/workload/libasync_stack.z.so' to 0755: No such file or directory

2026-07-20 10:14:38 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/chipset-pub-sdk/libasync_stack.z.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:39 命令输出：
0

2026-07-20 10:14:39 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/chipset-pub-sdk/libasync_stack.z.so /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:41 命令输出：

2026-07-20 10:14:41 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libasync_stack.z.so
2026-07-20 10:14:42 命令输出：
chmod: chmod '/data/local/tmp/workload/libasync_stack.z.so' to 0755: No such file or directory

2026-07-20 10:14:42 执行远程命令：hdc -t 5JV0226127000574 shell if [ -e /system/lib64/libhilog_inner.so ];then echo 0; else echo 1; fi
2026-07-20 10:14:44 命令输出：
0

2026-07-20 10:14:44 执行远程命令：hdc -t 5JV0226127000574 shell cp -r /system/lib64/libhilog_inner.so /data/local/tmp/workload/libhilog_inner.so
2026-07-20 10:14:46 命令输出：

2026-07-20 10:14:46 执行远程命令：hdc -t 5JV0226127000574 shell chmod 755 /data/local/tmp/workload/libhilog_inner.so
2026-07-20 10:14:47 命令输出：

2026-07-20 10:14:47 tar -czf test.tar.gz -C/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/pgo_build out-litecg
2026-07-20 10:14:47
2026-07-20 10:14:47 send file test.tar.gz -> temp/test.tar.gz
2026-07-20 10:14:47 本地或远端文件不存在：None
2026-07-20 10:14:47 程序运行异常！错误信息：
[Errno 2] No such file
Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 567, in main
    comp_in_phone.run_workload(build_casenames)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 454, in run_workload
    self.push_workload()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 289, in push_workload
    self.ssh.send_file(tmp_tar, f"{self.temp_path}/{tmp_tar}")
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 24, in _wapper
    return func(self, *args, **kwargs)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 43, in _wapper
    output = func(self, *args, **kwargs)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/ssh_client.py", line 159, in send_file
    self.sftp.put(local_file, remote_file, callback=self.print_progress)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 759, in put
    return self.putfo(fl, remotepath, file_size, callback, confirm)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 714, in putfo
    with self.file(remotepath, "wb") as fr:
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 372, in open
    t, msg = self._request(CMD_OPEN, filename, imode, attrblock)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 857, in _request
    return self._read_response(num)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 909, in _read_response
    self._convert_status(msg)
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/sftp_client.py", line 938, in _convert_status
    raise IOError(errno.ENOENT, text)
FileNotFoundError: [Errno 2] No such file
2026-07-20 10:14:47 workloat result: {}
2026-07-20 10:14:47 failed case: {'bili_kntr': {'litecg'}, 'lottie': {'litecg'}, 'OneItems_zsyh': {'litecg'}, 'gaode': {'litecg'}, 'shimo': {'litecg'}, 'sort_pcfilemanager': {'litecg'}, 'arkui': {'litecg'}, 'tranform_zsyh': {'litecg'}, 'bili': {'litecg'}, 'testfileinfo': {'litecg'}, 'welink': {'litecg'}}
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
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 596, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 586, in main
    html = HTML(report_data, workload_dir, BRANCH, args.only_compile, args.mode, compiler_time, daily=daily, version=comp_in_phone.version)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/gen_html.py", line 35, in __init__
    self.commitid_info = " ".join(common.read_file(os.path.join(
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/common.py", line 242, in read_file
    with open(file_path, "r", encoding='utf-8', newline=None) as my_file:
FileNotFoundError: [Errno 2] No such file or directory: '/home/gonglingwen/toolchain/commitid_trunk.txt'
