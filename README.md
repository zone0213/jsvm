 第 2 步:用 DevEco 处理签名(必做,不然编不过)

  1. DevEco Studio 打开 D:\api26\jsvm_hap_runner
  2. File → Project Structure → Signing Configs → 勾 "Automatically generate signature" → 保存

  (因为 build-profile.json5 里写的是我这台电脑的证书路径,你那台没有,必须重配。)

  第 3 步:命令行编译+签名

  $env:DEVECO_SDK_HOME = "C:\Program Files\Huawei\DevEco Studio\sdk"
  $env:JAVA_HOME = "C:\Program Files\Huawei\DevEco Studio\jbr"
  $env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

  cd "D:\api26\jsvm_hap_runner"

  & "C:\Program Files\Huawei\DevEco Studio\tools\hvigor\bin\hvigorw.bat" `
      assembleHap --mode module -p product=default -p buildMode=debug --no-daemon
  成功显示 BUILD SUCCESSFUL,产物在:
  D:\api26\jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap

  第 4 步:装到 API26 手机并启动

  $hdc = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains\hdc.exe"

  & $hdc list targets
  & $hdc install -r "D:\api26\jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap"
  & $hdc shell "aa start -a EntryAbility -b com.example.jsvm"
  打开 App,首页往下滚,能看到两个新按钮:
  - 橙色 "ThresholdCallback: 堆快照+阈值回调"
  - 青色 "ExternalArrayBuffer: 外部内存建AB"

  第 5 步:点按钮看结果

  threshold-callback(橙色)——详情文本应出现:
  Set heap threshold callback success
  == Heap threshold reached ==
  Threshold: 1048576 bytes
  Heap management test: SUCCESS

  external-arraybuffer(青色)——详情文本应出现:
  JSVM CreateArrayBufferFromExternalMemory: success, byteLength=16

  两篇都出现上面标志 = ✅ 跑通。
