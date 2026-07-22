// ── Realtime Hook ──
// Connects WebSocket price updates to the Zustand store.
// Phase 6: sets up the infrastructure
// Phase 8: activates when real data flows

"use client";

import { useEffect } from "react";
import { useWebSocket } from "./useWebSocket";
import { useAppStore } from "@/store";

const DEFAULT_SYMBOLS = ["BTC", "ETH", "SOL", "BNB", "XRP"];

export function useRealtime() {
  const updatePrice = useAppStore((s) => s.updatePrice);
  const setConnectionStatus = useAppStore((s) => s.setConnectionStatus);

  const { status, subscribe } = useWebSocket({
    onPrice: (symbol, price, change) => {
      const positive = !change.startsWith("-");
      updatePrice(symbol, price, change, positive);
    },
    onStatusChange: (wsStatus) => {
      setConnectionStatus(wsStatus);
    },
  });

  // Subscribe to default symbols when connected
  useEffect(() => {
    if (status === "connected") {
      subscribe(DEFAULT_SYMBOLS);
    }
  }, [status, subscribe]);

  return { status };
}
