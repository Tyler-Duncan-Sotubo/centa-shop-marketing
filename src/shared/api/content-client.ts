/**
 * Client for the backend's PUBLIC `content` channel — no credentials, no
 * secret. Used by the marketing blog, which renders published platform posts.
 *
 * Separate from platform-client.ts on purpose: that one carries the platform
 * operator secret and is server-only. This one is safe anywhere, and its
 * responses are cacheable.
 */

function backendUrl(): string {
  const url = (
    process.env.NEXT_PUBLIC_BACKEND_URL ?? process.env.BACKEND_URL
  )?.trim();
  if (!url) throw new Error("BACKEND_URL is not set");
  return url.replace(/\/$/, "");
}

export async function contentFetch<T>(
  path: string,
  options: { revalidate?: number } = {},
): Promise<T> {
  // Published content changes rarely; a short ISR window keeps the blog fast
  // without going stale for long after a publish.
  const { revalidate = 300 } = options;

  const res = await fetch(`${backendUrl()}/api/${path.replace(/^\//, "")}`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Content request failed (${res.status})`);
  }

  const payload = (await res.json()) as { status?: string; data?: T } | T;
  if (
    payload &&
    typeof payload === "object" &&
    "status" in payload &&
    "data" in payload
  ) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}
