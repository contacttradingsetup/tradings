// ── Portfolio Service ──

import type { Holding, Allocation, Performance } from "@/types";
import { mockHoldings, mockAllocations, mockPerformance } from "../mock/data";
import { apiFetch } from "./client";

export async function getHoldings(): Promise<Holding[]> {
  const result = await apiFetch<Holding[]>("/api/portfolio");
  return result.success ? result.data : mockHoldings;
}

export async function getAllocation(): Promise<Allocation[]> {
  const result = await apiFetch<Allocation[]>("/api/portfolio/allocation");
  return result.success ? result.data : mockAllocations;
}

export async function getPerformance(): Promise<Performance[]> {
  const result = await apiFetch<Performance[]>("/api/portfolio/performance");
  return result.success ? result.data : mockPerformance;
}
