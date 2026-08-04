 
2026-08-04 09:02:54 SSH开始连接，ssh g50060069@10.174.176.201
2026-08-04 09:03:24 SSH连接出现未知错误：timed out
Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/run.py", line 249, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/run.py", line 221, in main
    suite = Suite(args.suitename, args.mode, args.platform, ssh, args.d8)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/run.py", line 63, in __init__
    self.env_prepare_for_phone()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/run.py", line 72, in env_prepare_for_phone
    self.ssh.clear_folder_contents(self.suitename)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/../../../Public/scripts/ssh_client.py", line 23, in _wapper
    self.connect()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/JSVM/Function/V8_Lite/../../../Public/scripts/ssh_client.py", line 102, in connect
    self.ssh.connect(self.host_ip,
  File "/home/gonglingwen/.local/lib/python3.10/site-packages/paramiko/client.py", line 364, in connect
    sock.connect(addr)
TimeoutError: timed out
