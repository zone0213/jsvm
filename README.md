# jsvm
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -LocalPort 22 -Action Allow

Get-Content "C:\ProgramData\ssh\sshd_config" | Select-Object -Last 5
$path = "C:\ProgramData\ssh\sshd_config"
$content = Get-Content $path
$content = $content -replace '^Match Group administrators', '#Match Group administrators'
$content = $content -replace '^\s+AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys', '#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys'
Set-Content -Path $path -Value $content -Encoding UTF8
