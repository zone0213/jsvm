# 检查各套件中常见的工具文件是否还在
echo "--- 正在检查核心工具文件 ---"
find safari mjsunit chakaracore -name "utils.js" | wc -l
find safari mjsunit chakaracore -name "assert.js" | wc -l
find safari mjsunit chakaracore -name "mjsunit.js" | wc -l
find safari mjsunit chakaracore -name "run.js" | wc -l
