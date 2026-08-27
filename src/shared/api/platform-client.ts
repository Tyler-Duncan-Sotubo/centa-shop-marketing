import "server-only";

/**
 * Server-to-server client for the backend's `platform` channel.
 *
 * This app used to hold its own Drizzle connection and write platform_posts
 * directly, which meant the table had two writers and the backend could not
 * see (or invalidate its cache on) anything published here. All writes now go
 * through the backend, which owns the schema.
 *
 * `server-only` is load-bearing: PLATFORM_INTERNAL_KEY authenticates as the
 * platform operator and can publish content and, later, push to every
 * merchant. Importing this from a client component must fail the build rather
 * than ship the secret to a browser.
 */

// Both are trimmed: a stray space or newline around a value in .env.local or
// a hosting dashboard is easy to introduce and otherwise fails confusingly —
// a leading space makes the URL unparseable, and a trailing newline makes the
// key mismatch a byte-for-byte comparison.
function backendUrl(): string {
  const url = process.env.BACKEND_URL?.trim();
  if (!url) throw new Error("BACKEND_URL is not set");
  return url.replace(/\/$/, "");
}

function internalKey(): string {
  const key = process.env.PLATFORM_INTERNAL_KEY?.trim();
  if (!key) throw new Error("PLATFORM_INTERNAL_KEY is not set");
  return key;
}

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  /** Opt in to caching; defaults to no-store since this is admin data. */
  revalidate?: number;
};

export async function platformFetch<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, revalidate } = options;

  const res = await fetch(`${backendUrl()}/api/${path.replace(/^\//, "")}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "x-internal-key": internalKey(),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    ...(revalidate === undefined
      ? { cache: "no-store" as const }
      : { next: { revalidate } }),
  });

  if (!res.ok) {
    // Surface the backend's message where there is one — validation errors
    // from class-validator are the useful case — without leaking a whole
    // stack trace into the admin UI.
    let detail = "";
    try {
      const parsed = (await res.json()) as { message?: string | string[] };
      detail = Array.isArray(parsed.message)
        ? parsed.message.join(", ")
        : (parsed.message ?? "");
    } catch {
      // non-JSON error body; fall through to the status alone
    }
    throw new Error(
      detail || `Backend request failed (${res.status} ${res.statusText})`,
    );
  }

  if (res.status === 204) return undefined as T;

  // Controllers extend BaseController, whose ResponseInterceptor wraps every
  // successful payload as { status: 'success', data }. Unwrap it here so
  // callers get the payload itself.
  const payload = (await res.json()) as { status?: string; data?: T } | T;
  if (
    payload &&
    typeof payload === 'object' &&
    'status' in payload &&
    'data' in payload
  ) {
    return (payload as { data: T }).data;
  }
  return payload as T;
}
