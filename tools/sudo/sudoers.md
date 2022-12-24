# sudoers file
- sudo without password and permission to access particular executable: `username ALL=(root) NOPASSWD: /path/to/the/executable, /another/path/to/the/executable, ...`\
- Logs : `/var/log/secure`
  - search for sudo command usage: `egrep "sudo" /var/log/secure`
- add user to wheel group to give user access to all commands
  - `usermod -aG wheel USERNAME`