# screen

- list the screen instances: `screen -list`
- screen reattach: `screen -r id_or_name_or_both`
- screen detach and reattach: `screen -dr id_or_name_or_both`
- split vertically: `CTRL + a then |`
- split horizontally: `CTRL + a then S`
    - uppercase S
- start a new session: `screen -S session_name`
- close the current pane: `CTRL + a then :remove then enter`
- close all panes: `CTRL + a then Q`
- scroll in screen: `CTRL + a, ESC`
    - use arrow keys to move, when done click q and escape

---

- get the screen ID: `screen -list | grep -e '\.lender[[:space:]]' | grep -o '[0-9]*\.' | grep -o '[^\.]*'
`
