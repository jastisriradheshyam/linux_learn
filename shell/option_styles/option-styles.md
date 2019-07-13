# Option styles

## UNIX
Which may be grouped and must be preceded by a dash (-).

Examples:
- Without grouping
  - `ls -l -a`
  - `ps -e -f`

- With grouping
  - `ls -la`
  - `ps -ef`

----

## BSD
Which may be grouped and must not be used with a dash (-).

Examples:
- Without grouping
  - `ps a x`
- With grouping
  - `ps ax`

----

## GNU
Which are preceded by two dashes (--).

Example:
  - `ps --pid 2542`

----

## MS-DOS
Which are preceded by slash (/).

Example:
  - `dir /A`

### References:
[1]: man pages (`man ps`)
