"use server";

import { redirect } from "next/navigation";
import { createContactMessage } from "@/lib/db";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    redirect("/contact?error=missing");
  }

  await createContactMessage({ name, email, message });

  redirect("/contact?sent=1");
}
