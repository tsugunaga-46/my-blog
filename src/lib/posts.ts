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
    excerpt: "未経験エンジニアが、AIエージェントと一緒にNext.js・自宅サーバー・独自ドメインまで辿り着くまでの記録。",
    date: "2026-08-06",
    body: [
      "このサイト自体が、私にとって初めてのフルスタック開発でした。IT業界には2年ほどいますが、開発経験はほぼゼロ。それでもClaude Codeという実演形式のツールのおかげで、「動くものを作りながら学ぶ」というやり方ができました。",
      "最初に決めたのは技術構成です。Next.js(App Router)+ TypeScript + Tailwind CSSでフロントエンドを作り、お問い合わせフォームと閲覧数カウンターだけはPrisma + PostgreSQLで本物のDBに繋ぐことにしました。静的なブログだけでなく、あえて動的な機能を残したのは、フルスタックとして語れる実績にしたかったからです。",
      "つまずいた点は数え切れないほどありましたが、特に印象的だったのは3つです。ひとつ目はPrisma 7で仕様が大きく変わっていたこと(ドライバーアダプターが必須になっていました)。ふたつ目はDockerビルド時にDBへ接続しようとしてビルドが失敗したこと — 閲覧数を読むページを誤って静的生成しようとしていたのが原因でした。三つ目は自宅サーバーのVMが度々応答しなくなったことで、原因を探るためにVMの画面を直接スクリーンショットして、カーネルがCPU不足でスタックしているログを見つけたときは謎解きのようでした。",
      "インフラ面では、VirtualBox上にUbuntu Serverを立て、Dockerでコンテナ化し、Cloudflare Tunnelでルーターのポート開放なしに公開しています。最後に独自ドメイン `tsugunaga.dev` を取得して、ようやく今この記事が読めるURLに辿り着きました。",
      "「わからないまま動くものができてしまう」ことへの怖さもありましたが、途中で学習ロードマップを作ってもらい、JavaScriptの基礎からReact、DB、インフラまでを実際のコードを教材にして学び直しています。作って終わりではなく、理解してから次に進む、というやり方を続けていくつもりです。",
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
