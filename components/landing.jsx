import Image from "next/image";
import {
  IconBrandTelegram,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/spotlight";
import { GridBackground } from "@/components/ui/grid-background";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Navbar from "@/components/ui/navbar";
import { getDictionary } from "@/lib/i18n";
import { buildJsonLd, serializeJsonLd } from "@/lib/seo";
import { LOCALE_META, TELEGRAM_URL } from "@/lib/site";

const MARQUEE_LOGOS = [
  "Ethereum",
  "Bitcoin",
  "Glassnode",
  "CoinMarketCap",
  "Binance",
  "Glassnode",
  "CoinMarketCap",
  "Binance",
];

// Server component: all copy comes from lib/i18n/<lang>.js, so crawlers get
// fully rendered, language-specific HTML. Interactive pieces (navbar, cards,
// marquee, animated backgrounds) are their own client components.
export default function Landing({ lang }) {
  const t = getDictionary(lang);
  const altLang = lang === "en" ? "fa" : "en";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd(lang)) }}
      />

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Background */}
        <GridBackground />
        <Spotlight className="-top-40 left-0 md:left-60" fill="white" />

        {/* Navbar */}
        <Navbar
          links={t.nav.links}
          homeHref={LOCALE_META[lang].path}
          labels={t.a11y}
          alternate={{
            href: LOCALE_META[altLang].path,
            lang: altLang,
            label: LOCALE_META[altLang].switchLabel,
          }}
        />

        <main>
          {/* Hero */}
          <section id="hero" className="pt-32 pb-24 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/ETH.png"
                alt={t.hero.imageAlt}
                width={645}
                height={1228}
                sizes="72px"
                priority
                className="w-18 h-auto pt-8 animate-float"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 px-6">
              {t.hero.title}
            </h1>
            <p className="max-w-2xl mx-auto px-6 text-muted-foreground text-lg">
              {t.hero.description}
            </p>
            <div className="mt-8">
              <a
                href="#cta"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
              >
                {t.hero.cta}
              </a>
            </div>
          </section>

          {/* Logo Marquee */}
          <section className="py-10" aria-hidden="true">
            <LogoMarquee logos={MARQUEE_LOGOS} />
          </section>

          {/* Features */}
          <section id="features" className="py-24 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t.features.title}
            </h2>
            <CardHoverEffect items={t.features.items} />
          </section>

          {/* Course Intro */}
          <section id="course" className="relative py-24 overflow-hidden">
            {/* Background Beams */}
            <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {t.audience.title}
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mb-12">
                {t.audience.intro}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto text-start">
                {t.audience.items.map(({ emoji, title, text }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="text-2xl sm:text-3xl" aria-hidden="true">
                      {emoji}
                    </span>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <span className="font-medium text-foreground">
                        {title}
                      </span>{" "}
                      {text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-12 text-muted-foreground text-sm sm:text-base">
                <p className="font-medium text-foreground">
                  {t.audience.noteStrong}
                </p>
                <p>{t.audience.note}</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section
            id="testimonials"
            className="relative py-24 max-w-6xl mx-auto px-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              {t.testimonials.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {t.testimonials.items.map(({ quote, name, role }) => (
                <figure key={name} className="relative group rounded-2xl h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl pointer-events-none" />

                  {/* Card content */}
                  <div className="relative z-10 rounded-2xl bg-card border border-border p-6 shadow-lg transition-transform hover:-translate-y-1 h-full flex flex-col">
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      <p>
                        {lang === "fa" ? `«${quote}»` : `“${quote}”`}
                      </p>
                    </blockquote>
                    <figcaption className="font-medium text-foreground">
                      {name}
                      <span className="block text-sm text-muted-foreground">
                        {role}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="py-24 text-center px-6">
            <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-muted-foreground mb-8">{t.cta.text}</p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              <IconBrandTelegram aria-hidden="true" /> {t.cta.button}
            </a>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-border text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://x.com/#"
              aria-label={t.a11y.socialX}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandX aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/#"
              aria-label={t.a11y.socialInstagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram aria-hidden="true" />
            </a>
            <a
              href={TELEGRAM_URL}
              aria-label={t.a11y.socialTelegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTelegram aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </footer>
      </div>
    </>
  );
}
