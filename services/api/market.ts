// ── Market Service ──

import type { WatchlistItem, MoverItem, MarketSummaryItem, FearGreedItem, CalendarEvent, CoinData } from "@/types";
import {
  mockWatchlist, mockTopMovers, mockMarketSummary,
  mockFearGreed, mockCalendar, mockCoins,
} from "../mock/data";
import { apiFetch } from "./client";

export async function getWatchlist(): Promise<WatchlistItem[]> {
  const result = await apiFetch<WatchlistItem[]>("/api/market/watchlist");
  return result.success ? result.data : mockWatchlist;
}

export async function getTopMovers(): Promise<MoverItem[]> {
  const result = await apiFetch<MoverItem[]>("/api/market/movers");
  return result.success ? result.data : mockTopMovers;
}

export async function getMarketSummary(): Promise<MarketSummaryItem[]> {
  const result = await apiFetch<MarketSummaryItem[]>("/api/market/summary");
  return result.success ? result.data : mockMarketSummary;
}

export async function getFearGreed(): Promise<FearGreedItem[]> {
  const result = await apiFetch<FearGreedItem[]>("/api/market/fear-greed");
  return result.success ? result.data : mockFearGreed;
}

export async function getCalendar(): Promise<CalendarEvent[]> {
  const result = await apiFetch<CalendarEvent[]>("/api/market/calendar");
  return result.success ? result.data : mockCalendar;
}

export async function getCoins(): Promise<CoinData[]> {
  const result = await apiFetch<CoinData[]>("/api/market/coins");
  return result.success ? result.data : mockCoins;
}
