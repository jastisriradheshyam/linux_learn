# Sway

```
mkdir -p ~/.config/sway
cp /etc/sway/config ~/.config/sway/
$EDITOR ~/.config/sway/config
```

## NVIDIA
- Sway does not support nvidia propritary driver
- To handle this we have to add '--unsupported-gpu' flag in `Exec` section in file: `/usr/share/wayland-sessions/sway.desktop`

## Applcations
- Audio controls GUI: `pavcontrol`
  - Reference: https://www.reddit.com/r/i3wm/comments/2wbv8x/question_how_to_manage_audio_with_i3/
- Network Manager GUI: `nm-connection-editor`
  - Reference: https://www.reddit.com/r/i3wm/comments/bh6rui/dont_know_how_to_connect_to_wifi_through_i3/

## Usage

- Mod1 -> Win Key
- Mod4 -> Alt Key

- Foot Terminal: Mod1 + Enter
- DMenu: Mod1 + d
- Logout of Sway: Mod1 + Shift + e
- Close a application: Mod1 + Shift + q
- Switch Workspace: Mod1 + number
  - Here number is workspace number
- Move window to specific workspace: Mod1 + Shift + number
- Full screen: Mod1 + f

### Layout
- splith/splitv : Mod1 + e
- stacking: Mod1 + s
- tabbed: Mod1 + w


## References:

[1]: [Sway Cheatsheet | Garuda Linux wiki](https://wiki.garudalinux.org/en/sway-cheatsheet)

[2]: [From gnome shell to sway : r/swaywm](https://www.reddit.com/r/swaywm/comments/c1oz8p/from_gnome_shell_to_sway/)
