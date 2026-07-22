// ── Market Routes ──

import { Hono } from "hono";

export const marketRoutes = new Hono();

const mockWatchlist = [
  { symbol: "BTC", name: "Bitcoin", value: "$117,248", change: "+2.18%", positive: true },
  { symbol: "ETH", name: "Ethereum", value: "$4,218", change: "+1.04%", positive: true },
  { symbol: "SOL", name: "Solana", value: "$223", change: "+3.91%", positive: true },
  { symbol: "XRP", name: "Ripple", value: "$0.61", change: "-0.44%", positive: false },
];

const mockMovers = [
  { symbol: "NVDA", value: "+4.82%", label: "AI semis" },
  { symbol: "PLTR", value: "+3.14%", label: "Defense tech" },
  { symbol: "AMD", value: "+2.71%", label: "Chip sector" },
];

const mockSummary = [
  { label: "Volatility", value: "Low" },
  { label: "Risk", value: "Balanced" },
  { label: "Momentum", value: "Positive" },
];

const mockFearGreed = [
  { label: "Reading", value: "64 / 100" },
  { label: "Sentiment", value: "Greed" },
  { label: "Trend", value: "Cooling" },
];

const mockCalendar = [
  { title: "FOMC Minutes", time: "14:00 UTC", impact: "High" },
  { title: "CPI Data", time: "17:30 UTC", impact: "Watch" },
  { title: "Retail Sales", time: "20:00 UTC", impact: "Medium" },
];

const mockCoins = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,892.45", change: "+2.35%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,456.78", change: "+1.82%" },
  { symbol: "SOL", name: "Solana", price: "$152.34", change: "+4.25%" },
  { symbol: "BNB", name: "BNB", price: "$598.21", change: "+1.12%" },
  { symbol: "XRP", name: "XRP", price: "$0.6123", change: "-0.45%" },
];

marketRoutes.get("/watchlist", (c) => c.json(mockWatchlist));
marketRoutes.get("/movers", (c) => c.json(mockMovers));
marketRoutes.get("/summary", (c) => c.json(mockSummary));
marketRoutes.get("/fear-greed", (c) => c.json(mockFearGreed));
marketRoutes.get("/calendar", (c) => c.json(mockCalendar));
marketRoutes.get("/coins", (c) => c.json(mockCoins));

// Overview metrics
const mockOverview = [
  { title: "Portfolio Value", value: "$128,420", change: "+$2,480 today", trend: "+3.2%", positive: true, icon: "DollarSign", iconBg: "bg-[color:var(--surface)] text-[var(--primary)]" },
  { title: "Today's Profit & Loss", value: "+$3,840", change: "+$124 vs yesterday", trend: "+2.8%", positive: true, icon: "ArrowUpRight", iconBg: "bg-[color:var(--surface)] text-[var(--success)]" },
  { title: "Open Positions", value: "14", change: "6 long / 8 short", trend: "Stable", positive: true, icon: "BriefcaseBusiness", iconBg: "bg-[color:var(--surface)] text-[var(--text)]" },
  { title: "Win Rate", value: "68.4%", change: "+4.1% this month", trend: "+1.3%", positive: true, icon: "Target", iconBg: "bg-[color:var(--surface)] text-[var(--muted)]" },
];
marketRoutes.get("/overview", (c) => c.json(mockOverview));
