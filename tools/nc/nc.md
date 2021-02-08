## net cat : nc

- know the port on server is reachable: `nc -vzw 1 IP PORT`

## simple unencrypted data communication

- Listen (on port 8090)
  - `nc -l -p 8090`
- Connect
  - `nc IP 8090`
