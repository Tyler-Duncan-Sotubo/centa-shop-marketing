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

function SubmitButton({ recipientCount }: { recipientCount: number }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending
        ? "Sending…"
        : `Send to ${recipientCount.toLocaleString()} device${recipientCount === 1 ? "" : "s"}`}
    </Button>
  );
}

export function SendAnnouncementDialog({
  recipientCount,
}: {
  recipientCount: number;
}) {
  const [state, formAction] = useActionState<SendState, FormData>(
    sendAnnouncement,
    {},
  );
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const canSend = title.trim().length > 0 && body.trim().length > 0;

  // Derived rather than synced through an effect: once the action reports a
  // send, both dialogs are closed no matter what the local open state says.
  // Tracking `sentId` lets a second announcement reopen them afterwards.
  const [dismissedSendId, setDismissedSendId] = useState<string | null>(null);
  const justSent = state.sent != null && state.sent.id !== dismissedSendId;

  const composeOpen = open && !justSent;
  const confirmOpen = confirming && !justSent;

  function startNew() {
    // Clear the previous result and its text before reopening, so a second
    // announcement doesn't inherit the first one's draft.
    if (state.sent) setDismissedSendId(state.sent.id);
    setTitle("");
    setBody("");
    setOpen(true);
  }

  return (
    <>
      <div className="flex items-center gap-3">
        {justSent && state.sent && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Sent to {state.sent.recipientCount.toLocaleString()} device
            {state.sent.recipientCount === 1 ? "" : "s"}.
          </p>
        )}
        <Button onClick={startNew}>New announcement</Button>
      </div>

      {/* Compose */}
      <Dialog open={composeOpen} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New announcement</DialogTitle>
            <DialogDescription>
              Pushed to every merchant&apos;s phone immediately. For longer
              content, write a platform post instead.
            </DialogDescription>
          </DialogHeader>

          {state.error && (
            <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {state.error}
            </p>
          )}

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
                {title.length}/120 — this is the notification title, so keep it
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
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!canSend} onClick={() => setConfirming(true)}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirm — deliberately a second step: the send cannot be recalled,
          so it should not sit one click away from typing. */}
      <Dialog open={confirmOpen} onOpenChange={setConfirming}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send to every merchant?</DialogTitle>
            <DialogDescription>
              This pushes to {recipientCount.toLocaleString()} registered
              device{recipientCount === 1 ? "" : "s"} right now. It cannot be
              undone, edited or recalled.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-md border bg-muted/40 p-3">
            <p className="font-medium">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </div>

          <form action={formAction}>
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="body" value={body} />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setConfirming(false)}
              >
                Back
              </Button>
              <SubmitButton recipientCount={recipientCount} />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
