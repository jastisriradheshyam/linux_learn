# SSH

- `ssh-copy-id user@ip`: copy the user key to remote user and ssh will be password less.
- `ssh -T domain.com` : used to test the auth. without have interactive shell example: `ssh -T git@github.com`

## Config

- File resides at
  - `~/.ssh/config`

- Sample config:

```
Host just_a_name_to_host
     HostName domian_name_or_IP
     User username
     Port port_number_if_not_22
     IdentityFile path_to_the_identity_file_if_exists
```

## Security Harding
- PermitRootLogin: no; PasswordAuthentication: no; ChallengeResponseAuthentication: no; UsePAM: yes; AllowUsers: Necessary user only; AllowGroups: Necessary group only.
    - TODO: has to detail out the config

## References:

[1] : [OpenSSH Config File Examples - nixCraft](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
[2] : [tty - What is the benefit of not allocating a terminal in ssh? - Server Fault](https://stackoverflow.com/questions/17900760/what-is-pseudo-tty-allocation-ssh-and-github)
