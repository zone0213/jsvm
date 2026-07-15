# jsvm
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -LocalPort 22 -Action Allow


$path = "C:\ProgramData\ssh\sshd_config"
$content = Get-Content $path
# 只要行内包含 AuthorizedKeysFile 和 PROGRAMDATA，就在行首加 #
$content = $content -replace '^([^#].*AuthorizedKeysFile __PROGRAMDATA__.*)', '#$1'
Set-Content -Path $path -Value $content -Encoding UTF8

# 再次验证
Get-Content $path | Select-Object -Last 5
