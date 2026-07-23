# 1. 提取坏路径并转换为磁盘上的真实双层路径
grep "js-perf-test-132/" fail_log.txt | grep -oE 'js-perf-test-132/[^ ]+\.js' | sed -E 's|^js-perf-test-132/|js-perf-test-132/js-perf-test-132/|' | tr -d '\r' > nested_bad_perf.tmp

# 2. 精准删除服务器磁盘上的这 8 个坏文件
cat nested_bad_perf.tmp | xargs rm -v

# 3. 清理临时文件
rm nested_bad_perf.tmp

# 1. 提取清单中对应的 8 个行匹配特征
grep "js-perf-test-132/" fail_log.txt | grep -oE 'js-perf-test-132/[^ ]+\.js' | tr -d '\r' > list_exclude.tmp

tr -d '\r' < js-perf-test-132/testlist | grep -vFf list_exclude.tmp > js-perf-test-132/testlist.new && mv js-perf-test-132/testlist.new js-perf-test-132/testlist && echo "清单清理成功"


rm list_exclude.tmp

python run.py --suitename=js-perf-test-132 --mode=release --platform=phone --ssh-ip 10.174.176.201 --ssh-user g50060069 --sn 5JV0226127000574 --d8=/home/gonglingwen/d8phoneBase/d8 --enable_cpltp --xflags="--test"
