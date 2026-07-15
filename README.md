# jsvm
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -LocalPort 22 -Action Allow

# 1. 修复 .ssh 目录权限
icacls "C:\Users\g50060069\.ssh" /inheritance:r
icacls "C:\Users\g50060069\.ssh" /grant:r "g50060069:(OI)(CI)F"
icacls "C:\Users\g50060069\.ssh" /grant:r "SYSTEM:(OI)(CI)F"

# 2. 修复 authorized_keys 文件权限
$path = "C:\Users\g50060069\.ssh\authorized_keys"
icacls $path /reset
icacls $path /inheritance:r
icacls $path /grant:r "g50060069:F"
icacls $path /grant:r "SYSTEM:F"
