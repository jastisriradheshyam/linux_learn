# vi

- undo: `esc u`
- Run command from the vi: `:!COMMAND`
- To insert the output from a  UNIX command into a file, immediately after the cursor: `:r!COMMAND`
- add the current unsaved file buffer to be saved in file when file is not open with privilages: `:w !sudo tee %`

----
- stop auto indent while pasting (which causes incorrect indentation):
  - `:set paste`
  - after pasting is done: `:set nopaste`

Reference:

[1] : [Running UNIX shell commands from vi](http://web.physics.ucsb.edu/~pcs/apps/editors/vi/vi_unix.html)
[2] : [configuration - Turning off auto indent when pasting text into vim - Stack Overflow](https://stackoverflow.com/questions/2514445/turning-off-auto-indent-when-pasting-text-into-vim)
