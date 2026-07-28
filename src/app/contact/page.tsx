export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-lg font-semibold pb-3 border-b border-border mb-4">お問い合わせ</h1>
      <p className="text-sm text-muted mb-8">
        送信内容はデータベースに保存される予定です(Phase 05で実装します)。現時点ではフォームの見た目のみです。
      </p>
      <form className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-xs text-muted mb-1.5">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="つぐなが"
            className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-muted mb-1.5">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs text-muted mb-1.5">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="メッセージを入力してください"
            className="w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm focus:outline-none focus:border-accent resize-y"
          />
        </div>
        <button
          type="submit"
          disabled
          className="self-start rounded-sm bg-accent text-accent-foreground px-4 py-2 text-sm font-medium opacity-60 cursor-not-allowed"
        >
          送信(準備中)
        </button>
      </form>
    </div>
  );
}
