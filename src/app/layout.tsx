import type { Metadata } from "next";
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const hedvigSans = Hedvig_Letters_Sans({
  variable: "--font-hedvig-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Addash — Yönetim Paneli Şablonu",
    template: "%s | Addash",
  },
  description: "Next.js 16, React 19 ve Tailwind CSS v4 ile inşa edilmiş hızlı, sade ve editoryal yönetim paneli şablonu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${hedvigSans.variable} ${hedvigSerif.variable}`}>
      <body className="min-h-screen bg-parchment text-ink antialiased selection:bg-sand selection:text-ink">
        {children}
      </body>
    </html>
  );
}
