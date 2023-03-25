# Restart PCI device

- Do `lcpci` to get the PCI bus, device, and function values
  - Basic format: `BB:DD.F`
    - BB -> Bus number
    - DD -> Device number
    - F -> device function

- If `lspci -D` is ran the domain number will also be presents, normally it's `0000` for most systems and devices they mounted on.
  - The format in this case will be: `DDDD:BB:DD.F`
    - DDDD -> domain number

- With root access run: `echo "1" > /sys/bus/pci/devices/DDDD\:BB\:DD.F/remove` -> replace `DDDD`, `BB`, `DD`, and `F` with respective values as explained above. [1]

- wait for a second and run with root access: `echo "1" > /sys/bus/pci/rescan` [1]
- When running with sudo run like this: `sudo /bin/sh -c "COMMAND"`

## Sample template script [1]

```sh
#!/bin/bash
echo "1" > /sys/bus/pci/devices/DDDD\:BB\:DD.F/remove  
sleep 1  
echo "1" > /sys/bus/pci/rescan
```

## References

[1]: [Use sysfs to restart failed PCI devices (WiFi cards, sound cards, etc.) - Fedora Magazine](https://fedoramagazine.org/use-sysfs-to-restart-failed-pci-devices/)