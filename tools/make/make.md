# make

- It's a build automation tool
- `Makefile` is required in the project to build, then run the command `make` to build the project.

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

References:
[1]: [A Simple Makefile Tutorial - YouTube](https://www.youtube.com/watch?v=vye0kV5gvkA)
