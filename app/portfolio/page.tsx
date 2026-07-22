import PortfolioOverview from "@/components/dashboard/PortfolioOverview";

export default function PortfolioPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-5">
        <h1 className="text-[22px] font-bold tracking-tight text-[var(--text)]">Portfolio</h1>
        <p className="text-[var(--muted)]">Track holdings, performance, and asset allocation.</p>
      </div>

      <PortfolioOverview />
    </div>
  );
}
