- Stop tracker: `tracker3 daemon -t`
- Start tracker daemon: `tracker3 daemon -s`
- Delete tracker database: `tracker3 reset -r`

- Disable tracker:
  - Check the `/etc/xdg/autostart/` files to know the config files, sometimes version might affect the configuration.
  - `echo "X-GNOME-Autostart-enabled=false" >> ~/.config/autostart/tracker-miner-fs-3.desktop`
  - reboot the system

- Enable tracker:
  - `sed -i 's/X-GNOME-Autostart-enabled=false/X-GNOME-Autostart-enabled=true/g' ~/.config/autostart/tracker-miner-fs-3.desktop`
  - reboot the system

## References:

[1]: [How To Completely Disable Tracker, GNOME's File Indexing And Search Tool - Linux Uprising Blog](https://www.linuxuprising.com/2019/07/how-to-completely-disable-tracker.html)
[2]: [Disabling Tracker in Fedora - lzap](https://lukas.zapletalovi.com/posts/2021/disabling-tracker-in-fedora/)
[3]: [How to REALLY, COMPLETELY disable Gnome tracker? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/694065/how-to-really-completely-disable-gnome-tracker)