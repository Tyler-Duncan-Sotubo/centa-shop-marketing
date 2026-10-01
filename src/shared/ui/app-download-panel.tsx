import Image from "next/image";

export const APP_STORE_URL = "https://apps.apple.com/app/id6802128175";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.salescenta.app";

/**
 * "Get the app" panel at the top of the footer: copy and the official
 * store badges on one side, two app screens on the other, rising out of
 * the panel's bottom edge.
 *
 * The badges are Apple's and Google's own artwork, unaltered — both
 * stores' marketing guidelines require that over home-made buttons.
 */
export function AppDownloadPanel() {
  return (
    <div className="container relative pt-16 md:pt-24">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-700 via-primary-800 to-slate-950 ring-1 ring-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary-400/25 blur-3xl"
        />

        <div className="relative grid items-center gap-10 px-6 pt-12 md:grid-cols-2 md:gap-6 md:px-14 md:pt-16">
          <div className="text-center md:pb-16 md:text-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-200">
              SalesCenta mobile app
            </p>
            {/* leading set with ! — the site's global heading styles
                otherwise space these lines at 1.5. */}
            <h2 className="mt-4 text-3xl leading-[1.15]! font-bold text-white md:text-5xl">
              Run your business from your pocket
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-slate-300 md:mx-0 md:text-lg">
              Track sales, manage orders and payments, and update your
              products and website wherever you are.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Image
                  src="/images/app/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={144}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Image
                  src="/images/app/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={161}
                  height={48}
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* The panel clips the phones' lower half, so they read as
              rising out of it rather than floating. */}
          <div className="relative mx-auto h-72 w-full max-w-sm md:h-[26rem] md:max-w-md">
            <PhoneMockup
              src="/images/app/mockup-products.webp"
              alt="The product list in the SalesCenta app, with prices, stock and variants"
              className="absolute -bottom-16 left-0 w-40 md:-bottom-14 md:w-52"
            />
            <PhoneMockup
              src="/images/app/mockup-dashboard.webp"
              alt="The SalesCenta app dashboard, showing sales, page views and quick actions"
              className="absolute -bottom-36 right-0 w-44 md:-bottom-40 md:w-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// The mockups come framed, on a transparent background — shown as they
// are, with a drop shadow that follows the phone's outline.
function PhoneMockup({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={640}
      height={1323}
      className={`h-auto drop-shadow-2xl ${className ?? ""}`}
    />
  );
}
