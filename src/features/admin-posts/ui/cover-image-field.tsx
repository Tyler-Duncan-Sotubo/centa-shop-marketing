"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { uploadImage } from "../lib/upload-image";

export function CoverImageField({
  defaultValue,
}: {
  defaultValue?: string | null;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const uploadedUrl = await uploadImage(file);
      setUrl(uploadedUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }, []);

  const onDrop = useCallback(
    (accepted: File[]) => {
      handleFile(accepted[0]);
    },
    [handleFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
    disabled: uploading,
  });

  return (
    <div className="flex flex-col gap-2">
      <input type="hidden" name="coverImageUrl" value={url} />

      {url ? (
        <div className="relative h-40 w-full overflow-hidden rounded-lg border border-input">
          <Image src={url} alt="" fill className="object-cover" unoptimized />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input p-6 text-center transition-colors hover:border-primary",
            isDragActive && "border-primary bg-muted/40",
            uploading && "cursor-not-allowed opacity-60",
          )}
        >
          <input {...getInputProps()} />
          <p className="text-sm text-muted-foreground">
            {uploading
              ? "Uploading…"
              : "Drag & drop an image here, or click to choose"}
          </p>
        </div>
      )}

      {url && (
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={uploading}
            onClick={() => document.getElementById("cover-image-input")?.click()}
          >
            {uploading ? "Uploading…" : "Replace image"}
          </Button>
          <Button type="button" variant="ghost" size="sm" onClick={() => setUrl("")}>
            Remove
          </Button>
        </div>
      )}

      <input
        id="cover-image-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
