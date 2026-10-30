# Cryptivio – Crypto & Web3 course landing page

Next.js (App Router) landing page, available in **English** (`/`) and **Persian** (`/fa`, RTL).

## Development

```bash
npm install
npm run dev     # http://localhost:3000  and  http://localhost:3000/fa
npm run build
```

Optional: set `NEXT_PUBLIC_SITE_URL` (default `https://cryptivio.xyz`) if the production domain changes. It feeds canonical/hreflang tags, sitemap, robots and JSON-LD.

## How the two languages work

| URL   | Language | Layout            |
| ----- | -------- | ----------------- |
| `/`   | English  | `app/(en)/`       |
| `/fa` | Persian  | `app/fa/` (RTL)   |

- All copy lives in `lib/i18n/en.js` and `lib/i18n/fa.js` (same keys in both). Edit text there, not in components.
- `components/landing.jsx` renders the page from a dictionary; both routes use it.
- Each language has its own root layout so `<html lang dir>` is correct. Persian uses self-hosted Vazirmatn (`lib/fonts/`, OFL license included).
- No automatic language redirect on purpose: crawlers see both versions, users switch with the navbar button.

### Adding another language

1. Add `lib/i18n/<code>.js` and register it in `lib/i18n/index.js`.
2. Add it to `LOCALES` / `LOCALE_META` in `lib/site.js`.
3. Add `app/<code>/layout.js` + `page.js` (copy `app/fa/`).

The sitemap, hreflang tags and JSON-LD pick it up automatically.

## SEO setup

- Per-language `<title>`, description, canonical, hreflang (`en`, `fa`, `x-default`), Open Graph and Twitter tags: `lib/seo.js`
- `app/sitemap.js` (with hreflang alternates) and `app/robots.js`
- JSON-LD (`Organization`, `WebSite`, `WebPage`, `Course`) in `components/landing.jsx`
- Share image: `public/og.png` (1200×630)
