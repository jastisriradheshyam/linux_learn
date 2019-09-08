# secrets

- stored in memory and accessble only to container
- e.g:
  - `/run/secrets/SECRET_NAME`

---
creating secret

- `docker secret create db_secret db_secret.txt`
- `echo "password" | docker secret create db_secret -`

---
service with secrets

- `docker service create --name psql --secret psql_user --secret psql_pass -e POSTGRES_PASSWORD_FILE=/run/secrets/psql_pass -e POSTGRES_USER_FILE=/run/secrets/psql_user postgres`

---

## docker stack compose file:
```
version: "3.1"

services:
    psql:
        image: postgres
        secrets:
            - psql_user
            - psql_password
        environment:
            POSTGRES_PASSWORD_FILE: /run/secrets/psql_password
            POSTGRES_USER_FILE: /run/secrets/psql_user
secrets:
    psql_user:
        file: ./psql_user.txt
    psql_password:
        file: ./psql_password.txt
```

- `docker stack deploy -c docker-compose.yml db_stack_name`

