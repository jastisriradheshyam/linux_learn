# GPG

- Generate GPG keys: `gpg --full-generate-key`
- List GPG keys: `gpg --list-keys`
- list GPG keys with key-id (key-id format): `gpg --list-keys --keyid-format LONG`
- List GPG keys for which you have both a public and private key: `gpg --list-secret-keys --keyid-format LONG`
- Output public key using GPG key-id: `gpg --armor --export gpg-key-id`
- Output public key to file: `gpg --output public.pgp --armor --export user@email`
- Output private key to file: `gpg --output private.pgp --armor --export-secret-key user@email`
- Import GPG private key: `gpg --import private.gpg`
- Encrypt a file: `gpg -r RECIPIENT_EMAIL -e FILE_NAME`
- Decrypt a file: `gpg -d FILE_NAME`


----
- If passphrase is not asked : `gpg -c --pinentry-mode=loopback test`
   - `--pinentry-mode=loopback` will force passphrase

----
## using gpg key from external device
- `mkdir /path/to/the/a/desired/directory/in/external/drive/`
- `gpg --homedir /path/to/the/a/desired/directory/in/external/drive/ --import /path/to/the/gpg_private_key.gpg`
  - this will make the necessary files to manage the key and make the homedir for the particular key
- `export GNUPGHOME=/path/to/the/a/desired/directory/in/external/drive/`
  - now use it for encryption and decryption as required, this will be temporary and good practice for using key from external device
  - importing is required once per a external device.
  - On windows (powershell) : `$ENV:GNUPGHOME=/path/to/the/a/desired/directory/in/external/drive/`

## References:
- [encryption - GnuPG decryption not asking for passphrase - Information Security Stack Exchange](https://security.stackexchange.com/a/230555/184792)
- [homedir](https://www.gnupg.org/gph/en/manual/r1616.html)
