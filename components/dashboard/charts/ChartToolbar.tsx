"use client";

import { useCallback, useState } from "react";
import { ChevronDown, Maximize2, Minimize2 } from "lucide-react";
import type { ChartToolbarProps } from "@/types";

const TIMEFRAME_MAP: Record<string, string> = {
  "1D": "5",
  "1W": "60",
  "1M": "240",
  "3M": "D",
  "1Y": "W",
  "All": "M",
};

export default function ChartToolbar({
  symbol = "BTC / USD",
  price = "$67,892.45",
  change = "+2.14% today",
  timeframes = ["1D", "1W", "1M", "3M", "1Y", "All"],
  activeTimeframe: initialTimeframe = "1D",
  onTimeframeChange,
  isFullscreen = false,
  onToggleFullscreen,
}: ChartToolbarProps) {
  const [active, setActive] = useState(initialTimeframe);

  const handleTimeframe = useCallback(
    (frame: string) => {
      setActive(frame);
      onTimeframeChange?.(frame, TIMEFRAME_MAP[frame] ?? "60");
    },
    [onTimeframeChange]
  );

  return (
    <div className="flex flex-col gap-3 border-b border-[color:var(--border)] bg-[color:var(--sidebar)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2 text-sm font-medium text-[var(--text)]"
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
        <div className="flex items-center gap-1 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] p-1 text-[11px] text-[var(--muted)]">
          {timeframes.map((frame) => (
            <button
              key={frame}
              type="button"
              onClick={() => handleTimeframe(frame)}
              className={`rounded-[var(--radius)] px-2.5 py-1 transition ${
                active === frame
                  ? "bg-[color:var(--primary)] text-white"
                  : "hover:bg-[color:var(--surface)] hover:text-[var(--text)]"
              }`}
            >
              {frame}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleFullscreen}
          className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-1.5 text-[11px] font-medium text-[var(--muted)] transition hover:border-[color:var(--primary)]/40 hover:text-[var(--text)]"
        >
          {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          {isFullscreen ? "Exit" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}
