// ── Component Prop Types ──

import type { LucideIcon } from "lucide-react";

export interface SkeletonProps {
  className?: string;
}

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface ErrorStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface EmptySearchStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface PanelShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export interface RightRailSectionProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export interface ChartToolbarProps {
  symbol?: string;
  price?: string;
  change?: string;
  timeframes?: string[];
  activeTimeframe?: string;
  onTimeframeChange?: (timeframe: string, interval: string) => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export interface OverviewCardProps {
  title: string;
  value: string;
  change: string;
  trend: string;
  positive?: boolean;
  icon: LucideIcon;
  iconBg: string;
}
