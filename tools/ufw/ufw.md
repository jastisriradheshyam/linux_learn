# ufw (Uncomplicated firewall)

- show ufw rules: `ufw status`
- show ufw rules with rule number: `ufw status numbered`
- allow from specific IP on specific ports with tcp: `ufw allow proto tcp from 127.0.0.1 to any port 27017,8000`
- allow from specific IP on specific ports with udp: `ufw allow proto udp from 127.0.0.1 to any port 27017,8000`
- delete a rule: `ufw delete rule_number`
