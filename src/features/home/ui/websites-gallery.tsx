import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { FadeInStagger, StaggerItem } from "@/shared/ui/motion";

/** Real stores running on SalesCenta. */
export const websites: { name: string; href: string; image: string }[] = [
  { name: "Serene", href: "https://serene.ng/", image: "/showcase/serene.png" },
  { name: "Greysteed", href: "https://greysteed.com/", image: "/showcase/grey.png" },
  { name: "SalesCenta Demo", href: "https://demo.salescenta.com/", image: "/showcase/demo.png" },
];

export default function WebsitesGallery({ limit }: { limit?: number }) {
  const items = limit ? websites.slice(0, limit) : websites;

  return (
    <FadeInStagger className="grid md:grid-cols-3 grid-cols-1 gap-7.5">
      {items.map((site) => (
        <StaggerItem key={site.name}>
          <Link
            href={site.href}
            target="_blank"
            className="group block overflow-hidden rounded-2xl bg-gray-50 p-3 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-lg dark:bg-slate-800 dark:ring-white/10"
          >
            <div className="relative h-56 w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={site.image}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top transition duration-500 ease-in-out group-hover:scale-105"
                alt={site.name}
              />
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4">
              <span className="text-base font-bold text-black dark:text-white">
                {site.name}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-black transition-colors duration-300 group-hover:text-primary dark:text-white">
                Visit
                <HiArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </FadeInStagger>
  );
}
