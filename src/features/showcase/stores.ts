/** Real stores running on SalesCenta, shown on the home and Showcase pages. */
export const stores = [
  { name: "Serene", kind: "Bedding and home", href: "https://serene.ng/", image: "/showcase/serene.png" },
  { name: "Greysteed", kind: "Gifts and leather goods", href: "https://greysteed.com/", image: "/showcase/grey.png" },
  { name: "SalesCenta Demo", kind: "Our fashion demo store", href: "https://demo.salescenta.com/", image: "/showcase/demo.png" },
];

export type Store = (typeof stores)[number];

/** "https://serene.ng/" → "serene.ng", for the browser-bar label. */
export function displayUrl(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
