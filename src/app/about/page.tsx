import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="italic text-accent font-[family-name:var(--font-serif-latin)] text-sm mb-3">
        Profile
      </p>
      <h1 className="font-[family-name:var(--font-serif-jp)] font-bold text-3xl pb-6 border-b border-border mb-10">
        About
      </h1>

      <div className="grid sm:grid-cols-[220px_1fr] gap-6 sm:gap-10 items-start">
        <div className="border border-border p-2 bg-surface">
          <Image
            src="/childhood.jpg"
            alt="幼少期の写真"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <p className="mt-2 text-center text-xs italic text-muted font-[family-name:var(--font-serif-latin)]">
            2009, somewhere on a trip
          </p>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-serif-jp)] font-bold text-xl">つぐなが(嗣永)</h2>
          <p className="text-sm text-muted mt-1">28歳 / IT業界2年目</p>
          <p className="mt-4 text-sm leading-relaxed max-w-md">
            お酒を飲むことと音楽が好きで、元バンドマンです。近々、音楽活動も再開する予定です。日々のことをゆるく書き残しつつ、最近は少しずつ手を動かしながらエンジニアの勉強もしていて、このサイトもその実践の一つです。
          </p>
        </div>
      </div>
    </div>
  );
}
