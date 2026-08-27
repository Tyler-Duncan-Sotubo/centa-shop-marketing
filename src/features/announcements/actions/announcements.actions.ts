"use server";

import { revalidatePath } from "next/cache";
import { getServerAuthSession } from "@/shared/auth/auth-options";
import { platformFetch } from "@/shared/api/platform-client";

export type Announcement = {
  id: string;
  title: string;
  body: string;
  recipientCount: number;
  createdAt: string;
};

async function requireSession() {
  const session = await getServerAuthSession();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session;
}

export async function listAnnouncements() {
  await requireSession();
  return platformFetch<Announcement[]>("platform/announcements");
}

/** Devices a send would reach right now. Shown before sending, since it cannot be undone. */
export async function getRecipientCount() {
  await requireSession();
  return platformFetch<{ count: number }>(
    "platform/announcements/recipient-count",
  );
}

export type SendState = { error?: string; sent?: { recipientCount: number } };

export async function sendAnnouncement(
  _prev: SendState,
  formData: FormData,
): Promise<SendState> {
  const session = await requireSession();

  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!title || !body) return { error: "Title and message are required." };

  try {
    const created = await platformFetch<Announcement>(
      "platform/announcements",
      { method: "POST", body: { title, body, sentBy: session.user.id } },
    );
    revalidatePath("/admin/announcements");
    return { sent: { recipientCount: created.recipientCount } };
  } catch (err) {
    // Surfaced in the form rather than thrown: the send is irreversible, so
    // the admin needs to know whether it actually went out, not a crash page.
    return {
      error:
        err instanceof Error ? err.message : "Could not send the announcement.",
    };
  }
}
