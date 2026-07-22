import { ChevronDown, Maximize2 } from "lucide-react";
import type { ChartToolbarProps } from "@/types";

export default function ChartToolbar({
  symbol = "BTC / USD",
  price = "$67,892.45",
  change = "+2.14% today",
  timeframes = ["1D", "1W", "1M", "3M", "1Y", "All"],
  activeTimeframe = "1D",
}: ChartToolbarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-[color:var(--border)] bg-[color:var(--sidebar)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2 text-sm font-medium text-[var(--text)]"
        >
          <span>{symbol}</span>
          <ChevronDown size={14} className="text-[var(--muted)]" />
        </button>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Live chart</p>
          <p className="mt-0.5 text-[18px] font-semibold text-[var(--text)]">{price}</p>
          <p className="text-sm text-[var(--success)]">{change}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] p-1 text-[11px] text-[var(--muted)]">
          {timeframes.map((frame) => (
            <button
              key={frame}
              type="button"
              className={`rounded-full px-2.5 py-1 transition ${activeTimeframe === frame ? "bg-[color:var(--surface)] text-[var(--text)]" : "hover:bg-[color:var(--surface)] hover:text-[var(--text)]"}`}
            >
              {frame}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1.5 text-[11px] font-medium text-[var(--muted)] transition hover:border-[color:var(--primary)]/40 hover:text-[var(--text)]"
        >
          <Maximize2 size={14} />
          Fullscreen
        </button>
      </div>
    </div>
  );
}
