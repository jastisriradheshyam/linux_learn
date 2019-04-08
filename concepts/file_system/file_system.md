# file system

- user binaries: `/bin`
- system binaries: `/sbin`
- configuration files: `/etc`
- process information: `/proc`
- device files: `/dev`
- temporary files: `/tmp`
- user system resources (user programs): `/usr`
- optional files: `/opt`
- home: `/home`
- mount directory: `/mnt`
- mount point for removable devices: `/media`
- boot: `/boot`
- variable files: `/var`
- root home: `/root`
- library: `/lib`
- data for services provieded by the system (why?): `/srv`

## Space

- There are two ways in which a filesystem can run out of space:
    - it can consume all the space for adding new data (i.e., to existing files or to new files),
    - or it can use up all the inodes.[1]

### **References**:
[1] : [Inode definition by The Linux Information Project (LINFO)](http://www.linfo.org/inode.html)