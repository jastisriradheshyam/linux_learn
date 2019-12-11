# vi

- undo: `esc u`
- Run command from the vi: `:!COMMAND`
- To insert the output from a  UNIX command into a file, immediately after the cursor: `:r!COMMAND`
- add the current unsaved file buffer to be saved in file when file is not open with privilages: `:w !sudo tee %`

Reference:

[1] : [Running UNIX shell commands from vi](http://web.physics.ucsb.edu/~pcs/apps/editors/vi/vi_unix.html)
