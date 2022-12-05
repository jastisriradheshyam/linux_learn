# Links

In `ls` command the number preceding the file owner is the number of links does it have

## Soft links

- The original and the link have different file permissions
- They are just shortcuts

## Hard links

- The original and the link share same file permissions
- Deleting either one of the file (original or link) does not delete the file for other, to completely remove we have to delete both links and original file.
- Both the original file and link file are linked to each other
- Hard links can be created on same file system
- share same inodes