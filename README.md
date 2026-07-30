 hdc -t 5JV0226127000574 shell '/data/local/tmp/webkit/d8 -e "print(1+1)"; echo exitcode:$?'
  - 不崩（打出 2）→ 引擎本体是好的，锅在前置/prelude，看第 2 步。
  - 同样 SEGV → 锅在 d8 二进制本身或依赖环境，跳到第 4、5 步。

  2) 只跑 prelude：
  hdc -t 5JV0226127000574 shell '/data/local/tmp/webkit/d8 /data/local/tmp/webkit/webkit/resources/standalone-pre.js;
  echo exitcode:$?'
  - 崩 → standalone-pre.js 命中了引擎不支持的特性（很可能就是它）。
  - 不崩 → prelude 无辜，问题在 --test 模式或加载第二个文件的流程。

  3) 一个最简单用例、不带 prelude、不带 flag：
  hdc -t 5JV0226127000574 shell '/data/local/tmp/webkit/d8 /data/local/tmp/webkit/webkit/slash-lineterminator-parse.js;
  echo exitcode:$?'
  单独跑还能定位是"用例本身"还是"前置叠加"触发的。

  4) 抓完整栈——现在日志里只有 [end of stack trace]，中间的真实栈帧被吞了。 直接抓完整 stderr：
  hdc -t 5JV0226127000574 shell '/data/local/tmp/webkit/d8 --test --ignore-unhandled-promises
  /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/avl-crash.js 2>&1; echo
  exitcode:$?'
  把这段完整输出贴回来，基本就能判断是 JIT/exc 内存、还是某个具体函数。这步最关键，现在的日志信息量不够。

  5) 核对架构和依赖（怀疑二进制和设备不匹配）：
  hdc -t 5JV0226127000574 shell 'uname -m; ls -la --full-time /data/local/tmp/webkit/d8; ldd /data/local/tmp/webkit/d8
  2>&1 || echo no-ldd'
  重点看：uname -m 与 d8 的目标架构是否一致；d8 是不是今天刚推的新包（对比构建时间）；有没有缺 .so。HarmonyOS
  上经常出现"换了个新编译的 d8 但漏推了某个运行库 / 架构对不上"导致全量崩。
