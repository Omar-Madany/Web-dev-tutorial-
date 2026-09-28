# 🎨 CSS — Complete Notes

> CSS is the styling layer of the Web. This guide covers selectors, the box model, layout with Flexbox and Grid, responsive design, and the habits that keep your stylesheets clean.

---

## 📑 Table of Contents

1. [What is CSS?](#-what-is-css)
2. [Adding CSS to HTML](#-adding-css-to-html)
3. [Syntax](#-syntax)
4. [Selectors](#-selectors)
5. [The Cascade, Specificity & Inheritance](#-the-cascade-specificity--inheritance)
6. [The Box Model](#-the-box-model)
7. [Units](#-units)
8. [Colors](#-colors)
9. [Typography](#-typography)
10. [Backgrounds & Borders](#-backgrounds--borders)
11. [Display](#-display)
12. [Positioning](#-positioning)
13. [Flexbox](#-flexbox)
14. [Grid](#-grid)
15. [Responsive Design](#-responsive-design)
16. [Pseudo-classes & Pseudo-elements](#-pseudo-classes--pseudo-elements)
17. [Transitions, Transforms & Animations](#-transitions-transforms--animations)
18. [CSS Variables](#-css-variables)
19. [Common Mistakes](#-common-mistakes)
20. [Quick Cheat Sheet](#-quick-cheat-sheet)
21. [Credits & Resources](#-credits--resources)

---

## 🔰 What is CSS?

**CSS** (Cascading Style Sheets) controls how HTML elements **look**: colours, fonts, spacing, layout, and animation. HTML says *what* something is; CSS says *how it appears*.

```
Cascading   →  when rules conflict, a defined order decides which one wins
Style       →  visual presentation
Sheets      →  rules live in separate files, reusable across many pages
```

| Layer | Job | Analogy |
|---|---|---|
| **HTML** | Structure and content | The skeleton |
| **CSS** | Styling and layout | The skin and clothes |
| **JavaScript** | Behaviour | The muscles |

**Why separate CSS from HTML?** Change one file and the look of an entire site updates. Multiple pages share one stylesheet.

---

## 🔌 Adding CSS to HTML

| Method | How | When to use |
|---|---|---|
| **External** ✅ | A separate `.css` file linked in `<head>` | Almost always |
| **Internal** | A `<style>` tag inside `<head>` | Small demos, single-page experiments |
| **Inline** | A `style=""` attribute on one element | Rarely, quick one-offs |

### External (recommended)

```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
body {
    font-family: sans-serif;
    margin: 0;
}
```

### Internal

```html
<head>
    <style>
        h1 { color: teal; }
    </style>
</head>
```

### Inline

```html
<p style="color: red; font-size: 20px;">Red text</p>
```

> ⚠️ Inline styles are hard to maintain and override almost everything else. Keep styles in a stylesheet.

---

## ✏️ Syntax

```css
selector {
    property: value;
    property: value;
}
```

```
h1 {                      ← selector: which elements to style
    color: blue;          ← declaration: property + value
    font-size: 32px;      ← each ends with a semicolon
}
```

| Part | Meaning |
|---|---|
| **Selector** | Picks the HTML elements to style |
| **Declaration block** | Everything inside `{ }` |
| **Property** | What you want to change (`color`) |
| **Value** | What you want it changed to (`blue`) |

### Comments

```css
/* This is a CSS comment */
```

### Shorthand and grouping

```css
/* Group selectors that share styles */
h1, h2, h3 {
    font-family: Georgia, serif;
}

/* Shorthand: one property sets several values */
margin: 10px 20px;      /* vertical | horizontal */
```

---

## 🎯 Selectors

Selectors decide **which elements** a rule applies to.

### Basic selectors

| Selector | Targets | Example |
|---|---|---|
| **Type** | All elements of that tag | `p { }` |
| **Class** | Elements with that class | `.card { }` |
| **ID** | The one element with that id | `#header { }` |
| **Universal** | Everything | `* { }` |
| **Attribute** | Elements with a given attribute | `[type="text"] { }` |

```html
<p class="intro">Hello</p>
<div id="hero">…</div>
```

```css
p       { color: gray; }
.intro  { font-size: 18px; }
#hero   { height: 400px; }
```

### Combinators

| Selector | Meaning | Example |
|---|---|---|
| `A B` | **Descendant** — any B inside A | `nav a { }` |
| `A > B` | **Child** — B directly inside A | `ul > li { }` |
| `A + B` | **Adjacent sibling** — B immediately after A | `h1 + p { }` |
| `A ~ B` | **General sibling** — any B after A | `h1 ~ p { }` |
| `A, B` | **Group** — A and B | `h1, h2 { }` |
| `A.B` | **Both** — element A that also has class B | `p.intro { }` |

### Attribute selectors

```css
a[target="_blank"]   { }   /* exact match */
a[href^="https"]     { }   /* starts with */
a[href$=".pdf"]      { }   /* ends with */
a[href*="example"]   { }   /* contains */
```

> 💡 **Prefer classes.** Type selectors are too broad, IDs are too rigid (one per page, and hard to override). Classes are reusable and sit in the sweet spot.

---

## ⚖️ The Cascade, Specificity & Inheritance

When several rules target the same element, CSS needs a way to pick a winner.

### 1. Order of priority

1. **Importance** — `!important` beats normal rules
2. **Specificity** — a more specific selector wins
3. **Source order** — if tied, the **later** rule wins

### 2. Specificity

| Selector type | Weight | Example |
|---|---|---|
| Inline style | Highest | `style="color: red"` |
| ID | High | `#header` |
| Class, attribute, pseudo-class | Medium | `.card`, `[type]`, `:hover` |
| Type, pseudo-element | Low | `p`, `::before` |
| Universal | None | `*` |

```css
p          { color: black; }   /* low */
.intro     { color: blue;  }   /* medium — beats p */
#hero      { color: red;   }   /* high — beats .intro */
```

```html
<p id="hero" class="intro">This text is red.</p>
```

### 3. Inheritance

Some properties **pass down** from parent to children automatically; others don't.

| Inherited ✅ | Not inherited ❌ |
|---|---|
| `color` | `margin` |
| `font-family`, `font-size` | `padding` |
| `line-height` | `border` |
| `text-align` | `background` |
| `visibility` | `width`, `height` |

```css
body { font-family: Arial, sans-serif; }  /* every child now uses Arial */
```

You can force the behaviour with `inherit`, `initial`, or `unset`:

```css
.button { border: inherit; }
```

> ⚠️ **Avoid `!important`.** It breaks the natural cascade and makes future overrides painful. If you need it, the real problem is usually a specificity issue elsewhere.

---

## 📦 The Box Model

**Every HTML element is a rectangular box**, built from four layers, from inside out:

```
┌───────────────────────────────────────┐
│               MARGIN                  │   ← space outside
│   ┌───────────────────────────────┐   │
│   │           BORDER              │   │   ← the edge
│   │   ┌───────────────────────┐   │   │
│   │   │       PADDING         │   │   │   ← space inside
│   │   │   ┌───────────────┐   │   │   │
│   │   │   │    CONTENT    │   │   │   │   ← text, images
│   │   │   └───────────────┘   │   │   │
│   │   └───────────────────────┘   │   │
│   └───────────────────────────────┘   │
└───────────────────────────────────────┘
```

| Layer | Purpose | Property |
|---|---|---|
| **Content** | The actual text or image | `width`, `height` |
| **Padding** | Space between content and border | `padding` |
| **Border** | The line around the padding | `border` |
| **Margin** | Space between this element and others | `margin` |

### Shorthand

```css
margin: 10px;                 /* all four sides */
margin: 10px 20px;            /* top+bottom | left+right */
margin: 10px 20px 30px;       /* top | left+right | bottom */
margin: 10px 20px 30px 40px;  /* top | right | bottom | left  (clockwise) */

margin-top: 10px;             /* individual sides */
margin: 0 auto;               /* centre a block horizontally */
```

> 💡 **Clockwise memory trick:** shorthand starts at the **top** and goes clockwise — **T**op, **R**ight, **B**ottom, **L**eft. ("TRouBLe")

### `box-sizing` — the most important reset

By default, `width` only measures the **content**, and padding and border get added *on top*. That makes sizing unpredictable.

```css
.box { width: 200px; padding: 20px; border: 5px solid black; }
/* Actual width = 200 + 20+20 + 5+5 = 250px  😱 */
```

Fix it so `width` includes padding and border:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
/* Now the box is exactly 200px wide ✅ */
```

> ✅ **Put this at the top of every stylesheet.** Nearly every modern project does.

### Margin collapse

Vertical margins between adjacent block elements **collapse** into the larger one, not the sum:

```css
h1 { margin-bottom: 30px; }
p  { margin-top: 20px; }
/* Gap between them is 30px, not 50px */
```

---

## 📏 Units

### Absolute

| Unit | Meaning |
|---|---|
| `px` | Pixels — fixed size |

### Relative

| Unit | Relative to | Best for |
|---|---|---|
| `%` | Parent element | Widths, fluid layouts |
| `em` | Parent's font size | Spacing that scales with text |
| `rem` | **Root** (`<html>`) font size | Font sizes and spacing ✅ |
| `vw` | 1% of the viewport width | Full-width sections |
| `vh` | 1% of the viewport height | Full-screen sections |
| `ch` | Width of the "0" character | Readable line lengths |
| `fr` | A fraction of free space (Grid only) | Grid columns |

```css
html { font-size: 16px; }    /* default in most browsers */

h1   { font-size: 2rem; }    /* 32px */
p    { font-size: 1rem; }    /* 16px */
.hero { height: 100vh; }     /* full screen height */
.container { max-width: 60ch; }  /* comfortable reading width */
```

> 💡 **Use `rem` for font sizes.** It respects the user's browser font-size setting, which matters for accessibility. Use `px` for things that shouldn't scale, like borders.

---

## 🌈 Colors

### Formats

| Format | Example | Notes |
|---|---|---|
| **Keyword** | `red`, `teal`, `tomato` | ~140 named colours |
| **Hex** | `#ff5733`, `#f53` | Most common |
| **RGB** | `rgb(255, 87, 51)` | Red, green, blue (0–255) |
| **RGBA** | `rgba(255, 87, 51, 0.5)` | Adds transparency (0–1) |
| **HSL** | `hsl(11, 100%, 60%)` | Hue, saturation, lightness — easiest to tweak |
| **HSLA** | `hsla(11, 100%, 60%, 0.5)` | HSL plus transparency |

```css
color: #333;
background-color: rgba(0, 0, 0, 0.7);
border-color: hsl(200, 80%, 50%);
```

### Color properties

| Property | Sets |
|---|---|
| `color` | Text colour |
| `background-color` | Background colour |
| `border-color` | Border colour |
| `opacity` | Transparency of the **whole element** (0–1) |

> 💡 **HSL is friendlier than hex.** To make a colour lighter, raise the L. To make it muted, lower the S. No decoding hex required.

> ⚠️ **Check contrast.** Light grey text on white is unreadable for many people. Aim for a contrast ratio of at least 4.5:1 for body text.

---

## 🔤 Typography

| Property | Purpose | Example |
|---|---|---|
| `font-family` | Typeface | `font-family: Georgia, serif;` |
| `font-size` | Size | `font-size: 1.125rem;` |
| `font-weight` | Boldness (100–900) | `font-weight: 700;` |
| `font-style` | Italic | `font-style: italic;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `letter-spacing` | Space between letters | `letter-spacing: 0.05em;` |
| `text-align` | Horizontal alignment | `text-align: center;` |
| `text-transform` | Case | `text-transform: uppercase;` |
| `text-decoration` | Underline etc. | `text-decoration: none;` |
| `text-overflow` | Cut-off text style | `text-overflow: ellipsis;` |

### Font stacks

Always provide fallbacks — if the first font isn't available, the browser tries the next.

```css
body {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
}
```

| Generic family | Look |
|---|---|
| `serif` | Fonts with small strokes at the ends (Times) |
| `sans-serif` | Clean, no strokes (Arial) |
| `monospace` | Every character the same width (code) |

### Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

```css
body { font-family: "Inter", sans-serif; }
```

### Readable body text

```css
body {
    font-size: 1rem;
    line-height: 1.6;         /* unitless — scales with font size */
}

article {
    max-width: 65ch;          /* keeps lines ~65 characters wide */
}
```

---

## 🖼️ Backgrounds & Borders

### Backgrounds

| Property | Purpose | Example |
|---|---|---|
| `background-color` | Solid colour | `#f5f5f5` |
| `background-image` | Image or gradient | `url("bg.jpg")` |
| `background-size` | Scaling | `cover`, `contain` |
| `background-position` | Placement | `center`, `top right` |
| `background-repeat` | Tiling | `no-repeat` |

```css
.hero {
    background-image: url("hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Gradients */
.banner {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
}
```

| `background-size` | Behaviour |
|---|---|
| `cover` | Fills the whole area, may crop the image |
| `contain` | Fits the whole image, may leave empty space |

### Borders

```css
border: 2px solid #333;       /* width | style | colour */
border-radius: 8px;           /* rounded corners */
border-radius: 50%;           /* circle (on a square element) */
border-bottom: 1px dashed gray;
```

| Border style | Look |
|---|---|
| `solid` | ────── |
| `dashed` | ─ ─ ─ ─ |
| `dotted` | · · · · · |
| `none` | no border |

### Shadows

```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
/*          x  y   blur  colour */

text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
```

### Outline

```css
outline: 2px solid blue;      /* like border, but takes no space */
```

> ⚠️ Never remove focus outlines (`outline: none`) without providing a visible replacement — keyboard users rely on them to see where they are.

---

## 🧱 Display

The `display` property controls **how an element takes up space**.

| Value | Behaviour |
|---|---|
| `block` | Full width, starts on a new line |
| `inline` | Flows with text, ignores `width`/`height` |
| `inline-block` | Flows inline, but accepts `width`/`height` |
| `none` | Removed completely — takes no space |
| `flex` | A flex container (one-dimensional layout) |
| `grid` | A grid container (two-dimensional layout) |

```css
span.badge {
    display: inline-block;
    padding: 4px 10px;
}

.hidden { display: none; }
```

### `display: none` vs `visibility: hidden` vs `opacity: 0`

| | Visible? | Takes up space? | Clickable? |
|---|---|---|---|
| `display: none` | ❌ | ❌ | ❌ |
| `visibility: hidden` | ❌ | ✅ | ❌ |
| `opacity: 0` | ❌ | ✅ | ✅ |

### Overflow

What happens when content is bigger than its box:

```css
overflow: visible;   /* default — spills out */
overflow: hidden;    /* clips it */
overflow: scroll;    /* always shows scrollbars */
overflow: auto;      /* scrollbars only if needed */
```

---

## 📍 Positioning

The `position` property controls how an element is placed relative to the normal flow.

| Value | Behaviour |
|---|---|
| `static` | Default — normal flow; `top`/`left` do nothing |
| `relative` | Normal flow, but can be nudged from its original spot |
| `absolute` | Removed from flow; placed relative to the nearest **positioned** ancestor |
| `fixed` | Removed from flow; stays fixed relative to the **viewport** |
| `sticky` | Behaves as `relative` until scrolled to a threshold, then sticks like `fixed` |

```css
.parent { position: relative; }        /* the anchor for the child */

.badge {
    position: absolute;
    top: 10px;
    right: 10px;                       /* pinned to the parent's top-right */
}

.navbar {
    position: sticky;
    top: 0;                            /* sticks to the top when scrolled */
}

.chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;                       /* always in the corner */
}
```

> 💡 **The golden pair:** to place a child precisely inside a parent, give the **parent** `position: relative` and the **child** `position: absolute`.

### `z-index`

Controls stacking order for positioned elements. Higher numbers sit on top.

```css
.modal   { position: fixed; z-index: 1000; }
.overlay { position: fixed; z-index: 999;  }
```

---

## 💪 Flexbox

**Flexbox** is a layout system for arranging items in **one dimension** — a row *or* a column. It's the go-to tool for navbars, card rows, centring, and toolbars.

```css
.container {
    display: flex;
}
```

Direct children of a flex container become **flex items**.

```
Container (display: flex)
┌─────────────────────────────────────────┐
│  ┌──────┐   ┌──────┐   ┌──────┐         │
│  │ item │   │ item │   │ item │         │  ← main axis →
│  └──────┘   └──────┘   └──────┘         │
└─────────────────────────────────────────┘
      ↑ cross axis runs perpendicular
```

### Container properties

| Property | Purpose | Values |
|---|---|---|
| `flex-direction` | Direction of the main axis | `row` (default), `column`, `row-reverse`, `column-reverse` |
| `justify-content` | Alignment along the **main** axis | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Alignment along the **cross** axis | `stretch` (default), `flex-start`, `center`, `flex-end`, `baseline` |
| `flex-wrap` | Allow items to wrap | `nowrap` (default), `wrap` |
| `gap` | Space between items | `16px` |

### Item properties

| Property | Purpose |
|---|---|
| `flex-grow` | How much extra space the item takes (`0` = none) |
| `flex-shrink` | How much the item shrinks when space is tight |
| `flex-basis` | The item's starting size |
| `flex` | Shorthand for the three — `flex: 1` = share space equally |
| `align-self` | Override `align-items` for one item |
| `order` | Change visual order |

### Recipes

**Perfect centring:**

```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

**Navbar — logo left, links right:**

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**Equal-width columns:**

```css
.row { display: flex; gap: 16px; }
.row > * { flex: 1; }
```

**Wrapping card layout:**

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card { flex: 1 1 250px; }   /* grow, shrink, start at 250px */
```

> 💡 **Main vs cross axis:** `justify-content` = main axis, `align-items` = cross axis. When you switch to `flex-direction: column`, the axes swap — so do what they control.

---

## 🔲 Grid

**CSS Grid** arranges items in **two dimensions** — rows *and* columns at once. Use it for full page layouts, galleries, and dashboards.

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;    /* three equal columns */
    gap: 20px;
}
```

### Defining tracks

```css
grid-template-columns: 200px 1fr 1fr;         /* fixed + flexible */
grid-template-columns: repeat(3, 1fr);        /* same as 1fr 1fr 1fr */
grid-template-rows: auto 1fr auto;            /* header | content | footer */
```

| Unit | Meaning |
|---|---|
| `fr` | A fraction of the **remaining** space |
| `auto` | Sized by content |
| `minmax(a, b)` | At least `a`, at most `b` |

### Responsive grid — no media queries

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

This creates as many 250px-minimum columns as fit, stretching them to fill the row, and reflows automatically at every screen size.

### Placing items

```css
.header { grid-column: 1 / -1; }      /* span from first to last column */
.sidebar { grid-row: 2 / 4; }         /* span rows 2 and 3 */
.wide { grid-column: span 2; }        /* take up two columns */
```

### Named areas

```css
.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-areas:
        "header  header"
        "sidebar main"
        "footer  footer";
    min-height: 100vh;
}

header  { grid-area: header; }
aside   { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

### Alignment

```css
justify-items: center;      /* items inside their cells, horizontally */
align-items: center;        /* items inside their cells, vertically */
justify-content: center;    /* the whole grid inside its container */
place-items: center;        /* shorthand: align + justify */
```

### Flexbox vs Grid

| | **Flexbox** | **Grid** |
|---|---|---|
| Dimensions | One (row **or** column) | Two (rows **and** columns) |
| Driven by | Content | Layout structure |
| Best for | Navbars, toolbars, centring, small components | Page layouts, galleries, dashboards |

> 💡 They combine well: **Grid for the page skeleton, Flexbox for the components inside it.**

---

## 📱 Responsive Design

**Responsive design** makes a page adapt to any screen size — phone, tablet, laptop, or a giant monitor.

### 1. The viewport meta tag (in your HTML)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, phones pretend to be desktop-width and shrink everything.

### 2. Media queries

Apply styles only when a condition is true:

```css
.container { padding: 16px; }

@media (min-width: 768px) {
    .container { padding: 32px; }
}

@media (min-width: 1024px) {
    .container { max-width: 1200px; margin: 0 auto; }
}
```

### 3. Mobile-first

Write the **mobile** styles as your base, then layer on changes for **larger** screens using `min-width`.

```css
/* Mobile: single column */
.cards { display: grid; grid-template-columns: 1fr; gap: 16px; }

/* Tablet and up: two columns */
@media (min-width: 768px) {
    .cards { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: three columns */
@media (min-width: 1024px) {
    .cards { grid-template-columns: repeat(3, 1fr); }
}
```

### Common breakpoints

| Device | Width |
|---|---|
| Phones | up to ~640px |
| Tablets | 768px and up |
| Laptops | 1024px and up |
| Desktops | 1280px and up |

> 💡 Breakpoints are guidelines — resize your browser and add one **wherever your design breaks**, not at fixed device numbers.

### Other media queries

```css
@media (prefers-color-scheme: dark)   { body { background: #111; color: #eee; } }
@media (prefers-reduced-motion: reduce) { * { animation: none; } }
@media print { nav { display: none; } }
```

### Responsive images

```css
img {
    max-width: 100%;     /* never wider than the parent */
    height: auto;        /* keep the proportions */
}
```

### Fluid sizing with `clamp()`

```css
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
/*                    min    ideal  max  */
```

---

## 🎭 Pseudo-classes & Pseudo-elements

### Pseudo-classes (`:`) — an element's **state**

| Selector | Matches |
|---|---|
| `:hover` | Mouse is over it |
| `:focus` | It has keyboard/click focus |
| `:active` | Being clicked |
| `:visited` | A link already visited |
| `:disabled` | A disabled form control |
| `:checked` | A ticked checkbox or radio |
| `:first-child` / `:last-child` | First / last among siblings |
| `:nth-child(n)` | The nth sibling |
| `:not(x)` | Anything that isn't x |

```css
a:hover { color: tomato; }
input:focus { outline: 2px solid dodgerblue; }
li:nth-child(odd)  { background: #f5f5f5; }    /* zebra stripes */
li:nth-child(3)    { font-weight: bold; }
li:not(:last-child) { border-bottom: 1px solid #ddd; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
```

> 💡 **Order for link states — LVHA:** `:link` → `:visited` → `:hover` → `:active`.

### Pseudo-elements (`::`) — a **part** of an element

| Selector | Targets |
|---|---|
| `::before` | Inserts content before the element |
| `::after` | Inserts content after the element |
| `::first-letter` | The first letter |
| `::first-line` | The first line |
| `::placeholder` | Placeholder text in an input |
| `::selection` | Text the user has highlighted |

```css
.required::after {
    content: " *";
    color: red;
}

p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

::selection { background: gold; }
```

> ⚠️ `::before` and `::after` do nothing unless you set the `content` property, even if it's just `content: ""`.

---

## ✨ Transitions, Transforms & Animations

### Transitions — smooth changes between states

```css
.button {
    background: steelblue;
    transition: background 0.3s ease, transform 0.2s ease;
}

.button:hover {
    background: navy;
    transform: translateY(-2px);
}
```

`transition: <property> <duration> <timing-function> <delay>`

| Timing function | Feel |
|---|---|
| `ease` | Slow → fast → slow (default) |
| `linear` | Constant speed |
| `ease-in` | Starts slow |
| `ease-out` | Ends slow |
| `ease-in-out` | Slow at both ends |

### Transforms

| Function | Effect |
|---|---|
| `translate(x, y)` | Move |
| `scale(n)` | Resize |
| `rotate(deg)` | Turn |
| `skew(deg)` | Slant |

```css
.card:hover {
    transform: scale(1.05) rotate(2deg);
}
```

> 💡 Animate `transform` and `opacity` rather than `width`, `top`, or `margin` — they're much smoother because the browser can handle them without recalculating layout.

### Keyframe animations

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}

.card {
    animation: fadeIn 0.6s ease-out;
}
```

```css
@keyframes pulse {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.heart {
    animation: pulse 1s infinite;
}
```

| Animation property | Purpose |
|---|---|
| `animation-name` | Which `@keyframes` to use |
| `animation-duration` | How long one cycle takes |
| `animation-iteration-count` | `1`, `3`, or `infinite` |
| `animation-delay` | Wait before starting |
| `animation-fill-mode` | Keep the end state with `forwards` |

---

## 🧬 CSS Variables

**Custom properties** let you store a value once and reuse it everywhere.

```css
:root {
    --primary: #4f46e5;
    --text: #1f2937;
    --radius: 8px;
    --space: 1rem;
}

.button {
    background: var(--primary);
    border-radius: var(--radius);
    padding: var(--space);
}

.card {
    color: var(--text);
    border: 1px solid var(--primary);
}
```

| Part | Meaning |
|---|---|
| `:root` | The top of the document — variables here are global |
| `--name` | Variable names always begin with two hyphens |
| `var(--name)` | Read the variable |
| `var(--name, fallback)` | Use `fallback` if it isn't defined |

### Dark mode in a few lines

```css
:root {
    --bg: #ffffff;
    --text: #111111;
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg: #111111;
        --text: #f5f5f5;
    }
}

body {
    background: var(--bg);
    color: var(--text);
}
```

> 💡 Change one variable and everything using it updates — theming becomes trivial.

---

## ⚠️ Common Mistakes

| Mistake | Why it's a problem | Fix |
|---|---|---|
| Forgetting `box-sizing: border-box` | Padding and border make boxes wider than expected | Add the reset at the top |
| Overusing `!important` | Breaks the cascade, forces more `!important` | Fix specificity instead |
| Using IDs for styling | Too specific, hard to override | Use classes |
| Fixed `px` widths everywhere | Breaks on small screens | Use `%`, `rem`, `max-width` |
| Removing `outline` on focus | Keyboard users lose their place | Style `:focus-visible` instead |
| Styling with inline `style=""` | Can't be reused, overrides everything | Put styles in the stylesheet |
| Absolute positioning for layout | Fragile, ignores the flow | Use Flexbox or Grid |
| Forgetting `content` on `::before`/`::after` | The pseudo-element never appears | Add `content: ""` |
| Missing semicolons | The next rule silently breaks | End every declaration with `;` |
| Deeply nested selectors (`.a .b .c .d`) | Very high specificity, brittle | Keep selectors to 1–2 levels |
| Setting `height` on text containers | Content overflows when it wraps | Use `min-height` or let content decide |
| Not testing on mobile | Layout looks fine on desktop only | Use DevTools device mode (`Ctrl + Shift + M`) |

---

## ⚡ Quick Cheat Sheet

```css
/* ── Reset ─────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.6; }
img  { max-width: 100%; height: auto; display: block; }

/* ── Selectors ─────────────────────────── */
p { }   .class { }   #id { }   nav a { }   ul > li { }   a:hover { }

/* ── Box model ─────────────────────────── */
margin: 0 auto;   padding: 1rem;   border: 1px solid #ddd;   border-radius: 8px;

/* ── Text ──────────────────────────────── */
font-size: 1rem;   font-weight: 700;   text-align: center;   color: #333;

/* ── Flexbox ───────────────────────────── */
display: flex;   justify-content: center;   align-items: center;   gap: 1rem;

/* ── Grid ──────────────────────────────── */
display: grid;   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));   gap: 1rem;

/* ── Position ──────────────────────────── */
position: relative | absolute | fixed | sticky;   top: 0;   z-index: 10;

/* ── Responsive ────────────────────────── */
@media (min-width: 768px) { /* tablet and up */ }

/* ── Effects ───────────────────────────── */
transition: all 0.3s ease;   transform: scale(1.05);   box-shadow: 0 4px 12px rgba(0,0,0,.15);

/* ── Variables ─────────────────────────── */
:root { --primary: #4f46e5; }   color: var(--primary);
```

---

## 🙏 Credits & Resources

- 📘 [MDN — CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- 📗 [MDN — CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) — learn Flexbox through a game
- 🌱 [Grid Garden](https://cssgridgarden.com/) — learn Grid through a game
- 📙 [CSS-Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📕 [CSS-Tricks — A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 🕹️ [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations)
- 📺 [freeCodeCamp](https://www.freecodecamp.org/)
