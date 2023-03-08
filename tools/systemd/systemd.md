# systemd

- start a service: `systemctl start service_name`
- stop a service: `systemctl stop service_name`
- restart a service: `systemctl restart service_name`
- status of a service: `systemctl status service_name`
  - Status without pager and log lines (helpful in scripts) : `systemctl status service_name --lines=0 --no-pager`