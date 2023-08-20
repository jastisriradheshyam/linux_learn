# SSH Port Forwarding (Tunneling)

- Local port forwarding ()
  - In this case a port is already present that we want to access from the local, so a port is created on local and mapped to remote port on remote machine
  - `-L` is used to signify this behavior
  - Example:
    - `ssh -fN -L [LOCAL_IP_TO_LISTEN:]LOCAL_PORT:DESTINATION:DESTINATION_PORT USER@HOST`

- Remote port forwarding
  - In this case we already have local port present and we want to forward it to remote machine, so a port is created on remote machine and mapped to local port on local machine
  - `-R` is used to signify this behavior
  - Example:
    - `ssh -fN -L [REMOTE_IP_TO_BIND:]REMOTE_PORT:DESTINATION:DESTINATION_PORT USER@HOST`

- Dynamic port forwarding

## Other key flags

- `-f` : Requests ssh to go to background just before command execution.
- `-N` : Do not execute a remote command.  This is useful for just forwarding ports.

## References:

[1]: [How to Set up SSH Tunneling (Port Forwarding) | Linuxize](https://linuxize.com/post/how-to-setup-ssh-tunneling/)
[2]: ssh man page
[3]: [linux - SSH Tunnel (Port forwarding) in background - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/685268/ssh-tunnel-port-forwarding-in-background)