// ── CORS Middleware ──

import type { Context, Next } from "hono";

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://tradings.pages.dev",
];

export async function cors(c: Context, next: Next) {
  const origin = c.req.header("Origin") ?? "";

  if (ALLOWED_ORIGINS.includes(origin) || ALLOWED_ORIGINS.includes("*")) {
    c.header("Access-Control-Allow-Origin", origin);
  }

  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  c.header("Access-Control-Max-Age", "86400");

  if (c.req.method === "OPTIONS") {
    return c.body(null, 204);
  }

  await next();
}
