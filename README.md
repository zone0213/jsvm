# jsvm
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -LocalPort 22 -Action Allow
gonglingwen@ubuntu:~$ ssh -v g50060069@10.174.176.201
OpenSSH_8.9p1 Ubuntu-3ubuntu0.15, OpenSSL 3.0.2 15 Mar 2022
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: include /etc/ssh/ssh_config.d/*.conf matched no files
debug1: /etc/ssh/ssh_config line 21: Applying options for *
debug1: Connecting to 10.174.176.201 [10.174.176.201] port 22.
debug1: Connection established.
debug1: identity file /home/gonglingwen/.ssh/id_rsa type 0
debug1: identity file /home/gonglingwen/.ssh/id_rsa-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_ecdsa type -1
debug1: identity file /home/gonglingwen/.ssh/id_ecdsa-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_ecdsa_sk type -1
debug1: identity file /home/gonglingwen/.ssh/id_ecdsa_sk-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_ed25519 type -1
debug1: identity file /home/gonglingwen/.ssh/id_ed25519-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_ed25519_sk type -1
debug1: identity file /home/gonglingwen/.ssh/id_ed25519_sk-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_xmss type -1
debug1: identity file /home/gonglingwen/.ssh/id_xmss-cert type -1
debug1: identity file /home/gonglingwen/.ssh/id_dsa type -1
debug1: identity file /home/gonglingwen/.ssh/id_dsa-cert type -1
debug1: Local version string SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.15
debug1: Remote protocol version 2.0, remote software version OpenSSH_for_Windows_9.8 Win32-OpenSSH-GitHub
debug1: compat_banner: match: OpenSSH_for_Windows_9.8 Win32-OpenSSH-GitHub pat OpenSSH* compat 0x04000000
debug1: Authenticating to 10.174.176.201:22 as 'g50060069'
debug1: load_hostkeys: fopen /home/gonglingwen/.ssh/known_hosts2: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts2: No such file or directory
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: algorithm: curve25519-sha256
debug1: kex: host key algorithm: ssh-ed25519
debug1: kex: server->client cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug1: kex: client->server cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: SSH2_MSG_KEX_ECDH_REPLY received
debug1: Server host key: ssh-ed25519 SHA256:/Zd1fnyNbYs30cLkcrg9QvX5uXOy094mydWFdk6kxOA
debug1: load_hostkeys: fopen /home/gonglingwen/.ssh/known_hosts2: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts: No such file or directory
debug1: load_hostkeys: fopen /etc/ssh/ssh_known_hosts2: No such file or directory
debug1: Host '10.174.176.201' is known and matches the ED25519 host key.
debug1: Found key in /home/gonglingwen/.ssh/known_hosts:1
debug1: ssh_packet_send2_wrapped: resetting send seqnr 3
debug1: rekey out after 134217728 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: ssh_packet_read_poll2: resetting read seqnr 3
debug1: SSH2_MSG_NEWKEYS received
debug1: rekey in after 134217728 blocks
debug1: Will attempt key: /home/gonglingwen/.ssh/id_rsa RSA SHA256:kugY3K/KV+/BF6Y5yLTD76re4Gp1lvfwkKvGZJExn+Y
debug1: Will attempt key: /home/gonglingwen/.ssh/id_ecdsa 
debug1: Will attempt key: /home/gonglingwen/.ssh/id_ecdsa_sk 
debug1: Will attempt key: /home/gonglingwen/.ssh/id_ed25519 
debug1: Will attempt key: /home/gonglingwen/.ssh/id_ed25519_sk 
debug1: Will attempt key: /home/gonglingwen/.ssh/id_xmss 
debug1: Will attempt key: /home/gonglingwen/.ssh/id_dsa 
debug1: SSH2_MSG_EXT_INFO received
debug1: kex_input_ext_info: server-sig-algs=<ssh-ed25519,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,sk-ssh-ed25519@openssh.com,sk-ecdsa-sha2-nistp256@openssh.com,rsa-sha2-512,rsa-sha2-256>
debug1: kex_input_ext_info: publickey-hostbound@openssh.com=<0>
debug1: kex_input_ext_info: ping@openssh.com (unrecognised)
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey,password,keyboard-interactive
debug1: Next authentication method: publickey
debug1: Offering public key: /home/gonglingwen/.ssh/id_rsa RSA SHA256:kugY3K/KV+/BF6Y5yLTD76re4Gp1lvfwkKvGZJExn+Y
debug1: Authentications that can continue: publickey,password,keyboard-interactive
debug1: Trying private key: /home/gonglingwen/.ssh/id_ecdsa
debug1: Trying private key: /home/gonglingwen/.ssh/id_ecdsa_sk
debug1: Trying private key: /home/gonglingwen/.ssh/id_ed25519
debug1: Trying private key: /home/gonglingwen/.ssh/id_ed25519_sk
debug1: Trying private key: /home/gonglingwen/.ssh/id_xmss
debug1: Trying private key: /home/gonglingwen/.ssh/id_dsa
debug1: Next authentication method: keyboard-interactive
debug1: Authentications that can continue: publickey,password,keyboard-interactive
debug1: Next authentication method: password
