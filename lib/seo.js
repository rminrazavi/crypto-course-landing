import { getDictionary } from "@/lib/i18n";
import {
  LOCALES,
  LOCALE_META,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

export const viewport = {
  themeColor: "#0a0a0a",
};

export function buildMetadata(lang) {
  const { meta } = getDictionary(lang);
  const { path, ogLocale } = LOCALE_META[lang];
  const alternateLocale = LOCALES.filter((l) => l !== lang).map(
    (l) => LOCALE_META[l].ogLocale
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    applicationName: SITE_NAME,
    alternates: {
      // Self-referencing canonical per language + reciprocal hreflang set.
      canonical: path,
      languages: {
        en: LOCALE_META.en.path,
        fa: LOCALE_META.fa.path,
        "x-default": LOCALE_META.en.path,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: path,
      locale: ogLocale,
      alternateLocale,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.twitterDescription,
      images: ["/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/cryptivio-favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/cryptivio-favicon-64.png", sizes: "64x64", type: "image/png" },
      ],
      apple: [
        {
          url: "/cryptivio-logo-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  };
}

// schema.org structured data (JSON-LD) for the landing page.
// Deliberately NO Review / AggregateRating / Offer markup: Google only allows
// those for genuine, verifiable reviews and real pricing.
export function buildJsonLd(lang) {
  const t = getDictionary(lang);
  const { path } = LOCALE_META[lang];
  const pageUrl = absoluteUrl(path);
  const orgId = `${SITE_URL}/#organization`;
  const siteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/cryptivio-logo-512.png`,
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: LOCALES,
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": siteId },
        primaryImageOfPage: `${SITE_URL}/og.png`,
      },
      {
        "@type": "Course",
        "@id": `${pageUrl}#course`,
        name: t.jsonld.courseName,
        description: t.meta.description,
        url: pageUrl,
        inLanguage: lang,
        educationalLevel: "Beginner",
        teaches: t.features.items.map((item) => item.title),
        provider: { "@id": orgId },
      },
    ],
  };
}

// Safe to embed inside <script type="application/ld+json">.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
