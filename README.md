# 1. 先在 Linux 上建一个临时存放包的目录
ssh gonglingwen@10.174.176.201 "mkdir -p ~/packages"

# 2. 把 D:\pip_offline 下的所有文件（包括 whl 和 requirements.txt）传过去
scp D:\pip_offline\* gonglingwen@10.174.176.201:~/packages/


# 1. 进入存放包的目录
cd ~/packages

# 2. 批量安装所有包
# --no-index: 告诉 pip 不要连外网去下载
# --find-links=.: 告诉 pip 在当前目录下找安装包文件
# -r requirements.txt: 按照清单安装（这会自动处理依赖顺序）
pip3 install --no-index --find-links=. -r requirements.txt
