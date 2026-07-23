import Card from "@/components/ui/Card";
import { ArrowUpRight, ArrowDownRight, PieChart, TrendingUp, Wallet2 } from "@/components/ui/Icons";
import { PortfolioSkeleton, TableSkeleton } from "../skeletons/DashboardSkeletons";
import { EmptyState, ErrorState } from "../states/StatePanels";
import type { PortfolioSectionProps } from "@/types";
import { getHoldings, getAllocation, getPerformance } from "@/services";

export default async function PortfolioSection({
  title = "Portfolio",
  subtitle = "Position overview",
}: PortfolioSectionProps) {
  const holdings = await getHoldings();
  const allocations = await getAllocation();
  const performance = await getPerformance();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Portfolio</p>
          <h2 className="mt-1 text-[16px] font-semibold text-[var(--text)]">{title}</h2>
          <p className="text-[13px] text-[var(--muted)]">{subtitle}</p>
        </div>
        <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
          4 assets
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Holdings</p>
              <p className="mt-1 text-[15px] font-semibold text-[var(--text)]">Current positions</p>
            </div>
            <div className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
              <TrendingUp size={15} />
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)]">
            <table className="w-full border-collapse text-sm" aria-label="Portfolio holdings">
              <thead>
                <tr className="border-b border-[color:var(--border)] text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  <th scope="col" className="px-3 py-2.5 text-left">Asset</th>
                  <th scope="col" className="px-3 py-2.5 text-right">Value</th>
                  <th scope="col" className="px-3 py-2.5 text-right">Alloc.</th>
                  <th scope="col" className="px-3 py-2.5 text-right">P&L</th>
                </tr>
              </thead>
              <tbody>
                {holdings.length ? holdings.map((item) => (
                  <tr key={item.ticker} className="motion-safe-transition border-t border-[color:var(--border)]/60 text-sm hover:bg-[color:var(--surface)]">
                    <td className="px-3 py-2.5">
                      <p className="text-[13px] font-medium text-[var(--text)]">{item.asset}</p>
                      <p className="text-[12px] text-[var(--muted)]">{item.ticker} · {item.quantity}</p>
                    </td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-[13px] font-medium text-[var(--text)]">{item.value}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums text-[12px] text-[var(--muted)]">{item.allocation}</td>
                    <td className={`px-3 py-2.5 text-right tabular-nums text-[13px] font-semibold ${item.positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                      {item.positive ? "+" : "-"}{item.pnl}
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="px-3 py-4">
                      <EmptyState
                        icon={Wallet2}
                        title="No positions open"
                        description="Your portfolio will appear here as soon as you add positions."
                        actionLabel="Create position"
                        onAction={() => undefined}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Allocation</p>
                <p className="mt-1 text-[15px] font-semibold text-[var(--text)]">Risk mix</p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
                <PieChart size={15} />
              </div>
            </div>

            <ul className="mt-4 space-y-2" aria-label="Asset allocation breakdown">
              {allocations.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} aria-hidden="true" />
                    <span className="text-sm text-[var(--text)]">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[var(--text)]">{item.value}</p>
                    <p className="text-[12px] text-[var(--muted)]">{item.weight}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Daily performance</p>
                <p className="mt-1 text-[15px] font-semibold text-[var(--text)]">Momentum</p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
                <ArrowUpRight size={15} />
              </div>
            </div>

            <ul className="mt-4 space-y-2" aria-label="Performance snapshots">
              {performance.length ? performance.map((item) => (
                <li key={item.label} className="flex items-center justify-between rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                  <span className="text-sm text-[var(--muted)]">{item.label}</span>
                  <span className={`text-sm font-medium ${item.positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                    {item.value}
                  </span>
                </li>
              )) : (
                <li>
                  <ErrorState
                    title="Performance unavailable"
                    description="We could not load the latest performance snapshot."
                    actionLabel="Retry"
                    onAction={() => undefined}
                  />
                </li>
              )}
            </ul>
          </Card>

          <Card className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">Asset distribution</p>
                <p className="mt-1 text-[15px] font-semibold text-[var(--text)]">Exposure</p>
              </div>
              <div className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
                <ArrowDownRight size={15} />
              </div>
            </div>

            <div className="mt-4 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] p-3">
              <div className="h-2 overflow-hidden rounded-full bg-[color:var(--surface)]" role="img" aria-label="Asset distribution chart">
                <div className="flex h-full">
                  <div className="h-full w-[45%] rounded-l-full bg-[var(--primary)]" />
                  <div className="h-full w-[26%] bg-[var(--success)]" />
                  <div className="h-full w-[16%] bg-[var(--danger)]" />
                  <div className="h-full w-[13%] rounded-r-full bg-[var(--muted)]" />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[12px] text-[var(--muted)]">
                <span>BTC</span>
                <span>ETH</span>
                <span>SOL</span>
                <span>XRP</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSectionSkeleton() {
  return <PortfolioSkeleton />;
}

export function PortfolioTableSkeleton() {
  return <TableSkeleton />;
}
