$env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"; hdc shell "bm dump
  -n com.example.jsvm" 2>$null | Select-String "versionName|codePath|hapPath"

 Select-String -Path "D:\api26\jsvm_hap_runner\entry\src\main\ets\pages\Index.ets" -Pattern
  "ThresholdCallback|ExternalArrayBuffer|runThresholdCallback|runExternalArrayBuffer"  
