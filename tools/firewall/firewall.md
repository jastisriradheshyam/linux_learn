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
- Masquerading enabling
  - `sudo firewall-cmd --zone=public --add-masquerade --permanent`
- List all rules
  - `firewall-cmd --list-all`
- Log denied
  - status
    - `sudo firewall-cmd --get-log-denied`
  - set
    - `firewall-cmd --set-log-denied=all`
    - `firewall-cmd --set-log-denied=off`

Reference:
[1]: [networking - What is MASQUERADE in the context of iptables? - Ask Ubuntu](https://askubuntu.com/questions/466445/what-is-masquerade-in-the-context-of-iptables)
