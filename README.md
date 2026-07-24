$env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"; hdc shell "uitest
  dumpLayout -p /data/local/tmp/layout.json -b com.example.jsvm"; hdc file recv /data/local/tmp/layout.json
  "D:\api26\layout.json"


Select-String -Path "D:\api26\layout.json" -Pattern "ThresholdCallback|ExternalArrayBuffer|堆快照|外部内存"
