# Socat

- It's a tool to port forward TCP/UDP ports

- `socat TCP-LISTEN:PORT_TO_EXPOSE,fork TCP:HOST_TO_BE_MAPPED:PORT_TO_BE_MAPPED`


## SystemD file

- 
```conf
[Unit]
Description=Socat Port Forwarding
After=network.target

[Service]
ExecStart=/usr/bin/bash -c "socat TCP-LISTEN:A,fork TCP:localhost:X & \
                            socat TCP-LISTEN:B,fork TCP:localhost:Y & \
                            socat TCP-LISTEN:C,fork TCP:localhost:Z"
ExecStop=/usr/bin/pkill -f "socat.*TCP-LISTEN"

[Install]
WantedBy=multi-user.target

```

- `vi /etc/systemd/system/port-forward.service`
- `sudo systemctl daemon-reload`
- `systemctl start port-forward`
- `systemctl enable port-forward`
- `systemctl status port-forward`