import { cn } from "@/lib/utils";
import { channels } from "./sample-data";
import { ChannelGlyph, OrdersPanel } from "./product-ui";

const ROW = 64;
const GAP = 16;
const H = channels.length * ROW + (channels.length - 1) * GAP;
const W = 120;
const MID = H / 2;

function pathFor(i: number, shape: "curve" | "orthogonal") {
  const y = i * (ROW + GAP) + ROW / 2;
  return shape === "curve"
    ? `M0 ${y} C${W * 0.55} ${y}, ${W * 0.45} ${MID}, ${W} ${MID}`
    : `M0 ${y} H${W / 2} V${MID} H${W}`;
}

/**
 * Four channels feeding one order queue. The dots travel the lines to
 * show orders arriving; they're SVG-native (no JS) and hidden for
 * reduced motion.
 */
export function ChannelFlow({
  shape = "curve",
  stroke = "#d5dbe3",
  dot = "#0050a3",
  itemClassName,
  labelClassName,
  detailClassName,
  panelClassName,
}: {
  shape?: "curve" | "orthogonal";
  stroke?: string;
  dot?: string;
  itemClassName?: string;
  labelClassName?: string;
  detailClassName?: string;
  panelClassName?: string;
}) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[minmax(0,0.9fr)_120px_minmax(0,1.25fr)] md:gap-0">
      <ul className="grid gap-4">
        {channels.map((c) => (
          <li
            key={c.id}
            style={{ height: ROW }}
            className={cn("flex items-center gap-3 px-4", itemClassName)}
          >
            <ChannelGlyph channel={c.id} />
            <div className="min-w-0">
              <div className={cn("truncate text-[15px] font-medium", labelClassName)}>
                {c.label}
              </div>
              <div className={cn("truncate text-[13px]", detailClassName)}>
                {c.detail}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        width={W}
        height={H}
        className="hidden md:block"
        aria-hidden
      >
        {channels.map((c, i) => (
          <path
            key={c.id}
            d={pathFor(i, shape)}
            fill="none"
            stroke={stroke}
            strokeWidth={1.5}
          />
        ))}
        {channels.map((c, i) => (
          <circle key={c.id} r={3.5} fill={dot} className="motion-reduce:hidden">
            <animateMotion
              dur="2.8s"
              // Negative offsets start each dot mid-journey, so none sit
              // parked at the SVG origin waiting for its turn.
              begin={`-${i * 0.7}s`}
              repeatCount="indefinite"
              path={pathFor(i, shape)}
            />
          </circle>
        ))}
      </svg>

      <OrdersPanel rows={4} className={panelClassName} />
    </div>
  );
}
