"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CandlestickChart,
  Eye,
  Layers,
  LayoutDashboard,
  Settings,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { NavItem } from "@/types";
import { useAppStore } from "@/store";

const menus: NavItem[] = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Markets", href: "/markets", icon: CandlestickChart },
  { title: "Spot", href: "/spot", icon: TrendingUp },
  { title: "Futures", href: "/futures", icon: Layers },
  { title: "DeFi", href: "/defi", icon: Sparkles },
  { title: "Portfolio", href: "/portfolio", icon: Wallet },
  { title: "Watchlist", href: "/watchlist", icon: Eye },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const user = useAppStore((s) => s.user);

  return (
    <aside className="hidden w-[220px] shrink-0 flex-col border-r border-[color:var(--border)] bg-[var(--sidebar)] text-[var(--text)] lg:flex">
      <div className="border-b border-[color:var(--border)] px-6 py-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[18px] font-semibold tracking-tight">Tradings</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.24em] text-[var(--muted)]">
              Workspace
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[var(--success)]">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--success)]" />
            Live
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6" aria-label="Dashboard sections">
        <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          Navigation
        </p>

        <ul className="space-y-1.5">
          {menus.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <li key={menu.href}>
                <Link
                  href={menu.href}
                  aria-current={active ? "page" : undefined}
                  className={`motion-safe-transition group relative flex items-center gap-3 rounded-[var(--radius)] px-3 py-2.5 text-sm ${
                    active
                      ? "bg-[color:var(--surface)] text-[var(--text)]"
                      : "text-[var(--muted)] hover:-translate-y-[1px] hover:bg-[color:var(--surface)] hover:text-[var(--text)]"
                  }`}
                >
                  {active ? (
                    <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-[var(--primary)]" />
                  ) : null}
                  {Icon && <Icon size={18} className={active ? "text-[var(--primary)]" : "text-[var(--muted)]"} />}
                  <span className="ml-1">{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-[color:var(--border)] px-4 py-4">
        <div className="flex items-center gap-3 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
            {user.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">{user.name}</p>
            <p className="text-[12px] text-[var(--muted)]">{user.tier} access</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
