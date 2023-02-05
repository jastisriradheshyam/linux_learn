# Rootless Containers

- Achieved using user namespaces
  - user namespaces are unique for each user which helps user to keep their processes within that namespace
- UID mapping allows the user to carry out tasks as a pseudo-root user within their own namespace

## user namespaces information
- Listing max user namespaces: `sysctl -ar max_user_namespaces`
- list the user namespaces:
  - `cat /etc/subuid /etc/subgid`
    - output will be in following format:
      - `USERNAME:STARTING_USER_UI_OR_GROUP_ID:NUMBER_OF_USER_UI_OR_GROUP_ID_ALLOTTED `

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


## Running podman rootless with volume configuration

- `chcon -t container_file_t DIRECTORY_PATH`
- `podman unshare chown USER_ID:GROUP_ID DIRECTORY_PATH`
  - example: `podman unshare chown 27:27 DIRECTORY_PATH`

- Additional command
  - `podman unshare id`