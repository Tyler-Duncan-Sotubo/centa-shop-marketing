"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  sendAnnouncement,
  type SendState,
} from "../actions/announcements.actions";

function ConfirmSendButton({ recipientCount }: { recipientCount: number }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending
        ? "Sending…"
        : `Send to ${recipientCount.toLocaleString()} device${recipientCount === 1 ? "" : "s"}`}
    </Button>
  );
}

export function AnnouncementComposer({
  recipientCount,
}: {
  recipientCount: number;
}) {
  const [state, formAction] = useActionState<SendState, FormData>(
    sendAnnouncement,
    {},
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [confirming, setConfirming] = useState(false);

  const canSend = title.trim().length > 0 && body.trim().length > 0;

  return (
    <div className="rounded-lg border p-4">
      <h2 className="mb-1 font-medium">New announcement</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Sends a push notification to every merchant immediately. This cannot be
        undone or recalled.
      </p>

      {state.sent && (
        <p className="mb-4 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">
          Sent to {state.sent.recipientCount.toLocaleString()} device
          {state.sent.recipientCount === 1 ? "" : "s"}.
        </p>
      )}
      {state.error && (
        <p className="mb-4 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-400">
          {state.error}
        </p>
      )}

      {/* The form lives inside the dialog so useFormStatus can drive the
          confirm button's pending state; the fields below are mirrored into
          it as hidden inputs. */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="announcement-title">Title</Label>
          <Input
            id="announcement-title"
            value={title}
            maxLength={120}
            placeholder="e.g. Bookings are now live"
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            {title.length}/120 — shown as the notification title, so keep it
            short.
          </p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="announcement-body">Message</Label>
          <Textarea
            id="announcement-body"
            value={body}
            maxLength={500}
            rows={4}
            placeholder="One or two sentences."
            onChange={(e) => setBody(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">{body.length}/500</p>
        </div>

        <Button
          type="button"
          disabled={!canSend}
          onClick={() => setConfirming(true)}
        >
          Review and send
        </Button>
      </div>

      <Dialog open={confirming} onOpenChange={setConfirming}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send this to every merchant?</DialogTitle>
            <DialogDescription>
              This pushes to {recipientCount.toLocaleString()} registered
              device{recipientCount === 1 ? "" : "s"} right now. It cannot be
              undone, edited, or recalled once sent.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-md border bg-muted/40 p-3">
            <p className="font-medium">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>

          <form action={formAction} onSubmit={() => setConfirming(false)}>
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="body" value={body} />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setConfirming(false)}
              >
                Cancel
              </Button>
              <ConfirmSendButton recipientCount={recipientCount} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
