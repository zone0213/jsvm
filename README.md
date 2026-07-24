两条路线,选一条

  路线 A:直接装预编译包(最快,3 条命令)

  $hdc = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains\hdc.exe"

  & $hdc list targets                                              # 确认手机连上
  & $hdc install -r "D:\wasm\jsvm-wasm-hap-dist\hap\entry-default-signed.hap"   # 装包
  & $hdc shell "aa start -a EntryAbility -b com.example.jsvm"      # 启动
  打开 App,点紫色按钮 "Wasm: 编译/实例化/cache"。

  ⚠️ 注意:这个包是我机器的 debug 证书签的,跨机常装不上。装不上就走路线 B。

  路线 B:源码重签重编(推荐,能装能改)

  $env:DEVECO_SDK_HOME = "C:\Program Files\Huawei\DevEco Studio\sdk"
  $env:JAVA_HOME = "C:\Program Files\Huawei\DevEco Studio\jbr"
  $env:PATH = "$env:JAVA_HOME\bin;$env:PATH"

  cd "D:\wasm\jsvm-wasm-hap-dist\jsvm_hap_runner"

  & "C:\Program Files\Huawei\DevEco Studio\tools\hvigor\bin\hvigorw.bat" `
      assembleHap --mode module -p product=default -p buildMode=debug --no-daemon
  成功后产物在 jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap,再装跑:
  $hdc = "C:\Program Files\Huawei\DevEco Studio\sdk\default\openharmony\toolchains\hdc.exe"
  & $hdc install -r
  "D:\wasm\jsvm-wasm-hap-dist\jsvm_hap_runner\entry\build\default\outputs\default\entry-default-signed.hap"
  & $hdc shell "aa start -a EntryAbility -b com.example.jsvm"

  路线 B 必做一步:用 DevEco 打开工程 → File → Project Structure → Signing Configs → 勾 "Automatically generate
  signature"。因为源码里 build-profile.json5
  写死了我机器的证书路径(C:\Users\admin\.ohos\config\...),你机器上没这文件,不重配会编失败。

  怎么判断跑没跑通

  点按钮后,抓 hilog:
  & $hdc shell "hilog -x | grep -iE 'CompileWasmModule|wasm|JIT'"
  - 出现 CompileWasmModule status=0、按钮下方显示 add(1,2)=3 → ✅ 跑通(说明那台手机/profile 带 JIT ACL)
  - 出现 Run OH_JSVM_CompileWasmModule failed: ... ACL certificate authorization ... → ❌ 缺 JIT
  权限(普通商用手机基本是这个)

  一个要记住的前提

  wasm 要真跑通,签名 profile 必须带 JIT ACL 权限
  ohos.permission.kernel.ALLOW_EXECUTABLE_FORT_MEMORY。普通调试签名没这个,普通商用手机也没有。所以"合适的手机"对 wasm
  来说 = profile 带 ACL 的手机/工程机,不是指型号新。带 ACL 的申请流程在包里 README 的"如果要带 JIT ACL"那节。

  详细的(含 ACL 申请、常见报错处理)都在 jsvm-wasm-hap-dist\README-在新电脑上怎么操作.md 里。
