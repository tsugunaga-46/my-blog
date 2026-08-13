import Link from "next/link";
import { CATEGORY_META, formatDate, posts, type Category } from "@/lib/posts";

const FILTERS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "music", label: "音楽" },
  { key: "learning", label: "学習記録" },
  { key: "net", label: "日常" },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (category ?? "all") as "all" | Category;
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);
  const sorted = [...filtered].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-3">
        Archive
      </p>
      <h1 className="font-[family-name:var(--font-serif-jp)] font-bold text-3xl mb-8">
        ブログ一覧
      </h1>

      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-xs tracking-[0.1em] font-[family-name:var(--font-serif-latin)]">
        {FILTERS.map((f) => (
          <Link
            key={f.key}
            href={f.key === "all" ? "/blog" : `/blog?category=${f.key}`}
            className={`pb-1 border-b transition-colors ${
              active === f.key
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="flex items-baseline justify-between border-b border-border pb-3 mb-2">
        <span className="text-sm tracking-[0.15em]">ARTICLES</span>
        <span className="text-xs italic text-muted font-[family-name:var(--font-serif-latin)]">
          {sorted.length} entries
        </span>
      </div>

      {sorted.length === 0 && (
        <p className="py-10 text-sm text-muted italic font-[family-name:var(--font-serif-latin)]">
          No entries yet.
        </p>
      )}

      {sorted.map((post, i) => {
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
                <h2 className="font-[family-name:var(--font-serif-jp)] font-bold text-lg leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
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
    </div>
  );
}
