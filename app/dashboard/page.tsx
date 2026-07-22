import DashboardOverview from "@/components/dashboard/overview/DashboardOverview";
import TradingChart from "@/components/dashboard/charts/TradingChart";
import PortfolioOverview from "@/components/dashboard/PortfolioOverview";
import NewsSection from "@/components/dashboard/news/NewsSection";
import ConnectionStatus from "@/components/dashboard/ConnectionStatus";

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-[22px] font-bold tracking-tight text-[var(--text)]">Dashboard</h1>
        </div>

        <ConnectionStatus />
      </div>

      <DashboardOverview />

      <div className="w-full">
        <TradingChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <PortfolioOverview />
        <NewsSection />
      </div>
    </div>
  );
}