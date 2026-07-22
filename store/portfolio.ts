// ── Portfolio Slice ──
// Phase 4: placeholder structure for Phase 6 real-time data

import type { StateCreator } from "zustand";
import type { Holding, Allocation, Performance } from "@/types";

export interface PortfolioSlice {
  portfolio: {
    holdings: Holding[];
    allocation: Allocation[];
    performance: Performance[];
    totalValue: string;
    dailyPnL: string;
    isLoading: boolean;
    error: string | null;
  };
  setHoldings: (holdings: Holding[]) => void;
  setAllocation: (allocation: Allocation[]) => void;
  setPerformance: (performance: Performance[]) => void;
  setPortfolioSummary: (totalValue: string, dailyPnL: string) => void;
  setPortfolioError: (error: string | null) => void;
  setPortfolioLoading: (loading: boolean) => void;
}

export const createPortfolioSlice: StateCreator<PortfolioSlice, [], [], PortfolioSlice> = (set) => ({
  portfolio: {
    holdings: [],
    allocation: [],
    performance: [],
    totalValue: "$0.00",
    dailyPnL: "$0.00",
    isLoading: false,
    error: null,
  },
  setHoldings: (holdings) => set((s) => ({ portfolio: { ...s.portfolio, holdings } })),
  setAllocation: (allocation) => set((s) => ({ portfolio: { ...s.portfolio, allocation } })),
  setPerformance: (performance) => set((s) => ({ portfolio: { ...s.portfolio, performance } })),
  setPortfolioSummary: (totalValue, dailyPnL) => set((s) => ({ portfolio: { ...s.portfolio, totalValue, dailyPnL } })),
  setPortfolioError: (error) => set((s) => ({ portfolio: { ...s.portfolio, error, isLoading: false } })),
  setPortfolioLoading: (isLoading) => set((s) => ({ portfolio: { ...s.portfolio, isLoading } })),
});
