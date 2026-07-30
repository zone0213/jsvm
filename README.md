hdc shell "chmod -R 777 /data/local/tmp/webkit"

hdc shell "export LD_LIBRARY_PATH=/data/local/tmp/webkit && /data/local/tmp/webkit/d8 -e 'print(1+1)'"
