/** Links and contact details shared across the marketing site. */

export const SIGNUP_URL = "https://app.salescenta.com/signup";
export const LOGIN_URL = "https://app.salescenta.com/login";
export const HELP_URL = "https://support.salescenta.com/";
export const API_DOCS_URL = "https://api.salescenta.com/v1/docs";
export const SUPPORT_EMAIL = "hello@salescenta.com";

/**
 * SalesCenta's own support line, as a wa.me link. Unset until we have the
 * number: every "WhatsApp us" button hides itself rather than linking to a
 * dead chat.
 */
export const SUPPORT_WHATSAPP_URL: string | null = null;

export const TRIAL_NOTE = "14 days free. No card required.";

export const mainNav = [
  { href: "/page-pricing", label: "Pricing" },
  { href: "/zuri", label: "Zuri AI" },
  { href: "/showcase", label: "Showcase" },
  { href: "/learn", label: "Learn" },
  { href: "/page-aboutus", label: "About" },
];
