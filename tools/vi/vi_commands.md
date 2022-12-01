# Commands

- `i` : insert mode
- use number before command to do the execute the command in the multiple of that number (not always but commonly)
  - like `8 + yy` copy all the eight lines from the starting of the cursor
- `G` or `shift + g` : first letter line
- `y` : yank / copy
  - `yy` : copy line
  - `yw` : copy word
- `d` : cut
  - `dd` : cut line
  - `dw` : cut word
- `c` : delete
  - `cc` : delete line
  - `cw` : delete word
- Search
  - `:?SEARCH_KEYWORD`
  - `/SEARCH_KEYWORD`
- Search and replace: `:%s/SEARCH_KEYWORD/REPLACE_WORD`