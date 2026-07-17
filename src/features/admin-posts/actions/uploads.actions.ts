"use server";

import { getServerAuthSession } from "@/shared/auth/auth-options";
import { createPresignedPutUrl } from "@/shared/aws/s3";

function sanitizeFileName(name: string) {
  return (name || "upload")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .slice(0, 120);
}

export async function getUploadUrl(fileName: string, contentType: string) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const key = `platform-posts/${Date.now()}-${sanitizeFileName(fileName)}`;

  return createPresignedPutUrl({ key, contentType });
}
