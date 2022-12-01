# Streams

## Standard streams

- `stdin` -> 0
- `stdout` -> 1
- `stderr` -> 3

## Redirection

- `COMMAND > FILENAME` : overwrite the file with command standard output
- `COMMAND >> FILENAME` : append the file with command standard output
- `COMMAND 2> FILENAME` : overwrite the file with command standard error
- `COMMAND 2>> FILENAME` : append the file with command standard error
- `COMMAND > STDOUT_FILENAME 2> STDERR_FILENAME` : overwrite the files with command standard output and standard error separately
- `COMMAND &> STDIN_AND_STDERR_FILENAME` : overwrite the file with command's standard output and standard error in same file
- `COMMAND < FILENAME_AS_STDIN` : pass the file contents as stdin to the command

## Pipe

- `COMMAND | COMMAND_2`