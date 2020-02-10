# Swap

- Swap is a **space on a disk** that is used when the amount of **physical RAM memory is full**. When a Linux system runs out of RAM, inactive pages are moved from the RAM to the swap space.

## Swappiness
- The `swappiness` parameter controls the tendency of the kernel to move processes out of physical memory and onto the swap disk. Because disks are much slower than RAM, this can lead to slower response times for system and applications if processes are too aggressively moved out of memory.
- `swappiness` can have a value of between **0 and 100**
- `swappiness=0` tells the kernel to avoid swapping processes out of physical memory for as long as possible. *(In Kernel version 3.5+, with `swappingness=0` will off the swap, so 1 is the lowest value to have swap running)*
- `swappiness=100` tells the kernel to aggressively swap processes out of physical memory and move them to swap cache
- `swappiness=10` is **recommended**

### View swappiness value
- `cat /proc/sys/vm/swappiness`

### Change swappiness temporarily
- `sudo swapoff --all`
- `sudo sysctl vm.swappiness=0`
- `sudo swapon --all`

### Change swappiness permanently
- `sudo vi /etc/sysctl.conf`
- add (if not available) or edit the line to: `vm.swappiness = 0`
- Restart: `sudo shutdown -r now` or `sudo init 6`

## Clearing Swap to RAM
- By stopping swap all the swap memory (pages) are moved back to the memory (RAM): `sudo swapoff -a`
- By changing Swap state to on, Swap will start with empty space: `sudo swapon -a`

## References:

- [SwapFaq - Community Help Wiki --> What is swappiness and how do I change it?](https://help.ubuntu.com/community/SwapFaq#What_is_swappiness_and_how_do_I_change_it.3F) (Feb 2020)
- [performance - How to empty swap if there is free RAM? - Ask Ubuntu](https://askubuntu.com/a/149427) (Feb 2020)
