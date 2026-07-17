# jsvm

gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ python run_workload.py --ssh-ip 10.175.69.160 --ssh-user p_hoslvmtest --output out --sn 3DK0224C18003558 --workload_dir app_preheat --modelist litecg asmint --push_so True --daily False --runtimes 1 --branch trunk
Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/run_workload.py", line 18, in <module>
    from gen_html import HTML
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/gen_html.py", line 8, in <module>
    from gen_report import Report
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JIT/Workload/../../Public/scripts/gen_report.py", line 7, in <module>
    import json5
ModuleNotFoundError: No module named 'json5'
gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ pip3 install json5
Defaulting to user installation because normal site-packages is not writeable
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f4565997460>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f4565997670>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f4565997880>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f4565997a30>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f4565997be0>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
ERROR: Could not find a version that satisfies the requirement json5 (from versions: none)
ERROR: No matching distribution found for json5
gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ pip3 install json5 -i https://pypi.tuna.tsinghua.edu.cn/simple
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'NewConnectionError('<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7f8b26ff7160>: Failed to establish a new connection: [Errno 101] Network is unreachable')': /simple/json5/
^CERROR: Operation cancelled by user
gonglingwen@ubuntu:~/OpenHarmony_ArkTS_Test/JIT/Workload$ pip3 install json5 -i http://repo.huaweicloud.com/repository/pypi/simple --trusted-host repo.huaweicloud.com
Defaulting to user installation because normal site-packages is not writeable
Looking in indexes: http://repo.huaweicloud.com/repository/pypi/simple
WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPConnection object at 0x7f8d05e2b0a0>, 'Connection to repo.huaweicloud.com timed out. (connect timeout=15)')': /repository/pypi/simple/json5/
WARNING: Retrying (Retry(total=3, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPConnection object at 0x7f8d05e2b400>, 'Connection to repo.huaweicloud.com timed out. (connect timeout=15)')': /repository/pypi/simple/json5/
WARNING: Retrying (Retry(total=2, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPConnection object at 0x7f8d05e2b5e0>, 'Connection to repo.huaweicloud.com timed out. (connect timeout=15)')': /repository/pypi/simple/json5/
WARNING: Retrying (Retry(total=1, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPConnection object at 0x7f8d05e2b7c0>, 'Connection to repo.huaweicloud.com timed out. (connect timeout=15)')': /repository/pypi/simple/json5/
WARNING: Retrying (Retry(total=0, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPConnection object at 0x7f8d05e2b9a0>, 'Connection to repo.huaweicloud.com timed out. (connect timeout=15)')': /repository/pypi/simple/json5/
ERROR: Could not find a version that satisfies the requirement json5 (from versions: none)
ERROR: No matching distribution found for json5
