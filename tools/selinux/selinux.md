# SE Linux

- Disable the SE Linux rules enforcement for the current session: `sudo setenforce 0`
- Check logs at : `/var/log/audit/audit.log`
  - failed responses: `res=failed`
  - success responses: `res=success`

- Sometimes permissions are not correct then remove selinux packages and reinstall and do this on the directory in which you are facing issues: `restorecon -R -v PATH`

## References:
- https://www.thegeekdiary.com/how-to-disable-or-set-selinux-to-permissive-mode/