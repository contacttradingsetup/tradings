// ── Root Loading Skeleton ──

export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[color:var(--border)] border-t-[color:var(--primary)]" />
        <p className="text-[var(--text-small)] text-[var(--muted)]">Loading Tradings…</p>
      </div>
    </div>
  );
}
