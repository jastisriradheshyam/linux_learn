# df (disk free)

- `df -k PATH` : prints the filesystem disk space that the specified path resides
  - e.g. `df -k /` -> `/dev/nvme0n1p7  196G  100G   87G  54% /`
  - e.g. `df -k /etc` -> `/dev/nvme0n1p7  196G  100G   87G  54% /`
    - NOTE: result will be different if `/etc` is mounted on separate filesystem

## References & internal citations

- [inode](../../concepts/file_system/inode.md)