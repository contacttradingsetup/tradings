// ── Rate Limiting Middleware ──
// Simple in-memory rate limiter (per-request, not durable)

import type { Context, Next } from "hono";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 120;  // 120 requests per minute

const store = new Map<string, { count: number; resetAt: number }>();

export async function rateLimit(c: Context, next: Next) {
  const ip = c.req.header("CF-Connecting-IP") ?? "unknown";
  const now = Date.now();

  let entry = store.get(ip);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
    store.set(ip, entry);
  }

  entry.count++;

  c.header("X-RateLimit-Limit", String(MAX_REQUESTS));
  c.header("X-RateLimit-Remaining", String(Math.max(0, MAX_REQUESTS - entry.count)));

  if (entry.count > MAX_REQUESTS) {
    return c.json({ error: { code: "RATE_LIMITED", message: "Too many requests" } }, 429);
  }

  // Periodic cleanup
  if (Math.random() < 0.01) {
    for (const [key, val] of store) {
      if (now > val.resetAt) store.delete(key);
    }
  }

  await next();
}
