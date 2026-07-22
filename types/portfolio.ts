// ── Portfolio Types ──

export interface Holding {
  asset: string;
  ticker: string;
  quantity: string;
  value: string;
  allocation: string;
  pnl: string;
  positive: boolean;
}

export interface Allocation {
  name: string;
  value: string;
  weight: string;
  color: string;
}

export interface Performance {
  label: string;
  value: string;
  positive: boolean;
}

export interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
}
