// ── Dashboard Error Boundary ──

"use client";

import { RefreshCcw } from "lucide-react";

export default function DashboardError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center py-32 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--danger)]/20 bg-[color:var(--background)] text-[var(--danger)]">
        <RefreshCcw size={22} />
      </div>
      <h2 className="mt-6 text-[var(--text-h2)] font-semibold text-[var(--text)]">
        Something went wrong
      </h2>
      <p className="mt-3 max-w-md text-[var(--text-body)] leading-6 text-[var(--muted)]">
        The dashboard could not be loaded. This may be a temporary issue.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-[8px] bg-[var(--primary)] px-5 py-2.5 text-[var(--text-body)] font-semibold text-white transition hover:bg-[var(--primary-soft)]"
      >
        <RefreshCcw size={16} />
        Try again
      </button>
    </div>
  );
}
