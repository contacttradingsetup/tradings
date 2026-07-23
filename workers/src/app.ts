// ── Tradings API — Hono Application ──

import { Hono } from "hono";
import { cors } from "./middleware/cors";
import { rateLimit } from "./middleware/rateLimit";
import { portfolioRoutes } from "./routes/portfolio";
import { marketRoutes } from "./routes/market";
import { newsRoutes } from "./routes/news";
import { healthRoutes } from "./routes/health";
import { wsRoutes } from "./routes/ws";
import { authRoutes } from "./routes/auth";

const app = new Hono();

// Global middleware
app.use("*", cors);
app.use("*", rateLimit);

// Routes
app.route("/api/portfolio", portfolioRoutes);
app.route("/api/market", marketRoutes);
app.route("/api/news", newsRoutes);
app.route("/api", healthRoutes);
app.route("/", wsRoutes);
app.route("/api/auth", authRoutes);

export default app;
