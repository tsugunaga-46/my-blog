import { submitContact } from "./actions";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent, error } = await searchParams;

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-3">
        Contact
      </p>
      <h1 className="font-[family-name:var(--font-serif-jp)] font-bold text-3xl pb-4 border-b border-border mb-8">
        お問い合わせ
      </h1>
      {sent && (
        <p className="mb-6 text-sm border border-accent text-accent rounded-sm px-3 py-2">
          送信しました。ありがとうございます。
        </p>
      )}
      {error && (
        <p className="mb-6 text-sm border border-red-700 text-red-700 rounded-sm px-3 py-2">
          お名前・メールアドレス・メッセージをすべて入力してください。
        </p>
      )}

      <form action={submitContact} className="flex flex-col gap-5">
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
          className="self-start rounded-sm bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          送信する
        </button>
      </form>
    </div>
  );
}
