# SSH

- `ssh-copy-id user@ip`: copy the user key to remote user and ssh will be password less.

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

## References:

[1] : [OpenSSH Config File Examples - nixCraft](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/)
