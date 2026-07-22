// ── Health Check Route ──

import { Hono } from "hono";

export const healthRoutes = new Hono();

healthRoutes.get("/health", (c) =>
  c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: (c.env as Record<string, string> | undefined)?.ENVIRONMENT ?? "development",
  })
);
