import Image from "next/image";

const STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "Ubuntu Server",
  "Cloudflare Tunnel",
];

const TIMELINE = [
  { date: "2026.07", title: "Next.jsでのフルスタック開発を開始" },
  { date: "2026.07", title: "自宅にUbuntuサーバーを構築、Cloudflare Tunnelで公開" },
  { date: "2026 予定", title: "お問い合わせ機能・閲覧数カウンターの実装" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-3">
        Profile
      </p>
      <h1 className="font-[family-name:var(--font-serif-jp)] font-bold text-3xl pb-6 border-b border-border mb-10">
        About
      </h1>

      <div className="grid sm:grid-cols-[220px_1fr] gap-6 sm:gap-10 items-start mb-16">
        <div className="border border-border p-2 bg-surface">
          <Image
            src="/childhood.jpg"
            alt="幼少期の写真"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <p className="mt-2 text-center text-xs italic text-muted font-[family-name:var(--font-serif-latin)]">
            2009, somewhere on a trip
          </p>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-serif-jp)] font-bold text-xl">つぐなが(嗣永)</h2>
          <p className="text-sm text-muted mt-1">28歳 / IT業界2年目</p>
          <p className="mt-4 text-sm leading-relaxed max-w-md">
            音楽が好きで、日々のことをゆるく書き残しています。最近は少しずつ手を動かしながらエンジニアの勉強もしていて、このサイトもその実践の一つです。実演しながら学ぶスタイルが好きです。
          </p>
        </div>
      </div>

      <h2 className="text-sm tracking-[0.15em] pb-3 border-b border-border mb-6">使用技術</h2>
      <div className="flex flex-wrap gap-2 mb-14">
        {STACK.map((s) => (
          <span
            key={s}
            className="text-xs border border-border rounded-sm px-2.5 py-1 text-muted font-[family-name:var(--font-serif-latin)]"
          >
            {s}
          </span>
        ))}
      </div>

      <h2 className="text-sm tracking-[0.15em] pb-3 border-b border-border mb-6">学習ログ</h2>
      <ol className="border-l border-border pl-5 flex flex-col gap-6">
        {TIMELINE.map((t) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-accent" />
            <p className="text-xs text-muted">{t.date}</p>
            <p className="text-sm font-medium mt-1">{t.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
