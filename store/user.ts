// ── User Slice ──

import type { StateCreator } from "zustand";

export interface UserSlice {
  user: {
    name: string;
    tier: string;
    initials: string;
    isAuthenticated: boolean;
  };
  setUser: (user: UserSlice["user"]) => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
  user: {
    name: "Nasrul",
    tier: "Premium",
    initials: "N",
    isAuthenticated: true,
  },
  setUser: (user) => set({ user }),
});
