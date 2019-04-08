# inode

"An inode is a data structure on a filesystem on Linux and other Unix-like operating systems that stores all the information about a file except its name and its actual data." [1]

- "A **directory** (referred to as a **folder** on some operating systems) in **Unix-like operating systems** is merely a **special type of file that associates file names with a collection of inodes**." [1]

- "When a file is created, it is assigned both a name and an inode number, which is an integer that is unique within the filesystem. Both the file names and their corresponding inode numbers are stored as entries in the directory that appears to the user to contain the files. That is, the directory associates file names with inodes." [1]

inode metadata includes [1]: 
1. the size of the file (in bytes) and its physical location (i.e., the addresses of the blocks of storage containing the file's data on a HDD),
2. the file's owner and group,
3. the file's access permissions (i.e., which users are permitted to read, write and/or execute the file),
4. timestamps telling when the inode was created, last modified and last accessed and
5. a reference count telling how many hard links point to the inode.

- **Space for inodes** must be set **aside** when an **operating system** (or a new filesystem) is installed and that system does its **initial structuring** of the **filesystem**. Within any **filesystem**, the **maximum number of inodes**, and hence the maximum number of files, is set when the **filesystem** is created. [1]

- When parts of the inode are lost, they appear in the lost+found directory within the partition in which they once existed. [1]

- The operating system obtains a file's inode number and information in the inode through the use of the system call named stat.

## inode setup

- **Space** for inodes must be set aside when an **operating system (or a new filesystem)** is **installed** and that system does its initial structuring of the filesystem.
- Within any filesystem, the **maximum number of inodes**, and hence the **maximum number of files**, is set when the filesystem is created.
- There are two ways in which a filesystem can run out of space:
    - it can consume all the space for adding new data (i.e., to existing files or to new files), 
    - or it can use up all the inodes.
- It is particularly easy to **run out of inodes** if a filesystem contains a **very large number of very small files**. A typical system, however, runs out of file space first, because the average file size on most system is larger than two kilobytes.
- The default setting creates an inode for every 2K bytes contained in the filesystem, but the number can be adjusted by the user when creating the filesystem.

## inode inspection

- A file's inode number can easily be found by using the `ls` command:
    - `ls -i`
- inodes on each filesystem can be viewed by using `df` command:
    - `df -hi`

### **References**:
[1] : [Inode definition by The Linux Information Project (LINFO)](http://www.linfo.org/inode.html)