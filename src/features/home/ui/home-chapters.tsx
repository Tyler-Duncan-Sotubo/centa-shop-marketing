import { Glow } from "@/shared/ui/site/glow";
import { body, h2, label, wrap } from "@/shared/ui/site/styles";
import {
  BrowserShot,
  InvoiceDoc,
  IpadShot,
  StockByLocation,
  WhatsAppOrder,
} from "@/shared/ui/product/product-ui";
import { chapters, type Chapter } from "../content";

/** What sits in the grey panel beside each chapter's copy. */
const visuals: Record<Exclude<Chapter["key"], "store">, React.ReactNode> = {
  online: (
    <div className="px-6 py-12 sm:px-10 md:py-16">
      <div className="relative">
        <BrowserShot
          src="/showcase/demo.png"
          url="demo.salescenta.com"
          alt="A SalesCenta storefront"
        />
        <WhatsAppOrder className="absolute -bottom-8 -right-2 w-[240px] sm:w-[280px] md:-right-6" />
      </div>
    </div>
  ),
  paid: (
    <div className="px-6 py-12 sm:px-10 md:py-16">
      <div className="relative mx-auto max-w-[460px]">
        <div className="absolute -top-5 right-4 z-10 flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-[12px] font-medium text-white shadow-lg sm:right-8">
          <span className="size-1.5 rounded-full bg-[#4ade80]" />
          ₦240,000 received by transfer
        </div>
        <InvoiceDoc />
      </div>
    </div>
  ),
  run: (
    <div className="px-6 py-12 sm:px-10 md:py-16">
      <StockByLocation className="mx-auto max-w-[460px]" />
    </div>
  ),
};

export function HomeChapters() {
  return (
    <section id="features" className="border-t border-line">
      {chapters.map((c, i) =>
        c.key === "store" ? (
          <InStore key={c.key} c={c} />
        ) : (
          <div key={c.key} className={i > 0 ? "border-t border-line" : ""}>
            <div className={`${wrap} grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ChapterCopy c={c} />
                <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 border-t border-line">
                  {c.points.map((p) => (
                    <li key={p} className="border-b border-line py-3 text-[14px] font-semibold text-[#1f2937]">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl bg-mist">{visuals[c.key]}</div>
            </div>
          </div>
        ),
      )}
    </section>
  );
}

function ChapterCopy({ c, bodyWidth = "max-w-[50ch]" }: { c: Chapter; bodyWidth?: string }) {
  return (
    <>
      <p className={`${label} text-primary`}>
        {c.index} · {c.label}
      </p>
      <h2 className={`${h2} mt-4 max-w-[17ch]`}>{c.title}</h2>
      <p className={`${body} mt-5 ${bodyWidth}`}>{c.body}</p>
    </>
  );
}

/** The POS chapter: copy across the top, the real till screen full width. */
function InStore({ c }: { c: Chapter }) {
  return (
    <div className="border-t border-line">
      <div className={`${wrap} pb-20 pt-20 md:pb-28 md:pt-28`}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-20">
          <div>
            <p className={`${label} text-primary`}>
              {c.index} · {c.label}
            </p>
            <h2 className={`${h2} mt-4 max-w-[17ch]`}>{c.title}</h2>
          </div>
          <p className={`${body} max-w-[52ch]`}>{c.body}</p>
        </div>
        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-navy px-5 pt-10 sm:px-12 md:mt-16 md:px-20 md:pt-16">
          <Glow />
          <ul className="relative mb-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[14px] font-semibold text-white/75 md:mb-12">
            {c.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sky" />
                {p}
              </li>
            ))}
          </ul>
          <IpadShot screen="checkout" className="relative mx-auto max-w-[920px]" />
        </div>
      </div>
    </div>
  );
}
