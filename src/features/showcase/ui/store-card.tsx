import { ArrowUpRight } from "lucide-react";
import { BrowserShot } from "@/shared/ui/product/product-ui";
import { displayUrl, type Store } from "../stores";

export function StoreCard({
  store,
  inset = false,
}: {
  store: Store;
  /** Pad the caption, for cards sitting inside a padded frame. */
  inset?: boolean;
}) {
  return (
    <a
      href={store.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <BrowserShot
        src={store.image}
        url={displayUrl(store.href)}
        alt={`${store.name} storefront`}
        className="transition-shadow group-hover:shadow-[0_24px_50px_-24px_rgba(0,24,49,0.35)]"
      />
      <div className={`mt-4 flex items-center justify-between ${inset ? "px-2" : ""}`}>
        <div>
          <div className="text-[16px] font-semibold text-ink">{store.name}</div>
          <div className="text-[14px] text-[#6b7280]">{store.kind}</div>
        </div>
        <ArrowUpRight className="size-4 text-[#9ca3af] transition-colors group-hover:text-primary" />
      </div>
    </a>
  );
}
