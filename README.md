# svg-favicons

😏 Emoji Favicon Picker

A minimal web utility that lets you pick any emoji and instantly use it as your website's favicon — no files, no cookies, no clutter.

Live demo: [raul.viigipuu.ee/apps/svg-favicons](https://raul.viigipuu.ee/apps/svg-favicons)

---

## ✨ Features

- One-click emoji favicon preview
- Generates clean, copy-pasteable HTML `<link>` snippet
- Instant copy-to-clipboard button
- Responsive and mobile-friendly layout
- No tracking, no analytics, no cookies 🍪

---

## 🧠 How It Works

It uses an inline SVG with an emoji as the favicon:

```html
<link rel="icon" href="data:image/svg+xml,<svg ...><text>😏</text></svg>">
