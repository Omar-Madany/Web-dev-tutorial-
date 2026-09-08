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
 - type null > "file name" → creates a file
 - echo "Hello world" → "file name" → creates a file with content written hello name 
 > **[NOTE]**
 >if echo doesn't have a written content right after it , it will add **ECHO is on** line 
 - cd → change directory 
  -------------
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
 - git push → upload GIT commits to a remote repository like (Github , Gitlab)
 - git pull → download remote repository to your local machine
 - git status → shows all the status for files and directories
 - ls -la → list everything inside the directory (only used on unix/linux sytstems & git bash)
kvk


<h4 align="center" font-size="30px">  Thanks for freecodecamp they were the reason to learn all that</h4>
<p> <strong><a href="https://youtu.be/mAFoROnOfHs?si=qtgZfHt3KQAbWbaM"> video link</a></strong> </p>
