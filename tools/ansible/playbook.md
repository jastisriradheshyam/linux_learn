# Ansible Playbook

- Become user
  - ```yaml
      become: true
      become_user: OS_USER_NAME
    ```

- Tasks
  - ```yaml
      tasks:
        name: TASK_NAME_OR_DESCRIPTION
        MODULE_FQDN:
          ARGS_1: ...
          ARGS_2: ...
          ARGS_3: ...
          ...
        [ADDITIONAL_PROPERTIES]
    ```
  - e.g. of ADDITIONAL_PROPERTIES are `become`, `become_user`, `register`, etc.

- Register usage
  - ```yaml
    - name: Check the the application directory is present
      stat:
        path: ~/APP_DIRECTORY
      register: app_directory_check
    - name: Create the application directory if not present
      ansible.builtin.file:
        path: ~/APP_DIRECTORY
        state: directory
        mode: '0755'
      when: app_directory_check.stat.exists != true
    ```

- Custom command
  - custom command can be executed using ansible builtin command module
  - ```yaml
      - name: Run ls command
        ansible.builtin.command: ls
    ```