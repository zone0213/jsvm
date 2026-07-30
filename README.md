hdc shell "chmod -R 777 /data/local/tmp/webkit"

hdc shell "export LD_LIBRARY_PATH=/data/local/tmp/webkit && /data/local/tmp/webkit/d8 -e 'print(1+1)'"


find ~/ -name "hdc" -type f

# 假设搜出来的路径是 /home/gonglingwen/toolchain/hdc
/home/gonglingwen/toolchain/hdc -t 5JV0226127000574 shell "export LD_LIBRARY_PATH=/data/local/tmp/webkit && /data/local/tmp/webkit/d8 -e 'print(1+1)'"

# 还是假设你的 hdc 在 /home/gonglingwen/toolchain/hdc
sudo cp /home/gonglingwen/toolchain/hdc /usr/local/bin/
