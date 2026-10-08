import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { comparison, tiers } from "../plans";

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check aria-label="Included" className="mx-auto size-4 text-primary" />
    ) : (
      <Minus aria-label="Not included" className="mx-auto size-4 text-[#c4cad3]" />
    );
  }
  return <span className="font-medium text-ink">{value}</span>;
}

export default function FeatureComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-center text-[15px]">
        <thead>
          <tr className="border-b border-ink">
            <th className="w-[34%] py-4 pr-4 text-left" />
            {tiers.map((t) => (
              <th
                key={t.name}
                className={`px-4 py-4 text-[16px] font-bold ${t.highlight ? "text-primary" : "text-ink"}`}
              >
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.map((g) => (
            <Fragment key={g.group}>
              <tr>
                <th
                  colSpan={5}
                  className="pb-3 pt-10 text-left text-[12px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]"
                >
                  {g.group}
                </th>
              </tr>
              {g.rows.map((row) => (
                <tr key={row.label} className="border-b border-line">
                  <td className="py-4 pr-4 text-left text-copy">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={tiers[i].name} className="px-4 py-4">
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
