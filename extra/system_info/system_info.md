# System Info

## Common Tools

- `dmidecode`
- `lshw`
- `lspci`
- `lscpu`
- `inxi` 

## System Info

- `dmidecode -t system`
    - show the system hardware info like serial number, manufacturer, etc.
- `inxi -Fxz`

## CPU

- `cat /proc/cpuinfo` : list the CPU information
- `lscpu`

## Memory

- `lshw -class memory` : Shows memory hardware info
- `dmidecode -t 16` : Shows memory hardware info
- `free` : Show the current memory space status

## EC

- https://github.com/musikid/acpi_ec
    - read/write: `/dev/ecc`