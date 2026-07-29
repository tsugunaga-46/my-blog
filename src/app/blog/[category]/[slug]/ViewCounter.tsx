"use client";

import { useEffect, useState, useTransition } from "react";
import { incrementViews } from "./actions";

export function ViewCounter({
  slug,
  initialViews,
}: {
  slug: string;
  initialViews: number;
}) {
  const [views, setViews] = useState(initialViews);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const updated = await incrementViews(slug);
      setViews(updated);
    });
    // 初回マウント時に一度だけカウントアップする
  }, [slug]);

  return <span className="tabular-nums">views {views}</span>;
}
