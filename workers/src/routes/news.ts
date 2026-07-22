// ── News Routes ──

import { Hono } from "hono";

export const newsRoutes = new Hono();

const mockNews = [
  { title: "BTC consolidates above key support as macro data improves", source: "Bloomberg", category: "Macro", timestamp: "12 min ago", excerpt: "Traders are monitoring resistance levels as liquidity stabilizes.", href: "#" },
  { title: "Ethereum ETF inflows continue to accelerate across major desks", source: "CoinDesk", category: "Ethereum", timestamp: "41 min ago", excerpt: "Institutional positioning remains constructive despite a slower pace.", href: "#" },
  { title: "Solana ecosystem sees renewed activity in DeFi and payments", source: "The Block", category: "Altcoin", timestamp: "1h ago", excerpt: "Developer engagement and transaction volume are trending higher.", href: "#" },
];

newsRoutes.get("/", (c) => c.json(mockNews));
