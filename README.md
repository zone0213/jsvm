2026-07-30 14:19:36 cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/avl-crash.js
2026-07-30 14:19:36 执行远程命令：hdc -t 5JV0226127000574 shell \"cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/avl-crash.js; echo exitcode is: $?\"
2026-07-30 14:19:37 命令输出：
































Received signal 11 SEGV_ACCERR 0020c7e00000
[end of stack trace]
Signal 11 (core dumped)
exitcode is: 139



2026-07-30 14:19:37 cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/dfg-inline-unused-this-method-check.js
2026-07-30 14:19:37 执行远程命令：hdc -t 5JV0226127000574 shell \"cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/dfg-inline-unused-this-method-check.js; echo exitcode is: $?\"
2026-07-30 14:19:37 命令输出：
































Received signal 11 SEGV_ACCERR 003ac7e00000
[end of stack trace]


Signal 11 (core dumped)
exitcode is: 139

2026-07-30 14:19:37 cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/dfg-to-string-side-effect-clobbers-toString.js
2026-07-30 14:19:37 执行远程命令：hdc -t 5JV0226127000574 shell \"cd /data/local/tmp && /data/local/tmp/webkit/d8 --test --ignore-unhandled-promises /data/local/tmp/webkit/webkit/resources/standalone-pre.js /data/local/tmp/webkit/webkit/dfg-to-string-side-effect-clobbers-toString.js; echo exitcode is: $?\"
2026-07-30 14:19:38 命令输出：
































Received signal 11 SEGV_ACCERR 002607e00000
[end of stack trace]


Signal 11 (core dumped)
exitcode is: 139


d8 for phone: /data/local/tmp/webkit/d8
============================= TEST RESULT ============================
  Total 543   Passed 0  Failed 543
======================================================================
webkit/resources/standalone-pre.js webkit/class-syntax-prototype.js FAIL
webkit/resources/standalone-pre.js webkit/dfg-force-exit-then-sparse-conditional-constant-prop-in-loop.js FAIL
webkit/resources/standalone-pre.js webkit/slash-lineterminator-parse.js FAIL
webkit/resources/standalone-pre.js webkit/JSON-stringify-replacer.js FAIL
webkit/resources/standalone-pre.js webkit/dfg-put-by-val-setter-then-get-by-val.js FAIL
webkit/resources/standalone-pre.js webkit/regexp-backreferences.js FAIL
webkit/resources/standalone-pre.js webkit/tostring-exception-in-property-access.js FAIL
webkit/resources/standalone-pre.js webkit/object-literal-syntax.js FAIL
webkit/resources/standalone-pre.js webkit/indexed-setter-on-global-object.js FAIL

ebkit/resources/standalone-pre.js webkit/avl-crash.js FAIL
webkit/resources/standalone-pre.js webkit/dfg-inline-unused-this-method-check.js FAIL
webkit/resources/standalone-pre.js webkit/dfg-to-string-side-effect-clobbers-toString.js FAIL2026-07-30 14:19:38 echo $BUILD_ID
2026-07-30 14:19:38

http://10.50.90.171:8889/cpltp/api/lookboardLog/testcase/api/v1/task/JSVM_FunctionTest-D8-20260730141325-20260730141325/testcases?totalCaseOfPlan=543&passNum=0&failNum=543&blockNum=0&unavaliable=0&investigated=543&subtask=webkit_phone
{"code":"200","msg":"OK","data":"success"}

=================================== NEW FAIL ===================================
New Fail : 543

