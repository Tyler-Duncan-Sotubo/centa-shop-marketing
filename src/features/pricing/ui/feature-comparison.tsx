import { BsCheckCircle, BsDashCircle } from "react-icons/bs";
import { FadeInUp } from "@/shared/ui/motion";

interface FeatureRow {
  label: string;
  starter: string | boolean;
  growth: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

/** Real plan-feature matrix, from admin/src/features/subscription/config/plan-features.ts */
const rows: FeatureRow[] = [
  { label: "Stores", starter: "1", growth: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Team members", starter: "5", growth: "10", pro: "Unlimited", enterprise: "Unlimited" },
  { label: "Credits / month", starter: "500", growth: "2,000", pro: "5,000", enterprise: "Custom" },
  { label: "Multi-location", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Bulk actions", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Quotes", starter: true, growth: true, pro: true, enterprise: true },
  { label: "Tax settings", starter: true, growth: true, pro: true, enterprise: true },
  { label: "Shipping zones", starter: true, growth: true, pro: true, enterprise: true },
  { label: "Shipping integrations", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Email campaigns", starter: true, growth: true, pro: true, enterprise: true },
  { label: "SMS campaigns", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Analytics dashboard", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Data retention", starter: "—", growth: "90 days", pro: "365 days", enterprise: "365 days" },
  { label: "Revenue reports & staff logs", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Product reviews", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Google Analytics & Meta Pixel", starter: false, growth: true, pro: true, enterprise: true },
  { label: "Custom domain", starter: false, growth: false, pro: true, enterprise: true },
  { label: "Zoho integration", starter: false, growth: false, pro: true, enterprise: true },
  { label: "API access & webhooks", starter: false, growth: false, pro: true, enterprise: true },
  { label: "Priority / dedicated support", starter: false, growth: false, pro: true, enterprise: true },
];

const columns = [
  { key: "starter" as const, label: "Starter" },
  { key: "growth" as const, label: "Growth" },
  { key: "pro" as const, label: "Pro" },
  { key: "enterprise" as const, label: "Enterprise" },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <BsCheckCircle className="text-primary text-lg mx-auto" />
    ) : (
      <BsDashCircle className="text-gray-300 dark:text-gray-700 text-lg mx-auto" />
    );
  }
  return <span className="text-slate-600 dark:text-slate-300">{value}</span>;
}

export default function FeatureComparison() {
  return (
    <FadeInUp className="overflow-x-auto">
      <table className="w-full min-w-175 text-center border-collapse">
        <thead>
          <tr>
            <th className="text-start p-4 font-semibold text-slate-600 dark:text-slate-300">
              Feature
            </th>
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 font-semibold text-black dark:text-white"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.label}
              className={
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-slate-800"
                  : "bg-white dark:bg-slate-900"
              }
            >
              <td className="text-start p-4 text-slate-600 dark:text-slate-300">
                {row.label}
              </td>
              {columns.map((col) => (
                <td key={col.key} className="p-4">
                  <Cell value={row[col.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </FadeInUp>
  );
}
