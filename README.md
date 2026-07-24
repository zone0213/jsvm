 $env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"; hdc install -r
  "D:\api26\jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap"

   $env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"; hdc shell "aa start
  -a EntryAbility -b com.example.jsvm"