webkit/resources/standalone-pre.js webkit/class-syntax-prototype.js
webkit/resources/standalone-pre.js webkit/dfg-force-exit-then-sparse-conditional-constant-prop-in-loop.js
webkit/resources/standalone-pre.js webkit/slash-lineterminator-parse.js
webkit/resources/standalone-pre.js webkit/JSON-stringify-replacer.js
webkit/resources/standalone-pre.js webkit/dfg-put-by-val-setter-then-get-by-val.js
webkit/resources/standalone-pre.js webkit/regexp-backreferences.js
webkit/resources/standalone-pre.js webkit/tostring-exception-in-property-access.js
webkit/resources/standalone-pre.js webkit/object-literal-syntax.js
webkit/resources/standalone-pre.js webkit/indexed-setter-on-global-object.js
webkit/resources/standalone-pre.js webkit/dfg-multi-basic-block-structure-clobber.js
webkit/resources/standalone-pre.js webkit/dfg-mul-big-integer-with-small-integer.js
webkit/resources/standalone-pre.js webkit/typeof-codegen-crash.js
webkit/resources/standalone-pre.js webkit/try-catch-try-try-catch-try-finally-return-catch-finally.js
webkit/resources/standalone-pre.js webkit/run-json-stringify.js
webkit/resources/standalone-pre.js webkit/cached-call-uninitialized-arguments.js
webkit/resources/standalone-pre.js webkit/dfg-phantom-get-local.js
webkit/resources/standalone-pre.js webkit/dfg-arrayify-when-prevent-extensions.js
webkit/resources/standalone-pre.js webkit/string-trim.js
webkit/resources/standalone-pre.js webkit/number-parsing-crash.js
webkit/resources/standalone-pre.js webkit/string-index-overflow.js
webkit/resources/standalone-pre.js webkit/array-proto-func-length-getter-except.js
webkit/resources/standalone-pre.js webkit/dfg-to-string-toString-becomes-bad.js
webkit/resources/standalone-pre.js webkit/dfg-holy-put-by-val-interferes-with-get-array-length.js
webkit/resources/standalone-pre.js webkit/reentrant-caching.js
webkit/resources/standalone-pre.js webkit/dfg-array-length-dead.js
webkit/resources/standalone-pre.js webkit/dfg-dead-unreachable-code-with-chain-of-dead-unchecked-nodes.js
webkit/resources/standalone-pre.js webkit/codegen-assign-nontemporary-as-rexp.js
webkit/resources/standalone-pre.js webkit/dfg-resolve-global-polymorphic-non-dictionary.js
webkit/resources/standalone-pre.js webkit/named-function-expression.js
webkit/resources/standalone-pre.js webkit/dfg-compare-final-object-to-final-object-or-other-when-proven-final-object.js
webkit/resources/standalone-pre.js webkit/dfg-uint32-to-number.js
webkit/resources/standalone-pre.js webkit/keywords-and-reserved_words.js
webkit/resources/standalone-pre.js webkit/dfg-peephole-compare-final-object-to-final-object-or-other-when-both-proven-final-object.js
webkit/resources/standalone-pre.js webkit/boxed-double-to-int.js
webkit/resources/standalone-pre.js webkit/dfg-put-by-id-prototype-check.js
webkit/resources/standalone-pre.js webkit/invalid-callframe-during-unwind.js
webkit/resources/standalone-pre.js webkit/regexp-compile-crash.js
webkit/resources/standalone-pre.js webkit/no-semi-insertion-at-end-of-script.js
webkit/resources/standalone-pre.js webkit/dfg-other-branch.js
webkit/resources/standalone-pre.js webkit/for-in-var-scope.js
webkit/resources/standalone-pre.js webkit/dfg-create-inlined-arguments-in-closure-inline.js
webkit/resources/standalone-pre.js webkit/regexp-extended-characters-match.js
webkit/resources/standalone-pre.js webkit/dfg-ensure-non-array-array-storage-on-window.js
webkit/resources/standalone-pre.js webkit/regexp-non-bmp.js
webkit/resources/standalone-pre.js webkit/dfg-to-string-int.js
webkit/resources/standalone-pre.js webkit/statement-list-register-crash.js
webkit/resources/standalone-pre.js webkit/constant-encoding.js
webkit/resources/standalone-pre.js webkit/dfg-uint32-to-number-skip-then-exit.js
webkit/resources/standalone-pre.js webkit/avl-crash.js
webkit/resources/standalone-pre.js webkit/dfg-inline-unused-this-method-check.js
webkit/resources/standalone-pre.js webkit/dfg-to-string-side-effect-clobbers-toString.js
Traceback (most recent call last):
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../CI/CPLTP/result_deal_unify.py", line 176, in <module>
    main()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../CI/CPLTP/result_deal_unify.py", line 145, in main
    main_pipeline()
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../CI/CPLTP/result_deal_unify.py", line 104, in main_pipeline
    write_file(join(report_path, testsuite), 'newfail.list', data)
  File "/home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../CI/CPLTP/result_deal_unify.py", line 140, in write_file
    with open(join(back_report_path, file_name), "w") as f:
FileNotFoundError: [Errno 2] No such file or directory: '/home/gonglingwen/Report/webkit/webkit/newfail.list'

python /home/gonglingwen/OpenHarmony_ArkTS_Test/Public/scripts/../../CI/CPLTP/result_deal_unify.py -r /home/gonglingwen/Report/webkit -t webkit -d 20260730141325 -i JSVM_FunctionTest-D8-20260730141325-20260730141325 -m webkit_phone

