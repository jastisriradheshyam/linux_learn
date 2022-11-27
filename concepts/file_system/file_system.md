# file system

- user binaries: `/bin`
- system binaries: `/sbin`
- configuration files: `/etc`
- process information: `/proc`
- device files: `/dev`
- temporary files: `/tmp`
    - generally files older (that are not touched) than 10 days are deleted
    - on reboot all files are deleted in this directory
- user system resources (user programs): `/usr`
    - `bin`
    - `local`
    - `sbin`
    - `tmp` : generally not present on newer distributions
- optional files: `/opt`
- home: `/home`
- mount directory: `/mnt`
- mount point for removable devices: `/media`
- boot: `/boot`
- variable files: `/var`
    - `tmp` : generally files older (that are not touched) than 30 days are deleted
        - on reboot all files are deleted in this directory
- root home: `/root`
- library: `/lib`
- data for services provided by the system (why?): `/srv`
- contains data used at runtime and `tmpfs` filesystem: `/run`

## Space

- There are two ways in which a filesystem can run out of space:
    - it can consume all the space for adding new data (i.e., to existing files or to new files),
    - or it can use up all the inodes.[1]

### **References**:
[1] : [Inode definition by The Linux Information Project (LINFO)](http://www.linfo.org/inode.html)