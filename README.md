 grep -rnE "class .*(SSH|Shell|Ssh)|def __init__|def execute_command|def
  hdc_shell|paramiko|SSHClient|connect\(|hostname|\.host|host *[:=]|port *[:=]|username"
  ~/OpenHarmony_ArkTS_Test/Public/scripts/*.py 2>/dev/null | head -60
