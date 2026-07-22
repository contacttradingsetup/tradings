export default function MarketsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-5">
        <h1 className="text-[22px] font-bold tracking-tight text-[var(--text)]">Markets</h1>
        <p className="text-[var(--muted)]">Real-time market data, charts, and analysis.</p>
      </div>

      <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-12 text-center">
        <p className="text-lg font-semibold text-[var(--text)]">Market overview coming soon</p>
        <p className="mt-2 text-[var(--muted)]">Full market screening, heatmaps, and sector analysis are under development.</p>
      </div>
    </div>
  );
}
