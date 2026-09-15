import Link from "next/link";
import { CATEGORY_META, formatDate, posts, type Category } from "@/lib/posts";

const INDEX_ITEMS: { category: Category; en: string }[] = [
  { category: "music", en: "Music" },
  { category: "learning", en: "Learning" },
  { category: "net", en: "Daily" },
];

export default function Home() {
  const latest = [...posts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="home-layout">
      <aside className="home-index">
          <p className="index-label text-xs tracking-[0.2em] text-muted font-[family-name:var(--font-serif-latin)]">
            INDEX
          </p>
          <ul className="index-list">
            {INDEX_ITEMS.map((item) => {
              const meta = CATEGORY_META[item.category];
              return (
                <li key={item.category}>
                  <Link
                    href={`/blog?category=${item.category}`}
                    className="flex items-baseline justify-between gap-3 py-3 group"
                  >
                    <span className="group-hover:text-accent transition-colors">
                      {meta.label}
                    </span>
                    <span className="text-xs italic text-muted font-[family-name:var(--font-serif-latin)]">
                      {item.en}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="home-note italic text-xs text-muted font-[family-name:var(--font-serif-latin)]">
            Recorded at home, served from home.
          </p>
      </aside>

      <div className="home-content">
        <section className="home-hero">
          <div>
            <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-4 tracking-[0.16em]">
              Personal Log
            </p>
            <h1 className="home-title font-[family-name:var(--font-serif-jp)] font-bold text-balance">
              好きなことと、日々のこと。
            </h1>
            <p className="home-intro">
              好きな音楽の話をしたり、日々のことをぼちぼち書いたり。
              <br />
              ゆるく続けているブログです。
            </p>
            <div className="mt-7 flex gap-6 text-sm font-[family-name:var(--font-serif-latin)]">
              <Link href="/blog" className="border-b border-foreground pb-0.5">
                記事を読む
              </Link>
              <Link href="/about" className="text-muted hover:text-foreground">
                ABOUT
              </Link>
            </div>
          </div>
          <div className="home-folio" aria-hidden="true">
            <span>{String(latest.length).padStart(2, "0")}</span>
            <em>tsugunaga.dev</em>
          </div>
        </section>

      <section className="latest-section">
        <div className="latest-heading flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="text-sm tracking-[0.15em]">最新の記録</h2>
          <span className="text-xs italic text-muted font-[family-name:var(--font-serif-latin)]">
            {latest.length} entries
          </span>
        </div>
        {latest.map((post, i) => {
          const meta = CATEGORY_META[post.category];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              className="post-row group"
            >
              <span className="post-number font-[family-name:var(--font-serif-latin)] italic text-accent text-sm">
                  {String(i + 1).padStart(2, "0")}
              </span>
              <div className="post-title-block">
                  <h3 className="font-[family-name:var(--font-serif-jp)] font-bold text-lg leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted tabular-nums">
                    {formatDate(post.date)} — {meta.label}
                  </p>
              </div>
              <p className="post-excerpt text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <span className="post-arrow" aria-hidden="true">→</span>
            </Link>
          );
        })}
      </section>
      </div>
    </div>
  );
}

