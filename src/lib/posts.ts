export type Category = "music" | "learning" | "net";

export const CATEGORY_META: Record<Category, { label: string; className: string }> = {
  music: { label: "音楽", className: "text-category-music border-category-music" },
  learning: { label: "学習記録", className: "text-category-learning border-category-learning" },
  net: { label: "ネット活動", className: "text-category-net border-category-net" },
};

export type Post = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

// TODO: 記事本文は今後MDXに置き換える。今は仮データ。閲覧数はPhase 05でDB(PostView)管理に移行済み。
export const posts: Post[] = [
  {
    slug: "building-this-site-with-claude-code",
    category: "learning",
    title: "このサイトをClaude Codeと作った話",
    excerpt: "このサイトの技術構成と、構築の流れをまとめました。",
    date: "2026-08-06",
    body: [
      "このサイトは、個人のブログ兼ポートフォリオとして構築しました。フロントエンドはNext.js(App Router)とTypeScript、Tailwind CSSで実装し、お問い合わせフォームと記事の閲覧数カウンターはPrisma経由でPostgreSQLに接続し、実際のデータベースで動いています。",
      "インフラ面では、自宅のPC上にVirtualBoxでUbuntu Server(26.04 LTS)の仮想マシンを構築し、その上でDockerを使ってアプリとデータベースをコンテナ化しています。公開にはCloudflare Tunnelを利用しており、ルーターのポート開放を一切行わずにインターネットへ公開しています。独自ドメイン tsugunaga.dev もこの構成に合わせて取得しました。",
      "開発はClaude Code(AIエージェント)と対話しながら進めました。サイト設計・Next.jsでの実装・データベース連携・サーバー構築・Dockerでのデプロイ・ドメイン取得・公開までの一連の作業を、対話形式で一つずつ進めています。",
      "公開後の運用面としては、コンテナの自動復帰、データベースの日次バックアップ、VMの自動起動、UptimeRobotによる死活監視などを整えており、日常的な運用もある程度自動化しています。",
    ],
  },
];

export function getPost(category: Category, slug: string): Post | undefined {
  return posts.find((p) => p.category === category && p.slug === slug);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}
