import { IconType } from "react-icons";

export default function SectionBadge({
  icon: Icon,
  label,
  align = "center",
}: {
  icon: IconType;
  label: string;
  align?: "center" | "left";
}) {
  return (
    <span
      className={`w-fit inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 text-sm font-semibold text-slate-600 dark:text-slate-300 ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      <Icon className="text-primary size-4.5" /> {label}
    </span>
  );
}
