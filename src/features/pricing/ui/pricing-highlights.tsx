import Link from "next/link";
import { IconType } from "react-icons";
import { BsWhatsapp, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";

interface Highlight {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
}

/** Placeholder copy — swap in final pricing-page messaging later. */
const highlights: Highlight[] = [
  {
    icon: BsWhatsapp,
    title: "WhatsApp checkout included",
    desc: "Every plan includes WhatsApp-native checkout, no add-on required.",
    color: "#25D366",
  },
  {
    icon: BsCreditCard2Back,
    title: "Flexible payments",
    desc: "Bank transfer, card, and POS — accept how your customers already pay.",
    color: "#635bff",
  },
  {
    icon: MdOutlineStorefront,
    title: "Your own storefront",
    desc: "A real branded site on your own domain, from the Free plan up.",
    color: "#e37400",
  },
];

export default function PricingHighlights() {
  return (
    <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex">
                <div className="flex align-middle justify-center items-center min-w-18 h-18 rounded-full bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <Icon className="w-8 h-8" style={{ color: item.color }} />
                </div>

                <div className="content ms-6">
                  <Link
                    href="#"
                    className="text-lg font-medium hover:text-primary"
                  >
                    {item.title}
                  </Link>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
