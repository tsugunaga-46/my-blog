"use server";

import { incrementPostViews } from "@/lib/db";

export async function incrementViews(slug: string): Promise<number> {
  return incrementPostViews(slug);
}
