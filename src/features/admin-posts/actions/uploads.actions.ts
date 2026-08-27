"use server";

import { getServerAuthSession } from "@/shared/auth/auth-options";
import { platformFetch } from "@/shared/api/platform-client";

type UploadUrl = { key: string; uploadUrl: string; url: string };

// Key construction and filename sanitising moved to the backend's
// PlatformUploadsService, so the bucket and its ACL rules have one owner.
export async function getUploadUrl(fileName: string, contentType: string) {
  const session = await getServerAuthSession();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return platformFetch<UploadUrl>("platform/uploads/url", {
    method: "POST",
    body: { fileName, contentType },
  });
}
