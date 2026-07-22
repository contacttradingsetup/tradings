// ── WebSocket Route ──
// Proxies to the PriceHub Durable Object

import { Hono } from "hono";

export const wsRoutes = new Hono();

wsRoutes.get("/ws", async (c) => {
  const upgrade = c.req.header("Upgrade");
  if (upgrade !== "websocket") {
    return c.json({ error: "WebSocket upgrade required" }, 426);
  }

  // Forward to PriceHub Durable Object
  const id = c.env.PRICE_HUB.idFromName("global");
  const stub = c.env.PRICE_HUB.get(id);
  return stub.fetch(c.req.raw);
});
