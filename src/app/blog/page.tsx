import Link from "next/link";
import { CATEGORY_META, formatDate, posts, type Category } from "@/lib/posts";

const FILTERS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "すべて" },
  { key: "music", label: "音楽" },
  { key: "learning", label: "学習記録" },
  { key: "net", label: "ネット活動" },
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
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-lg font-semibold pb-3 border-b border-border mb-6">ブログ一覧</h1>

      <div className="flex flex-wrap gap-2 mb-8 text-sm">
        {FILTERS.map((f) => (
          <Link
            key={f.key}
            href={f.key === "all" ? "/blog" : `/blog?category=${f.key}`}
            className={`rounded-sm border px-3 py-1.5 transition-colors ${
              active === f.key
                ? "border-accent text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <ul className="flex flex-col divide-y divide-border">
        {sorted.map((post) => {
          const meta = CATEGORY_META[post.category];
          return (
            <li key={post.slug} className="py-4">
              <Link
                href={`/blog/${post.category}/${post.slug}`}
                className="group flex flex-wrap gap-x-4 gap-y-1 items-baseline"
              >
                <span className="text-xs text-muted w-20 shrink-0 tabular-nums">
                  {formatDate(post.date)}
                </span>
                <h2 className="font-semibold text-sm group-hover:text-accent transition-colors flex-1 min-w-[200px]">
                  {post.title}
                </h2>
                <span className={`text-xs border rounded-sm px-2 py-0.5 ${meta.className}`}>
                  {meta.label}
                </span>
                <p className="w-full sm:ml-24 text-sm text-muted">{post.excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
