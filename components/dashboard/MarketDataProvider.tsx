"use client";

import { useEffect, useRef, useCallback } from "react";
import { useWebSocket } from "@/hooks/useWebSocket";
import { useAppStore } from "@/store";
import {
  mockWatchlist,
  mockTopMovers,
  mockCoins,
  mockMarketSummary,
  mockFearGreed,
  mockCalendar,
} from "@/services/mock/data";

const DEFAULT_SYMBOLS = ["BTC", "ETH", "SOL", "XRP", "BNB", "NVDA", "PLTR", "AMD"];

/** Simulates price fluctuation for mock polling fallback. */
function fluctuate(priceStr: string, delta = 0.005): string {
  const num = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  if (isNaN(num)) return priceStr;
  const factor = 1 + (Math.random() - 0.5) * delta * 2;
  const next = num * factor;
  if (next >= 1000) return `$${next.toFixed(2)}`;
  if (next >= 1) return `$${next.toFixed(2)}`;
  return `$${next.toFixed(4)}`;
}

function getChange(price: string, prev: string): string {
  const n = parseFloat(price.replace(/[^0-9.]/g, ""));
  const p = parseFloat(prev.replace(/[^0-9.]/g, ""));
  if (isNaN(n) || isNaN(p) || p === 0) return "0.00%";
  const pct = ((n - p) / p) * 100;
  return `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`;
}

export default function MarketDataProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);
  const subscribedRef = useRef(false);

  // Store setter functions
  const setters = useRef({
    setWatchlist: useAppStore.getState().setWatchlist,
    setTopMovers: useAppStore.getState().setTopMovers,
    setCoins: useAppStore.getState().setCoins,
    setMarketSummary: useAppStore.getState().setMarketSummary,
    setFearGreed: useAppStore.getState().setFearGreed,
    setCalendar: useAppStore.getState().setCalendar,
    updatePrice: useAppStore.getState().updatePrice,
    setConnectionStatus: useAppStore.getState().setConnectionStatus,
  });

  // Keep setters ref in sync
  useEffect(() => {
    const unsub = useAppStore.subscribe(() => {
      const s = useAppStore.getState();
      setters.current = {
        setWatchlist: s.setWatchlist,
        setTopMovers: s.setTopMovers,
        setCoins: s.setCoins,
        setMarketSummary: s.setMarketSummary,
        setFearGreed: s.setFearGreed,
        setCalendar: s.setCalendar,
        updatePrice: s.updatePrice,
        setConnectionStatus: s.setConnectionStatus,
      };
    });
    return unsub;
  }, []);

  // Polling fallback: simulate live price updates using mock data
  const onPoll = useCallback(() => {
    const s = useAppStore.getState();
    const { watchlist, topMovers, coins } = s.market;

    // Update watchlist prices
    if (watchlist.length > 0) {
      const updated = watchlist.map((item) => {
        const newValue = fluctuate(item.value);
        const newChange = getChange(newValue, item.value);
        return {
          ...item,
          value: newValue,
          change: newChange,
          positive: newChange.startsWith("+"),
        };
      });
      setters.current.setWatchlist(updated);
    }

    // Update top movers
    if (topMovers.length > 0) {
      const updated = topMovers.map((item) => {
        const val = parseFloat(item.value.replace(/[^0-9.\-]/g, ""));
        const newVal = val + (Math.random() - 0.5) * 0.3;
        return { ...item, value: `${newVal >= 0 ? "+" : ""}${newVal.toFixed(2)}%` };
      });
      setters.current.setTopMovers(updated);
    }

    // Update coins
    if (coins.length > 0) {
      const updated = coins.map((coin) => {
        const newPrice = fluctuate(coin.price);
        const newChange = getChange(newPrice, coin.price);
        return { ...coin, price: newPrice, change: newChange };
      });
      setters.current.setCoins(updated);
    }

    // Update prices map
    for (const item of watchlist) {
      const changeVal = parseFloat(item.change.replace(/[^0-9.\-]/g, ""));
      setters.current.updatePrice(item.symbol, item.value, item.change, !isNaN(changeVal) && changeVal >= 0);
    }
  }, []);

  const onPrice = useCallback(
    (symbol: string, price: string, change: string, positive: boolean) => {
      const s = useAppStore.getState();
      s.updatePrice(symbol, price, change, positive);

      // Update watchlist item if present
      const { watchlist, coins, topMovers } = s.market;
      const wlIdx = watchlist.findIndex((w) => w.symbol === symbol);
      if (wlIdx >= 0) {
        const updated = [...watchlist];
        updated[wlIdx] = { ...updated[wlIdx], value: price, change, positive };
        s.setWatchlist(updated);
      }

      const coinIdx = coins.findIndex((c) => c.symbol === symbol);
      if (coinIdx >= 0) {
        const updated = [...coins];
        updated[coinIdx] = { ...updated[coinIdx], price, change };
        s.setCoins(updated);
      }

      const moverIdx = topMovers.findIndex((m) => m.symbol === symbol);
      if (moverIdx >= 0) {
        const updated = [...topMovers];
        updated[moverIdx] = { ...updated[moverIdx], value: change };
        s.setTopMovers(updated);
      }
    },
    []
  );

  const onStatusChange = useCallback((status: Parameters<typeof setters.current.setConnectionStatus>[0]) => {
    setters.current.setConnectionStatus(status);

    // Auto-subscribe symbols when WebSocket connects
    if (status === "connected" && !subscribedRef.current) {
      subscribedRef.current = true;
      // Subscribe via a microtask to ensure subscribe ref is ready
      queueMicrotask(() => {
        const s = useAppStore.getState();
        const symbols = s.market.watchlist.map((w) => w.symbol);
        const allSymbols = symbols.length > 0 ? symbols : DEFAULT_SYMBOLS;
        wsControlsRef.current?.subscribe(allSymbols);
      });
    }

    if (status === "reconnecting" || status === "connecting") {
      subscribedRef.current = false;
    }
  }, []);

  const wsControlsRef = useRef<{ subscribe: (symbols: string[]) => void } | null>(null);
  const ws = useWebSocket({ onPrice, onStatusChange, onPoll });
  wsControlsRef.current = ws;

  // Initialize store with mock data on first mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const s = useAppStore.getState();
    // Only populate if store is empty
    if (s.market.watchlist.length === 0) {
      s.setWatchlist([...mockWatchlist]);
      s.setTopMovers([...mockTopMovers]);
      s.setCoins([...mockCoins]);
      s.setMarketSummary([...mockMarketSummary]);
      s.setFearGreed([...mockFearGreed]);
      s.setCalendar([...mockCalendar]);
    }
  }, []);

  return <>{children}</>;
}
