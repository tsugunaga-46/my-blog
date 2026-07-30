import { notFound } from "next/navigation";
import { CATEGORY_META, formatDate, getPost, type Category } from "@/lib/posts";
import { prisma } from "@/lib/prisma";
import { ViewCounter } from "./ViewCounter";

// このページは閲覧数をDBからその場で読むため、ビルド時の静的生成(generateStaticParams)は使わず
// 常にリクエスト時に描画する(SSR)。DBに繋がらないビルド環境でも安全にビルドできる。

export default async function PostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = getPost(category as Category, slug);
  if (!post) notFound();

  const meta = CATEGORY_META[post.category];
  const existing = await prisma.postView.findUnique({ where: { slug: post.slug } });

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 text-xs text-muted mb-4">
        <span className={`border rounded-sm px-2 py-0.5 ${meta.className}`}>{meta.label}</span>
        <span className="tabular-nums">{formatDate(post.date)}</span>
        <ViewCounter slug={post.slug} initialViews={existing?.count ?? 0} />
      </div>
      <h1 className="text-2xl font-bold tracking-tight leading-snug mb-8">{post.title}</h1>
      <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-foreground/90">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
