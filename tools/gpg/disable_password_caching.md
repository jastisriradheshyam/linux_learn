- `vi ~/.gnupg/gpg.conf`
- Add the following lines

```conf
default-cache-ttl 1
max-cache-ttl 1
```

- then restart the agent
  - `echo RELOADAGENT | gpg-connect-agent`

----

- For particular command (v2.2.15 and above): `gpg -c --no-syskey-cache file.txt`
  - Do not apply to git signing 


## References
- [encryption - GnuPG decryption not asking for passphrase - Information Security Stack Exchange](https://security.stackexchange.com/questions/103034/gnupg-decryption-not-asking-for-passphrase/103037#103037)
