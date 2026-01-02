import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "Cryptivio – Learn Crypto & Web3 the Smart Way",
    template: "%s | Cryptivio",
  },
  description:
    "Cryptivio is a beginner-friendly crypto & Web3 education platform. Learn blockchain, Bitcoin, DeFi, and wallets step by step.",
  keywords:
    "crypto course, learn crypto, blockchain education, web3 for beginners, bitcoin course, defi basics",
  metadataBase: new URL("https://cryptivio.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cryptivio – Learn Crypto & Web3",
    description:
      "Beginner-friendly crypto education. No jargon. Real understanding.",
    url: "https://cryptivio.xyz",
    siteName: "Cryptivio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Cryptivio Crypto Education",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptivio – Learn Crypto & Web3",
    description: "Learn crypto the simple way. Step-by-step Web3 education.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/cryptivio-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/cryptivio-favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/cryptivio-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
