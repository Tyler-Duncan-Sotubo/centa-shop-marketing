import { getUploadUrl } from "../actions/uploads.actions";

export async function uploadImage(file: File): Promise<string> {
  const { uploadUrl, url } = await getUploadUrl(
    file.name,
    file.type || "application/octet-stream",
  );

  const res = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: { "Content-Type": file.type || "application/octet-stream" },
  });

  if (!res.ok) {
    throw new Error(`Upload failed (${res.status})`);
  }

  return url;
}
