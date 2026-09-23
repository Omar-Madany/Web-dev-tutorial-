# 📄 HTML — Complete Notes

> HTML is the skeleton of every web page. This guide covers the structure, elements, and habits you need to write clean, semantic HTML.

---

## 📑 Table of Contents

1. [What is HTML?](#-what-is-html)
2. [Anatomy of an Element](#-anatomy-of-an-element)
3. [Document Structure](#-document-structure)
4. [The `<head>`](#-the-head)
5. [Text Elements](#-text-elements)
6. [Links](#-links)
7. [Images & Media](#-images--media)
8. [Lists](#-lists)
9. [Tables](#-tables)
10. [Forms](#-forms)
11. [Semantic HTML](#-semantic-html)
12. [`<div>` vs `<span>`](#-div-vs-span)
13. [Block vs Inline Elements](#-block-vs-inline-elements)
14. [Attributes Reference](#-attributes-reference)
15. [Comments & Entities](#-comments--entities)
16. [Accessibility Basics](#-accessibility-basics)
17. [Common Mistakes](#-common-mistakes)
18. [Quick Cheat Sheet](#-quick-cheat-sheet)
19. [Credits & Resources](#-credits--resources)

---

## 🔰 What is HTML?

**HTML** (HyperText Markup Language) is not a programming language — it's a **markup language**. It doesn't calculate or make decisions; it describes the **structure and meaning** of content, so browsers know what to show and how.

```
HyperText  →  text that links to other text (the "Web" in World Wide Web)
Markup     →  tags that label and structure content
Language   →  a defined set of rules browsers understand
```

**The three layers of a web page:**

| Layer | Job | Analogy |
|---|---|---|
| **HTML** | Structure and content | The skeleton |
| **CSS** | Styling and layout | The skin and clothes |
| **JavaScript** | Behaviour and interactivity | The muscles |

HTML alone gives you a plain, unstyled, but fully readable page — try it with any `.html` file and no CSS.

---

## 🧱 Anatomy of an Element

```
   <p class="intro">Hello world</p>
   └┬┘└─────┬──────┘└────┬────┘└┬┘
  opening  attribute   content closing
    tag                          tag
```

| Part | Description |
|---|---|
| **Tag** | The keyword in angle brackets, e.g. `<p>` |
| **Opening tag** | `<p>` — marks the start |
| **Closing tag** | `</p>` — marks the end (note the `/`) |
| **Content** | What sits between the tags |
| **Attribute** | Extra info inside the opening tag, as `name="value"` |
| **Element** | The opening tag + content + closing tag, together |

### Self-closing (void) elements

Some elements hold no content and need no closing tag:

```html
<img src="cat.jpg" alt="A cat">
<br>
<hr>
<input type="text">
<meta charset="UTF-8">
```

| Void elements |
|---|
| `<img>` `<br>` `<hr>` `<input>` `<meta>` `<link>` `<source>` `<area>` |

---

## 🏗️ Document Structure

Every HTML file starts with the same boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>

    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>

</body>
</html>
```

| Line | What it does |
|---|---|
| `<!DOCTYPE html>` | Tells the browser "this is HTML5" — must be the very first line |
| `<html lang="en">` | The root element; `lang` helps screen readers and search engines |
| `<head>` | Metadata — not visible on the page itself |
| `<body>` | Everything the user actually sees |

> 💡 **VS Code shortcut:** in a new `.html` file, type `!` and press `Tab` — it generates this entire boilerplate for you.

### Nesting

Elements go inside other elements, like folders inside folders. Indent consistently so the structure stays readable:

```html
<body>
    <header>
        <h1>My Site</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
</body>
```

> ⚠️ Tags must close in the **reverse order** they opened — `<a><b></a></b>` is invalid; it must be `<a><b></b></a>`.

---

## 🧠 The `<head>`

Everything inside `<head>` describes the page but isn't rendered on it.

| Tag | Purpose | Example |
|---|---|---|
| `<title>` | Text shown in the browser tab | `<title>My Portfolio</title>` |
| `<meta charset>` | Character encoding — always UTF-8 | `<meta charset="UTF-8">` |
| `<meta name="viewport">` | Makes the page responsive on mobile | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta name="description">` | Summary shown in search results | `<meta name="description" content="A portfolio of my work">` |
| `<link>` | Connects external files (CSS, icons) | `<link rel="stylesheet" href="style.css">` |
| `<script>` | Connects or embeds JavaScript | `<script src="app.js"></script>` |
| `<style>` | Inline CSS, written directly in the page | `<style> body { margin: 0; } </style>` |

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ahmed's personal portfolio site">
    <title>Ahmed Hassan — Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico">
</head>
```

> 💡 `<script>` tags are often placed at the **end of `<body>`** instead of in `<head>`, so the page's content loads before the script runs. The modern alternative is `<script src="app.js" defer></script>`, which can stay in `<head>`.

---

## ✍️ Text Elements

### Headings

Six levels, `<h1>` (most important) to `<h6>` (least). Use one `<h1>` per page.

```html
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

> ⚠️ Don't pick a heading level for its font size — that's CSS's job. Pick it for **document structure**; style it separately.

### Paragraphs & line breaks

```html
<p>This is a paragraph of text.</p>
<p>This is another one.</p>

<p>Line one<br>Line two</p>   <!-- <br> forces a line break inside a paragraph -->
```

### Text formatting

| Tag | Meaning | Renders as |
|---|---|---|
| `<strong>` | Strong importance | **bold** |
| `<em>` | Emphasis | *italic* |
| `<b>` | Bold, no extra meaning | **bold** |
| `<i>` | Italic, no extra meaning | *italic* |
| `<mark>` | Highlighted | <mark>highlighted</mark> |
| `<small>` | Fine print | smaller text |
| `<del>` | Deleted / no longer true | ~~strikethrough~~ |
| `<ins>` | Inserted / added | underline |
| `<sub>` | Subscript | H<sub>2</sub>O |
| `<sup>` | Superscript | x<sup>2</sup> |
| `<code>` | Inline code | `code` |
| `<blockquote>` | A quoted block | indented quote |
| `<hr>` | A thematic break | a horizontal line |

```html
<p>Water is <strong>H<sub>2</sub>O</strong>.</p>
<p>Use the <code>fetch()</code> function to make a request.</p>
<blockquote>The best way to predict the future is to invent it.</blockquote>
```

> 💡 **`<strong>`/`<em>` vs `<b>`/`<i>`:** the first pair carries *meaning* (screen readers announce it differently); the second pair is purely visual. Prefer `<strong>`/`<em>` in most cases.

### `<pre>` — preformatted text

Preserves exactly the whitespace and line breaks you write — used for code blocks.

```html
<pre>
function greet() {
    console.log("Hello");
}
</pre>
```

---

## 🔗 Links

```html
<a href="https://example.com">Visit Example</a>
```

| Attribute | Purpose | Example |
|---|---|---|
| `href` | The destination | `href="https://example.com"` |
| `target="_blank"` | Open in a new tab | always pair with `rel="noopener"` |
| `rel="noopener"` | Security — prevents the new tab from controlling this one | used with `target="_blank"` |
| `download` | Downloads the file instead of navigating | `<a href="file.pdf" download>` |

### Types of links

```html
<!-- External site -->
<a href="https://github.com">GitHub</a>

<!-- Relative — another page on your own site -->
<a href="about.html">About</a>
<a href="pages/contact.html">Contact</a>

<!-- Jump to a section on the same page -->
<a href="#contact">Jump to Contact</a>
<h2 id="contact">Contact</h2>

<!-- Email link -->
<a href="mailto:ahmed@example.com">Email me</a>

<!-- Phone link -->
<a href="tel:+201234567890">Call me</a>

<!-- New tab, safely -->
<a href="https://example.com" target="_blank" rel="noopener">Open in new tab</a>
```

> ⚠️ Never write `<a href="#">Click here</a>` with no real destination — it's meaningless to a screen reader and dead-ends the user.

---

## 🖼️ Images & Media

### Images

```html
<img src="cat.jpg" alt="A ginger cat sleeping on a windowsill" width="400" height="300">
```

| Attribute | Purpose |
|---|---|
| `src` | Path to the image file |
| `alt` | Text description — **required**, used by screen readers and shown if the image fails to load |
| `width` / `height` | Reserve space before the image loads, preventing layout shift |

> ⚠️ Never skip `alt`. For purely decorative images, use `alt=""` (empty, but present) so screen readers skip it silently.

### Image paths

```html
<img src="images/photo.jpg" alt="…">          <!-- relative: subfolder -->
<img src="../assets/logo.png" alt="…">        <!-- relative: up one level -->
<img src="https://example.com/pic.jpg" alt="…"> <!-- absolute: full URL -->
```

### Audio & Video

```html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser doesn't support audio.
</audio>

<video controls width="600">
    <source src="movie.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>
```

| Attribute | Purpose |
|---|---|
| `controls` | Shows play/pause/volume UI |
| `autoplay` | Starts automatically (often blocked by browsers unless also `muted`) |
| `loop` | Repeats when it ends |
| `muted` | Starts silent |

### Embedding another page

```html
<iframe src="https://www.google.com/maps/embed?..." width="600" height="450"></iframe>
```

---

## 📋 Lists

### Unordered (bullets)

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```
- HTML
- CSS
- JavaScript

### Ordered (numbered)

```html
<ol>
    <li>Preheat the oven</li>
    <li>Mix the ingredients</li>
    <li>Bake for 20 minutes</li>
</ol>
```
1. Preheat the oven
2. Mix the ingredients
3. Bake for 20 minutes

```html
<ol type="A">   <!-- A, B, C… -->
<ol type="i">   <!-- i, ii, iii… -->
<ol start="5">  <!-- starts counting at 5 -->
<ol reversed>   <!-- counts down -->
```

### Description list

For term–definition pairs:

```html
<dl>
    <dt>HTML</dt>
    <dd>The markup language that structures web pages.</dd>

    <dt>CSS</dt>
    <dd>The language that styles web pages.</dd>
</dl>
```

### Nested lists

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>
```

---

## 🧮 Tables

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ahmed</td>
            <td>Developer</td>
        </tr>
        <tr>
            <td>Sara</td>
            <td>Designer</td>
        </tr>
    </tbody>
</table>
```

| Tag | Purpose |
|---|---|
| `<table>` | The table itself |
| `<thead>` | Header section |
| `<tbody>` | Body section |
| `<tfoot>` | Footer section (totals, notes) |
| `<tr>` | Table **r**ow |
| `<th>` | Header cell (bold, centred by default) |
| `<td>` | Regular data cell |

### Merging cells

```html
<td colspan="2">Spans two columns</td>
<td rowspan="2">Spans two rows</td>
```

> ⚠️ **Tables are for tabular data — never for page layout.** Using tables to arrange a whole page (a common practice in the 2000s) breaks on mobile and confuses screen readers. Use CSS Grid or Flexbox for layout instead.

---

## 📝 Forms

Forms collect input and send it somewhere — usually to a backend server.

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Send</button>
</form>
```

| Attribute (on `<form>`) | Purpose |
|---|---|
| `action` | The URL the data is sent to |
| `method` | `GET` (data in the URL, for searches) or `POST` (data in the body, for submissions) |

### `<label>` + `<input>`

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

The `for` on `<label>` must match the `id` on `<input>` — clicking the label then focuses the input, which helps everyone, especially screen reader and mobile users.

### Common input types

| Type | Used for |
|---|---|
| `text` | Plain text |
| `email` | Validates an email shape |
| `password` | Masks the characters typed |
| `number` | Numeric input, with up/down arrows |
| `tel` | Phone number (shows a numeric keypad on mobile) |
| `date` | A date picker |
| `checkbox` | Multiple choices, any number selected |
| `radio` | Multiple choices, only one selected |
| `file` | Upload a file |
| `submit` | The submit button |
| `search` | A search box |
| `hidden` | Sent with the form but never shown |

```html
<input type="checkbox" id="terms" name="terms">
<label for="terms">I agree to the terms</label>

<input type="radio" id="light" name="theme" value="light">
<label for="light">Light</label>
<input type="radio" id="dark" name="theme" value="dark">
<label for="dark">Dark</label>
```

> 💡 Radio buttons in the same group must share the same `name` so only one can be selected at a time.

### `<textarea>` and `<select>`

```html
<label for="bio">Bio:</label>
<textarea id="bio" name="bio" rows="4" cols="30"></textarea>

<label for="country">Country:</label>
<select id="country" name="country">
    <option value="eg">Egypt</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
</select>
```

### Validation attributes

```html
<input type="text" required>                  <!-- must be filled -->
<input type="text" minlength="3" maxlength="20">
<input type="number" min="1" max="100">
<input type="text" placeholder="e.g. Ahmed">   <!-- hint text, not a real value -->
<input type="password" pattern=".{8,}" title="At least 8 characters">
```

> ⚠️ `placeholder` is not a label — it disappears once you start typing and shouldn't replace a real `<label>`.

---

## 🏷️ Semantic HTML

**Semantic elements** describe their *meaning*, not just their appearance — `<nav>` says "this is navigation," while `<div>` says nothing at all.

### Why it matters

| Benefit | How |
|---|---|
| **Accessibility** | Screen readers announce regions correctly ("navigation," "main content") |
| **SEO** | Search engines understand your page structure better |
| **Readability** | Other developers (including future you) grasp the layout instantly |
| **Consistency** | Browsers apply sensible default behaviour |

### The main semantic elements

```html
<body>
    <header>
        <h1>My Site</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Blog Post Title</h2>
            <p>Content goes here…</p>
        </article>

        <aside>
            <h3>Related links</h3>
        </aside>
    </main>

    <footer>
        <p>&copy; 2026 My Site</p>
    </footer>
</body>
```

| Tag | Meaning |
|---|---|
| `<header>` | Introductory content — a logo, title, nav |
| `<nav>` | A block of navigation links |
| `<main>` | The primary content of the page — one per page |
| `<article>` | Self-contained content that could stand alone (a post, a product) |
| `<section>` | A thematic grouping of content, usually with its own heading |
| `<aside>` | Tangential content — sidebars, related links |
| `<footer>` | Closing content — copyright, contact, site links |
| `<figure>` + `<figcaption>` | An image (or diagram) with a caption |
| `<time>` | A machine-readable date or time |

```html
<figure>
    <img src="chart.png" alt="Sales chart for 2026">
    <figcaption>Fig 1. Monthly sales, 2026</figcaption>
</figure>

<p>Published on <time datetime="2026-09-23">September 23, 2026</time></p>
```

### `<section>` vs `<div>`

Use `<section>` when the content has its own **heading** and forms a distinct part of the document (like a chapter). Use `<div>` when you just need a container for styling, with no semantic meaning of its own.

---

## 📦 `<div>` vs `<span>`

Both are **generic containers with no meaning** — used purely to group content for styling or scripting.

| | `<div>` | `<span>` |
|---|---|---|
| Display | Block (own line) | Inline (flows with text) |
| Used for | Grouping bigger chunks — sections, cards, layout | Wrapping a small piece of text |

```html
<div class="card">
    <h3>Product Name</h3>
    <p>Some <span class="highlight">important</span> detail.</p>
</div>
```

> 💡 Reach for a semantic tag first (`<nav>`, `<article>`, `<section>`…). Fall back to `<div>` or `<span>` only when nothing semantic fits.

---

## 🧱 Block vs Inline Elements

| | **Block** | **Inline** |
|---|---|---|
| Takes up | The full width, starts on a new line | Only as much space as its content |
| Can contain | Block and inline elements | Usually only other inline elements or text |
| Sizing | `width`/`height` apply | `width`/`height` are ignored |
| Examples | `<div>` `<p>` `<h1>`–`<h6>` `<ul>` `<section>` `<form>` | `<span>` `<a>` `<strong>` `<em>` `<img>` `<button>` |

```html
<!-- Block: each starts on its own line -->
<p>First paragraph.</p>
<p>Second paragraph.</p>

<!-- Inline: flows within the surrounding text -->
<p>This is <strong>bold</strong> and <em>italic</em> in one line.</p>
```

---

## 🏷️ Attributes Reference

Global attributes work on **almost every** HTML element:

| Attribute | Purpose | Example |
|---|---|---|
| `id` | A unique identifier, one per page | `id="main-header"` |
| `class` | A reusable label for styling/scripting, shared across elements | `class="card highlight"` |
| `style` | Inline CSS (use sparingly) | `style="color: red;"` |
| `title` | Tooltip on hover | `title="Click to expand"` |
| `data-*` | Custom data for JavaScript to read | `data-user-id="42"` |
| `hidden` | Hides the element entirely | `hidden` |
| `tabindex` | Controls keyboard tab order | `tabindex="0"` |
| `contenteditable` | Makes content directly editable | `contenteditable="true"` |

### `id` vs `class`

| | `id` | `class` |
|---|---|---|
| Uniqueness | One per page | Reusable on many elements |
| CSS selector | `#name` | `.name` |
| Typical use | A single unique section | Repeated components (cards, buttons) |

```html
<div id="hero" class="section dark-bg">
```

---

## 💬 Comments & Entities

### Comments

Not shown on the page — notes for developers reading the code.

```html
<!-- This is a comment -->
<!-- 
    Multi-line
    comment
-->
```

### HTML entities

Special characters that would otherwise be misread as HTML syntax:

| Entity | Renders as | Meaning |
|---|---|---|
| `&lt;` | < | Less than |
| `&gt;` | > | Greater than |
| `&amp;` | & | Ampersand |
| `&quot;` | " | Quotation mark |
| `&copy;` | © | Copyright |
| `&nbsp;` | (a space) | Non-breaking space |
| `&mdash;` | — | Em dash |

```html
<p>5 &lt; 10 &amp; 10 &gt; 5</p>
<p>&copy; 2026 My Company</p>
```

> ⚠️ You must escape `<` and `&` when you mean them literally, since the browser otherwise reads them as the start of a tag.

---

## ♿ Accessibility Basics

Writing HTML that works for **everyone**, including people using screen readers, keyboards only, or assistive tech.

| Rule | Why |
|---|---|
| Always add `alt` to images | Screen readers need a description |
| Use real `<button>`, not `<div onclick>` | Buttons are keyboard-focusable and announced correctly by default |
| Pair every `<label>` with its `<input>` | Lets users click/tap the label, and lets screen readers name the field |
| Use headings in order (`h1` → `h2` → `h3`) | Screen reader users navigate by heading level |
| Use semantic tags, not endless `<div>`s | Assistive tech announces regions correctly |
| Ensure enough colour contrast | Low contrast is unreadable for many users |
| Make sure everything works with keyboard only | Try tabbing through your page — can you reach everything? |

```html
<!-- ❌ Not accessible -->
<div onclick="submitForm()">Submit</div>

<!-- ✅ Accessible -->
<button type="submit">Submit</button>
```

> 💡 **Quick test:** unplug your mouse and try to use your own page with only `Tab`, `Shift+Tab`, and `Enter`. If you get stuck, so will a keyboard-only user.

---

## ⚠️ Common Mistakes

| Mistake | Why it's a problem | Fix |
|---|---|---|
| Missing `alt` on images | Breaks accessibility and SEO | Always include a description |
| Using `<div>` for everything | No semantic meaning, worse accessibility | Use `<header>`, `<nav>`, `<main>`, etc. |
| Skipping heading levels (`h1` → `h3`) | Confuses document structure | Go in order: `h1` → `h2` → `h3` |
| Forgetting to close tags | Can break layout unpredictably | Always close what you open |
| Using tables for layout | Breaks on mobile, bad for screen readers | Use CSS Grid or Flexbox |
| `<a href="#">` with no destination | Dead link, confuses screen readers | Use a real link or a `<button>` |
| Inline `style=""` everywhere | Hard to maintain, can't be reused | Put styles in a `.css` file |
| Multiple `<h1>` tags | Weakens document structure and SEO | One `<h1>` per page |
| Not using `<label>` with inputs | Form is harder to use and less accessible | Always pair `<label for>` with `id` |

---

## ⚡ Quick Cheat Sheet

```html
<!-- Boilerplate -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>

</body>
</html>

<!-- Text -->
<h1>Heading</h1>  <p>Paragraph</p>  <strong>Bold</strong>  <em>Italic</em>

<!-- Links & images -->
<a href="page.html">Link</a>
<img src="pic.jpg" alt="Description">

<!-- Lists -->
<ul><li>Item</li></ul>
<ol><li>Item</li></ol>

<!-- Table -->
<table><tr><th>Head</th></tr><tr><td>Data</td></tr></table>

<!-- Form -->
<form action="/submit" method="POST">
    <label for="x">Label:</label>
    <input type="text" id="x" name="x" required>
    <button type="submit">Submit</button>
</form>

<!-- Semantic layout -->
<header></header> <nav></nav> <main></main>
<article></article> <section></section> <aside></aside> <footer></footer>

<!-- Comment -->
<!-- note -->
```

---

## 🙏 Credits & Resources

- 📘 [MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- 📗 [MDN — HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- 🕹️ [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations)
- 📙 [W3Schools — HTML](https://www.w3schools.com/html/)
- 📺 [freeCodeCamp](https://www.freecodecamp.org/)
