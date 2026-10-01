import Image from "next/image";

export const APP_STORE_URL = "https://apps.apple.com/app/id6802128175";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.salescenta.app";

/**
 * The official App Store and Google Play badges, linking to the
 * SalesCenta listings. Apple's and Google's own artwork, unaltered — both
 * stores' marketing guidelines require that over home-made buttons.
 */
export function StoreBadges({
  className = "",
  badgeClassName = "h-12",
}: {
  className?: string;
  /** Badge height; width follows. */
  badgeClassName?: string;
}) {
  // Ring in the surrounding text colour: light on the dark footer panel,
  // dark on the hero.
  const linkClassName =
    "rounded-lg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        <Image
          src="/images/app/app-store-badge.svg"
          alt="Download on the App Store"
          width={144}
          height={48}
          className={`w-auto ${badgeClassName}`}
        />
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        <Image
          src="/images/app/google-play-badge.png"
          alt="Get it on Google Play"
          width={161}
          height={48}
          className={`w-auto ${badgeClassName}`}
        />
      </a>
    </div>
  );
}
