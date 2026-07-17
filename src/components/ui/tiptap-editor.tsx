"use client";

import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Bold, Italic, List, ListOrdered, LinkIcon, ImageIcon, Undo, Redo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
  /** Upload a picked file and return its public URL. Falls back to a URL prompt if omitted. */
  onUploadImage?: (file: File) => Promise<string>;
};

// Ported from admin/src/shared/ui/tiptap-simple.tsx — same StarterKit +
// Link + Placeholder setup. Image upload is delegated via onUploadImage
// so this stays a generic UI component with no feature-specific S3 code.
export function TiptapEditor({
  value,
  onChange,
  placeholder = "Write something…",
  className,
  onUploadImage,
}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => setMounted(true), []);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ link: false }),
      Placeholder.configure({ placeholder }),
      Link.configure({ openOnClick: false, autolink: true, linkOnPaste: true }),
      Image.configure({ inline: false, allowBase64: false }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[260px] px-3 py-3 text-sm",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  React.useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if ((value || "") !== current) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [value, editor]);

  if (!mounted || !editor) return null;

  const active = (isActive: boolean) => cn(isActive && "bg-muted");

  const setLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", prev ?? "");
    if (url === null) return;
    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const insertImage = () => {
    if (onUploadImage) {
      fileInputRef.current?.click();
      return;
    }
    const url = window.prompt("Image URL");
    if (!url || !url.trim()) return;
    editor.chain().focus().setImage({ src: url.trim() }).run();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !onUploadImage) return;

    setUploading(true);
    try {
      const url = await onUploadImage(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch {
      window.alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={cn("rounded-lg border border-input", className)}>
      <style jsx global>{`
        .tiptap-editor .ProseMirror ul {
          list-style: disc;
          padding-left: 1.25rem;
        }
        .tiptap-editor .ProseMirror ol {
          list-style: decimal;
          padding-left: 1.25rem;
        }
        .tiptap-editor .ProseMirror li {
          margin: 0.2rem 0;
        }
        .tiptap-editor .ProseMirror a {
          text-decoration: underline;
        }
        .tiptap-editor .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }
        .tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
          color: var(--muted-foreground);
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="flex flex-wrap items-center gap-1 border-b border-input p-2">
        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={active(editor.isActive("bold"))}
        >
          <Bold />
        </Button>

        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={active(editor.isActive("italic"))}
        >
          <Italic />
        </Button>

        <span className="mx-1 h-4 w-px bg-border" />

        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={active(editor.isActive("bulletList"))}
        >
          <List />
        </Button>

        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={active(editor.isActive("orderedList"))}
        >
          <ListOrdered />
        </Button>

        <span className="mx-1 h-4 w-px bg-border" />

        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={setLink}
          className={active(editor.isActive("link"))}
        >
          <LinkIcon />
        </Button>

        <Button
          type="button"
          size="icon-xs"
          variant="ghost"
          onClick={insertImage}
          disabled={uploading}
        >
          <ImageIcon />
        </Button>

        {onUploadImage && (
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        )}

        {uploading && (
          <span className="text-xs text-muted-foreground">Uploading…</span>
        )}

        <div className="ml-auto flex items-center gap-1">
          <Button
            type="button"
            size="icon-xs"
            variant="ghost"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
          >
            <Undo />
          </Button>
          <Button
            type="button"
            size="icon-xs"
            variant="ghost"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
          >
            <Redo />
          </Button>
        </div>
      </div>

      <div className="tiptap-editor">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
