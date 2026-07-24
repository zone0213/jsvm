$env:DEVECO_SDK_HOME = "C:\Program Files\Huawei\DevEco Studio\sdk"
  $env:JAVA_HOME = "C:\Program Files\Huawei\DevEco Studio\jbr"
  $env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
  cd "D:\api26\jsvm_hap_runner"
  & "C:\Program Files\Huawei\DevEco Studio\tools\hvigor\bin\hvigorw.bat" clean --no-daemon
  & "C:\Program Files\Huawei\DevEco Studio\tools\hvigor\bin\hvigorw.bat" assembleHap --mode module -p product=default
  -p buildMode=debug --no-daemon

   $env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"
  hdc uninstall com.example.jsvm
  hdc install -r "D:\api26\jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap"
  hdc shell "aa start -a EntryAbility -b com.example.jsvm"
