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
  {
    slug: "lamp-influence",
    category: "music",
    title: "Lampのソフトロックに影響を受けた宅録セットアップ",
    excerpt: "機材選びから録り方まで、好きなバンドの音に近づけるために試したことをまとめました。",
    date: "2026-07-20",
    body: [
      "Lampの音源を聴き返すたびに、レンジの狭い暖かい質感がどこから来ているのか気になっていました。今回は自宅の限られた機材でその質感に少しでも近づけるために試したことの記録です。",
      "まずマイクプリの選定から見直しました。クリーンすぎる録音よりも、少し丸みのある特性の方が狙った雰囲気に近づくことが分かり、EQで削るのではなく元の音作りの段階で寄せる方針に変更しました。",
      "ミックスでは過度な処理を避け、テープシミュレーターを薄くかける程度に留めています。やりすぎるとすぐに「それっぽいだけ」の音になってしまうので、原音の良さを残す判断を優先しました。",
    ],
  },
  {
    slug: "app-router-routing-trap",
    category: "learning",
    title: "Next.jsのApp Routerでハマったルーティングの罠",
    excerpt: "フォルダ構成とURLの対応関係を勘違いして時間を溶かした話と、理解し直すまでの過程。",
    date: "2026-07-18",
    body: [
      "App Routerでは、src/app以下のフォルダ構造がそのままURLになります。最初はこの対応関係を誤解していて、意図しないパスにページができてしまい原因を探すのに時間がかかりました。",
      "動的セグメントは[slug]のように角括弧でフォルダ名を囲むことで作れます。paramsは非同期(Promise)で渡されるため、awaitしてから使う必要がある点も学びました。",
    ],
  },
  {
    slug: "home-server-cloudflare-tunnel",
    category: "net",
    title: "個人サーバーを自宅で公開するまでにやったこと",
    excerpt: "VirtualBox・Ubuntu・Cloudflare Tunnelを使って、ポート開放なしで自宅サーバーを公開した記録。",
    date: "2026-07-28",
    body: [
      "自宅のPCにVirtualBoxでUbuntu Serverを立て、Dockerでアプリを動かし、Cloudflare Tunnelで外部公開しました。ルーターのポート開放が不要なので、セキュリティ面でも安心感があります。",
      "つまずいたのはcloudflaredの設定ファイルのパス指定でした。tunnel create実行後に表示されるcredentials-fileのパスを正確にconfig.ymlへ反映する必要があります。",
    ],
  },
  {
    slug: "contact-form-prisma",
    category: "learning",
    title: "Prisma + PostgreSQLでお問い合わせフォームを作った",
    excerpt: "スキーマ設計からAPI Route実装まで、初めてのフルスタック機能実装のメモ。",
    date: "2026-07-10",
    body: [
      "スキーマ設計からAPI Route実装まで、初めてのフルスタック機能実装のメモです。詳しくはPhase 05で追記します。",
    ],
  },
  {
    slug: "july-playlist",
    category: "music",
    title: "ジャズとソフトロックのプレイリスト、7月の更新分",
    excerpt: "最近リピートしている曲を中心に、簡単な感想付きで紹介します。",
    date: "2026-07-02",
    body: ["最近リピートしている曲を中心に、簡単な感想付きで紹介します。"],
  },
  {
    slug: "why-net-category",
    category: "net",
    title: "ネットの活動記録を残しておく理由",
    excerpt: "なぜこのカテゴリを作ったのか、という自分用のメモ。",
    date: "2026-06-25",
    body: ["なぜこのカテゴリを作ったのか、という自分用のメモです。"],
  },
];

export function getPost(category: Category, slug: string): Post | undefined {
  return posts.find((p) => p.category === category && p.slug === slug);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}.${m}.${d}`;
}
