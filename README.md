PS C:\windows\system32> $b = "C:\Program Files\Huawei\DevEco Studio\sdk"; if (Test-Path $b) { Get-ChildItem $b -Directory | ForEach-Object {
>>   $p = Join-Path $_.FullName "sdk-pkg.json"; if (Test-Path $p) { $j = Get-Content $p -Raw -ErrorAction SilentlyContinue
>>   | Out-String; $api = ($j -split '"apiVersion"')[1] -split '[^0-9]' | Where-Object { $_ -ne '' } | Select-Object
>>   -First 1; Write-Output ("{0}  api={1}" -f $_.Name,$api) } else { Write-Output ("{0} (无 sdk-pkg.json)" -f $_.Name) }
>>   } } else { Write-Output "SDK 目录不存在: $b" }
所在位置 行:3 字符: 3
+   | Out-String; $api = ($j -split '"apiVersion"')[1] -split '[^0-9]'  ...
+   ~
不允许使用空管道元素。
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : EmptyPipeElement
