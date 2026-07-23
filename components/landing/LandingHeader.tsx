import Link from "next/link";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[var(--bg-start)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1920px] items-center justify-between px-8 2xl:px-12">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-[6px] bg-[var(--primary)]" />
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--text)]">
            Tradings
          </Link>
          <span className="ml-2 hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)] sm:inline">
            Workspace
          </span>
        </div>

        <nav className="flex items-center gap-10 text-[15px]">
          <Link href="/dashboard" className="font-medium text-[var(--muted)] transition hover:text-[var(--text)]">
            Dashboard
          </Link>
          <Link href="/markets" className="font-medium text-[var(--muted)] transition hover:text-[var(--text)]">
            Markets
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/login"
              className="font-medium text-[var(--text-secondary)] transition hover:text-[var(--text)]"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-[6px] bg-[var(--primary)] px-7 py-2.5 text-[15px] font-semibold text-white transition hover:bg-[var(--primary-soft)]"
            >
              Get started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
