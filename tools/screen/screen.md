# screen

- list the screen instances: `screen -list`
- screen reattach: `screen -r id_or_name_or_both`
- screen detach and reattach: `screen -dr id_or_name_or_both`
- split vertically: `CTRL + a then |`
- split horizontally: `CTRL + a then S`
    - uppercase S
- start a new session: `screen -S session_name`
- close the current pane: `CTRL + a then :remove then enter`
- unsplit the panes: `CTRL + a then Q`
- scroll in screen: `CTRL + a, ESC`
    - use arrow keys to move, when done click q and escape
- create session inside pane: `CTRL + a, then c`
---

- get the screen ID: `screen -list | grep -e '\.lender[[:space:]]' | grep -o '[0-9]*\.' | grep -o '[^\.]*'`

---
## switching the terminal
- switch between the panes: `ctrl + a then tab`
- switch to previous terminal: `ctrl + a then backspace`
- switch to next terminal: `ctrl + a then space`
- switch between terminals using list in a screen: `ctrl + a then "` (useful when more than 10 terminals)


