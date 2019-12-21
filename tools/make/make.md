# make

- It's a build automation tool
- `Makefile` is requied in the project to build, then run the command `make` to build the project.

## Makefile example

```Makefile
foo: foo.o addnum.o
    gcc -o foo foo.o addnum.o

foo.o: foo.c
    gcc -c -o foo.o foo.c

addnum.o: addnum.c
    gcc -c -o addnum.o addnum.c
```

## Format
```
target: dependencies
    build instructions from dependencies
```
