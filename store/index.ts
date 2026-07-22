// ── Combined Zustand Store ──

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createUISlice, type UISlice } from "./ui";
import { createUserSlice, type UserSlice } from "./user";
import { createMarketSlice, type MarketSlice } from "./market";
import { createPortfolioSlice, type PortfolioSlice } from "./portfolio";

export type AppStore = UISlice & UserSlice & MarketSlice & PortfolioSlice;

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (...args) => ({
        ...createUISlice(...args),
        ...createUserSlice(...args),
        ...createMarketSlice(...args),
        ...createPortfolioSlice(...args),
      }),
      {
        name: "tradings-store",
        partialize: (state) => ({
          ui: { theme: state.ui.theme },
        }),
      }
    ),
    { name: "TradingsApp" }
  )
);
