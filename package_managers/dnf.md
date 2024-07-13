# DNF

## Popular OS

- Red Hat
- Fedora
- Rocky

## Commands

- Downgrade: `dnf downgrade PACKAGE_NAME`

## After Distro Upgrade
- `dnf distro-sync`

## Remove unused packages

- Auto remove: `dnf autoremove`
- To identify extra and unneeded packages
  - `dnf repoquery --extras`
  - `dnf repoquery --unneeded`

- To remove duplicate packages
  - list: `dnf repoquery --duplicates`
  - remove: `dnf remove --duplicates`
- remove package without removing dependencies
  - `sudo rpm -e --nodeps package.xx.xx`