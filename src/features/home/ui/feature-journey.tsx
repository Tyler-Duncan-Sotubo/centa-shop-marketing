"use client";

import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  HiOutlineShoppingCart,
  HiOutlineDocumentText,
  HiOutlineReceiptTax,
  HiOutlineCreditCard,
  HiOutlineCube,
  HiOutlineTag,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineSwitchHorizontal,
  HiOutlineTruck,
  HiOutlineChartBar,
  HiOutlineGift,
  HiOutlineSpeakerphone,
  HiOutlineTicket,
  HiOutlineFolder,
  HiOutlineNewspaper,
  HiOutlineTemplate,
} from "react-icons/hi";
import JourneyThread from "./journey-thread";
import FeatureSection from "./feature-section";
import { VisualFrame, StatRow, AnimatedBar } from "./mini-visual";

export default function FeatureJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      <JourneyThread targetRef={containerRef} />

      {/* Sales */}
      <FeatureSection
        eyebrow="Sales"
        title="Every order, quote, and abandoned cart in one queue"
        desc="Orders from your website, WhatsApp, and POS land in the same place — with quotes for buyers who need one first, and automatic nudges for carts that didn't finish."
        tags={[
          { icon: HiOutlineShoppingCart, label: "Orders" },
          { icon: HiOutlineDocumentText, label: "Quotes" },
          { icon: HiOutlineCreditCard, label: "Payment links" },
        ]}
        visual={
          <VisualFrame tint="primary">
            <StatRow icon={HiOutlineShoppingCart} label="Orders" value="10" trend="+3 today" delay={0} />
            <StatRow icon={HiOutlineDocumentText} label="Open quotes" value="4" delay={0.1} />
            <StatRow icon={HiOutlineShoppingCart} label="Abandoned carts" value="6" trend="follow up" delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Finance */}
      <FeatureSection
        eyebrow="Finance"
        title="Invoices and payments, tracked to the naira"
        desc="Turn a quote into a branded invoice, see what's paid or outstanding, and reconcile bank transfers and card payments without a spreadsheet."
        tags={[
          { icon: HiOutlineReceiptTax, label: "Invoices" },
          { icon: HiOutlineCreditCard, label: "Payments received" },
        ]}
        tone="tint"
        reverse
        visual={
          <VisualFrame tint="emerald">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-slate-400">INV-000042</span>
              <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium px-2.5 py-1">
                Paid
              </span>
            </div>
            <StatRow icon={HiOutlineReceiptTax} label="Outstanding" value="₦340,000" delay={0} />
            <StatRow icon={HiOutlineCreditCard} label="Paid this month" value="₦2.1M" trend="+12%" delay={0.1} />
          </VisualFrame>
        }
      />

      {/* Products */}
      <FeatureSection
        eyebrow="Products"
        title="Catalog, bundles, and barcodes that stay in sync"
        desc="Build your catalog once — collections, bundles, reviews, and scannable barcodes all pull from the same product record, in-store and online."
        tags={[
          { icon: HiOutlineCube, label: "Products" },
          { icon: HiOutlineTag, label: "Collections" },
          { icon: HiOutlineCube, label: "Bundles" },
          { icon: HiOutlineStar, label: "Reviews" },
        ]}
        visual={
          <VisualFrame tint="amber">
            <AnimatedBar label="Bed & bath" percent={62} color="#f08a2e" delay={0} />
            <AnimatedBar label="Kitchen" percent={41} color="#f08a2e" delay={0.1} />
            <AnimatedBar label="Decor" percent={28} color="#f08a2e" delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Customers */}
      <FeatureSection
        eyebrow="Customers"
        title="Know who's buying, wholesale or one-off"
        desc="Every order and quote rolls up to a customer record — repeat buyers, bulk accounts, and first-timers, all visible without digging through order history."
        tags={[{ icon: HiOutlineUserGroup, label: "Customers" }]}
        tone="tint"
        reverse
        visual={
          <VisualFrame tint="violet">
            <StatRow icon={HiOutlineUserGroup} label="Total customers" value="1,284" delay={0} />
            <StatRow icon={HiOutlineUserGroup} label="Repeat buyers" value="38%" trend="+4%" delay={0.1} />
            <StatRow icon={HiOutlineOfficeBuilding} label="Wholesale accounts" value="12" delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Inventory */}
      <FeatureSection
        eyebrow="Inventory"
        title="One stock count, every store and warehouse"
        desc="Track stock by location, move inventory between stores with a clear paper trail, and dispatch orders without ever overselling what's actually on the shelf."
        tags={[
          { icon: HiOutlineOfficeBuilding, label: "Stock by location" },
          { icon: HiOutlineSwitchHorizontal, label: "Transfers" },
          { icon: HiOutlineTruck, label: "Dispatches" },
        ]}
        visual={
          <VisualFrame tint="sky">
            <StatRow icon={HiOutlineOfficeBuilding} label="Store 1" value="142 units" delay={0} />
            <StatRow icon={HiOutlineOfficeBuilding} label="Store 2" value="98 units" delay={0.1} />
            <StatRow icon={HiOutlineSwitchHorizontal} label="In transfer" value="20 units" delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Analytics */}
      <FeatureSection
        eyebrow="Analytics"
        title="Real numbers, not a gut feeling"
        desc="Revenue, orders, and channel performance in one view — plus GA4, Meta Pixel, and TikTok Pixel wired in, so your ad spend and your sales data finally agree."
        tags={[{ icon: HiOutlineChartBar, label: "Analytics" }]}
        tone="tint"
        reverse
        visual={
          <VisualFrame tint="primary">
            <AnimatedBar label="Walk-in" percent={45} delay={0} />
            <AnimatedBar label="Online" percent={35} delay={0.1} />
            <AnimatedBar label="POS" percent={20} delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Marketing */}
      <FeatureSection
        eyebrow="Marketing"
        title="Discounts, loyalty, and campaigns that don't need a plugin"
        desc="Run discount codes, reward repeat customers with loyalty points, and send email or SMS campaigns funded by credits you top up when you need them."
        tags={[
          { icon: HiOutlineTicket, label: "Discounts" },
          { icon: HiOutlineGift, label: "Loyalty" },
          { icon: HiOutlineSpeakerphone, label: "Campaigns" },
        ]}
        visual={
          <VisualFrame tint="rose">
            <StatRow icon={HiOutlineTicket} label="Active discounts" value="3" delay={0} />
            <StatRow icon={HiOutlineGift} label="Loyalty members" value="512" trend="+21" delay={0.1} />
            <StatRow icon={HiOutlineSpeakerphone} label="Last campaign open rate" value="34%" delay={0.2} />
          </VisualFrame>
        }
      />

      {/* Content */}
      <FeatureSection
        eyebrow="Content"
        title="Files and blog posts, without a separate CMS"
        desc="Store product photos and brand assets in one media library, and publish blog posts that boost your SEO — all from the same dashboard you already use."
        tags={[
          { icon: HiOutlineFolder, label: "Files" },
          { icon: HiOutlineNewspaper, label: "Blog" },
        ]}
        tone="tint"
        reverse
        visual={
          <VisualFrame tint="amber">
            <StatRow icon={HiOutlineFolder} label="Media files" value="248" delay={0} />
            <StatRow icon={HiOutlineNewspaper} label="Published posts" value="12" trend="+2 this month" delay={0.1} />
          </VisualFrame>
        }
      />

      {/* Website */}
      <FeatureSection
        eyebrow="Website"
        title="A storefront you edit, not one you have to code"
        desc="Homepage sections, navigation, SEO, and branding — all live-editable, with WhatsApp checkout built in, not bolted on as a workaround."
        tags={[
          { icon: HiOutlineTemplate, label: "Storefront" },
          { icon: BsWhatsapp, label: "WhatsApp checkout" },
        ]}
        visual={
          <VisualFrame tint="sky">
            <StatRow icon={HiOutlineTemplate} label="Live sections" value="7" delay={0} />
            <StatRow icon={BsWhatsapp} label="Checkout" value="WhatsApp-native" delay={0.1} />
            <StatRow icon={HiOutlineChartBar} label="SEO score" value="92/100" trend="good" delay={0.2} />
          </VisualFrame>
        }
      />
    </div>
  );
}
