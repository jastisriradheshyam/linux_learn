# cpupower

- Set the performance: `sudo cpupower frequency-set --governor performance`
  - This put c states to c0 where earlier they were in c3, c2, c1 states with higher percentage in descending order.
- Freq info: `cpupower frequency-info`

-----

- Installation:
  - DNF: `sudo dnf install kernel-tools`
  - APT: `sudo apt-get install linux-tools-common`

[1]: [Fixing a sluggish Linux after suspend-resume](https://www.perl.com/article/fixing-a-sluggish-linux-after-suspend-resume/)

[2]: [controlling_processor_c-state_usage_in_linux_v1.1_nov2013.pdf](https://wiki.bu.ost.ch/infoportal/_media/embedded_systems/ethercat/controlling_processor_c-state_usage_in_linux_v1.1_nov2013.pdf)