# 🌱 Git, the Command Line & Collaboration — Complete Notes

> A personal reference guide covering Git, terminal commands on **Windows / Linux / macOS**, Vim basics, and how teams collaborate with branches and Pull Requests.

---

## 📑 Table of Contents

1. [What is Git?](#-what-is-git)
2. [What is Version Control?](#-what-is-version-control)
3. [Installing Git](#-installing-git)
4. [Glossary](#-glossary--common-terms)
5. [Command Line — Windows (CMD)](#-command-line--windows-cmd)
6. [Command Line — Linux / macOS / Git Bash](#-command-line--linux--macos--git-bash)
7. [Vim / Vi Basics](#-vim--vi-basics)
8. [Git — Setup & Configuration](#-git--setup--configuration)
9. [Git — Starting a Repository](#-git--starting-a-repository)
10. [Git — Staging & Committing](#-git--staging--committing)
11. [Git — Removing & Undoing](#-git--removing--undoing)
12. [Git — Inspecting History](#-git--inspecting-history)
13. [Git — Branching & Merging](#-git--branching--merging)
14. [Merge Conflicts](#-merge-conflicts)
15. [Git — Remotes (Push / Pull / Fetch)](#-git--remotes-push--pull--fetch)
16. [Git — Stashing](#-git--stashing)
17. [Git — Rebase](#-git--rebase)
18. [Pull Requests & Collaboration](#-pull-requests--collaboration)
19. [.gitignore](#-gitignore)
20. [Quick Cheat Sheet](#-quick-cheat-sheet)
21. [Credits & Resources](#-credits--resources)

---

## 🔰 What is Git?

Git is a **free and open-source distributed version control system**. It records snapshots of your project over time so you can review history, undo mistakes, work on features in isolation, and collaborate with other people without overwriting each other's work.

## 🔰 What is Version Control?

A way of **tracking changes to your files over time**. Every saved snapshot (a *commit*) records what changed, when it changed, and who changed it — so you can always go back.

## 📥 Installing Git

👉 [Atlassian's Git install guide](https://www.atlassian.com/git/tutorials/install-git)

Verify it worked:

```bash
git --version
# git version 2.45.2
```

---

## 🔤 Glossary — Common Terms

| Term | Meaning |
|---|---|
| **Directory** | A folder |
| **Terminal / Command line** | An interface for typing text commands (e.g. Git Bash, PowerShell, Terminal.app) |
| **CLI** | Command Line Interface |
| **Code editor** | A text editor built for writing code (VS Code, Vim, …) |
| **Repository (repo)** | The project folder that Git is tracking, plus its full history |
| **Working directory** | Your actual files as they exist right now on disk |
| **Staging area (index)** | A holding zone where you gather the changes you want in your next commit |
| **Commit** | A saved snapshot of the staged changes |
| **Branch** | An independent line of development |
| **Remote** | A copy of the repo hosted elsewhere (usually named `origin`) |
| **GitHub / GitLab** | Websites that host Git repositories online |
| **Clone** | A full local copy of a remote repository |
| **Fork** | Your own copy of *someone else's* repo on GitHub |
| **Pull Request (PR)** | A request to merge your branch into another branch, with review |

### The three areas of Git

```
Working Directory  ──git add──▶  Staging Area  ──git commit──▶  Repository (.git)
      (your files)                  (index)                         (history)
```

---

## 🖥️ Command Line — Windows (CMD)

> ⚠️ These are **Windows Command Prompt** commands, not Git commands.

| Command | Description | Example |
|---|---|---|
| `dir` | List contents of the current directory | `dir` |
| `dir /a` | List contents including hidden files | `dir /a` |
| `cd <folder>` | Change directory | `cd projects` |
| `cd ..` | Go up one level | `cd ..` |
| `cd \` | Go to the drive root | `cd \` |
| `D:` | Switch to another drive | `D:` |
| `mkdir <name>` | Create a directory | `mkdir my-project` |
| `rmdir <name>` | Delete an **empty** directory | `rmdir old-folder` |
| `rmdir /s /q <name>` | Delete a folder and everything inside it | `rmdir /s /q node_modules` |
| `type nul > <file>` | Create an empty file | `type nul > index.html` |
| `echo Hello > <file>` | Create a file containing text | `echo Hello world > notes.txt` |
| `echo Hello >> <file>` | **Append** text to an existing file | `echo Second line >> notes.txt` |
| `type <file>` | Print a file's contents | `type notes.txt` |
| `del <file>` | Delete a file | `del notes.txt` |
| `del /q *.log` | Delete files matching a pattern, no prompt | `del /q *.log` |
| `copy <src> <dest>` | Copy a file | `copy notes.txt backup.txt` |
| `move <src> <dest>` | Move or rename a file | `move notes.txt docs\notes.txt` |
| `ren <old> <new>` | Rename a file | `ren notes.txt readme.txt` |
| `cls` | Clear the screen | `cls` |
| `explorer <folder>` | Open a folder in File Explorer | `explorer .` |
| `where <program>` | Find where a program is installed | `where git` |
| `tree` | Show folder structure as a tree | `tree /f` |
| `exit` | Close the terminal | `exit` |

> 💡 **Note:** If you type `echo` with nothing after it, it prints `ECHO is on` instead of writing anything.

---

## 🐧 Command Line — Linux / macOS / Git Bash

> ✅ These work in **Linux**, **macOS Terminal**, and **Git Bash on Windows** — Git Bash gives Windows users a Unix-style shell.

| Command | Description | Example |
|---|---|---|
| `ls` | List directory contents | `ls` |
| `ls -a` | Include hidden files (like `.git`) | `ls -a` |
| `ls -l` | Long format — permissions, size, date | `ls -l` |
| `ls -la` | Long format **and** hidden files | `ls -la` |
| `pwd` | Print the current directory path | `pwd` |
| `cd <folder>` | Change directory | `cd projects` |
| `cd ..` | Go up one level | `cd ..` |
| `cd ~` | Go to your home directory | `cd ~` |
| `cd -` | Go back to the previous directory | `cd -` |
| `mkdir <name>` | Create a directory | `mkdir my-project` |
| `mkdir -p a/b/c` | Create nested directories at once | `mkdir -p src/components/ui` |
| `touch <file>` | Create an empty file | `touch index.html` |
| `echo "Hi" > <file>` | Write text to a file (overwrites) | `echo "Hello world" > notes.txt` |
| `echo "Hi" >> <file>` | **Append** text to a file | `echo "Line 2" >> notes.txt` |
| `cat <file>` | Print a file's contents | `cat notes.txt` |
| `less <file>` | View a long file page by page (press `q` to quit) | `less README.md` |
| `head -n 10 <file>` | First 10 lines | `head -n 10 log.txt` |
| `tail -n 10 <file>` | Last 10 lines | `tail -n 10 log.txt` |
| `rm <file>` | Delete a file | `rm notes.txt` |
| `rm -r <folder>` | Delete a folder **and its contents** | `rm -r old-project` |
| `rm -rf <folder>` | Force delete, no prompts ⚠️ **dangerous** | `rm -rf node_modules` |
| `cp <src> <dest>` | Copy a file | `cp notes.txt backup.txt` |
| `cp -r <src> <dest>` | Copy a folder | `cp -r src/ src-backup/` |
| `mv <src> <dest>` | Move **or** rename | `mv notes.txt readme.md` |
| `clear` | Clear the screen | `clear` |
| `grep "text" <file>` | Search inside a file | `grep "TODO" app.js` |
| `grep -r "text" .` | Search recursively through a folder | `grep -r "apiKey" .` |
| `find . -name "*.js"` | Find files by name | `find . -name "*.test.js"` |
| `which <program>` | Find where a program is installed | `which git` |
| `open .` *(macOS)* | Open the folder in Finder | `open .` |
| `xdg-open .` *(Linux)* | Open the folder in the file manager | `xdg-open .` |
| `start .` *(Git Bash)* | Open the folder in File Explorer | `start .` |
| `q` | Quit a paged view (`git log`, `less`, `man`) | *press* `q` |
| `exit` | Close the terminal | `exit` |

### Windows ↔ Unix translation table

| Windows CMD | Linux / macOS / Git Bash |
|---|---|
| `dir` | `ls` |
| `dir /a` | `ls -a` |
| `cls` | `clear` |
| `type file.txt` | `cat file.txt` |
| `del file.txt` | `rm file.txt` |
| `rmdir /s /q folder` | `rm -rf folder` |
| `copy a b` | `cp a b` |
| `move a b` | `mv a b` |
| `ren a b` | `mv a b` |
| `type nul > file` | `touch file` |
| `where git` | `which git` |
| `explorer .` | `open .` / `xdg-open .` / `start .` |

---

## ✍️ Vim / Vi Basics

Git opens **Vim** by default when it needs a message from you — for example `git commit` with no `-m`, or during an interactive rebase. Knowing a handful of commands is enough to not get stuck.

### The two modes that matter

| Mode | What it does | How to enter |
|---|---|---|
| **Normal** | Navigate and run commands (the default when Vim opens) | Press `Esc` |
| **Insert** | Actually type text | Press `i` |

### The "I just need to get out" sequence

```
1. Press  Esc        →  make sure you're in Normal mode
2. Type  :wq         →  write (save) and quit
3. Press Enter
```

If you want to **abandon** the commit instead: `Esc` → `:q!` → `Enter`.

### Entering Insert mode

| Key | Action |
|---|---|
| `i` | Insert **before** the cursor |
| `a` | Insert **after** the cursor |
| `o` | Open a **new line below** and insert |
| `O` | Open a **new line above** and insert |
| `A` | Jump to **end of line** and insert |

### Saving & quitting (type these in Normal mode)

| Command | Action |
|---|---|
| `:w` | Save (write) |
| `:q` | Quit |
| `:wq` or `:x` | Save **and** quit ✅ *most used with Git* |
| `:q!` | Quit **without saving** — discards the commit message |
| `ZZ` | Save and quit (shortcut, no colon) |

### Moving around

| Key | Action |
|---|---|
| `h` `j` `k` `l` | Left, down, up, right |
| `w` / `b` | Forward / back one word |
| `0` / `$` | Start / end of the line |
| `gg` / `G` | Top / bottom of the file |
| `:5` | Jump to line 5 |

### Editing

| Key | Action |
|---|---|
| `x` | Delete the character under the cursor |
| `dd` | Delete the whole line |
| `3dd` | Delete 3 lines |
| `yy` | Copy ("yank") a line |
| `p` | Paste below |
| `u` | Undo |
| `Ctrl + r` | Redo |
| `/word` | Search for "word" (`n` = next, `N` = previous) |

> 💡 **Prefer a different editor?** Tell Git to use VS Code or Nano instead:
> ```bash
> git config --global core.editor "code --wait"   # VS Code
> git config --global core.editor "nano"          # Nano
> ```

---

## ⚙️ Git — Setup & Configuration

Git needs to know who you are before your first commit — this info is stamped onto every commit.

| Command | Description |
|---|---|
| `git config --global user.name "<name>"` | Set your name for **all** repos on this machine |
| `git config --global user.email "<email>"` | Set your email for **all** repos |
| `git config --local user.name "<name>"` | Set your name for **this repo only** (overrides global) |
| `git config --global init.defaultBranch main` | Make `main` the default branch name |
| `git config --global core.editor "code --wait"` | Use VS Code instead of Vim |
| `git config --list` | Show every config value currently in effect |
| `git config user.email` | Show one specific value |

```bash
git config --global user.name "Ahmed Hassan"
git config --global user.email "ahmed@example.com"

# Different identity for a work project only:
cd work-project
git config --local user.email "ahmed@company.com"
```

> 💡 `--global` = every repo on your computer. `--local` = only the repo you're standing in. Local always wins.

---

## 📦 Git — Starting a Repository

### `git init`

Turns the current folder into a Git repository by creating a hidden `.git` directory.

```bash
mkdir my-project
cd my-project
git init
# Initialized empty Git repository in /home/user/my-project/.git/
```

### `git clone <url>`

Downloads an existing remote repository — including its full history — to your machine.

```bash
git clone https://github.com/username/repo-name.git

# Clone into a folder with a different name:
git clone https://github.com/username/repo-name.git my-folder

# Clone only the latest commit (faster, for big repos):
git clone --depth 1 https://github.com/username/repo-name.git
```

---

## ➕ Git — Staging & Committing

### Staging (`git add`)

Staging is how you choose *exactly* which changes go into the next commit.

| Command | Description |
|---|---|
| `git add <file>` | Stage one specific file |
| `git add .` | Stage everything in the **current directory and below** |
| `git add -A` | Stage **everything in the whole repo** — new, modified, and deleted |
| `git add *` | Stage new and modified files, but **not deletions** (shell expands the `*`) |
| `git add *.txt` | Stage every `.txt` file |
| `git add -p` | Interactively pick **chunks within a file** to stage |

```bash
git add index.html              # one file
git add src/ styles/            # two folders
git add .                       # everything from here down
git add -A                      # everything, everywhere
git add *.css                   # all CSS files
```

> ⚠️ **`git add .` vs `git add -A`:** `.` only picks up changes at or below your current folder. If you're inside `src/` and something changed in `docs/`, `git add .` will miss it — `git add -A` won't.

### Committing

| Command | Description |
|---|---|
| `git commit` | Commit, opening your editor to write the message |
| `git commit -m "<message>"` | Commit with an inline message |
| `git commit -am "<message>"` | Stage **already-tracked** modified files and commit in one step |
| `git commit --amend -m "<new msg>"` | Rewrite the **last** commit (message and/or contents) |

```bash
git commit -m "Add navbar component"
git commit -m "Fix login redirect bug"

# Shortcut — stage tracked changes and commit together:
git commit -am "Update footer links"

# Forgot a file in the last commit?
git add forgotten-file.js
git commit --amend --no-edit
```

> ⚠️ Don't use `--amend` on commits you've **already pushed** to a shared branch — it rewrites history and confuses everyone else.

### `git status`

Your most-used command. Shows what's changed, what's staged, and which branch you're on.

```bash
git status            # full output
git status -s         # short format:  M = modified, A = added, ?? = untracked
```

---

## 🗑️ Git — Removing & Undoing

### Removing files

| Command | Description |
|---|---|
| `git rm <file>` | Delete the file **and** stage the deletion |
| `git rm -f <file>` | Force delete even if the file has unsaved changes |
| `git rm --cached <file>` | **Stop tracking** the file but keep it on disk |
| `git rm -r <folder>` | Delete a folder and everything inside it (`-r` = recursive) |

```bash
git rm old-notes.txt
git rm -r legacy/

# Committed a secret by mistake? Untrack it but keep the file locally:
git rm --cached .env
echo ".env" >> .gitignore
git commit -m "Stop tracking .env"
```

> 💡 Your notes said `git rm "folder"` removes the folder but not its contents — in practice plain `git rm` **refuses** to touch a directory at all. You need `-r`.

### Undoing — `reset` vs `restore` vs `revert`

| Command | Description |
|---|---|
| `git reset` | Unstage everything (files and changes stay safe) |
| `git reset <file>` | Unstage one file |
| `git reset HEAD~` | Undo the **last commit**, keep the changes staged |
| `git reset --soft HEAD~` | Undo the last commit, keep changes **staged** |
| `git reset --mixed HEAD~` | Undo the last commit, keep changes **unstaged** (default) |
| `git reset --hard HEAD~` | Undo the last commit and **throw the changes away** ⚠️ |
| `git restore <file>` | Discard uncommitted changes in a file — back to last commit |
| `git restore .` | Discard uncommitted changes across the whole repo |
| `git restore --staged <file>` | Unstage a file (the modern replacement for `git reset <file>`) |
| `git revert <commit>` | Undo a commit by creating a **new** commit that reverses it |

```bash
git reset                         # unstage everything
git restore --staged index.html   # unstage one file
git restore index.html            # discard my edits to index.html
git restore .                     # discard all my edits ⚠️

git reset --hard                  # nuke all uncommitted changes ⚠️
git reset HEAD~                   # undo last commit, keep the work

git revert a1b2c3d                # safely undo a pushed commit
```

> ⚠️ **`reset` vs `revert` — the key difference:**
> - `git reset` **rewrites history** — the commit disappears. Fine for local work, dangerous for pushed commits.
> - `git revert` **adds history** — the old commit stays, and a new one undoes it. This is the safe choice on shared branches.

> 🆘 **Accidentally reset too far?** `git reflog` shows every position `HEAD` has been in — you can usually recover.

---

## 🔍 Git — Inspecting History

| Command | Description |
|---|---|
| `git log` | Full commit history (press `q` to exit) |
| `git log --oneline` | One compact line per commit |
| `git log --oneline --graph --all` | Visual branch graph |
| `git log -n 5` | Last 5 commits only |
| `git log --author="Ahmed"` | Commits by one person |
| `git log <file>` | History of a single file |
| `git show <commit>` | Full details and diff of one commit |
| `git diff` | Unstaged changes vs. last commit |
| `git diff --staged` | Staged changes vs. last commit |
| `git diff <branch1> <branch2>` | Compare two branches |
| `git diff <commit1> <commit2>` | Compare two commits |
| `git blame <file>` | Who last changed each line |
| `git reflog` | Every move `HEAD` has made — your undo safety net |

```bash
git log --oneline
# a1b2c3d Add navbar component
# e4f5g6h Fix login redirect bug
# i7j8k9l Initial commit

git log --oneline --graph --all     # see how branches diverged
git diff main feature-login         # what's different between branches
git show a1b2c3d                    # inspect one commit closely
```

---

## 🌿 Git — Branching & Merging

A branch is an independent line of work. The default branch is usually called **`main`** (older repos use **`master`**). Branching lets you build a feature without touching working code.

| Command | Description |
|---|---|
| `git branch` | List local branches (`*` marks the current one) |
| `git branch -a` | List local **and** remote branches |
| `git branch <name>` | Create a branch (doesn't switch to it) |
| `git checkout <name>` | Switch to a branch |
| `git checkout -b <name>` | Create **and** switch in one step ✅ |
| `git switch <name>` | Switch branches (modern, clearer alternative) |
| `git switch -c <name>` | Create and switch (modern equivalent of `checkout -b`) |
| `git checkout <commit>` | Jump to a specific commit (detached HEAD) |
| `git branch -d <name>` | Delete a **merged** branch |
| `git branch -D <name>` | Force-delete a branch even if unmerged ⚠️ |
| `git branch -m <new>` | Rename the current branch |
| `git merge <branch>` | Merge another branch **into the one you're on** |

```bash
git branch                          # where am I?
git checkout -b feature-login       # create + switch

# ...do work, add, commit...

git checkout main                   # go back to main
git merge feature-login             # bring the feature in
git branch -d feature-login         # clean up
```

> ⚠️ **Direction matters.** `git merge X` pulls X *into your current branch*. To get your feature into `main`, you must first `checkout main`, then `merge feature-login`.

---

## 💥 Merge Conflicts

### What is a merge conflict?

A conflict happens when **two branches changed the same lines of the same file**, and Git can't decide which version is correct. Rather than guessing, Git stops and asks you.

Git handles most merges automatically. Conflicts only occur on genuinely overlapping edits.

### What it looks like

```
$ git merge feature-login
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Open the file and you'll see **conflict markers**:

```html
<<<<<<< HEAD
<h1>Welcome to My Site</h1>
=======
<h1>Welcome Back!</h1>
>>>>>>> feature-login
```

| Marker | Meaning |
|---|---|
| `<<<<<<< HEAD` | Start of **your current branch's** version |
| `=======` | The divider between the two versions |
| `>>>>>>> feature-login` | End of the **incoming branch's** version |

### How to resolve it

**1.** See which files are conflicted:
```bash
git status
```

**2.** Open each file and edit it into the version you actually want. You can keep either side, or combine them — but **delete all three markers** (`<<<<<<<`, `=======`, `>>>>>>>`).

```html
<h1>Welcome Back to My Site!</h1>
```

**3.** Stage the resolved files:
```bash
git add index.html
```

**4.** Complete the merge:
```bash
git commit -m "Merge feature-login, resolve heading conflict"
```

### Escape hatches

| Command | Description |
|---|---|
| `git merge --abort` | Cancel the merge entirely, back to before you started |
| `git checkout --ours <file>` | Keep **your branch's** version of the file |
| `git checkout --theirs <file>` | Keep the **incoming branch's** version |
| `git diff` | See exactly what's conflicting |

### Avoiding conflicts

- Pull from `main` often so your branch doesn't drift far
- Keep branches short-lived and focused on one thing
- Coordinate so two people aren't rewriting the same file
- Commit in small, logical pieces

---

## 🌐 Git — Remotes (Push / Pull / Fetch)

A **remote** is a hosted copy of your repo. The default remote is named **`origin`**.

| Command | Description |
|---|---|
| `git remote -v` | List remotes and their URLs |
| `git remote add origin <url>` | Connect your local repo to a remote |
| `git remote remove origin` | Disconnect a remote |
| `git remote set-url origin <url>` | Change a remote's URL |
| `git push` | Upload commits to the remote |
| `git push origin <branch>` | Push a specific branch |
| `git push -u origin <branch>` | Push and set upstream (then plain `git push` works forever after) |
| `git push --all origin` | Push **all** local branches |
| `git push origin --delete <branch>` | Delete a branch on the remote |
| `git fetch` | Download remote changes but **don't merge** them |
| `git pull` | Download **and** merge (`pull` = `fetch` + `merge`) |
| `git pull --rebase` | Download and rebase instead of merging (cleaner history) |

### Connecting a new local repo to GitHub

```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

### Everyday flow

```bash
git pull origin main            # get the latest before you start
# ...work...
git add -A
git commit -m "Add contact form"
git push origin main
```

> 💡 **`fetch` vs `pull`:** `git fetch` is a safe look-before-you-leap — it downloads changes so you can inspect them with `git log origin/main` before integrating. `git pull` fetches **and** merges immediately. When unsure, fetch first.

---

## 📥 Git — Stashing

`git stash` **temporarily shelves** your unfinished work so you can switch branches or pull without committing half-done code.

| Command | Description |
|---|---|
| `git stash` | Stash your current uncommitted changes |
| `git stash -u` | Also stash **untracked** (new) files |
| `git stash save "<message>"` | Stash with a descriptive label |
| `git stash list` | Show all stashes |
| `git stash pop` | Apply the most recent stash and **remove** it from the list |
| `git stash apply` | Apply the most recent stash and **keep** it in the list |
| `git stash pop stash@{2}` | Apply and remove a specific stash |
| `git stash apply stash@{2}` | Apply and keep a specific stash |
| `git stash show -p stash@{0}` | Preview what a stash contains |
| `git stash drop stash@{0}` | Delete one specific stash |
| `git stash clear` | Delete **all** stashes ⚠️ |

```bash
# Mid-feature and urgently need to fix something on main:
git stash save "half-done navbar"
git checkout main
# ...fix the bug, commit, push...
git checkout feature-navbar
git stash pop                   # pick up right where you left off

git stash list
# stash@{0}: On feature-navbar: half-done navbar
# stash@{1}: On main: experimenting with colors
```

> 💡 **`pop` vs `apply`** — `pop` is like **cut** (applies and removes from the stash list); `apply` is like **copy** (applies but leaves the stash in place, so you can reuse it on another branch).

> 📝 **Correction to your original notes:** there is no `git stash apply .` for restoring all stashes at once. To apply several, run `git stash apply` repeatedly, or reference them individually with `stash@{n}`. Also, `git stash drop` deletes *one* stash — the command that wipes the entire list is `git stash clear`.

---

## 🔄 Git — Rebase

`git rebase` takes your branch's commits and **replays them on top of** another branch, producing a straight, linear history instead of a merge commit.

| Command | Description |
|---|---|
| `git rebase <branch>` | Replay your commits on top of `<branch>` |
| `git rebase -i HEAD~3` | Interactively edit/squash/reorder the last 3 commits |
| `git rebase --continue` | Continue after resolving a conflict |
| `git rebase --abort` | Cancel and go back to how things were |
| `git rebase --skip` | Skip the current commit and continue |

```bash
git checkout feature-login
git rebase main                 # replay my work on top of latest main
git checkout main
git merge feature-login         # now it's a clean fast-forward
```

### Merge vs Rebase

```
MERGE  →  keeps both timelines, adds a merge commit
          main:    A───B───────M
                        \     /
          feature:       C───D

REBASE →  rewrites your commits on top, one straight line
          main:    A───B───C'───D'
```

| | `git merge` | `git rebase` |
|---|---|---|
| History | Preserved exactly, with a merge commit | Rewritten into a straight line |
| Readability | Can get tangled on busy repos | Clean and linear |
| Safety | Safe on shared branches ✅ | Only safe on **your own** branches ⚠️ |

> 🚨 **The golden rule of rebasing:** never rebase commits that other people have already pulled. Rewriting shared history breaks everyone else's clone.

---

## 🤝 Pull Requests & Collaboration

### What is a Pull Request?

A **Pull Request (PR)** — called a *Merge Request* on GitLab — is a proposal: *"I've made these changes on my branch. Please review them and merge them into `main`."*

A PR is a **GitHub/GitLab feature, not a Git command**. Git handles branches and commits; the PR is the review conversation layered on top.

**Why PRs exist:**
- Someone reviews the code before it reaches `main`
- Automated tests and checks run first
- The discussion is recorded permanently alongside the change
- `main` stays stable and deployable

### The standard team workflow

```bash
# 1. Start from an up-to-date main
git checkout main
git pull origin main

# 2. Branch for your task
git checkout -b feature/user-profile

# 3. Work in small, clear commits
git add -A
git commit -m "Add user profile page layout"
git commit -m "Wire up profile data fetching"

# 4. Push your branch to the remote
git push -u origin feature/user-profile

# 5. Open a Pull Request on GitHub
#    → Compare & pull request → describe it → Create

# 6. Address review feedback
git add -A
git commit -m "Address review: extract avatar component"
git push                       # the PR updates automatically

# 7. After it's merged, clean up
git checkout main
git pull origin main
git branch -d feature/user-profile
```

### Branch naming conventions

| Prefix | Use for | Example |
|---|---|---|
| `feature/` | New functionality | `feature/dark-mode` |
| `fix/` or `bugfix/` | Bug fixes | `fix/login-redirect` |
| `hotfix/` | Urgent production fixes | `hotfix/payment-crash` |
| `docs/` | Documentation only | `docs/update-readme` |
| `refactor/` | Restructuring, no behaviour change | `refactor/auth-service` |
| `chore/` | Dependencies, config, tooling | `chore/bump-eslint` |

### Writing a good PR

**Title** — short and specific: `Add dark mode toggle to settings page`

**Description** — cover:
- *What* changed and *why*
- How to test it
- Screenshots for UI changes
- `Closes #42` to auto-close the linked issue

**Keep it small.** A 200-line PR gets a real review. A 2,000-line PR gets a rubber stamp.

### The fork workflow (contributing to someone else's project)

You usually can't push directly to a repo you don't own, so:

```bash
# 1. Click "Fork" on GitHub — you now have your own copy

# 2. Clone YOUR fork
git clone https://github.com/YOUR-USERNAME/the-project.git
cd the-project

# 3. Add the ORIGINAL repo as a second remote, named "upstream"
git remote add upstream https://github.com/ORIGINAL-OWNER/the-project.git
git remote -v
# origin    https://github.com/YOUR-USERNAME/the-project.git
# upstream  https://github.com/ORIGINAL-OWNER/the-project.git

# 4. Branch, work, commit
git checkout -b fix/typo-in-readme
git commit -am "Fix typo in installation section"

# 5. Push to YOUR fork
git push -u origin fix/typo-in-readme

# 6. Open a PR from your fork → the original repo
```

**Keeping your fork current:**

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

### Collaboration etiquette

| Do ✅ | Avoid ❌ |
|---|---|
| Pull before you start working | Committing directly to `main` on a team repo |
| Write descriptive commit messages | `git commit -m "fix"` / `"stuff"` / `"asdf"` |
| Keep PRs small and focused | One giant PR touching everything |
| Review others' PRs promptly | Force-pushing to shared branches |
| Resolve conflicts on **your** branch | Committing secrets, `.env`, or `node_modules` |
| Delete branches after merging | Leaving dozens of stale branches around |

### Good commit messages

Use the imperative mood, as if completing the sentence *"This commit will…"*:

```
✅ Add password reset flow
✅ Fix crash when cart is empty
✅ Update README with setup steps
✅ Refactor auth middleware for clarity

❌ added stuff
❌ fixes
❌ asdfasdf
❌ FINAL VERSION 3 (real final)
```

**Conventional Commits** (popular in teams):

```
feat: add dark mode toggle
fix: prevent double form submission
docs: clarify install steps
style: format with prettier
refactor: split UserCard into subcomponents
test: add cases for login validation
chore: upgrade dependencies
```

---

## 🚫 .gitignore

A `.gitignore` file tells Git which files to **never track** — dependencies, build output, secrets, OS clutter.

```bash
touch .gitignore        # Linux / macOS / Git Bash
type nul > .gitignore   # Windows CMD
```

Example:

```gitignore
# Dependencies
node_modules/
vendor/

# Environment & secrets
.env
.env.local
*.key

# Build output
dist/
build/
*.log

# OS files
.DS_Store
Thumbs.db

# Editor settings
.vscode/
.idea/
```

> ⚠️ `.gitignore` only affects **untracked** files. If something is already committed, untrack it first:
> ```bash
> git rm --cached .env
> git commit -m "Stop tracking .env"
> ```

---

## ⚡ Quick Cheat Sheet

```bash
# ── Setup ─────────────────────────────────────────
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# ── Start ─────────────────────────────────────────
git init                         # new repo here
git clone <url>                  # copy an existing repo

# ── Daily loop ────────────────────────────────────
git status                       # what's going on?
git add .                        # stage changes
git commit -m "message"          # save a snapshot
git push                         # upload
git pull                         # download + merge

# ── Branching ─────────────────────────────────────
git branch                       # list branches
git checkout -b feature-x        # create + switch
git checkout main                # switch back
git merge feature-x              # merge into current branch
git branch -d feature-x          # delete merged branch

# ── Inspect ───────────────────────────────────────
git log --oneline --graph --all
git diff
git show <commit>

# ── Undo ──────────────────────────────────────────
git restore <file>               # discard edits
git restore --staged <file>      # unstage
git reset HEAD~                  # undo last commit, keep work
git revert <commit>              # safely undo a pushed commit
git reflog                       # find anything you "lost"

# ── Stash ─────────────────────────────────────────
git stash                        # shelve work
git stash pop                    # bring it back

# ── Escape Vim ────────────────────────────────────
# Esc  →  :wq  →  Enter
```

---

## 🙏 Credits & Resources

Thanks to **freeCodeCamp** and **The Odin Project** — the reason all of this got learned in the first place.

- 📺 [freeCodeCamp — Git & GitHub Crash Course](https://youtu.be/mAFoROnOfHs?si=qtgZfHt3KQAbWbaM)
- 📘 [The Odin Project — Git Basics](https://www.theodinproject.com/lessons/foundations-git-basics)
- 📗 [Pro Git Book (free)](https://git-scm.com/book/en/v2)
- 📙 [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- 🕹️ [Learn Git Branching (interactive)](https://learngitbranching.js.org/)
