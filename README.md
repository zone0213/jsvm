export PATH=/home/gonglingwen/jit-daily-9-22/x86_bin/dev:$PATH
export LD_LIBRARY_PATH=/home/gonglingwen/jit-daily-9-22/out/icu/dev:/home/gonglingwen/jit-daily-9-22/out/zlib/dev

file=$1
filename=${file%.*}
abc=${filename}.abc
echo "es2abc $file --extension=js --module --merge-abc --output $abc"
es2abc $file --extension=js --module --merge-abc --output $abc

# 解释器
echo "ark_js_vm --entry-point=$filename $abc"
echo "解释器结果:"
time ark_js_vm --entry-point=$filename $abc


gonglingwen@ubuntu:~/arkts$ bash test.sh main.ets
es2abc main.ets --extension=js --module --merge-abc --output main.abc
SyntaxError: Unexpected strict mode reserved keyword [main.ets:1:10]
The size of programs is expected to be 1, but is 0
ark_js_vm --entry-point=main main.abc
解释器结果:
hello

real    0m0.038s
user    0m0.019s
sys     0m0.020s
gonglingwen@ubuntu:~/arkts$ bash test.sh main.js
es2abc main.js --extension=js --module --merge-abc --output main.abc
ark_js_vm --entry-point=main main.abc
解释器结果:

real    0m0.039s
user    0m0.030s
sys     0m0.010s
