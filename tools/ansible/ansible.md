# Ansible

- Default inventory file path: `/etc/ansible/hosts`
- Provide private key and user for SSH access with following flags
  - `--private-key PATH_TO_SSH_PRIVATE_KEY` 
  - `--user SSH_USERNAME`
- Children groups should be loaded first before parent group in case of inventory and can be achieved by prefixing number in the intended order.


## References:

- [How to build your inventory — Ansible Documentation](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html)