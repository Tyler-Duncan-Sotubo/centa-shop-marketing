import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  getRecipientCount,
  listAnnouncements,
} from "../actions/announcements.actions";
import { SendAnnouncementDialog } from "./send-announcement-dialog";

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
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <SendAnnouncementDialog recipientCount={count} />
      </div>

      {announcements.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No announcements sent yet.
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Devices</TableHead>
              <TableHead>Sent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.map((a, index) => (
              <TableRow key={a.id}>
                <TableCell className="text-muted-foreground">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium">{a.title}</TableCell>
                {/* whitespace-normal overrides the cell default so the
                    clamp can actually wrap to a second line. */}
                <TableCell className="max-w-md whitespace-normal text-muted-foreground">
                  <span className="line-clamp-2">{a.body}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {a.recipientCount.toLocaleString()}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {formatDate(a.createdAt)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
