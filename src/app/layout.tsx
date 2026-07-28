import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  description: "音楽・エンジニア学習記録・ネット活動を発信する個人ブログ兼ポートフォリオ",
};

const NAV_LINKS = [
  { href: "/", label: "ホーム" },
  { href: "/blog", label: "ブログ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "お問い合わせ" },
];

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
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 px-6 py-5">
            <Link href="/" className="font-semibold tracking-tight">
              tsugunaga<span className="text-muted">.dev</span>
            </Link>
            <nav className="flex gap-5 text-sm text-muted">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-muted">
            <span>© 2026 tsugunaga.dev</span>
            <span>Next.js / Tailwind / Prisma / Docker / Ubuntu / Cloudflare Tunnel</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
