# GPG

- Generate GPG keys: `gpg --full-generate-key`
- List GPG keys: `gpg --list-keys`
- list GPG keys with key-id (key-id format): `gpg --list-keys --keyid-format LONG`
- List GPG keys for which you have both a public and private key: `gpg --list-secret-keys --keyid-format LONG`
- Output public key using GPG key-id: `gpg --armor --export gpg-key-id`
- Output public key to file: `gpg --output public.pgp --armor --export user@email`
- Output private key to file: `gpg --output private.pgp --armor --export-secret-key user@email`
- Import GPG private key: `gpg --import -c private.gpg`
- Encrypt a file: `gpg -r RECIPIENT_EMAIL -e FILE_NAME`
- Decrypt a file: `gpg -d FILE_NAME`
