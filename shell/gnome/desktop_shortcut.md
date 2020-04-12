# GNOME

## Desktop shortcut:

By default GNOME traverse the `/usr/share/applications` directory and search for `*.desktop` files.
For directories / topics like office, games, etc. GNOME traverse the `/usr/share/desktop-directories` directory and search for `*.directory` files

### Example
- Filename: `postman.desktop`
- Path: `~/.local/share/applications`
- Full path with file: `~/.local/share/applications/postman.desktop`
- File Content:
```
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
Name=Postman
Icon=/opt/postman/app/resources/app/assets/icon.png
Path=/opt/postman/app
Exec=/opt/postman/postman
StartupNotify=false
StartupWMClass=Postman
OnlyShowIn=Unity;GNOME;
X-UnityGenerated=true
```

## References:
[1] : [Adding icon launcher for Postman Native App in Ubuntu](https://medium.com/@canoodle/adding-icon-launcher-for-postman-native-app-in-ubuntu-a48a3917c786)
