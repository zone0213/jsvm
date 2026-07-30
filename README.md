hdc -t 5JV0226127000574 shell "export LD_LIBRARY_PATH=/data/local/tmp/webkit && /data/local/tmp/webkit/d8 -e 'print(1+1)'"
hdc -t 5JV0226127000574 shell "ldd /data/local/tmp/webkit/d8"
