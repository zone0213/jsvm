for list_file in $(find . -name "testlist"); do tr -d '\r' < "$list_file" | grep -vFf clean_exclude.tmp > "${list_file}.new" && mv "${list_file}.new" "$list_file" && echo "清理成功: $list_file"; done
grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist

head -n 5 clean_exclude.tmp 

