# Grubby

- It is a tool to handle Grub boot manager

- List Grub kernel parameters `sudo grubby --info=ALL`
- Update specific key value pair in kernel parameters: `sudo grubby --update-kernel=ALL --args=pci=noaer`