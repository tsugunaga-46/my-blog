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
    <div className="max-w-5xl mx-auto px-6">
      <section className="grid md:grid-cols-[1fr_auto_18rem] gap-x-10 gap-y-8 py-16 md:py-20">
        <div>
          <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-4">
            Personal Log
          </p>
          <h1 className="font-[family-name:var(--font-serif-jp)] font-bold text-4xl md:text-5xl leading-[1.35] text-balance">
            好きなことと、日々のこと。
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-[15px]">
            好きな音楽の話をしたり、日々のことをぼちぼち書いたり。ゆるく続けているブログです。
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

        <div className="hidden md:block w-px bg-border" />

        <div>
          <p className="text-xs tracking-[0.2em] text-muted font-[family-name:var(--font-serif-latin)] mb-4">
            INDEX
          </p>
          <ul className="flex flex-col">
            {INDEX_ITEMS.map((item) => {
              const meta = CATEGORY_META[item.category];
              return (
                <li key={item.category} className="border-b border-border">
                  <Link
                    href={`/blog?category=${item.category}`}
                    className="flex items-baseline justify-between py-3 group"
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
          <p className="mt-6 italic text-xs text-muted font-[family-name:var(--font-serif-latin)]">
            Recorded at home, served from home.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="flex items-baseline justify-between border-b border-border pb-3 mb-2">
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
              className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 py-6 border-b border-border group"
            >
              <div className="flex gap-4 md:w-3/5">
                <span className="font-[family-name:var(--font-serif-latin)] italic text-accent text-sm pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-serif-jp)] font-bold text-lg leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted tabular-nums">
                    {formatDate(post.date)} — {meta.label}
                  </p>
                </div>
              </div>
              <p className="md:w-2/5 text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
