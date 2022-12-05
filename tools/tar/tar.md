# tar

## .tar
- compress a folder or file: `tar -vcf archive_file_name.tar file_or_folder_to_compress_name`
- extract tar file: `tar -vxf archive_file_name.tar`
- test tar file: `tar -tvf archive_file_name.tar`
---

## .tar.gz
- compress a folder or file: `tar -vczf archive_file_name.tar.gz file_or_folder_to_compress_name`
- extract tar file: `tar -vxzf archive_file_name.tar.gz`
- test tar file: `tar -tvf archive_file_name.tar.gz`

---
## .tar.bz2
- compress a folder or file: `tar -vcjf archive_file_name.tar.bz2 file_or_folder_to_compress_name`
- extract tar file: `tar -vxjf archive_file_name.tar.bz2`
- teist tar file: `tar -tvf archive_file_name.tar.bz2`

---

## .tar.xz
- compress a folder or file: `tar -vcJf archive_file_name.tar.xz file_or_folder_to_compress_name`
- extract tar file: `tar -vxJf archive_file_name.tar.xz`
- test tar file: `tar -tvf archive_file_name.tar.xz`
- `xz` signifies use of `LZMA2` compression algorithm


## Compression

- gzip, bzip2, xz
  - gzip is the fastest method to compress files
    - `gzip` to compress (also can be used to un-compress) and `gunzip` to un-compress, extension: `.gz`
    - with tar use cli argument `z`
  - bzip2 is better than gzip, provides smaller compressed file than gzip
    - `bzip2` to compress and `bunzip2` to un-compress, extension: `.bz2`
    - with tar use cli argument `j`
  - xz higher compression than gzip and bzip2 but takes large amount of time to compress.
    - `xz` to compress and `xz -d` to un-compress, extension: `.xz`
    - with tar use cli argument `J`

## References

- https://unix.stackexchange.com/questions/301587/why-should-i-use-tar-xz-instead-of-tar-gz-xz-is-a-lossless-data-compression-pro