import Link from "next/link";
import { IconType } from "react-icons";
import { HiRocketLaunch } from "react-icons/hi2";
import { BsWhatsapp } from "react-icons/bs";
import {
  HiOutlineOfficeBuilding,
  HiOutlineChatAlt2,
} from "react-icons/hi";

interface Reason {
  icon: IconType;
  iconColor: string;
  bg: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const reasons: Reason[] = [
  {
    icon: HiRocketLaunch,
    iconColor: "#0050a3",
    bg: "bg-primary/5",
    title: "Get selling, fast and easy.",
    desc: "Launch your online store in no time — and keep the same platform as you add locations, staff, and wholesale buyers, instead of migrating later.",
    cta: "Try it for free",
    href: "/page-pricing",
  },
  {
    icon: BsWhatsapp,
    iconColor: "#25D366",
    bg: "bg-emerald-500/5",
    title: "Sell where your customers already are.",
    desc: "WhatsApp-native checkout means customers can browse, ask questions, and pay without ever leaving the chat they already use every day.",
    cta: "See our features",
    href: "/page-pricing",
  },
  {
    icon: HiOutlineOfficeBuilding,
    iconColor: "#e37400",
    bg: "bg-amber-500/5",
    title: "Room to grow, one price at a time.",
    desc: "Multi-location inventory, POS, and wholesale quoting are part of the platform — not app add-ons that push your bill up every time your business does.",
    cta: "See our pricing",
    href: "/page-pricing",
  },
  {
    icon: HiOutlineChatAlt2,
    iconColor: "#7c3aed",
    bg: "bg-violet-500/5",
    title: "Real, direct support.",
    desc: "No call centre and no ticket queue. Reach out on WhatsApp or email and hear back from someone who actually knows how your store is set up.",
    cta: "Talk to us",
    href: "/contact-one",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Why choose SalesCenta
          </h3>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`p-8 rounded-xl ${reason.bg}`}
              >
                <div className="flex items-center justify-center size-16 rounded-full bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
                  <Icon
                    className="w-7 h-7"
                    style={{ color: reason.iconColor }}
                  />
                </div>

                <h4 className="mt-6 text-xl font-semibold">
                  {reason.title}
                </h4>
                <p className="text-slate-400 mt-3">{reason.desc}</p>

                <div className="mt-5">
                  <Link
                    href={reason.href}
                    className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
                  >
                    {reason.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
