// ── PriceHub Durable Object ──
// Manages WebSocket connections and broadcasts real-time price updates.
// Phase 6: mock price generation
// Phase 8: connects to external market data APIs

import { DurableObject } from "cloudflare:workers";

interface Client {
  ws: WebSocket;
  symbols: Set<string>;
}

const SYMBOLS = ["BTC", "ETH", "SOL", "BNB", "XRP", "NVDA", "PLTR", "AMD"];

// Base prices (realistic starting points)
const BASE_PRICES: Record<string, number> = {
  BTC: 67200, ETH: 3450, SOL: 152, BNB: 598,
  XRP: 0.61, NVDA: 128, PLTR: 28, AMD: 162,
};

export class PriceHub extends DurableObject {
  private clients: Map<string, Client> = new Map();
  private tickInterval: ReturnType<typeof setInterval> | null = null;
  private prices: Record<string, number> = { ...BASE_PRICES };

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/ws" && request.headers.get("Upgrade") === "websocket") {
      const pair = new WebSocketPair();
      const [client, server] = Object.values(pair);

      this.handleConnection(server);

      return new Response(null, { status: 101, webSocket: client });
    }

    return new Response("PriceHub WebSocket endpoint", { status: 200 });
  }

  private handleConnection(ws: WebSocket): void {
    ws.accept();
    const clientId = crypto.randomUUID();
    const client: Client = { ws, symbols: new Set() };
    this.clients.set(clientId, client);

    // Start ticker if first client
    if (this.clients.size === 1) {
      this.startTicker();
    }

    ws.addEventListener("message", (event) => {
      try {
        const msg = JSON.parse(event.data as string);

        switch (msg.type) {
          case "subscribe":
            if (Array.isArray(msg.symbols)) {
              msg.symbols.forEach((s: string) => client.symbols.add(s));
              ws.send(JSON.stringify({ type: "subscribed", symbols: [...client.symbols] }));
            }
            break;
          case "unsubscribe":
            if (Array.isArray(msg.symbols)) {
              msg.symbols.forEach((s: string) => client.symbols.delete(s));
            }
            break;
          case "ping":
            ws.send(JSON.stringify({ type: "pong" }));
            break;
        }
      } catch {
        ws.send(JSON.stringify({ type: "error", message: "Invalid message format" }));
      }
    });

    ws.addEventListener("close", () => {
      this.clients.delete(clientId);
      if (this.clients.size === 0) {
        this.stopTicker();
      }
    });

    ws.addEventListener("error", () => {
      this.clients.delete(clientId);
      if (this.clients.size === 0) {
        this.stopTicker();
      }
    });
  }

  private startTicker(): void {
    this.tickInterval = setInterval(() => this.tick(), 2000);
  }

  private stopTicker(): void {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
  }

  private tick(): void {
    const updates: Array<{ symbol: string; price: string; change: string; timestamp: number }> = [];

    for (const symbol of SYMBOLS) {
      const base = this.prices[symbol];
      // Random walk: +/- 0.05% per tick
      const change = base * (Math.random() - 0.5) * 0.001;
      const newPrice = Math.max(base + change, base * 0.9);
      this.prices[symbol] = newPrice;

      updates.push({
        symbol,
        price: newPrice < 1 ? `$${newPrice.toFixed(4)}` : `$${newPrice.toFixed(2)}`,
        change: `${change >= 0 ? "+" : ""}${((change / base) * 100).toFixed(2)}%`,
        timestamp: Date.now(),
      });
    }

    // Broadcast to all connected clients
    const message = JSON.stringify({ type: "prices", updates });
    for (const [, client] of this.clients) {
      try {
        // Only send symbols the client is subscribed to (or all if nothing subscribed)
        if (client.symbols.size === 0) {
          client.ws.send(message);
        } else {
          const filtered = updates.filter((u) => client.symbols.has(u.symbol));
          if (filtered.length > 0) {
            client.ws.send(JSON.stringify({ type: "prices", updates: filtered }));
          }
        }
      } catch {
        // Client disconnected — will be cleaned up on close event
      }
    }
  }
}
