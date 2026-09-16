import { env } from "cloudflare:workers";

type ContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

function database(): D1Database {
  if (!env.DB) {
    throw new Error("Cloudflare D1 binding DB is not configured.");
  }

  return env.DB;
}

export async function createContactMessage({
  name,
  email,
  message,
}: ContactMessageInput): Promise<void> {
  await database()
    .prepare(
      'INSERT INTO "ContactMessage" ("name", "email", "message") VALUES (?1, ?2, ?3)',
    )
    .bind(name, email, message)
    .run();
}

export async function getPostViews(slug: string): Promise<number> {
  const row = await database()
    .prepare('SELECT "count" FROM "PostView" WHERE "slug" = ?1')
    .bind(slug)
    .first<{ count: number }>();

  return row?.count ?? 0;
}

export async function incrementPostViews(slug: string): Promise<number> {
  const row = await database()
    .prepare(
      `INSERT INTO "PostView" ("slug", "count") VALUES (?1, 1)
       ON CONFLICT ("slug") DO UPDATE SET "count" = "count" + 1
       RETURNING "count"`,
    )
    .bind(slug)
    .first<{ count: number }>();

  if (!row) {
    throw new Error("Failed to update the post view count.");
  }

  return row.count;
}
