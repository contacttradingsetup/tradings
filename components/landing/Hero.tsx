import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <span className="rounded-full border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-4 py-2 text-[var(--text-small)] text-[var(--primary)]">
              Trusted Trading Platform
            </span>

            <h1 className="mt-8 text-[var(--text-display)] font-bold leading-tight text-[var(--text)]">
              Trade Smarter.
              <br />
              Invest Better.
            </h1>

            <p className="mt-8 max-w-xl text-[var(--text-h4)] text-[var(--muted)]">
              Access cryptocurrency, forex, stocks and commodities
              from one modern trading platform.
            </p>

            <div className="mt-10 flex gap-4">

              <Link href="/dashboard">
                <Button>Start Trading</Button>
              </Link>

              <Button className="bg-[var(--surface-strong)] hover:bg-[var(--surface)]">
                Live Demo
              </Button>

            </div>

          </div>

          <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[var(--surface)] p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[var(--text)]">BTC / USD</span>
                <span className="text-[13px] font-medium text-[var(--success)]">+2.35%</span>
              </div>
              <p className="tabular-nums text-[36px] font-bold tracking-tight text-[var(--text)]">$67,892</p>
              <div className="h-32 rounded-[var(--radius-sm)] bg-[var(--background)]">
                <svg viewBox="0 0 400 120" className="h-full w-full">
                  <path d="M0,90 Q50,90 80,70 T160,50 T240,60 T320,20 T400,15" fill="none" stroke="var(--success)" strokeWidth="2" opacity="0.8" />
                  <path d="M0,90 Q50,90 80,70 T160,50 T240,60 T320,20 T400,15 L400,120 L0,120 Z" fill="url(#g)" opacity="0.1" />
                  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22C55E" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[{ label: "24h Vol", value: "$28.4B" }, { label: "Market Cap", value: "$1.32T" }, { label: "Dominance", value: "52.3%" }].map((s) => (
                  <div key={s.label} className="rounded-[var(--radius-sm)] border border-[color:var(--border)] bg-[var(--background)] p-2.5 text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{s.label}</p>
                    <p className="mt-1 text-[13px] font-semibold text-[var(--text)]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}