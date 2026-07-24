PS D:\api26\jsvm_hap_runner> $env:PATH = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains;$env:PATH"; hdc shell "bm dump -n com.example.jsvm" 2>$null | Select-String "versionName|codePath|hapPath"

                "versionName": ""
                "versionName": ""
            "versionName": ""
        "codePath": "/data/app/el1/bundle/public/com.example.jsvm",
        "versionName": "1.0.0"
                    "codePath": "",
                    "hapPath": "/data/app/el1/bundle/public/com.example.jsvm/entry.hap",
            "hapPath": "/data/app/el1/bundle/public/com.example.jsvm/entry.hap",
    "versionName": "1.0.0"


PS D:\api26\jsvm_hap_runner> Select-String -Path "D:\api26\jsvm_hap_runner\entry\src\main\ets\pages\Index.ets" -Pattern "ThresholdCallback|ExternalArrayBuffer|runThresholdCallback|runExternalArrayBuffer"

entry\src\main\ets\pages\Index.ets:1:import { runProfilerSnapshot, runDebugOption, runArrayBufferTests, runCodeCacheTes
t, runTriggerGcTest, runWasmTest, runThresholdCallbackTest, runExternalArrayBufferTest } from 'libentry.so';
entry\src\main\ets\pages\Index.ets:142:  // use-jsvm-threshold-callback.md：TakeRawHeapSnapshot + Set/ClearHeapThreshol
dCallback（API26）
entry\src\main\ets\pages\Index.ets:143:  private runThresholdCallback(): void {
entry\src\main\ets\pages\Index.ets:150:      const output: string = runThresholdCallbackTest();
entry\src\main\ets\pages\Index.ets:151:      this.status = 'ThresholdCallback: Done';
entry\src\main\ets\pages\Index.ets:162:  private runExternalArrayBuffer(): void {
entry\src\main\ets\pages\Index.ets:169:      const output: string = runExternalArrayBufferTest();
entry\src\main\ets\pages\Index.ets:170:      this.status = 'ExternalArrayBuffer: Done';
entry\src\main\ets\pages\Index.ets:287:          Button('ThresholdCallback: 堆快照+阈值回调')
entry\src\main\ets\pages\Index.ets:293:              this.runThresholdCallback();
entry\src\main\ets\pages\Index.ets:301:          Button('ExternalArrayBuffer: 外部内存建AB')
entry\src\main\ets\pages\Index.ets:307:              this.runExternalArrayBuffer();
