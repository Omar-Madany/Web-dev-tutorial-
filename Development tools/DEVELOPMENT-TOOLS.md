# 🛠️ Development Tools

> The everyday tools every developer uses — what they are, why they exist, and how to actually use them.

---

## 📑 Table of Contents

1. [Code Editors](#-code-editors)
2. [Visual Studio Code](#-visual-studio-code)
3. [Command Line / Terminal](#-command-line--terminal)
4. [Files & Directories](#-files--directories)
5. [Package Managers](#-package-managers)
6. [Node.js & npm](#-nodejs--npm)
7. [Developer Tools (DevTools)](#-developer-tools-devtools)
8. [A Typical Setup](#-a-typical-setup)

---

## ✏️ Code Editors

A **code editor** is a text editor built specifically for writing code.

### Why not just use Notepad or Word?

| Feature | What it gives you |
|---|---|
| **Syntax highlighting** | Colours code by meaning — typos become visible |
| **Autocomplete** | Suggests names as you type |
| **Error detection** | Underlines mistakes before you run anything |
| **File explorer** | Navigate a whole project in a sidebar |
| **Extensions** | Add language support, formatters, themes |
| **Integrated terminal** | Run commands without leaving the editor |
| **Git integration** | See and commit changes visually |

> ⚠️ Never write code in Microsoft Word. It adds invisible formatting and "smart quotes" that break your code.

### Editor vs IDE

| | **Code Editor** | **IDE** |
|---|---|---|
| Full name | — | Integrated Development Environment |
| Weight | Light and fast | Heavy, does everything |
| Setup | Add what you need | Batteries included |
| Examples | VS Code, Sublime, Neovim | IntelliJ IDEA, Visual Studio, Xcode |

### Popular editors

| Editor | Notes |
|---|---|
| **VS Code** | Free, huge extension ecosystem — the most common choice |
| **Sublime Text** | Extremely fast and lightweight |
| **Neovim** | Terminal-based, keyboard-driven, steep learning curve |
| **WebStorm** | Full IDE for JavaScript, paid |
| **Zed** | Newer, built for speed and collaboration |

---

## 💙 Visual Studio Code

**VS Code** is a free, open-source editor from Microsoft. It's the default recommendation for most beginners and most professionals.

👉 [Download VS Code](https://code.visualstudio.com/)

### The interface

```
┌──────┬────────────────┬─────────────────────────────┐
│      │                │                             │
│ Act- │   Sidebar      │       Editor area           │
│ ivity│   (files,      │       (your code)           │
│ Bar  │    search,     │                             │
│      │    git…)       ├─────────────────────────────┤
│      │                │       Terminal / Panel      │
└──────┴────────────────┴─────────────────────────────┘
                     Status Bar
```

| Area | Purpose |
|---|---|
| **Activity Bar** | Switch between Explorer, Search, Git, Debug, Extensions |
| **Sidebar** | Contents of whatever you selected in the Activity Bar |
| **Editor** | Where you write code — supports split views and tabs |
| **Panel** | Terminal, problems, output, debug console |
| **Status Bar** | Branch name, errors, language, cursor position |

### Essential shortcuts

> On macOS, swap `Ctrl` for `Cmd`.

| Shortcut | Action |
|---|---|
| `Ctrl + Shift + P` | **Command Palette** — access every command ⭐ |
| `Ctrl + P` | Quick-open a file by name |
| `Ctrl + \`` | Toggle the integrated terminal |
| `Ctrl + B` | Toggle the sidebar |
| `Ctrl + S` | Save |
| `Ctrl + /` | Comment / uncomment the current line |
| `Alt + ↑ / ↓` | Move the current line up or down |
| `Shift + Alt + ↓` | Duplicate the current line |
| `Ctrl + D` | Select the next occurrence of the selection |
| `Alt + Click` | Add another cursor — multi-cursor editing |
| `Ctrl + F` | Find in this file |
| `Ctrl + Shift + F` | Find across the whole project |
| `Ctrl + \` | Split the editor |
| `F2` | Rename a symbol everywhere at once |

> 💡 If you learn only one, learn `Ctrl + Shift + P`. Every feature is reachable from there.

### Useful extensions

| Extension | What it does |
|---|---|
| **Prettier** | Auto-formats your code on save |
| **ESLint** | Flags JavaScript mistakes and bad patterns |
| **Live Server** | Serves your HTML and auto-reloads on save |
| **GitLens** | Rich Git history right inside the editor |
| **Auto Rename Tag** | Renames the closing HTML tag with the opening one |
| **Path Intellisense** | Autocompletes file paths |
| **Error Lens** | Shows errors inline instead of only on hover |
| **Material Icon Theme** | File-type icons in the explorer |

### Handy settings

Open with `Ctrl + Shift + P` → **Preferences: Open User Settings (JSON)**

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "editor.minimap.enabled": false,
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```

---

## ⌨️ Command Line / Terminal

The **terminal** lets you control your computer by typing commands instead of clicking.

### Why bother?

- Many dev tools have **no** graphical interface at all
- It's faster once learned — one line beats twenty clicks
- It's scriptable and repeatable
- Servers usually have no desktop, only a terminal

### Terminal vs Shell vs CLI

| Term | What it is |
|---|---|
| **Terminal** | The window you type into |
| **Shell** | The program interpreting your commands (Bash, Zsh, PowerShell) |
| **CLI** | Command Line Interface — the general concept |

### Which terminal to use

| OS | Options |
|---|---|
| **Windows** | Git Bash ✅, PowerShell, Command Prompt, Windows Terminal, WSL |
| **macOS** | Terminal.app, iTerm2 |
| **Linux** | GNOME Terminal, Konsole, Alacritty |

> 💡 **On Windows, use Git Bash.** It gives you the same Unix-style commands as macOS and Linux, so tutorials and server work translate directly.

### Reading the prompt

```
ahmed@laptop:~/projects/my-app$
└─┬─┘ └─┬──┘ └──────┬───────┘└┬┘
  │     │           │         └─ Prompt symbol ($ = user, # = root)
  │     │           └─────────── Current directory (~ = home)
  │     └─────────────────────── Computer name
  └───────────────────────────── Your username
```

### Survival commands

| Command | Windows CMD | Unix / Git Bash |
|---|---|---|
| List files | `dir` | `ls` |
| List all, detailed | `dir /a` | `ls -la` |
| Where am I? | `cd` | `pwd` |
| Change directory | `cd folder` | `cd folder` |
| Go up one level | `cd ..` | `cd ..` |
| Go home | `cd %USERPROFILE%` | `cd ~` |
| Make a directory | `mkdir name` | `mkdir name` |
| Create a file | `type nul > file.txt` | `touch file.txt` |
| Show a file | `type file.txt` | `cat file.txt` |
| Delete a file | `del file.txt` | `rm file.txt` |
| Delete a folder | `rmdir /s /q folder` | `rm -rf folder` |
| Copy | `copy a b` | `cp a b` |
| Move / rename | `move a b` | `mv a b` |
| Clear the screen | `cls` | `clear` |
| Exit | `exit` | `exit` |

### Time-savers

| Key | What it does |
|---|---|
| `Tab` | Autocomplete a file or folder name ⭐ |
| `↑` / `↓` | Scroll through previous commands |
| `Ctrl + C` | Stop whatever is running |
| `Ctrl + L` | Clear the screen |
| `Ctrl + R` | Search your command history |
| `q` | Exit a paged view (`git log`, `less`) |

> 💡 **Use Tab constantly.** Type the first few letters and press Tab — it completes the rest and prevents typos.

---

## 📁 Files & Directories

### Paths

| Type | Meaning | Example |
|---|---|---|
| **Absolute** | Full path from the root | `C:\Users\Ahmed\project` · `/home/ahmed/project` |
| **Relative** | Path from where you are now | `./src/index.js` |

| Symbol | Meaning |
|---|---|
| `.` | Current directory |
| `..` | Parent directory |
| `~` | Your home directory (Unix) |
| `/` | Root of the filesystem (Unix) |

```bash
cd ./src            # into src, from here
cd ../..            # up two levels
cd ~/projects       # into projects, from home
```

> ⚠️ Windows uses backslashes (`C:\Users`), Unix uses forward slashes (`/home`). In code, always prefer forward slashes — they work almost everywhere.

### File extensions

| Extension | What it is |
|---|---|
| `.html` | Web page structure |
| `.css` | Styling |
| `.js` | JavaScript |
| `.json` | Structured data / config |
| `.md` | Markdown — docs and READMEs |
| `.py` | Python |
| `.env` | Secret environment variables ⚠️ never commit |
| `.gitignore` | Files Git should ignore |

### Hidden files

Files starting with a dot (`.git`, `.env`, `.gitignore`) are hidden by default.

```bash
ls -la              # Unix / Git Bash — show them
dir /a              # Windows CMD — show them
```

### A typical project layout

```
my-project/
├── .git/                 ← Git's history (don't touch)
├── .gitignore            ← what Git should ignore
├── node_modules/         ← installed packages (never commit)
├── src/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── package.json          ← project config & dependencies
├── package-lock.json     ← exact versions installed
└── README.md             ← what this project is
```

### Naming conventions

| Style | Looks like | Used for |
|---|---|---|
| **kebab-case** | `user-profile.js` | Files, folders, URLs ✅ |
| **camelCase** | `userProfile` | JavaScript variables |
| **PascalCase** | `UserProfile.jsx` | Components, classes |
| **snake_case** | `user_profile.py` | Python |

> 💡 Avoid spaces in filenames — they force you to quote paths on the command line. Use hyphens instead.

---

## 📦 Package Managers

A **package manager** downloads and manages the code libraries your project depends on.

### The problem it solves

Without one, you'd manually download every library, track its version, find its dependencies, download those too, and repeat every time something updates. A package manager does all of that with one command.

### What it handles

| Job | Meaning |
|---|---|
| **Install** | Fetch a package and put it in your project |
| **Dependencies** | Automatically install what your packages depend on |
| **Versioning** | Track exactly which versions you're using |
| **Updates** | Upgrade packages safely |
| **Scripts** | Store reusable commands for the project |

### By language

| Language | Package manager |
|---|---|
| JavaScript | npm, yarn, pnpm |
| Python | pip, poetry |
| PHP | Composer |
| Ruby | RubyGems / Bundler |
| Rust | Cargo |
| Java | Maven, Gradle |

### System package managers

These install *programs* on your machine, not project libraries:

| OS | Manager | Example |
|---|---|---|
| Windows | winget / Chocolatey | `winget install Git.Git` |
| macOS | Homebrew | `brew install node` |
| Ubuntu / Debian | apt | `sudo apt install nodejs` |

---

## 🟢 Node.js & npm

### Node.js

**Node.js** lets you run JavaScript **outside the browser** — on your computer or on a server.

Before Node, JavaScript only worked inside web pages. Node made it possible to build servers, CLI tools, and build systems in JavaScript.

👉 [Download Node.js](https://nodejs.org/) — take the **LTS** (Long Term Support) version.

```bash
node --version      # v22.11.0
npm --version       # 10.9.0
```

Run a JavaScript file:

```bash
node app.js
```

### npm

**npm** (Node Package Manager) comes bundled with Node. It's the world's largest software registry.

### Essential npm commands

| Command | What it does |
|---|---|
| `npm init` | Create a `package.json`, asking questions |
| `npm init -y` | Create one instantly with defaults ✅ |
| `npm install` | Install everything listed in `package.json` |
| `npm install <pkg>` | Install a package and save it as a dependency |
| `npm install -D <pkg>` | Install as a **dev** dependency (tools, not shipped code) |
| `npm install -g <pkg>` | Install globally, available system-wide |
| `npm uninstall <pkg>` | Remove a package |
| `npm update` | Update packages within their allowed version ranges |
| `npm list` | Show what's installed |
| `npm outdated` | Show which packages have newer versions |
| `npm run <script>` | Run a script defined in `package.json` |
| `npx <pkg>` | Run a package **without installing it** |

```bash
mkdir my-app && cd my-app
npm init -y
npm install express
npm install -D nodemon
npm run dev
```

### package.json

The project's ID card — name, version, scripts, and dependencies.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A simple web app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

| Field | Meaning |
|---|---|
| `scripts` | Named shortcuts — run with `npm run <name>` |
| `dependencies` | Packages your app needs to **run** |
| `devDependencies` | Packages only needed while **developing** |

### Version numbers

```
  ^ 4 . 18 . 2
  │ │    │   │
  │ │    │   └─ Patch — bug fixes
  │ │    └───── Minor — new features, backward compatible
  │ └────────── Major — breaking changes
  └──────────── Range symbol
```

| Symbol | Meaning |
|---|---|
| `4.18.2` | Exactly this version |
| `^4.18.2` | Any `4.x.x` — minor and patch updates allowed |
| `~4.18.2` | Any `4.18.x` — patch updates only |

### node_modules & lock files

| File / Folder | What it is |
|---|---|
| `node_modules/` | Where installed packages actually live — can be huge |
| `package-lock.json` | The exact version of every package installed |

> ⚠️ **Never commit `node_modules/`** — add it to `.gitignore`. Anyone can regenerate it by running `npm install`.
>
> ✅ **Do commit `package-lock.json`** — it guarantees teammates get identical versions.

### npm alternatives

| Tool | Notes |
|---|---|
| **yarn** | Faster than old npm, mature |
| **pnpm** | Saves disk space by sharing packages across projects |
| **bun** | Very fast runtime and package manager combined |

---

## 🔧 Developer Tools (DevTools)

**DevTools** are built into every browser. They let you inspect, debug, and measure a live web page.

**Open them with:** `F12` · `Ctrl + Shift + I` · `Cmd + Option + I` (macOS) · or right-click → **Inspect**

### The panels

| Panel | What it's for |
|---|---|
| **Elements** | Inspect and live-edit the HTML and CSS |
| **Console** | See errors, log values, run JavaScript |
| **Sources** | View files, set breakpoints, step through code |
| **Network** | Every request — URL, status, size, timing |
| **Application** | Cookies, local storage, session storage |
| **Performance** | Profile what's making the page slow |
| **Lighthouse** | Audit performance, accessibility, SEO |

### Elements panel

- Click any element to see its HTML and computed CSS
- Edit styles live — changes appear instantly (and disappear on refresh)
- Toggle individual CSS rules with checkboxes
- Hover to highlight the element on the page
- Inspect the box model — margin, border, padding, content

### Console

```javascript
console.log('Hello');              // basic output
console.error('Something broke');  // red error styling
console.warn('Careful');           // yellow warning
console.table(arrayOfObjects);     // display as a table
console.log({ user, cart });       // log labelled variables
```

> 💡 The Console is where JavaScript errors appear. If a page "isn't working," check here first.

### Network panel

| Column | What it tells you |
|---|---|
| **Name** | Which file or endpoint |
| **Status** | `200` OK, `404` not found, `500` server error |
| **Type** | document, script, stylesheet, fetch, image |
| **Size** | How much was downloaded |
| **Time** | How long it took |

Use it to confirm whether an API call actually fired, what it returned, and what's slowing the page down.

### Responsive design mode

`Ctrl + Shift + M` toggles the device toolbar — preview your site at phone and tablet sizes, and throttle the network to simulate slow connections.

---

## 🧰 A Typical Setup

A reasonable starting toolkit:

| Tool | Purpose |
|---|---|
| **VS Code** | Write code |
| **Git + GitHub** | Version control and collaboration |
| **Git Bash** *(Windows)* | Unix-style terminal |
| **Node.js + npm** | Run JavaScript, install packages |
| **Chrome or Firefox** | Browse and debug with DevTools |
| **Prettier** | Auto-format code |
| **Live Server** | Instant preview with auto-reload |

### Verify everything is installed

```bash
git --version
node --version
npm --version
code --version
```

If a command isn't recognised, the tool either isn't installed or isn't on your system `PATH`.

### Starting a new project

```bash
mkdir my-project
cd my-project
git init
npm init -y
echo "node_modules/" > .gitignore
code .
```

> 💡 `code .` opens the current folder in VS Code — a habit worth building.

---

## 📚 Where to Learn More

- 📘 [VS Code documentation](https://code.visualstudio.com/docs)
- 📗 [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)
- 📙 [npm documentation](https://docs.npmjs.com/)
- 📕 [Node.js documentation](https://nodejs.org/docs/latest/api/)
- 🕹️ [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations)
- 📺 [freeCodeCamp](https://www.freecodecamp.org/)
