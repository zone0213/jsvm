grep -oE '(safari|mjsunit|chakaracore|js-perf-test-132)/[^ ]+\.js' fail_logs.txt | sort -u > to_exclude.tmp && for list_file in $(find . -name "testlist"); do grep -vFf to_exclude.tmp "$list_file" > "${list_file}.new" && mv "${list_file}.new" "$list_file" && echo "已清理: $list_file"; done && rm to_exclude.tmp

grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist
