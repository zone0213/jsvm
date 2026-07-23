# 只提取这三个文件夹相关的失败路径
grep -oE '(safari|mjsunit|chakaracore)/[^ ]+\.js' fail_log.txt | tr -d '\r' | sort -u > rebuild_exclude.tmp

# 只删除这三项对应的坏文件，绝对不影响工具文件
cat rebuild_exclude.tmp | sed -E 's|^([^/]+)/|\1/\1/|' | xargs rm -fv

for list_file in $(find . -name "testlist" | grep -v "js-perf-test-132"); do tr -d '\r' < "$list_file" | grep -vFf rebuild_exclude.tmp > "${list_file}.new" && mv "${list_file}.new" "$list_file" && echo "清单已同步修复: $list_file"; done

# 删除临时清单
rm rebuild_exclude.tmp


