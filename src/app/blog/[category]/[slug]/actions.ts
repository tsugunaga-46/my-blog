"use server";

import { prisma } from "@/lib/prisma";

export async function incrementViews(slug: string): Promise<number> {
  const result = await prisma.postView.upsert({
    where: { slug },
    create: { slug, count: 1 },
    update: { count: { increment: 1 } },
  });
  return result.count;
}
