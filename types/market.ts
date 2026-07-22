// ── Market Types ──

export interface WatchlistItem {
  symbol: string;
  name: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface MoverItem {
  symbol: string;
  value: string;
  label: string;
}

export interface MarketSummaryItem {
  label: string;
  value: string;
}

export interface FearGreedItem {
  label: string;
  value: string;
}

export interface CalendarEvent {
  title: string;
  time: string;
  impact: string;
}

export interface TickerData {
  symbol: string;
  price: string;
  up?: boolean;
}

export interface OverviewMetric {
  title: string;
  value: string;
  change: string;
  trend: string;
  positive?: boolean;
}

export interface CoinData {
  symbol: string;
  name: string;
  price: string;
  change: string;
}
