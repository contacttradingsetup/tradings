// ── Root Error Boundary ──

"use client";

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="theme-dark">
      <body className="flex min-h-screen items-center justify-center bg-[var(--background)] font-[var(--font-inter)] text-[var(--text)]">
        <div className="flex max-w-[480px] flex-col items-center rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-10 text-center">
          <div className="text-[48px]">⚠</div>
          <h1 className="mt-4 text-[var(--text-h1)] font-semibold">Application Error</h1>
          <p className="mt-3 text-[var(--text-body)] leading-6 text-[var(--muted)]">
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            className="mt-8 rounded-[8px] bg-[var(--primary)] px-5 py-2.5 text-[var(--text-body)] font-semibold text-white transition hover:bg-[var(--primary-soft)]"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
