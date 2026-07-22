// ── Portfolio Service ──

import type { Holding, Allocation, Performance } from "@/types";
import { mockHoldings, mockAllocations, mockPerformance } from "../mock/data";

export async function getHoldings(): Promise<Holding[]> {
  return mockHoldings;
}

export async function getAllocation(): Promise<Allocation[]> {
  return mockAllocations;
}

export async function getPerformance(): Promise<Performance[]> {
  return mockPerformance;
}
