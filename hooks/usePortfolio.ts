// ── Portfolio Hook ──

"use client";

import { useAppStore } from "@/store";

export function usePortfolio() {
  const portfolio = useAppStore((s) => s.portfolio);

  return {
    holdings: portfolio.holdings,
    allocation: portfolio.allocation,
    performance: portfolio.performance,
    totalValue: portfolio.totalValue,
    dailyPnL: portfolio.dailyPnL,
    isLoading: portfolio.isLoading,
    error: portfolio.error,
  };
}
