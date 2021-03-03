# MySQL Quirks

## ONLY_FULL_GROUP_BY
- `vi /etc/mysql/my.cnf`
- add this to the file
```conf
[mysqld]
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
```
- Restart the MySQL deamon/server
  - `sudo systemctl restart mysql`

## References:
- https://drib.tech/programming/turn-off-sql-mode-only_full_group_by-mysql-5-7
