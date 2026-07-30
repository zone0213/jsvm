
gonglingwen@ubuntu:~/arkts$ bash test.sh main.js
es2abc main.js --extension=js --module --merge-abc --output main.abc
ark_js_vm --entry-point=main main.abc
解释器结果:
fuzz-case-done

real    0m30.046s
user    0m44.104s
sys     0m0.633s
