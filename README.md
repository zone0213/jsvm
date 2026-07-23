grep -oE '(safari|mjsunit|chakaracore|js-perf-test-132)/[^ ]+\.js' fail_logs.txt | tr -d '\r' | sort -u > clean_exclude.tmp

for list_file in $(find . -name "testlist"); do
    echo "正在清理清单: $list_file"
    # 1. 先把 testlist 里的 ^M 换行符删掉
    # 2. 然后根据干净的清单进行排除
    tr -d '\r' < "$list_file" | grep -vFf clean_exclude.tmp > "${list_file}.new"
    mv "${list_file}.new" "$list_file"
done

rm clean_exclude.tmp

grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist

