import "./globals.css";

export const metadata = {
  title: "Crypto Course for Beginners",
  description: "Learn crypto from zero. Pay with crypto. Access via Telegram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
