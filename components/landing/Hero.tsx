import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_0%,rgba(37,99,235,0.08),transparent)]" />

      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col justify-center px-8 py-24 2xl:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.1fr]">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2.5 rounded-[4px] border border-[var(--primary)]/25 bg-[var(--primary)]/5 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              <span className="text-[13px] font-medium tracking-wide text-[var(--primary)]">
                Institutional Trading Platform
              </span>
            </div>

            <h1 className="mt-10 text-[64px] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--text)] 2xl:text-[72px]">
              Trade smarter.
              <br />
              <span className="text-[var(--primary)]">Invest better.</span>
            </h1>

            <p className="mt-8 max-w-[520px] text-[20px] leading-relaxed text-[var(--text-secondary)]">
              Crypto, forex, stocks &amp; commodities — one modern platform built for traders who demand excellence.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex h-[52px] items-center gap-2 rounded-[6px] bg-[var(--primary)] px-10 text-[16px] font-semibold text-white transition hover:bg-[var(--primary-soft)]"
              >
                Start trading
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-[52px] items-center gap-2 rounded-[6px] border border-white/[0.08] bg-white/[0.02] px-10 text-[16px] font-medium text-[var(--text)] backdrop-blur transition hover:border-white/[0.15] hover:bg-white/[0.04]"
              >
                Create free account
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-12">
              {[
                { value: "500+", label: "Tradable assets" },
                { value: "$12B+", label: "Monthly volume" },
                { value: "99.99%", label: "Platform uptime" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-[22px] font-bold tabular-nums text-[var(--text)]">{s.value}</p>
                  <p className="mt-1 text-[14px] text-[var(--muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-[580px] rounded-[6px] border border-white/[0.06] bg-[var(--surface)] p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#F7931A]/15">
                    <span className="text-xl font-bold text-[#F7931A]">₿</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold text-[var(--text)]">BTC / USD</span>
                    <p className="text-[13px] text-[var(--muted)]">Bitcoin</p>
                  </div>
                </div>
                <span className="rounded-[4px] bg-[var(--success)]/10 px-3.5 py-1.5 text-[13px] font-semibold text-[var(--success)]">+2.35%</span>
              </div>

              <p className="mt-8 tabular-nums text-[48px] font-bold tracking-[-0.01em] text-[var(--text)]">
                $67,892<span className="text-2xl text-[var(--muted)]">.45</span>
              </p>

              <div className="mt-6 h-44 overflow-hidden rounded-[6px] bg-[var(--background)]">
                <svg viewBox="0 0 600 180" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroChart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,140 L100,125 L200,105 L300,90 L400,55 L500,40 L600,25" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M0,140 L100,125 L200,105 L300,90 L400,55 L500,40 L600,25 L600,180 L0,180 Z" fill="url(#heroChart)" />
                </svg>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "24h Volume", value: "$28.4B" },
                  { label: "Market Cap", value: "$1.32T" },
                  { label: "Dominance", value: "52.3%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-[6px] border border-white/[0.05] bg-[var(--background)] p-4 text-center">
                    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">{s.label}</p>
                    <p className="mt-2 text-[16px] font-semibold tabular-nums text-[var(--text)]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}