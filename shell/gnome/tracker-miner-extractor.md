- Stop tracker: `tracker3 daemon -t`
- Start tracker daemon: `tracker daemon -s`
- Delete tracker database: `tracker3 reset -r`

- Disable tracker:
  - Check the `/etc/xdg/autostart/` files to know the config files, sometimes version might affect the configuration.
  - `echo "X-GNOME-Autostart-enabled=false" >> ~/.config/autostart/tracker-miner-fs-3.desktop`
  - reboot the system

- Enable tracker:
  - `sed -i 's/X-GNOME-Autostart-enabled=false/X-GNOME-Autostart-enabled=true/g' ~/.config/autostart/tracker-miner-fs-3.desktop`
  - reboot the system