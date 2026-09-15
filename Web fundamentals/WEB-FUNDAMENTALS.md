# 🌍 Web Fundamentals

> The foundations of how the Web actually works — before you write a single line of code.

---

## 📑 Table of Contents

1. [How the Internet Works](#-how-the-internet-works)
2. [How the Web Works](#-how-the-web-works)
3. [Client & Server](#-client--server)
4. [HTTP & HTTPS](#-http--https)
5. [Requests & Responses](#-requests--responses)
6. [URLs](#-urls)
7. [DNS](#-dns)
8. [Browsers](#-browsers)
9. [Web Servers](#-web-servers)
10. [APIs](#-apis)
11. [Databases](#-databases)
12. [Frontend vs Backend](#-frontend-vs-backend)
13. [Putting It All Together](#-putting-it-all-together)

---

## 🔌 How the Internet Works

The **Internet** is a giant network of computers connected by physical cables, fibre optics, and radio signals — all agreeing to speak the same language.

**The key ideas:**

| Concept | What it means |
|---|---|
| **Network** | Two or more computers connected so they can exchange data |
| **IP address** | A unique number identifying each device, like a postal address (`142.250.200.78`) |
| **Packets** | Data is chopped into small pieces, sent separately, and reassembled at the destination |
| **Router** | A device that forwards packets toward their destination |
| **ISP** | Internet Service Provider — the company connecting your home to the wider Internet |
| **Protocol** | An agreed set of rules for how machines talk (TCP/IP, HTTP, …) |

**A simplified journey:**

```
Your laptop → Router → ISP → Undersea cables / backbone → ISP → Server
```

> 💡 **Internet ≠ Web.** The Internet is the *infrastructure* (the roads). The Web is *one thing built on it* (one type of traffic). Email, video calls, and online games also ride the Internet but aren't the Web.

---

## 🕸️ How the Web Works

The **World Wide Web** is a system of linked documents and applications, accessed through browsers using HTTP.

**What happens when you visit a site:**

```
1. You type          →  example.com
2. DNS lookup        →  "example.com is at 93.184.216.34"
3. Connection        →  Your browser connects to that server
4. Request           →  "Please send me the homepage"
5. Response          →  Server sends back HTML, CSS, JS
6. Render            →  Browser paints the page on your screen
```

All of this usually takes well under a second.

**The three core web languages:**

| Language | Role | Analogy |
|---|---|---|
| **HTML** | Structure and content | The skeleton |
| **CSS** | Styling and layout | The skin and clothes |
| **JavaScript** | Behaviour and interactivity | The muscles |

---

## 💻 Client & Server

The Web runs on a **client–server model**.

| | **Client** | **Server** |
|---|---|---|
| What it is | The device asking for something | The computer providing it |
| Examples | Browser, phone app | A machine in a data centre |
| Role | Sends requests | Sends responses |
| Who runs it | The user | The website owner |

```
   CLIENT                          SERVER
 (your browser)                 (their computer)
      │                                │
      │──── "Give me /about" ─────────▶│
      │                                │
      │◀──── HTML, CSS, images ────────│
```

> 💡 **Restaurant analogy:** You (the client) order from a menu. The kitchen (the server) prepares it and sends it out. You never see the kitchen — you just get the result.

---

## 🔐 HTTP & HTTPS

**HTTP** (HyperText Transfer Protocol) is the language clients and servers use to talk. **HTTPS** is HTTP with encryption added.

| | HTTP | HTTPS |
|---|---|---|
| Encrypted | ❌ No | ✅ Yes |
| Readable in transit | Anyone on the network can read it | Scrambled |
| Port | 80 | 443 |
| Browser shows | "Not secure" warning | 🔒 padlock |
| Use for | Basically nothing today | Everything |

**How HTTPS protects you:** an **SSL/TLS certificate** proves the server is who it claims to be and encrypts everything sent between you and it — passwords, card numbers, messages.

> ⚠️ Never type a password on a page that isn't HTTPS. On public Wi-Fi, plain HTTP traffic can be read by anyone nearby.

---

## 📨 Requests & Responses

Every interaction on the Web is one **request** followed by one **response**.

### The Request

| Part | What it is | Example |
|---|---|---|
| **Method** | What you want to do | `GET` |
| **URL** | What you want it done to | `/api/users/5` |
| **Headers** | Extra info about the request | `Authorization: Bearer abc123` |
| **Body** | Data you're sending (not used by GET) | `{ "name": "Ahmed" }` |

### HTTP Methods

| Method | Purpose | Example |
|---|---|---|
| `GET` | Read data | Load a profile page |
| `POST` | Create something new | Submit a signup form |
| `PUT` | Replace something entirely | Overwrite a whole profile |
| `PATCH` | Update part of something | Change just the email |
| `DELETE` | Remove something | Delete a post |

### The Response

| Part | What it is |
|---|---|
| **Status code** | Did it work? |
| **Headers** | Info about the response (content type, caching, …) |
| **Body** | The actual content — HTML, JSON, an image |

### Status Codes

| Range | Meaning | Common ones |
|---|---|---|
| **1xx** | Informational | `100 Continue` |
| **2xx** | ✅ Success | `200 OK`, `201 Created` |
| **3xx** | ↪️ Redirect | `301 Moved Permanently`, `304 Not Modified` |
| **4xx** | ❌ Client made a mistake | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found` |
| **5xx** | 💥 Server broke | `500 Internal Server Error`, `503 Service Unavailable` |

> 💡 **Remember:** `4xx` means *you* sent something wrong. `5xx` means the *server* failed.

---

## 🔗 URLs

A **URL** (Uniform Resource Locator) is the address of a resource on the Web.

```
https://www.example.com:443/blog/post?id=42&sort=new#comments
└─┬─┘   └──────┬──────┘└┬┘└────┬────┘└──────┬──────┘└───┬──┘
  1            2        3      4            5           6
```

| # | Part | Name | What it does |
|---|---|---|---|
| 1 | `https` | **Protocol** | How to talk to the server |
| 2 | `www.example.com` | **Domain** | Which server to talk to |
| 3 | `:443` | **Port** | Which door on that server (usually hidden) |
| 4 | `/blog/post` | **Path** | Which resource on that server |
| 5 | `?id=42&sort=new` | **Query string** | Extra parameters, as `key=value` pairs joined by `&` |
| 6 | `#comments` | **Fragment** | Scroll to a section — never sent to the server |

**Domain anatomy:**

```
www . example . com
 │      │        │
 │      │        └─ TLD (top-level domain): .com .org .eg .io
 │      └────────── Domain name (the part you buy)
 └───────────────── Subdomain (www, blog, api, shop…)
```

---

## 🧭 DNS

**DNS** (Domain Name System) is the Internet's phone book. It translates human-friendly names into IP addresses that machines use.

```
"google.com"  ──DNS──▶  "142.250.200.78"
```

Without DNS you'd have to memorise numbers for every site you visit.

**The lookup process:**

```
1. Browser cache      →  "Have I looked this up recently?"
2. OS cache           →  "Does my computer remember?"
3. ISP resolver       →  "Do you know this one?"
4. Root server        →  "Ask the .com servers"
5. TLD server         →  "Ask example.com's nameserver"
6. Nameserver         →  "It's 93.184.216.34" ✅
```

The result is **cached** at each level, so repeat visits skip most of these steps.

**Common DNS record types:**

| Record | Purpose |
|---|---|
| `A` | Points a domain to an IPv4 address |
| `AAAA` | Points a domain to an IPv6 address |
| `CNAME` | Points a domain to *another domain* |
| `MX` | Where to deliver email for this domain |
| `TXT` | Arbitrary text — used for verification and security |

---

## 🌐 Browsers

A **browser** is the program that fetches web resources and turns them into the page you see.

**Popular browsers:** Chrome, Firefox, Safari, Edge, Brave, Opera

### What a browser actually does

| Step | What happens |
|---|---|
| **1. Request** | Fetches the HTML from the server |
| **2. Parse HTML** | Builds the **DOM** — a tree of all the elements |
| **3. Parse CSS** | Builds the **CSSOM** — all the style rules |
| **4. Run JavaScript** | Executes scripts, which can modify the DOM |
| **5. Layout** | Calculates where everything goes on screen |
| **6. Paint** | Draws pixels to the screen |

### The rendering engine

Every browser has an engine that does the rendering:

| Browser | Engine |
|---|---|
| Chrome, Edge, Brave, Opera | Blink |
| Firefox | Gecko |
| Safari | WebKit |

> 💡 This is why a site can look slightly different across browsers — different engines interpret the same code in subtly different ways.

---

## 🖥️ Web Servers

A **web server** is software running on a computer, waiting for requests and sending back responses.

**Two meanings of "server":**
- The **hardware** — a physical machine in a data centre
- The **software** — the program handling requests (Nginx, Apache, …)

### Static vs Dynamic

| | **Static server** | **Dynamic server** |
|---|---|---|
| What it does | Sends files exactly as stored | Builds the response on the fly |
| Speed | Very fast | Slower, but flexible |
| Example | A portfolio site | A social feed personalised per user |
| Software | Nginx, Apache | Node.js, Django, Laravel, Rails |

### Common server software

| Name | Notes |
|---|---|
| **Nginx** | Very fast, handles huge traffic, often used as a reverse proxy |
| **Apache** | Long-established, extremely configurable |
| **Node.js** | JavaScript on the server |
| **Caddy** | Modern, automatic HTTPS |

### Hosting options

| Type | What it means | Examples |
|---|---|---|
| **Shared hosting** | Many sites on one machine — cheap | Hostinger, Bluehost |
| **VPS** | Your own slice of a server | DigitalOcean, Linode |
| **Cloud** | Scales up and down on demand | AWS, Google Cloud, Azure |
| **Serverless / Platform** | Just deploy code, no server management | Vercel, Netlify, Cloudflare |

---

## 🔌 APIs

An **API** (Application Programming Interface) is a defined way for one program to ask another for data or actions.

> 💡 **Waiter analogy:** You don't walk into the kitchen. You tell the waiter (the API) what you want, and they bring it back. The API is the agreed contract between you and the kitchen.

### Why APIs matter

They let your app use things you didn't build — weather data, payments, maps, login, AI models.

### REST APIs

The most common style on the Web. Resources get URLs, and HTTP methods say what to do with them.

| Method + Endpoint | What it does |
|---|---|
| `GET /users` | Get all users |
| `GET /users/5` | Get user #5 |
| `POST /users` | Create a new user |
| `PUT /users/5` | Replace user #5 |
| `PATCH /users/5` | Update part of user #5 |
| `DELETE /users/5` | Delete user #5 |

### JSON

APIs almost always exchange data as **JSON** (JavaScript Object Notation) — readable by humans and easy for machines to parse.

```json
{
  "id": 5,
  "name": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "isActive": true,
  "skills": ["HTML", "CSS", "JavaScript"]
}
```

### Calling an API from JavaScript

```javascript
fetch('https://api.example.com/users/5')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### API keys

Many APIs require a **key** — a secret string identifying you, used for access control and rate limits.

> ⚠️ Never put API keys in frontend code or commit them to Git. Keep them in environment variables on the server, and add `.env` to `.gitignore`.

---

## 🗄️ Databases

A **database** stores your application's data permanently, so it survives after the page closes and the server restarts.

### SQL vs NoSQL

| | **SQL (Relational)** | **NoSQL** |
|---|---|---|
| Structure | Tables with rows and columns | Documents, key-value, graphs |
| Schema | Fixed and enforced | Flexible |
| Query language | SQL | Varies by database |
| Best for | Structured, related data | Rapidly changing or unstructured data |
| Examples | PostgreSQL, MySQL, SQLite | MongoDB, Redis, Firebase |

### What a SQL table looks like

| id | name | email | created_at |
|---|---|---|---|
| 1 | Ahmed | ahmed@example.com | 2026-01-15 |
| 2 | Sara | sara@example.com | 2026-02-03 |

### Basic SQL

```sql
SELECT * FROM users;                              -- read everything
SELECT name, email FROM users WHERE id = 1;       -- read specific fields
INSERT INTO users (name, email)
  VALUES ('Ahmed', 'ahmed@example.com');          -- create
UPDATE users SET email = 'new@example.com'
  WHERE id = 1;                                   -- update
DELETE FROM users WHERE id = 1;                   -- delete
```

### What a NoSQL document looks like

```json
{
  "_id": "abc123",
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "posts": [
    { "title": "My first post", "likes": 12 }
  ]
}
```

> 💡 **CRUD** — the four operations every app performs: **C**reate, **R**ead, **U**pdate, **D**elete.

---

## 🎨 Frontend vs Backend

| | **Frontend** | **Backend** |
|---|---|---|
| Also called | Client-side | Server-side |
| Runs on | The user's browser | A server |
| Visible? | Yes — it's what you see | No — hidden from users |
| Handles | Layout, styling, interactions | Data, logic, auth, storage |
| Languages | HTML, CSS, JavaScript | JavaScript, Python, PHP, Java, Go, Ruby, C# |
| Frameworks | React, Vue, Angular, Svelte | Express, Django, Laravel, Spring, Rails |

### Frontend responsibilities
- Structure the page (HTML)
- Style and lay it out (CSS)
- Respond to clicks, typing, scrolling (JavaScript)
- Work across screen sizes (responsive design)
- Stay usable for everyone (accessibility)
- Request data from the backend

### Backend responsibilities
- Serve pages and data
- Store and retrieve from the database
- Authenticate users and enforce permissions
- Apply business rules
- Handle payments, emails, uploads
- Keep secrets secret

### Full Stack

A **full-stack developer** works on both sides. Common combinations:

| Stack | Pieces |
|---|---|
| **MERN** | MongoDB, Express, React, Node.js |
| **MEAN** | MongoDB, Express, Angular, Node.js |
| **LAMP** | Linux, Apache, MySQL, PHP |
| **Next.js + Postgres** | Modern JavaScript full-stack |

---

## 🧩 Putting It All Together

**What happens when you log into a website:**

```
1.  You type the URL              →  Browser
2.  DNS resolves the domain       →  Get the server's IP
3.  HTTPS connection opens        →  Encrypted channel established
4.  GET request for the page      →  Server responds with HTML/CSS/JS
5.  Browser renders the page      →  Login form appears
6.  You submit your credentials   →  POST /login with your email & password
7.  Backend checks the database   →  "Does this user exist? Is the password right?"
8.  Server responds               →  200 OK + a session token
9.  Frontend stores the token     →  You're logged in
10. Dashboard requests data       →  GET /api/me, with the token attached
11. Backend returns JSON          →  Frontend renders your info
```

Every concept in this guide shows up in those eleven steps.

### The mental model

```
┌─────────────┐   HTTP request    ┌─────────────┐    query    ┌──────────┐
│   BROWSER   │ ────────────────▶ │   SERVER    │ ──────────▶ │ DATABASE │
│  (frontend) │ ◀──────────────── │  (backend)  │ ◀────────── │          │
└─────────────┘   HTTP response   └─────────────┘     data    └──────────┘
```

---

## 📚 Where to Learn More

- 📘 [MDN — How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- 📗 [MDN — HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- 🕹️ [The Odin Project — Foundations](https://www.theodinproject.com/paths/foundations)
- 🗺️ [roadmap.sh — Frontend & Backend roadmaps](https://roadmap.sh/)
- 📺 [freeCodeCamp](https://www.freecodecamp.org/)
