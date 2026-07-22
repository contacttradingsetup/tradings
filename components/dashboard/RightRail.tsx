import RightRailSection from "@/components/dashboard/RightRailSection";
import { WatchlistSkeleton } from "@/components/dashboard/skeletons/DashboardSkeletons";
import { EmptyState, ErrorState } from "@/components/dashboard/states/StatePanels";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  ListFilter,
  TrendingUp,
} from "lucide-react";
import {
  getWatchlist, getTopMovers, getMarketSummary,
  getFearGreed, getCalendar,
} from "@/services";

export default async function RightRail() {
  const watchlist = await getWatchlist();
  const movers = await getTopMovers();
  const marketSummary = await getMarketSummary();
  const fearAndGreed = await getFearGreed();
  const calendar = await getCalendar();
  return (
    <aside className="hidden w-[320px] shrink-0 border-l border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-6 xl:block" aria-label="Market context and calendar">
      <div className="sticky top-[88px] space-y-4">
        <RightRailSection title="Market" subtitle="Watchlist" icon={TrendingUp}>
          <div className="space-y-2 border-l-[3px] border-l-[var(--primary)]/40 pl-3">
            {watchlist.length ? watchlist.map((item) => (
              <div key={item.symbol} className="flex items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{item.symbol}</p>
                  <p className="text-[12px] text-[var(--muted)]">{item.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[var(--text)]">{item.value}</p>
                  <p className={`text-[12px] ${item.positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                    {item.change}
                  </p>
                </div>
              </div>
            )) : (
              <EmptyState
                icon={ListFilter}
                title="No watchlist symbols yet"
                description="Add a few high-conviction names to keep your market view compact."
                actionLabel="Manage watchlist"
                onAction={() => undefined}
              />
            )}
          </div>
        </RightRailSection>

        <RightRailSection title="Momentum" subtitle="Top movers" icon={Activity}>
          <div className="space-y-2">
            {movers.map((item) => (
              <div key={item.symbol} className="flex items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{item.symbol}</p>
                  <p className="text-[12px] text-[var(--muted)]">{item.label}</p>
                </div>
                <span className="text-sm font-medium text-[var(--success)]">{item.value}</span>
              </div>
            ))}
          </div>
        </RightRailSection>

        <RightRailSection title="Overview" subtitle="Market summary" icon={CircleDollarSign}>
          <div className="space-y-2">
            {marketSummary.length ? marketSummary.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                <span className="text-sm text-[var(--muted)]">{item.label}</span>
                <span className="text-sm font-medium text-[var(--text)]">{item.value}</span>
              </div>
            )) : (
              <ErrorState
                title="Market summary unavailable"
                description="We couldn’t refresh the summary right now."
                actionLabel="Retry"
                onAction={() => undefined}
              />
            )}
          </div>
        </RightRailSection>

        <RightRailSection title="Sentiment" subtitle="Fear & Greed" icon={Activity}>
          <div className="space-y-2">
            {fearAndGreed.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                <span className="text-sm text-[var(--muted)]">{item.label}</span>
                <span className="text-sm font-medium text-[var(--text)]">{item.value}</span>
              </div>
            ))}
          </div>
        </RightRailSection>

        <RightRailSection title="Events" subtitle="Economic calendar" icon={CalendarDays}>
          <div className="space-y-2 border-l-[3px] border-l-[var(--warning)]/40 pl-3">
            {calendar.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                  <p className="text-[12px] text-[var(--muted)]">{item.time}</p>
                </div>
                <span className={`text-[12px] font-medium ${item.impact === "High" ? "text-[var(--danger)]" : item.impact === "Medium" ? "text-[var(--warning)]" : "text-[var(--muted)]"}`}>{item.impact}</span>
              </div>
            ))}
          </div>
        </RightRailSection>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5 text-sm font-medium text-[var(--text)]"
        >
          Open workspace
          <ArrowRight size={15} />
        </button>
      </div>
    </aside>
  );
}

export function RightRailSkeleton() {
  return <WatchlistSkeleton />;
}
