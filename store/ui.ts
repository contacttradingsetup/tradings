// ── UI Slice ──

import type { StateCreator } from "zustand";
import type { Theme } from "@/types";

export interface UISlice {
  ui: {
    theme: Theme;
    sidebarCollapsed: boolean;
    mobileMenuOpen: boolean;
  };
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
  ui: {
    theme: "dark",
    sidebarCollapsed: false,
    mobileMenuOpen: false,
  },
  setTheme: (theme) => set((s) => ({ ui: { ...s.ui, theme } })),
  toggleTheme: () => set((s) => ({ ui: { ...s.ui, theme: s.ui.theme === "dark" ? "light" : "dark" } })),
  setSidebarCollapsed: (collapsed) => set((s) => ({ ui: { ...s.ui, sidebarCollapsed: collapsed } })),
  setMobileMenuOpen: (open) => set((s) => ({ ui: { ...s.ui, mobileMenuOpen: open } })),
});
