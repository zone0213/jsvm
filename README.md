# 查看清单里的那一行（请观察末尾有没有空格或奇怪字符）
grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist | cat -A

# 查看我们要排除的清单里的那一行
grep "miscellaneous_String.prototype_case_methods_Unicode_support" fail_logs.txt | cat -A


