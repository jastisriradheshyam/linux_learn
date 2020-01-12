# `efibootmgr` - used to edit the efi boot records

- `sudo efibootmgr -v`: list the boot records
- `sudo efibootmgr -o new_list_of_boot_numbers`: used to edit efi boot order
- `sudo efibootmgr -b <bootnum> -B`: delete a boot number (`-b` option specify the boot number. `-B` option delete that boot number.)
- `sudo efibootmgr -b <bootnum> -a`: make boot number active
- `sudo efibootmgr -b <bootnum> -A`: make boot number inactive
- `sudo efibootmgr -c -d /dev/sda -p 1 -L "Linux Boot Manager" -l "\EFI\Boot\BOOTX64.EFI"`:
    - `-c`: create new entry
    - `-d`: disk (here /dev/sda)
    - `-p`: part (partition number on which the EFI System Partition is hosted)
    - `-L`: Label
    - `-l`: Loader name (where the boot menu resides, path of the EFI image to boot)

## References:
- [1]: [Efibootmgr - Gentoo Wiki](https://wiki.gentoo.org/wiki/Efibootmgr)
- [2]: [efibootmgr(8): change EFI Boot Manager - Linux man page](https://linux.die.net/man/8/efibootmgr)