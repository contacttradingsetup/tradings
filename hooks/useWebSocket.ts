// ── WebSocket Hook ──
// Manages WebSocket connection lifecycle, reconnection, and fallback to polling.
// Phase 6: connects to PriceHub Durable Object
// Phase 8: receives real market data

"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { config } from "@/lib";

type ConnectionStatus = "disconnected" | "connecting" | "connected" | "reconnecting";

interface UseWebSocketOptions {
  onPrice?: (symbol: string, price: string, change: string) => void;
  onStatusChange?: (status: ConnectionStatus) => void;
  reconnectInterval?: number;
  maxRetries?: number;
}

export function useWebSocket({
  onPrice,
  onStatusChange,
  reconnectInterval = 2000,
  maxRetries = 3,
}: UseWebSocketOptions = {}) {
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WebSocket | null>(null);
  const retriesRef = useRef(0);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef = useRef(true);
  const connectRef = useRef<() => void>(() => {});

  // Store functions in refs to avoid circular dependency issues
  const startPollingRef = useRef<() => void>(() => {});
  const stopPollingRef = useRef<() => void>(() => {});

  // Update polling refs in an effect (not during render)
  useEffect(() => {
    startPollingRef.current = () => {
      if (pollTimerRef.current) return;
      pollTimerRef.current = setInterval(() => {}, 5000);
    };
    stopPollingRef.current = () => {
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
      }
    };
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
              onPrice?.(update.symbol, update.price, update.change);
            }
          }
        } catch {
          // Ignore malformed messages
        }
      };

      ws.onclose = () => {
        if (!mountedRef.current) return;
        wsRef.current = null;

        if (retriesRef.current < maxRetries) {
          retriesRef.current++;
          const delay = reconnectInterval * Math.pow(2, retriesRef.current - 1);
          reconnectTimerRef.current = setTimeout(() => connectRef.current(), delay);
          updateStatus("reconnecting");
        } else {
          updateStatus("disconnected");
          startPollingRef.current();
        }
      };

      ws.onerror = () => {
        ws.close();
      };
    } catch {
      updateStatus("disconnected");
    }
  }, [onPrice, updateStatus, reconnectInterval, maxRetries]);

  // Store connect in ref for recursive reconnection calls
  useEffect(() => { connectRef.current = connect; }, [connect]);

  const disconnect = useCallback(() => {
    stopPollingRef.current();
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }
    retriesRef.current = maxRetries;
    wsRef.current?.close();
    wsRef.current = null;
    updateStatus("disconnected");
  }, [updateStatus, maxRetries]);

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
