 # 1) 找 DevEco 装在哪、SDK 在哪
  $devecoRoots = @("C:\Program Files\Huawei\DevEco Studio","D:\Program Files\Huawei\DevEco Studio","C:\Program
  Files\Huawei")
  foreach ($r in $devecoRoots) { if (Test-Path $r) { Write-Output "DEV ECO ROOT: $r" } }

  # 2) 看 SDK 有几个版本目录、各自 apiVersion
  $sdkBases = @(
    "C:\Program Files\Huawei\DevEco Studio\sdk",
    "$env:LOCALAPPDATA\Huawei\Sdk",
    "D:\Program Files\Huawei\DevEco Studio\sdk"
  )
  foreach ($b in $sdkBases) {
    if (Test-Path $b) {
      Write-Output "=== SDK base: $b ==="
      Get-ChildItem $b -Directory -ErrorAction SilentlyContinue | ForEach-Object {
        $pkg = Join-Path $_.FullName "sdk-pkg.json"
        if (Test-Path $pkg) { $j = Get-Content $pkg -Raw | ConvertFrom-Json; Write-Output ("  {0} -> api {1} ({2})" -f
  $_.Name,$j.data.apiVersion,$j.data.displayName) }
        else { Write-Output ("  {0} (无 sdk-pkg.json)" -f $_.Name) }
      }
    }
  }

  # 3) 直接查 API26 的关键符号在不在头文件里(决定能不能编译那两篇)
  $apis = @("OH_JSVM_TakeRawHeapSnapshot","OH_JSVM_SetHeapThresholdCallback","OH_JSVM_ClearHeapThresholdCallback","OH_J
  SVM_CreateArrayBufferFromExternalMemory")
  $jsvmH = Get-ChildItem -Path "C:\Program Files\Huawei","D:\Program Files\Huawei","$env:LOCALAPPDATA\Huawei" -Recurse
  -Filter "jsvm.h" -ErrorAction SilentlyContinue -Depth 8 | Select-Object -First 5
  Write-Output "=== 找到的 jsvm.h ==="
  $jsvmH | ForEach-Object { Write-Output ("  " + $_.FullName) }
  foreach ($h in $jsvmH) {
    Write-Output "--- 检查 $($h.FullName) ---"
    foreach ($a in $apis) {
      $m = Select-String -Path $h.FullName -Pattern $a -List -ErrorAction SilentlyContinue
      Write-Output ("  {0}: {1}" -f $a,$(if($m){'有'}else{'无'}))
    }
  }
