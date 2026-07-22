// ── Application Constants ──

export const APP_NAME = "Tradings";

export const DEFAULT_SYMBOL = "BTC";
export const DEFAULT_PAIR = "BINANCE:BTCUSDT";
export const DEFAULT_TIMEFRAME = "1D";

export const TIMEFRAMES = ["1D", "1W", "1M", "3M", "1Y", "All"] as const;

export const REFRESH_INTERVALS = {
  prices: 3_000,     // 3 seconds
  portfolio: 5_000,  // 5 seconds
  news: 60_000,      // 60 seconds
  calendar: 86_400_000, // 24 hours
  fearGreed: 3_600_000, // 1 hour
} as const;

export const MAX_RETRY_COUNT = 3;
