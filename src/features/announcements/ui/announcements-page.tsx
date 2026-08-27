import {
  getRecipientCount,
  listAnnouncements,
} from "../actions/announcements.actions";
import { AnnouncementComposer } from "./announcement-composer";

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export async function AnnouncementsPage() {
  const [{ count }, announcements] = await Promise.all([
    getRecipientCount(),
    listAnnouncements(),
  ]);

  return (
    <div className="px-6 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <p className="text-sm text-muted-foreground">
          Short messages pushed to every merchant&apos;s phone. For longer
          content, write a platform post instead.
        </p>
      </div>

      <AnnouncementComposer recipientCount={count} />

      <h2 className="mt-10 mb-3 font-medium">Sent</h2>
      {announcements.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nothing sent yet.
        </p>
      ) : (
        <ul className="divide-y rounded-lg border">
          {announcements.map((a) => (
            <li key={a.id} className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
                </div>
                <div className="shrink-0 text-right text-xs text-muted-foreground">
                  <p>{formatDate(a.createdAt)}</p>
                  <p className="mt-1">
                    {a.recipientCount.toLocaleString()} device
                    {a.recipientCount === 1 ? "" : "s"}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
