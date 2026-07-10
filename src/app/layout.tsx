import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { SITE } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Software Engineer`,
  description: `${SITE.tagline} The story, work, and values of ${SITE.name}.`,
  keywords: [
    "Saidakbar Nasyrov",
    "Software Engineer",
    "Ausbildung",
    "Fachinformatiker",
    "Anwendungsentwicklung",
    "Germany",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — Software Engineer`,
    description: SITE.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-black font-sans text-zinc-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
