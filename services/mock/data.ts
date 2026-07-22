// ── Centralized Mock Data ──
// All mock data extracted from components lives here.
// Services import from this file. Components import from services.

import type {
  Holding, Allocation, Performance, NewsItem,
  WatchlistItem, MoverItem, MarketSummaryItem,
  FearGreedItem, CalendarEvent, CoinData,
  ActivityItem, OverviewCardProps,
} from "@/types";

import {
  ArrowUpRight, BriefcaseBusiness, DollarSign, Target,
} from "lucide-react";

// ── Overview KPIs ──

export const mockOverview: OverviewCardProps[] = [
  { title: "Portfolio Value", value: "$128,420", change: "+$2,480 today", trend: "+3.2%", positive: true, icon: DollarSign, iconBg: "bg-[color:var(--surface)] text-[var(--primary)]" },
  { title: "Today's Profit & Loss", value: "+$3,840", change: "+$124 vs yesterday", trend: "+2.8%", positive: true, icon: ArrowUpRight, iconBg: "bg-[color:var(--surface)] text-[var(--success)]" },
  { title: "Open Positions", value: "14", change: "6 long / 8 short", trend: "Stable", positive: true, icon: BriefcaseBusiness, iconBg: "bg-[color:var(--surface)] text-[var(--text)]" },
  { title: "Win Rate", value: "68.4%", change: "+4.1% this month", trend: "+1.3%", positive: true, icon: Target, iconBg: "bg-[color:var(--surface)] text-[var(--muted)]" },
];

// ── Portfolio ──

export const mockHoldings: Holding[] = [
  { asset: "Bitcoin", ticker: "BTC", quantity: "0.82", value: "$96,320", allocation: "45.2%", pnl: "+$2,180", positive: true },
  { asset: "Ethereum", ticker: "ETH", quantity: "18.4", value: "$78,000", allocation: "25.8%", pnl: "+$940", positive: true },
  { asset: "Solana", ticker: "SOL", quantity: "342", value: "$76,400", allocation: "15.6%", pnl: "-$320", positive: false },
  { asset: "XRP", ticker: "XRP", quantity: "5,200", value: "$3,180", allocation: "8.4%", pnl: "+$140", positive: true },
];

export const mockAllocations: Allocation[] = [
  { name: "BTC", value: "$96,320", weight: "45.2%", color: "bg-[var(--primary)]" },
  { name: "ETH", value: "$78,000", weight: "25.8%", color: "bg-[var(--success)]" },
  { name: "SOL", value: "$76,400", weight: "15.6%", color: "bg-[var(--danger)]" },
  { name: "XRP", value: "$3,180", weight: "8.4%", color: "bg-[var(--muted)]" },
];

export const mockPerformance: Performance[] = [
  { label: "24h", value: "+1.84%", positive: true },
  { label: "7d", value: "+4.12%", positive: true },
  { label: "30d", value: "+8.95%", positive: true },
];

// ── Watchlist ──

export const mockWatchlist: WatchlistItem[] = [
  { symbol: "BTC", name: "Bitcoin", value: "$117,248", change: "+2.18%", positive: true },
  { symbol: "ETH", name: "Ethereum", value: "$4,218", change: "+1.04%", positive: true },
  { symbol: "SOL", name: "Solana", value: "$223", change: "+3.91%", positive: true },
  { symbol: "XRP", name: "Ripple", value: "$0.61", change: "-0.44%", positive: false },
];

// ── Top Movers ──

export const mockTopMovers: MoverItem[] = [
  { symbol: "NVDA", value: "+4.82%", label: "AI semis" },
  { symbol: "PLTR", value: "+3.14%", label: "Defense tech" },
  { symbol: "AMD", value: "+2.71%", label: "Chip sector" },
];

// ── Market Summary ──

export const mockMarketSummary: MarketSummaryItem[] = [
  { label: "Volatility", value: "Low" },
  { label: "Risk", value: "Balanced" },
  { label: "Momentum", value: "Positive" },
];

// ── Fear & Greed ──

export const mockFearGreed: FearGreedItem[] = [
  { label: "Reading", value: "64 / 100" },
  { label: "Sentiment", value: "Greed" },
  { label: "Trend", value: "Cooling" },
];

// ── Economic Calendar ──

export const mockCalendar: CalendarEvent[] = [
  { title: "FOMC Minutes", time: "14:00 UTC", impact: "High" },
  { title: "CPI Data", time: "17:30 UTC", impact: "Watch" },
  { title: "Retail Sales", time: "20:00 UTC", impact: "Medium" },
];

// ── Coin Data (TopMovers component) ──

export const mockCoins: CoinData[] = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,892.45", change: "+2.35%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,456.78", change: "+1.82%" },
  { symbol: "SOL", name: "Solana", price: "$152.34", change: "+4.25%" },
  { symbol: "BNB", name: "BNB", price: "$598.21", change: "+1.12%" },
  { symbol: "XRP", name: "XRP", price: "$0.6123", change: "-0.45%" },
];

// ── Recent Activity ──

export const mockActivity: ActivityItem[] = [
  { title: "Buy BTC", amount: "0.125 BTC", value: "$8,456.23", time: "2m ago", type: "buy" },
  { title: "Sell ETH", amount: "1.25 ETH", value: "$4,321.00", time: "1h ago", type: "sell" },
  { title: "Add SOL", amount: "12.5 SOL", value: "$2,335.00", time: "4h ago", type: "buy" },
];

// ── News ──

export const mockNews: NewsItem[] = [
  { title: "BTC consolidates above key support as macro data improves", source: "Bloomberg", category: "Macro", timestamp: "12 min ago", excerpt: "Traders are monitoring resistance levels as liquidity stabilizes.", href: "#" },
  { title: "Ethereum ETF inflows continue to accelerate across major desks", source: "CoinDesk", category: "Ethereum", timestamp: "41 min ago", excerpt: "Institutional positioning remains constructive despite a slower pace.", href: "#" },
  { title: "Solana ecosystem sees renewed activity in DeFi and payments", source: "The Block", category: "Altcoin", timestamp: "1h ago", excerpt: "Developer engagement and transaction volume are trending higher.", href: "#" },
];
