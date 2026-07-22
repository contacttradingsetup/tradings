// ── Market Service ──

import type { WatchlistItem, MoverItem, MarketSummaryItem, FearGreedItem, CalendarEvent, CoinData } from "@/types";
import {
  mockWatchlist, mockTopMovers, mockMarketSummary,
  mockFearGreed, mockCalendar, mockCoins,
} from "../mock/data";

export async function getWatchlist(): Promise<WatchlistItem[]> {
  return mockWatchlist;
}

export async function getTopMovers(): Promise<MoverItem[]> {
  return mockTopMovers;
}

export async function getMarketSummary(): Promise<MarketSummaryItem[]> {
  return mockMarketSummary;
}

export async function getFearGreed(): Promise<FearGreedItem[]> {
  return mockFearGreed;
}

export async function getCalendar(): Promise<CalendarEvent[]> {
  return mockCalendar;
}

export async function getCoins(): Promise<CoinData[]> {
  return mockCoins;
}
