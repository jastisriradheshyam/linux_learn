# systemd

- start a service: `systemctl start service_name`
- stop a service: `systemctl stop service_name`
- restart a service: `systemctl restart service_name`
- status of a service: `systemctl status service_name`
  - Status without pager and log lines (helpful in scripts) : `systemctl status service_name --lines=0 --no-pager`

- List all systemd services
  - `systemctl list-unit-files`

- User Unit files
  - `mkdir -p ~/.config/systemd/user/`
  - add service file : `~/.config/systemd/user/myapp.service`
  - `systemctl --user daemon-reload`
  - `systemctl --user start myapp.service`
  - `systemctl --user enable myapp.service`


## Unit file example

```service
[Unit]
Description=My Example Service

[Service]
ExecStart=/path/to/your/executable
Restart=always

[Install]
WantedBy=default.target

```
