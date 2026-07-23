const stats = [
  { value: "500+", label: "Tradable assets" },
  { value: "$12B+", label: "Monthly volume" },
  { value: "180", label: "Countries served" },
  { value: "99.99%", label: "Platform uptime" },
];

export default function MarketOverview() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1920px] px-8 py-[120px] 2xl:px-12">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">Global Scale</p>
          <h2 className="mt-4 text-[48px] font-bold leading-[1.12] tracking-[-0.01em] text-[var(--text)]">
            Trusted worldwide
          </h2>
          <p className="mt-6 text-[20px] leading-relaxed text-[var(--muted)]">
            Join thousands of traders who execute on our platform every day.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[240px] flex-col items-center justify-center rounded-[6px] border border-white/[0.05] bg-[var(--surface)] p-10"
            >
              <p className="text-[52px] font-bold tabular-nums leading-none tracking-[-0.02em] text-[var(--text)]">{item.value}</p>
              <p className="mt-5 text-[16px] font-medium text-[var(--muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}