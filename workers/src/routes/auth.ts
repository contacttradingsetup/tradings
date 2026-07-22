// ── Auth Routes ──

import { Hono } from "hono";

export const authRoutes = new Hono();

// Mock user for demo
const MOCK_USER = {
  id: "user-1",
  name: "Nasrul",
  email: "nasrul@tradings.io",
  tier: "Premium",
  initials: "N",
};

authRoutes.post("/login", async (c) => {
  const body = await c.req.json<{ email?: string; password?: string }>();
  if (!body.email || !body.password) {
    return c.json({ error: "Email and password required" }, 400);
  }
  return c.json({
    user: MOCK_USER,
    token: "mock-session-token",
  });
});

authRoutes.post("/signup", async (c) => {
  const body = await c.req.json<{ name?: string; email?: string; password?: string }>();
  if (!body.name || !body.email || !body.password) {
    return c.json({ error: "Name, email, and password required" }, 400);
  }
  return c.json({
    user: { ...MOCK_USER, name: body.name, email: body.email, tier: "Free", initials: body.name.charAt(0).toUpperCase() },
    token: "mock-session-token",
  });
});

authRoutes.post("/logout", (c) => c.json({ success: true }));
authRoutes.get("/session", (c) => c.json({ user: MOCK_USER }));
