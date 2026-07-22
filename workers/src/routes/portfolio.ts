// ── Portfolio Routes ──

import { Hono } from "hono";

export const portfolioRoutes = new Hono();

// Mock data (Phase 5 — will be replaced with D1 queries in Phase 8)
const mockHoldings = [
  { asset: "Bitcoin", ticker: "BTC", quantity: "0.82", value: "$96,320", allocation: "45.2%", pnl: "+$2,180", positive: true },
  { asset: "Ethereum", ticker: "ETH", quantity: "18.4", value: "$78,000", allocation: "25.8%", pnl: "+$940", positive: true },
  { asset: "Solana", ticker: "SOL", quantity: "342", value: "$76,400", allocation: "15.6%", pnl: "-$320", positive: false },
  { asset: "XRP", ticker: "XRP", quantity: "5,200", value: "$3,180", allocation: "8.4%", pnl: "+$140", positive: true },
];

const mockAllocation = [
  { name: "BTC", value: "$96,320", weight: "45.2%", color: "bg-[var(--primary)]" },
  { name: "ETH", value: "$78,000", weight: "25.8%", color: "bg-[var(--success)]" },
  { name: "SOL", value: "$76,400", weight: "15.6%", color: "bg-[var(--danger)]" },
  { name: "XRP", value: "$3,180", weight: "8.4%", color: "bg-[var(--muted)]" },
];

const mockPerformance = [
  { label: "24h", value: "+1.84%", positive: true },
  { label: "7d", value: "+4.12%", positive: true },
  { label: "30d", value: "+8.95%", positive: true },
];

portfolioRoutes.get("/", (c) => c.json(mockHoldings));
portfolioRoutes.get("/allocation", (c) => c.json(mockAllocation));
portfolioRoutes.get("/performance", (c) => c.json(mockPerformance));
