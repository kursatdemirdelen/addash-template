import type { Metadata } from "next";
import { Hedvig_Letters_Sans, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const hedvigSans = Hedvig_Letters_Sans({
  variable: "--font-hedvig-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Addash — Editorial Admin Starter Template",
  description: "A fast, minimal, broadsheet-inspired admin starter template built with Next.js 16, React 19, and Tailwind CSS v4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hedvigSans.variable} ${hedvigSerif.variable}`}>
      <body className="min-h-screen bg-parchment text-ink antialiased selection:bg-sand selection:text-ink">
        {children}
      </body>
    </html>
  );
}
