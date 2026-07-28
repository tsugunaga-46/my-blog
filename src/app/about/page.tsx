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
      <h1 className="text-lg font-semibold pb-3 border-b border-border mb-8">About</h1>

      <div className="flex gap-4 items-start mb-14">
        <div className="w-14 h-14 rounded-sm bg-surface border border-border flex items-center justify-center text-accent font-semibold flex-shrink-0">
          つ
        </div>
        <div>
          <h2 className="font-semibold">つぐなが(嗣永)</h2>
          <p className="text-sm text-muted mt-1">
            28歳 / IT業界2年目 / 独学でエンジニアを目指して学習中
          </p>
          <p className="mt-3 text-sm leading-relaxed max-w-md">
            音楽と、開発の学習記録を発信しています。実演しながら学ぶスタイルが好きで、このサイト自体もその実践の一つです。
          </p>
        </div>
      </div>

      <h2 className="text-lg font-semibold pb-3 border-b border-border mb-6">使用技術</h2>
      <div className="flex flex-wrap gap-2 mb-14">
        {STACK.map((s) => (
          <span
            key={s}
            className="text-xs border border-border rounded-sm px-2.5 py-1 text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <h2 className="text-lg font-semibold pb-3 border-b border-border mb-6">学習ログ</h2>
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
