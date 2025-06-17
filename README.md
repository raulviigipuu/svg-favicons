# svg-favicons

🪄 Emoji Favicon Picker

A minimal web utility that lets you pick any emoji and instantly use it as your website's favicon.

Live demo: [raul.viigipuu.ee/apps/svg-favicons](https://raul.viigipuu.ee/apps/svg-favicons)

---

## ✨ Features

- One-click emoji favicon preview
- Generates clean, copy-pasteable HTML `<link>` snippet
- Instant copy-to-clipboard button
- Responsive and mobile-friendly layout

---

## 🧠 How It Works

It uses an inline SVG with an emoji as the favicon:

```html
<link rel="icon" href="data:image/svg+xml,<svg ...><text>😏</text></svg>">
```

This allows emojis to appear as your browser tab icon — portable, fast, and easy.

---

## 📦 Usage

1. Open the [Emoji Favicon Picker](https://raul.viigipuu.ee/apps/svg-favicons)
2. Click any emoji **or** enter your own in the input field
3. Copy the generated HTML snippet
4. Paste it inside the `<head>` of your website

---

## 🌐 SEO & Meta

- Open Graph + Twitter Card support
- JSON-LD structured data for discoverability
- Optimized OG image: `images/og-image.png` (1200x630)

---
