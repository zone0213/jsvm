grep -oE '(safari|mjsunit|chakaracore|js-perf-test-132)/[^ ]+\.js' fail_log.txt | tr -d '\r' | sort -u > clean_exclude.tmp

wc -l clean_exclude.tmp

for list_file in $(find . -name "testlist"); do tr -d '\r' < "$list_file" | grep -vFf clean_exclude.tmp > "${list_file}.new" && mv "${list_file}.new" "$list_file" && echo "清理成功: $list_file"; done

grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist

python run.py --suitename=js-perf-test-132 --mode=release --platform=phone --ssh-ip 10.174.176.201 --ssh-user g50060069 --sn 5JV0226127000574 --d8=/home/gonglingwen/d8phoneBase/d8 --enable_cpltp --xflags="--test"
