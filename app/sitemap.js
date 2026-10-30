import { LOCALES, LOCALE_META, absoluteUrl } from "@/lib/site";

// One entry per language version; each lists the full hreflang set (including
// itself) plus x-default, as Google requires for reciprocal annotations.
export default function sitemap() {
  const languages = {
    ...Object.fromEntries(
      LOCALES.map((l) => [l, absoluteUrl(LOCALE_META[l].path)])
    ),
    "x-default": absoluteUrl(LOCALE_META.en.path),
  };

  return LOCALES.map((l) => ({
    url: absoluteUrl(LOCALE_META[l].path),
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
