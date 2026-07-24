PS C:\windows\system32> @("C:\Program Files\Huawei\DevEco Studio","D:\Program Files\Huawei\DevEco Studio","C:\Program
>>   Files\Huawei","D:\Program Files\Huawei") | ForEach-Object { if (Test-Path $_) { Write-Output "存在: $_" } }
存在: C:\Program Files\Huawei\DevEco Studio
Test-Path : 路径中具有非法字符。
所在位置 行:2 字符: 67
+ ... D:\Program Files\Huawei") | ForEach-Object { if (Test-Path $_) { Writ ...
+                                                      ~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (C:\Program
  Files\Huawei:String) [Test-Path]，ArgumentException
    + FullyQualifiedErrorId : ItemExistsArgumentError,Microsoft.PowerShell.Commands.TestPathCommand
