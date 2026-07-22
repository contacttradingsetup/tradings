// ── News Service ──

import type { NewsItem } from "@/types";
import { mockNews } from "../mock/data";
import { apiFetch } from "./client";

export async function getNews(): Promise<NewsItem[]> {
  const result = await apiFetch<NewsItem[]>("/api/news");
  return result.success ? result.data : mockNews;
}
