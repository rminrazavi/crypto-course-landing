import "../app/globals.css";
import { LOCALE_META } from "@/lib/site";

// Shared <html>/<body> wrapper for each language's root layout.
// - lang + dir are set per language (a11y, search engines, RTL).
// - "dark" is rendered on the server (the site defaults to dark mode), which
//   avoids a light-theme flash before the navbar's effect runs.
export default function RootShell({ lang, htmlClassName = "", bodyClassName, children }) {
  const { dir } = LOCALE_META[lang];

  return (
    <html lang={lang} dir={dir} className={`dark ${htmlClassName}`.trim()}>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
