# JWT Decoder

A fast, free, privacy-first JSON Web Token decoder — 100% client-side.

[![Live site](https://img.shields.io/badge/Live%20site-Open%20app-4f46e5?style=flat-square)](https://bordia98.github.io/JWTDecoder/)
[![License: MIT](https://img.shields.io/badge/License-MIT-16a34a?style=flat-square)](LICENSE)
[![Built with](https://img.shields.io/badge/Built%20with-vanilla%20HTML%2FCSS%2FJS-f59e0b?style=flat-square)](index.html)
[![Privacy](https://img.shields.io/badge/Privacy-no%20data%20stored-0f766e?style=flat-square)](#privacy--security)

**[→ Open the live decoder](https://bordia98.github.io/JWTDecoder/)**

## ✨ Features

| Feature | Description |
| --- | --- |
| 🔓 Live decoding | Header and payload are decoded as a token is pasted or typed. |
| 🪪 Registered claims | Issuer, subject, audience, issued-at, not-before, and expiry are presented clearly. |
| ⏳ Expiration status | Expired tokens are visibly identified. |
| 📋 Copy output | Copy the decoded header or payload with one click. |
| 🌙☀️ Dark / light theme | Starts in light mode; switch themes for the current browser session. |
| 📱 Responsive design | Works cleanly on phones, tablets, and desktops. |
| ♿ Accessible | Semantic structure, keyboard controls, focus styles, and screen-reader announcements. |
| 🔒 100% private | No backend, analytics, cookies, local storage, or token persistence. |

## 🚀 Getting started

No build step, dependencies, or server are required.

```sh
# Clone the repository
git clone https://github.com/bordia98/JWTDecoder.git
cd JWTDecoder

# Serve locally (optional, recommended for Clipboard API support)
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). You can also open `index.html` directly in a browser.

## 🗂️ Project structure

```text
JWTDecoder/
├── index.html      # App shell, semantic markup, SEO, and social metadata
├── styles.css      # Responsive design system and light/dark themes
├── script.js       # Browser-only JWT decoding and interactions
├── robots.txt      # Search-engine crawl rules
├── sitemap.xml     # XML sitemap for discovery
├── LICENSE         # MIT License
└── README.md       # Project documentation
```

## 🛠️ How it works

Everything happens in the browser. The app makes no network requests after the initial page load.

```text
JWT pasted or typed
      │
      ▼
Split into header.payload.signature
      │
      ▼
Base64URL-decode header and payload
      │
      ▼
Parse JSON  ─── invalid ──→ clear, helpful error message
      │
      ▼
Render formatted JSON and registered claims
```

The signature section is deliberately not decoded or validated. A JWT’s signature must be verified by the application that issued or consumes it, using the expected algorithm and key.

## 🔒 Privacy & security

- Tokens are decoded only in the browser and are never sent to a server.
- The app has no analytics, tracking, cookies, local storage, session storage, or database.
- A theme selection is kept only in the current page’s memory and disappears on refresh.
- Copying is opt-in and uses your browser’s clipboard only when you select **Copy**.
- **Decoding is not verification.** A readable JWT can still be forged, expired, or otherwise untrustworthy. Never treat decoded contents as authenticated and never share production tokens with an untrusted service.

## 🌐 Deploying to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose `main` and `/ (root)`.
4. Save. The site will be published at [bordia98.github.io/JWTDecoder](https://bordia98.github.io/JWTDecoder/).

No CI/CD, runtime, or environment variables are needed—it is just static files.

## 🔎 Search indexing

The project includes a descriptive title, meta description, Open Graph metadata, a canonical URL, Google Search Console verification meta tag, [`robots.txt`](robots.txt), and [`sitemap.xml`](https://bordia98.github.io/JWTDecoder/sitemap.xml).

After publishing, verify the `https://bordia98.github.io` property in [Google Search Console](https://search.google.com/search-console/) and submit the sitemap. Use URL Inspection to request indexing for the live homepage; indexing timing is decided by Google.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a branch: `git checkout -b feature/my-change`
3. Make and test your change.
4. Commit and push the branch.
5. Open a pull request.

Please preserve the project’s core constraints: vanilla HTML/CSS/JavaScript, no build tooling required, and no token collection or persistence.

## 📄 License

Distributed under the [MIT License](LICENSE).

Made with care by [bordia98](https://github.com/bordia98) · No JWT data is stored or sent anywhere.
