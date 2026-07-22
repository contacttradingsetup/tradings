// ── Theme Hook ──

"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store";

export function useTheme() {
  const theme = useAppStore((s) => s.ui.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);

  return { theme, toggleTheme };
}
