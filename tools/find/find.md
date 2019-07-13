# find

- find a file: `find FROM_DIRECTORY -name 'FILE_NAME_OR_NAME_PATTERN'`
- find directories: `find FROM_DIRECTORY -type d`
- find links: `find FROM_DIRECTORY -type l`
- find exec: `find FROM_DIRECTORY` -type d -exec ls -l {} \;` , here \; is escaping `;` for ls command and `{}` is for every output of find this is input for the ls  
- find files that were modified in the past hour: `find -mmin +60 -name 'FILE_NAME_OR_NAME_PATTERN'`

