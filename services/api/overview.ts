// ── Overview Service ──

import type { OverviewCardProps, ActivityItem } from "@/types";
import { mockOverview, mockActivity } from "../mock/data";
import { apiFetch } from "./client";

export async function getOverviewMetrics(): Promise<OverviewCardProps[]> {
  const result = await apiFetch<OverviewCardProps[]>("/api/market/overview");
  return result.success ? result.data : mockOverview;
}

export async function getRecentActivity(): Promise<ActivityItem[]> {
  const result = await apiFetch<ActivityItem[]>("/api/portfolio/activity");
  return result.success ? result.data : mockActivity;
}
