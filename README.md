# tsugunaga.dev

音楽・未経験エンジニアとしての学習記録・ネット活動を発信する個人ブログ兼ポートフォリオサイトです。

**🔗 公開URL: [https://blog.tsugunaga.dev](https://blog.tsugunaga.dev)**

Cloudflare WorkersでNext.jsを動かし、問い合わせ内容と閲覧数はCloudflare D1に保存します。自宅PCやVMを起動しておく必要はありません。

## 構成

```mermaid
flowchart LR
    A[GitHub] -->|deploy| B[Cloudflare Workers]
    B --> C[Cloudflare D1]
    D((インターネット)) --> B
    B --> E[blog.tsugunaga.dev]
```

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フロントエンド | Next.js (App Router) / TypeScript / Tailwind CSS |
| バックエンド | Next.js Server Actions / vinext |
| データベース | Cloudflare D1 |
| インフラ | Cloudflare Workers |
| 公開 | Cloudflare Custom Domain |

## 機能

- ブログ記事一覧・詳細(カテゴリ: 音楽 / 学習記録 / ネット活動)
- カテゴリ別フィルタリング
- お問い合わせフォーム(D1に保存)
- 記事の閲覧数カウンター(DBでリアルタイム集計)

## ローカルでの開発

```bash
npm install
npm run db:migrate:local
npm run dev:vinext
```

ローカルD1はWranglerが自動的に管理します。

## デプロイ

最初にD1データベースを作成し、`wrangler.jsonc`の`database_id`を更新します。

```bash
npx wrangler d1 create my-blog-db
npm run db:migrate:remote
npm run deploy:vinext
```

公開後はCloudflare WorkersのCustom Domainに`blog.tsugunaga.dev`を登録します。
