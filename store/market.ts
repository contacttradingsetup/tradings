// ── Market Slice ──
// Phase 4: placeholder structure for Phase 6 real-time data

import type { StateCreator } from "zustand";
import type { WatchlistItem, MoverItem, MarketSummaryItem, FearGreedItem, CalendarEvent, CoinData } from "@/types";

export interface MarketSlice {
  market: {
    watchlist: WatchlistItem[];
    topMovers: MoverItem[];
    coins: CoinData[];
    marketSummary: MarketSummaryItem[];
    fearGreed: FearGreedItem[];
    calendar: CalendarEvent[];
    prices: Record<string, { price: string; change: string; positive: boolean }>;
    connectionStatus: "disconnected" | "connecting" | "connected" | "reconnecting";
    isLoading: boolean;
    error: string | null;
  };
  setWatchlist: (watchlist: WatchlistItem[]) => void;
  setTopMovers: (movers: MoverItem[]) => void;
  setCoins: (coins: CoinData[]) => void;
  setMarketSummary: (summary: MarketSummaryItem[]) => void;
  setFearGreed: (data: FearGreedItem[]) => void;
  setCalendar: (events: CalendarEvent[]) => void;
  updatePrice: (symbol: string, price: string, change: string, positive: boolean) => void;
  setConnectionStatus: (status: MarketSlice["market"]["connectionStatus"]) => void;
  setMarketError: (error: string | null) => void;
  setMarketLoading: (loading: boolean) => void;
}

export const createMarketSlice: StateCreator<MarketSlice, [], [], MarketSlice> = (set) => ({
  market: {
    watchlist: [],
    topMovers: [],
    coins: [],
    marketSummary: [],
    fearGreed: [],
    calendar: [],
    prices: {},
    connectionStatus: "disconnected",
    isLoading: false,
    error: null,
  },
  setWatchlist: (watchlist) => set((s) => ({ market: { ...s.market, watchlist } })),
  setTopMovers: (topMovers) => set((s) => ({ market: { ...s.market, topMovers } })),
  setCoins: (coins) => set((s) => ({ market: { ...s.market, coins } })),
  setMarketSummary: (marketSummary) => set((s) => ({ market: { ...s.market, marketSummary } })),
  setFearGreed: (fearGreed) => set((s) => ({ market: { ...s.market, fearGreed } })),
  setCalendar: (calendar) => set((s) => ({ market: { ...s.market, calendar } })),
  updatePrice: (symbol, price, change, positive) =>
    set((s) => ({
      market: { ...s.market, prices: { ...s.market.prices, [symbol]: { price, change, positive } } },
    })),
  setConnectionStatus: (connectionStatus) => set((s) => ({ market: { ...s.market, connectionStatus } })),
  setMarketError: (error) => set((s) => ({ market: { ...s.market, error, isLoading: false } })),
  setMarketLoading: (isLoading) => set((s) => ({ market: { ...s.market, isLoading } })),
});
