# What is GIT 
### *A free and open source version control system*

# What is Version Control
### *A way to track your code changes*

# Install GIT
https://www.atlassian.com/git/tutorials/install-git

# Some Alias names on GIT
 - Directory → File
 - Terminal or command line →Interface for text commands (eg. GIT bash,)
 - CLI → Command Line Interface
 - Code editor → Word processor for writing code
 - Repository → where your project kept
 - Github → the website that hosts the repositories online

# Commands used on the Command line or Git CLI interface
> **[NOTE]**
> these commands until the line is only used for cmd of windows 
 - mkdir → create a directory
 - dir → to know what's inside the directory
 - dir /a → to even get the hidden files too
 - explorer "directory name" → to open the directory in the file explorer
 - del "file name → removes file 
 - type nul > "file name" → creates a file
 - echo "Hello world" → "file name" → creates a file with content written hello name 
 > **[NOTE]**
 >if echo doesn't have a written content right after it , it will add **ECHO is on** line 
 - cd → change directory 
  -------------
  # Git commands
 - git init →to initialize a repository in your project and git start to track this project
 - git clone ""followed by the link of the repository"→ to get the repository hosted on Github to a folder on your local machine 
 - git add → to add your early changes of your project on your repository so git can track your process also it puts the project in the staging area 
 - git add (file name) → it addes that specific file to staging area
 - git --all , git -A → these commands tell git to add all the files in repository to the staging area
 - git . →it only adds the content of the current directory to the stage (e.g main(this is the main directory and repository) but inside of it has a file sub(the current directory we are in)if you used the git add . it will only add the files inside sub only)
 - git add * → only add modified or new files but not the deleted ones
 - git add *.txt →it give a command that all the files with txt extensions should be added to the stage
 - git reset → to get everything back as it was and remove files from the staging area 
 - git commit →save your changes on your files in GIT 
 - git commit -m "add changes" → the -m in git commit lets you add a message in commiting stage
 - git config --global user.email "yourEmailAddress" → that's make git knows where to commit the repository
 - git config --global user.name "yourUsername" → to tell Git your username
 - git config --local user.email/ "yourEmail" → to make the configuration only in this repository
 - git reset Head~ → will tell the git to get back to undo the commit and get back to the stage level
 - git rm "file name"→ for deleting unwated file instead of deleting it manually
 - git rm -f "file name" → force the repository delete the file whatever the status the repository on
 - git rm --cahed "file name" →removes the file from the staging
 - git rm "folder" → remove the folder only not it's content
 - git rm -r "folder"→ removes the folder and it's content and r stands for recursive
 - git reset --hard → used to get back to the previous step even if its files deleted it get it back (gets everything back as it's (something like ctrl + z ))
 - git push → upload GIT commits to a remote repository like (Github , Gitlab)
 - git pull → download remote repository to your local machine
 - git status → shows all the status for files and directories
 - git log → view all commits that you've done
 - git log --oneline → short summary view for all commits that you've done
 - usually main branch is called main or master and that's the default branch that u in
 - git branch → shows u what branch do u have
 - git branch "branch name" → creates a new branch
 - git checkout "branch name" → switches between branches and can make u switch between commits too
 - git merge main -m "merging main" → merge the branch u r in with main branch
 - git merge "branch name" -m"merging the current branch with the branch name written in command" →this usually merge the branch u r in with the branch you've written in merge command
 - explain the merge conflict 
 - git diff "branch name 1" "branch name 2"→ compare between branches and commits
 - git push origin branch name → sending your local changes to remote repository (origin refers to remote repository)
 - git push --all origin → sending all branches on local repository to remote repository
 - git fetch → bringing remote changes to your local repository but not merging them yet
 - git pull →bringing and merging remote changes to your local repository (git pull = git fetch + git merge)
 - git restore filename/directoryname → gets you back immediatly to the recent commit u have done in filename/directoryname
 - git restore . → gets the recent commit change for the entire repository
 - git restore --staged filename/directoryname → gets your file back from staging area 
 - git stash → saving your unfinished work so you can switch between branches without commiting it
 - git stash pop → gets your unfinshed work back to your branch again
  >**NOTE** : git stash pop only gets the last stash u made to get all the stashes you use <u>**git stash apply .**</u>
 - git stash list → gets all the stash history log and from there you can get the last stash commits from log to use it again and i'll explain the command 
 - git stash pop "stashCommitName" → gets the specified stash you want 
 -  git stash apply "stashCommitName" → gets the specified stash you want 
 -  git stash drop → removes the stash list history log
 -  >**Note** the difference between git stash pop and git stash apply that git stash pop gets the saved changes from stash list and remove it something like cut in computer and git stash apply gets the saved changes from stash list but keep it something like copy
 -  git revert commitname → used to undo the changes in the previous commit but instead of deleting that commit it creates new one
  >**Note** the difference between git revert and git reset is the git reset gets you back to the commit and remove whats been after it while git revert gets you back to the commit in new commit 
 - git rebase branchname → moves your branch's commits and places them on top of the latest commits from another branch, creating a clean, continuous history.
  ---
  # Git bash terminals 
 - ls -la → list everything inside the directory (only used on unix/linux sytstems & git bash)
 - press q → leaving the bash log
 - rm "file name" → removes file 


<h4 align="center" font-size="30px">  Thanks for freecodecamp and Odin Project they were the reason to learn all that</h4>
<h5>Resources:</h5>
<p> <strong><a href="https://youtu.be/mAFoROnOfHs?si=qtgZfHt3KQAbWbaM"> Freecodecamp</a></strong> </p>
<p> <strong><a href="https://www.theodinproject.com/lessons/foundations-git-basics"> The Odin Project</a></strong> </p>
