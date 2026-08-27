"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/shared/auth/auth-options";
import { platformFetch } from "@/shared/api/platform-client";
import type { PlatformPost } from "@/shared/api/platform-post.type";

type Category = "how_to" | "feature_update" | "testimonial";
type Status = "draft" | "published";

async function requireSession() {
  const session = await getServerAuthSession();
  if (!session?.user?.id) throw new Error("Unauthorized");
  return session;
}

/**
 * Slug generation, the publishedAt transition and validation all moved to the
 * backend's PlatformPostsService — this now only shapes the form data and
 * handles Next-side concerns (revalidate, redirect).
 */
function readForm(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!title || !body) throw new Error("Title and body are required");

  return {
    title,
    body,
    excerpt: String(formData.get("excerpt") ?? "").trim() || undefined,
    coverImageUrl:
      String(formData.get("coverImageUrl") ?? "").trim() || undefined,
    category: String(formData.get("category")) as Category,
    status: String(formData.get("status")) as Status,
    seoTitle: String(formData.get("seoTitle") ?? "").trim() || undefined,
    seoDescription:
      String(formData.get("seoDescription") ?? "").trim() || undefined,
  };
}

export async function createPost(formData: FormData) {
  const session = await requireSession();

  await platformFetch<PlatformPost>("platform/posts", {
    method: "POST",
    body: { ...readForm(formData), authorId: session.user.id },
  });

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
  await requireSession();

  await platformFetch<PlatformPost>(`platform/posts/${id}`, {
    method: "PATCH",
    body: readForm(formData),
  });

  revalidatePath("/admin/posts");
  revalidatePath(`/admin/posts/${id}`);
}

export async function deletePost(id: string) {
  await requireSession();

  await platformFetch(`platform/posts/${id}`, { method: "DELETE" });

  revalidatePath("/admin/posts");
}

export async function listPosts() {
  await requireSession();
  return platformFetch<PlatformPost[]>("platform/posts");
}

export async function getPost(id: string) {
  await requireSession();
  return platformFetch<PlatformPost>(`platform/posts/${id}`);
}
