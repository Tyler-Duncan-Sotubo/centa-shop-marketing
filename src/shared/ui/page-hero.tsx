import { IconType } from "react-icons";
import SectionBadge from "./section-badge";
import PageHeroShell from "./page-hero-shell";

export default function PageHero({
  icon,
  label,
  title,
  subtext,
  align = "center",
  children,
}: {
  icon: IconType;
  label: string;
  title: React.ReactNode;
  subtext?: React.ReactNode;
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  return (
    <PageHeroShell>
      <div
        className={`grid grid-cols-1 pb-8 mt-10 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <SectionBadge icon={icon} label={label} align={align} />
        <h3 className="mt-2 md:text-4xl text-2xl md:leading-normal leading-normal font-bold text-black dark:text-white">
          {title}
        </h3>
        {subtext && (
          <p
            className={`text-slate-400 text-xl mt-4 ${
              align === "center" ? "max-w-xl mx-auto" : "max-w-2xl"
            }`}
          >
            {subtext}
          </p>
        )}
        {children}
      </div>
    </PageHeroShell>
  );
}
