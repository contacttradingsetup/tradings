// ── Connection Status Indicator ──
// Client component that reads WebSocket connection status from the store.

"use client";

import { useAppStore } from "@/store";

const STATUS_CONFIG = {
  connected:    { color: "bg-[var(--success)]", label: "Live market feed active",   pulse: true },
  connecting:   { color: "bg-[var(--warning)]", label: "Connecting to market feed…", pulse: false },
  reconnecting: { color: "bg-[var(--warning)]", label: "Reconnecting…",              pulse: true },
  disconnected: { color: "bg-[var(--danger)]",  label: "Market feed offline",        pulse: false },
} as const;

export default function ConnectionStatus() {
  const connectionStatus = useAppStore((s) => s.market.connectionStatus);
  const config = STATUS_CONFIG[connectionStatus] ?? STATUS_CONFIG.disconnected;

  return (
    <div
      className="flex items-center gap-3 rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[13px] text-[var(--muted)]"
      role="status"
      aria-live="polite"
    >
      <span
        className={`${config.pulse ? "pulse-dot" : ""} h-2.5 w-2.5 rounded-full ${config.color}`}
      />
      {config.label}
    </div>
  );
}
