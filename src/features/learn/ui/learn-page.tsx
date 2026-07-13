import Link from "next/link";
import Image from "next/image";
import { HiOutlineBookOpen } from "react-icons/hi";
import PageHero from "@/shared/ui/page-hero";
import ContactCta from "@/features/home/ui/contact-cta";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

/** Placeholder articles — swap in real posts once the blog is live. */
const articles: Article[] = [
  {
    title: "Selling on WhatsApp: a practical guide for Nigerian merchants",
    excerpt:
      "How to turn WhatsApp from a chat app into your busiest sales channel.",
    image: "/images/blog/01.jpg",
    href: "#",
  },
  {
    title: "Bank transfer vs. card: what your customers actually prefer",
    excerpt:
      "Why payment choice matters more than which processor you pick.",
    image: "/images/blog/02.jpg",
    href: "#",
  },
  {
    title: "Moving your store off Shopify — what to expect",
    excerpt:
      "A walkthrough of what a migration actually involves, step by step.",
    image: "/images/blog/03.jpg",
    href: "#",
  },
  {
    title: "Recovering abandoned carts without being annoying",
    excerpt:
      "How to follow up on lost sales in a way customers don't mind.",
    image: "/images/blog/04.jpg",
    href: "#",
  },
  {
    title: "Setting up your team with the right store permissions",
    excerpt:
      "A guide to roles — who should see what as your team grows.",
    image: "/images/blog/05.jpg",
    href: "#",
  },
  {
    title: "Reading your store's analytics without the jargon",
    excerpt:
      "The numbers that actually matter when you're starting out.",
    image: "/images/blog/06.jpg",
    href: "#",
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        icon={HiOutlineBookOpen}
        label="Learn"
        title="Guides for growing your store"
        subtext="Practical advice on selling, payments, and running your business online."
      />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
            {articles.map((article) => (
              <Link
                href={article.href}
                key={article.title}
                className="group block rounded-lg overflow-hidden shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="transition duration-500 ease-in-out group-hover:scale-110"
                    alt={article.title}
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-medium group-hover:text-primary transition duration-500 ease-in-out">
                    {article.title}
                  </h5>
                  <p className="text-slate-400 mt-3">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
