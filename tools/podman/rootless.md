# Rootless Containers

## Rootless Requirements

- Podman 1.6.4 or newer
  - Ideally Podman 2.x +
- `slirp4netns`
- Increase number of user namespaces
  - ```sh
      echo "user.max_user_namespaces=28633" > /etc/sysctl.d/userns.conf
      sysclt -p /etc/sysctl.d/userns.conf
    ```
- Additional subordinate SUBUID / SUBGID entries
  - Only required if using "system" users
  - `cat /etc/subuid /etc/subgid`
    - `touch /etc/subuid /etc/subgid`
    - `chmod 644 /etc/subuid /etc/subgid`
    - `usermod --add-subuids 10000-165535 --add-subgids 10000-165535 USERNAME`
    - Verify at : `/etc/subuid` and `/etc/subgid`