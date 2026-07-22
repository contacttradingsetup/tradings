// ── Overview Service ──

import type { OverviewCardProps } from "@/types";
import { mockOverview } from "../mock/data";
import type { ActivityItem } from "@/types";
import { mockActivity } from "../mock/data";

export async function getOverviewMetrics(): Promise<OverviewCardProps[]> {
  return mockOverview;
}

export async function getRecentActivity(): Promise<ActivityItem[]> {
  return mockActivity;
}
