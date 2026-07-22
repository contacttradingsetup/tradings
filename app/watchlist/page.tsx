export default function WatchlistPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-5">
        <h1 className="text-[22px] font-bold tracking-tight text-[var(--text)]">Watchlist</h1>
        <p className="text-[var(--muted)]">Monitor your favorite symbols and create custom alerts.</p>
      </div>

      <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-12 text-center">
        <p className="text-lg font-semibold text-[var(--text)]">Custom watchlists coming soon</p>
        <p className="mt-2 text-[var(--muted)]">Multi-list watchlist management with drag-and-drop reordering is under development.</p>
      </div>
    </div>
  );
}
