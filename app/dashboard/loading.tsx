// ── Dashboard Loading Skeleton ──

import { KPICardsSkeleton, TradingChartSkeleton } from "@/components/dashboard/skeletons/DashboardSkeletons";
import { PortfolioSkeleton } from "@/components/dashboard/skeletons/DashboardSkeletons";
import { NewsSkeleton } from "@/components/dashboard/skeletons/DashboardSkeletons";

export default function DashboardLoading() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-[color:var(--border)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <div className="skeleton-shimmer h-3 w-24 rounded-full bg-[color:var(--surface)]" />
          <div className="skeleton-shimmer h-8 w-56 rounded-[var(--radius)] bg-[color:var(--surface)]" />
          <div className="skeleton-shimmer h-4 w-96 rounded-[var(--radius)] bg-[color:var(--surface)]" />
        </div>
        <div className="skeleton-shimmer h-10 w-48 rounded-[var(--radius)] bg-[color:var(--surface)]" />
      </div>

      <KPICardsSkeleton />
      <TradingChartSkeleton />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <PortfolioSkeleton />
        <NewsSkeleton />
      </div>
    </div>
  );
}
