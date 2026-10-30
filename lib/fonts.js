import localFont from "next/font/local";

// Vazirmatn (SIL OFL 1.1 – see ./fonts/Vazirmatn-OFL.txt). Self-hosted so the
// build never depends on Google Fonts and no third-party request is made.
// Only imported by the Persian layout, so English pages don't preload it.
export const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-vazirmatn",
  fallback: ["Tahoma", "system-ui", "sans-serif"],
});
