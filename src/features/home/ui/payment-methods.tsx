import Image from "next/image";
import { BsWhatsapp, BsCreditCard2Back } from "react-icons/bs";
import { SiStripe, SiPaypal } from "react-icons/si";
import { IconType } from "react-icons";

/**
 * Real payment methods/processors we support. Paystack and Fincra use their
 * real brand marks (saved locally). Stripe and PayPal have proper brand
 * marks in react-icons (Simple Icons). POS has no brand logo, so it renders
 * as a text/wordmark badge rather than a fabricated one.
 */
const items: { label: string; icon?: IconType; image?: string }[] = [
  { label: "Paystack", image: "/images/payments/paystack.png" },
  { label: "Fincra", image: "/images/payments/fincra.png" },
  { label: "Stripe", icon: SiStripe },
  { label: "PayPal", icon: SiPaypal },
  { label: "POS", icon: BsCreditCard2Back },
  { label: "WhatsApp", icon: BsWhatsapp },
];

export default function PaymentMethods() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center gap-x-4 gap-y-7.5">
      {items.map((item) => {
        const ItemIcon = item.icon;
        return (
          <div
            key={item.label}
            className="mx-auto py-4 flex items-center gap-3 text-slate-400 dark:text-slate-500"
          >
            {item.image ? (
              <Image
                src={item.image}
                width={32}
                height={32}
                className="size-8 object-contain"
                alt=""
              />
            ) : ItemIcon ? (
              <ItemIcon className="size-8" />
            ) : (
              <span className="size-2 rounded-full bg-slate-400 dark:bg-slate-500" />
            )}
            <span className="text-lg font-semibold">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
