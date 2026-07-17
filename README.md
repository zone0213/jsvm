# jsvm

# --platform 指定 Linux 平台
# --only-binary=:all: 确保下载的是编译好的二进制包
# --python-version 310 (如果你 Linux 上的 python3 -V 显示是 3.8.x，这里就改写 38)
# --implementation cp (代表 CPython)

pip download json5 `
    --platform manylinux2014_x86_64 `
    --only-binary=:all: `
    --python-version 310 `
    --implementation cp `
    -d D:\pip_offline
