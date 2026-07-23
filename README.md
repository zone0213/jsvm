# 检查 safari 清单（原本应该报 FAIL 的那个最长路径）
grep "miscellaneous_String.prototype_case_methods_Unicode_support" safari/testlist

# 检查 mjsunit 清单（随机挑一个之前报错的）
grep "wasm/type-reflection.js" mjsunit/testlist

