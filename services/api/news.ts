// ── News Service ──

import type { NewsItem } from "@/types";
import { mockNews } from "../mock/data";

export async function getNews(): Promise<NewsItem[]> {
  return mockNews;
}
