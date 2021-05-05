# Terminal Colors

The format to define colors

- Escaping : `\e` or `\033`
    - Here `33` in `\033` is octal code to escape character which is equvalent to `\e`
- Starting character : `[`
- Option : `OPTION_CODE;`
- Color code : `COLOR_CODEm`

## Final Color Syntax
- `\e[OPTION_CODE;COLOR_CODEm`
    - eg. : `\e[1;32m`

## Reseting the colors
- `\e[0m`

## Color Codes

- Reset
    - Text : 0
    - Background : 0
- Black
    - Text : 30
    - Background : 40
- Red
    - Text : 31
    - Background : 41
- Green
    - Text : 32
    - Background : 42
- Yello
    - Text : 33
    - Background : 43
- Blue
    - Text : 34
    - Background : 44
- Magenta
    - Text : 35
    - Background : 45
- Cyan
    - Text : 36
    - Background : 46
- White
    - Text : 37
    - Background : 47

## Option codes
- Reset : 0
- Bold : 1
- Underline : 4
- Inverse (interchange the text and background colors) : 7
- Bold off : 21
- Underline off : 24
- Inverse off : 27

## Setting both text and background color
- `\e[;32m\e;40m` - Green text with black background
- `echo -e "\033[40m\033[34m TEST \033[0m"`

## References:

- [How to output colored text to a Linux terminal?](https://www.tutorialspoint.com/how-to-output-colored-text-to-a-linux-terminal)
- [Printing a colored output - Linux Shell Scripting Cookbook - Third Edition [Book]](https://www.oreilly.com/library/view/linux-shell-scripting/9781785881985/b0ddd805-aa79-441d-b5a7-380c66c7712d.xhtml)
- [HTML ASCII Reference](https://www.w3schools.com/charsets/ref_html_ascii.asp)
- [terminal - What does a bash sequence '\\033\[999D' mean and where is it explained? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/116243/what-does-a-bash-sequence-033999d-mean-and-where-is-it-explained)
