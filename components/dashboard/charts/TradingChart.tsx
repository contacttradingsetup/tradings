"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { BarChart3 } from "lucide-react";
import ChartToolbar from "./ChartToolbar";
import { TradingChartSkeleton } from "../skeletons/DashboardSkeletons";
import { EmptyState, ErrorState } from "../states/StatePanels";

const DEFAULT_INTERVAL = "60"; // 1H

export default function TradingChart() {
  const container = useRef<HTMLDivElement>(null);
  const [interval, setInterval] = useState(DEFAULT_INTERVAL);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleTimeframeChange = useCallback((_timeframe: string, newInterval: string) => {
    setInterval(newInterval);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  // Close fullscreen on Esc
  useEffect(() => {
    if (!isFullscreen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isFullscreen]);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval,
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#0A0F1A",
      hide_legend: true,
      enable_publishing: false,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      details: false,
      studies_overrides: {},
      supported_resolutions: ["5", "15", "60", "240", "D", "W"],
      overrides: {
        "paneProperties.background": "#0A0F1A",
        "paneProperties.vertGridProperties.color": "#1A2333",
        "paneProperties.horzGridProperties.color": "#1A2333",
        "symbolWatermarkProperties.color": "rgba(255,255,255,0.05)",
      },
      support_host: "https://www.tradingview.com",
    });

    container.current.appendChild(script);
  }, [interval]);

  return (
    <section
      className={
        isFullscreen
          ? "fixed inset-0 z-50 flex flex-col bg-[var(--background)]"
          : "overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)]"
      }
    >
      <ChartToolbar
        onTimeframeChange={handleTimeframeChange}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />
      <div className="tradingview-widget-container flex-1 w-full" ref={container} />
    </section>
  );
}

export function TradingChartSkeletonState() {
  return <TradingChartSkeleton />;
}

export function TradingChartEmptyState() {
  return (
    <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
      <EmptyState
        icon={BarChart3}
        title="Chart unavailable"
        description="The trading view widget could not be loaded. Try refreshing or check your connection."
        actionLabel="Retry"
        onAction={() => undefined}
      />
    </div>
  );
}

export function TradingChartErrorState() {
  return (
    <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
      <ErrorState
        title="Trading chart failed to load"
        description="The chart feed is temporarily unavailable."
        actionLabel="Retry"
        onAction={() => undefined}
      />
    </div>
  );
}
