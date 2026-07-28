import Link from "next/link";
import { CATEGORY_META, formatDate, posts } from "@/lib/posts";

export default function Home() {
  const latest = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <p className="text-sm text-accent font-medium">Personal Log</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-lg">
          エンジニアを目指す、学習と制作の記録。
        </h1>
        <p className="mt-4 text-muted max-w-md leading-relaxed">
          音楽制作、未経験からのエンジニア学習、日々のネット活動を記録しているブログです。このサイト自体もその記録の一部として、自宅サーバーで運用しています。
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/blog"
            className="rounded-sm bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            記事を読む
          </Link>
          <Link
            href="/about"
            className="rounded-sm border border-border px-4 py-2 text-sm font-medium hover:border-muted transition-colors"
          >
            About
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <h2 className="text-lg font-semibold pb-3 border-b border-border mb-6">
          最新の記録
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {latest.map((post) => {
            const meta = CATEGORY_META[post.category];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.category}/${post.slug}`}
                className="rounded-sm border border-border bg-surface p-5 flex flex-col gap-2 hover:border-muted transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className={`border rounded-sm px-2 py-0.5 ${meta.className}`}>
                    {meta.label}
                  </span>
                  <span className="text-muted">{formatDate(post.date)}</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug">{post.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
