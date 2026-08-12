import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tsugunaga.dev",
  description: "音楽のこと、学んだこと、日々のことを綴る個人ブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header>
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 px-6 py-6">
            <Link
              href="/"
              className="text-xl font-[family-name:var(--font-serif-latin)]"
            >
              tsugunaga<span className="italic text-muted">.dev</span>
            </Link>
            <NavLinks />
          </div>
          <div className="border-b border-border" />
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-6 text-xs text-muted font-[family-name:var(--font-serif-latin)]">
            <span>© 2026 tsugunaga.dev</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
