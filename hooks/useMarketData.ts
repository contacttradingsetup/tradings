// ── Market Data Hook ──
// Phase 4: reads from services, populates store
// Phase 6: will read real-time prices from WebSocket

"use client";

import { useAppStore } from "@/store";

export function useMarketData() {
  const market = useAppStore((s) => s.market);
  const connectionStatus = market.connectionStatus;

  return {
    watchlist: market.watchlist,
    topMovers: market.topMovers,
    coins: market.coins,
    marketSummary: market.marketSummary,
    fearGreed: market.fearGreed,
    calendar: market.calendar,
    prices: market.prices,
    connectionStatus,
    isLoading: market.isLoading,
    error: market.error,
    isLive: connectionStatus === "connected",
  };
}
