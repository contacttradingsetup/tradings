// ── WebSocket Hook ──
// Manages WebSocket connection lifecycle, reconnection, and fallback to polling.

"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { config } from "@/lib";

type ConnectionStatus = "disconnected" | "connecting" | "connected" | "reconnecting";

interface UseWebSocketOptions {
  onPrice?: (symbol: string, price: string, change: string, positive: boolean) => void;
  onStatusChange?: (status: ConnectionStatus) => void;
  reconnectInterval?: number;
  /** Polling callback invoked each interval when WebSocket is disconnected */
  onPoll?: () => void;
}

export function useWebSocket({
  onPrice,
  onStatusChange,
  reconnectInterval = 2000,
  onPoll,
}: UseWebSocketOptions = {}) {
  const [status, setStatus] = useState<ConnectionStatus>("connecting");
  const wsRef = useRef<WebSocket | null>(null);
  const retriesRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(true);
  const connectRef = useRef<() => void>(() => {});

  const startPolling = useCallback(() => {
    if (pollTimerRef.current || !onPoll) return;
    pollTimerRef.current = setInterval(() => onPoll(), 5000);
  }, [onPoll]);

  const stopPolling = useCallback(() => {
    if (pollTimerRef.current) {
      clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  }, []);

  const updateStatus = useCallback(
    (next: ConnectionStatus) => {
      setStatus(next);
      onStatusChange?.(next);
    },
    [onStatusChange]
  );

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    updateStatus(retriesRef.current > 0 ? "reconnecting" : "connecting");
    stopPolling();

    try {
      const ws = new WebSocket(config.api.wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        if (!mountedRef.current) return;
        retriesRef.current = 0;
        updateStatus("connected");
      };

      ws.onmessage = (event) => {
        if (!mountedRef.current) return;
        try {
          const msg = JSON.parse(event.data as string);
          if (msg.type === "prices" && Array.isArray(msg.updates)) {
            for (const update of msg.updates) {
              onPrice?.(update.symbol, update.price, update.change, update.positive ?? update.change.startsWith("+"));
            }
          }
        } catch {
          // Ignore malformed messages
        }
      };

      ws.onclose = () => {
        if (!mountedRef.current) return;
        wsRef.current = null;

        // Infinite reconnect with exponential backoff, capped at 30s
        retriesRef.current++;
        const delay = Math.min(reconnectInterval * Math.pow(1.5, Math.min(retriesRef.current - 1, 8)), 30000);
        reconnectTimerRef.current = setTimeout(() => connectRef.current(), delay);
        updateStatus("reconnecting");
        startPolling();
      };

      ws.onerror = () => {
        ws.close();
      };
    } catch {
      updateStatus("reconnecting");
    }
  }, [onPrice, updateStatus, reconnectInterval, startPolling, stopPolling]);

  // Store connect in ref for recursive reconnection calls
  useEffect(() => { connectRef.current = connect; }, [connect]);

  const disconnect = useCallback(() => {
    stopPolling();
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }
    retriesRef.current = 999;
    wsRef.current?.close();
    wsRef.current = null;
    updateStatus("disconnected");
  }, [updateStatus, stopPolling]);

  const subscribe = useCallback((symbols: string[]) => {
    if (wsRef.current?.readyState === WebSocket.OPEN && symbols.length > 0) {
      wsRef.current.send(JSON.stringify({ type: "subscribe", symbols }));
    }
  }, []);

  const unsubscribe = useCallback((symbols: string[]) => {
    if (wsRef.current?.readyState === WebSocket.OPEN && symbols.length > 0) {
      wsRef.current.send(JSON.stringify({ type: "unsubscribe", symbols }));
    }
  }, []);

  // Auto-connect on mount, cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    connect();

    return () => {
      mountedRef.current = false;
      disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { status, connect, disconnect, subscribe, unsubscribe };
}
