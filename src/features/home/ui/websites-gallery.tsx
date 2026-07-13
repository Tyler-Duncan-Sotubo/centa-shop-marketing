import Link from "next/link";
import Image from "next/image";

/**
 * Real stores running on SalesCenta. Placeholder names/links/images until
 * real client screenshots and permission to feature them are confirmed.
 */
export const websites: { name: string; href: string; image: string }[] = [
  { name: "Store Name One", href: "#", image: "/images/portfolio/01.jpg" },
  { name: "Store Name Two", href: "#", image: "/images/portfolio/03.jpg" },
  { name: "Store Name Three", href: "#", image: "/images/portfolio/8.jpg" },
  { name: "Store Name Four", href: "#", image: "/images/portfolio/04.jpg" },
  { name: "Store Name Five", href: "#", image: "/images/portfolio/05.jpg" },
  { name: "Store Name Six", href: "#", image: "/images/portfolio/06.jpg" },
  { name: "Store Name Seven", href: "#", image: "/images/portfolio/07.jpg" },
  { name: "Store Name Eight", href: "#", image: "/images/portfolio/09.jpg" },
  { name: "Store Name Nine", href: "#", image: "/images/portfolio/10.jpg" },
];

export default function WebsitesGallery({ limit }: { limit?: number }) {
  const items = limit ? websites.slice(0, limit) : websites;

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-7.5">
      {items.map((site) => (
        <Link
          href={site.href}
          target="_blank"
          key={site.name}
          className="group block"
        >
          <div className="relative rounded-lg overflow-hidden shadow-md dark:shadow-gray-800">
            <Image
              src={site.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="transition duration-500 ease-in-out group-hover:scale-110"
              alt={site.name}
            />
          </div>
          <div className="mt-4 text-center">
            <span className="text-lg font-medium text-black dark:text-white group-hover:text-primary transition duration-500 ease-in-out">
              {site.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
