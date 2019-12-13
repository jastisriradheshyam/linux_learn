# MySQL

- Add user:
```
CREATE USER 'radhe'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
```
- update the host access:
```
UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='root';
UPDATE mysql.db SET Host='%' WHERE Host='localhost' AND User='root';
FLUSH PRIVILEGES;
```

