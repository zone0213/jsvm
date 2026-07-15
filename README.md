# jsvm
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -LocalPort 22 -Action Allow

Get-Content "C:\ProgramData\ssh\sshd_config" | Select-Object -Last 5
