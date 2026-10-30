// Central site configuration. Set NEXT_PUBLIC_SITE_URL in your hosting
// environment if the production domain ever changes.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://cryptivio.xyz"
).replace(/\/$/, "");

export const SITE_NAME = "Cryptivio";
export const TELEGRAM_URL = "https://t.me/danialkhaan";

export const LOCALES = ["en", "fa"];
export const DEFAULT_LOCALE = "en";

// English lives at "/" (keeps the already-indexed URL), Persian at "/fa".
export const LOCALE_META = {
  en: {
    path: "/",
    dir: "ltr",
    ogLocale: "en_US",
    nativeName: "English",
    switchLabel: "EN",
  },
  fa: {
    path: "/fa",
    dir: "rtl",
    ogLocale: "fa_IR",
    nativeName: "فارسی",
    switchLabel: "فارسی",
  },
};

// Root URL has no trailing slash, matching what Next.js emits in <link rel="canonical">
// and hreflang tags, so sitemap / JSON-LD / head tags all agree.
export const absoluteUrl = (path = "/") =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;
