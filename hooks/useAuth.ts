// ── Auth Hook ──

"use client";

import { useState, useCallback } from "react";
import { useAppStore } from "@/store";
import type { AuthUser } from "@/lib/auth";

export function useAuth() {
  const user = useAppStore((s) => s.user);
  const setUser = useAppStore((s) => s.setUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      const authUser: AuthUser = data.user;
      setUser({
        name: authUser.name,
        tier: authUser.tier,
        initials: authUser.initials,
        isAuthenticated: true,
      });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [setUser]);

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser({ name: "", tier: "", initials: "", isAuthenticated: false });
  }, [setUser]);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      const authUser: AuthUser = data.user;
      setUser({
        name: authUser.name,
        tier: authUser.tier,
        initials: authUser.initials,
        isAuthenticated: true,
      });
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [setUser]);

  return { user, login, logout, signup, isLoading, error };
}
