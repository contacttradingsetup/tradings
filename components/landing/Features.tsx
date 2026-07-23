const features = [
  { title: "Real-time data", desc: "Sub-second latency price feeds across crypto, forex, stocks & commodities.", icon: "📊" },
  { title: "Advanced charts", desc: "TradingView-powered charts with 100+ indicators and custom drawing tools.", icon: "📈" },
  { title: "Portfolio tracking", desc: "Track P&L, allocations, and performance across every exchange in one dashboard.", icon: "💼" },
  { title: "Enterprise security", desc: "SOC 2 compliant. AES-256 encryption at rest and TLS 1.3 in transit. 99.99% SLA.", icon: "🔒" },
];

export default function Features() {
  return (
    <section className="border-y border-white/[0.05] bg-[var(--surface)]">
      <div className="mx-auto w-full max-w-[1920px] px-8 py-[120px] 2xl:px-12">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">Why Tradings</p>
          <h2 className="mt-4 text-[48px] font-bold leading-[1.12] tracking-[-0.01em] text-[var(--text)]">
            Everything you need
            <br />
            to trade
          </h2>
          <p className="mt-6 text-[20px] leading-relaxed text-[var(--muted)]">
            Professional-grade tools without the complexity.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex min-h-[320px] flex-col justify-between rounded-[6px] border border-white/[0.05] bg-[var(--background)] p-10 transition hover:border-[var(--primary)]/20"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-[6px] bg-[var(--primary)]/10 text-[28px]">
                  {f.icon}
                </div>
                <h3 className="mt-8 text-[24px] font-semibold leading-tight text-[var(--text)]">{f.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-[var(--muted)]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}