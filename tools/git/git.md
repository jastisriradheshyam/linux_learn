# git 

- show the branch: `git branch`
- clone the repo: `git clone repo_location`
- pull a particular branch: `git pull origin branch_name`
- push a particular branch: `git push origin branch_name`
- commit with GPG key: `git commit -S[GPG key]`
- merge with GPG sign: `git merge branch_to_merge -S[GPG key]`
- merge a branch and not commit it: `git merge brach_to_merge --no-commit --no-ff`
- status of the git repo: `git status`
- stash the changes: `git stash`
- apply the latest stash: `git stash apply`

----

- Removes the file from the repo (after this commit has to be done) and file is not removed from current working area:  `git rm --cached <filePath>`
- Will unstage any staged changes for the given file(s): `git reset -- <filePath>`
- Pull from current branch: `git pull origin $(git branch | awk '/*/ {print $2}')`
- create a new branch with current branch contents: `git checkout -b new_branch`
- remove file(s) from  index: `git reset PATH`

----

- add remote origin url ssh: `git remote add origin ssh://login@IP/path/to/repository`
- verify origin url: `git remote -v`
- add remote origin url http: `git remote add origin http://IP/path/to/repository`
- change the remote origin url: `git remote set-url origin https://github.com/username/repo`

----

- shows the commit changes: `git show GITCOMMITHASH`