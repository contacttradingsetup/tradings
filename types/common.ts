// ── Shared Common Types ──

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface User {
  name: string;
  tier: string;
  initials: string;
}

export type Theme = "dark" | "light";

export interface ActivityItem {
  title: string;
  amount: string;
  value: string;
  time: string;
  type: "buy" | "sell";
}
