@("C:\Program Files\Huawei\DevEco Studio","D:\Program Files\Huawei\DevEco Studio","C:\Program
  Files\Huawei","D:\Program Files\Huawei") | ForEach-Object { if (Test-Path $_) { Write-Output "存在: $_" } }
