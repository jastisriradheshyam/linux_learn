# Firewall

- Trusted Interface:
  - `sudo firewall-cmd --permanent --zone=trusted --add-interface=docker0`
- Add the IP source to public trusted domain: 
  - `sudo firewall-cmd --permanent --zone=public --add-source=172.20.0.0/16`
- Add the port: 
  - `sudo firewall-cmd --permanent --zone=public --add-port=3306/tcp`
- Remove the port:
  - `sudo firewall-cmd --permanent --zone=public --remove-port=1-22/tcp`
- Reload the firewall deamon:
  - `sudo firewall-cmd --reload`

