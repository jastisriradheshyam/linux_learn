# journalctl

- Show kernel message log from the current boot: `journalctl --dmesg`
- Sleep and wakeup history: `journalctl -n4 -u sleep.target`
  - `n4` is number of lines (currently 4 lines)