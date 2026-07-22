"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Bell, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import type { NavItem, TickerData } from "@/types";
import { useTheme } from "@/hooks";
import { useAppStore } from "@/store";

const mobileNav: NavItem[] = [
  { title: "Overview", href: "/dashboard" },
  { title: "Markets", href: "/markets" },
  { title: "Spot", href: "/spot" },
  { title: "Futures", href: "/futures" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Watchlist", href: "/watchlist" },
  { title: "Settings", href: "/settings" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const user = useAppStore((s) => s.user);

  const nextThemeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        document.getElementById("dashboard-search")?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/dashboard?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  }

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur">
        <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="motion-safe-transition inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] text-[var(--text)] hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <form onSubmit={handleSearch} className="relative w-full max-w-[560px]">
              <label htmlFor="dashboard-search" className="sr-only">
                Search market, symbol, or idea
              </label>
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <input
                id="dashboard-search"
                type="search"
                placeholder="Search market, symbol, or idea"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search market, symbol, or idea"
                className="motion-safe-transition h-10 w-full rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] pl-9 pr-20 text-sm text-[var(--text)] outline-none focus:border-[color:var(--primary)] focus:shadow-[0_0_0_1px_rgba(37,99,235,0.18)] focus:-translate-y-[1px]"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                Ctrl K
              </span>
            </form>

            <div className="hidden items-center gap-2 xl:flex">
              <Ticker symbol="BTC" price="$117,248" up />
              <Ticker symbol="ETH" price="$4,218" up />
              <Ticker symbol="SOL" price="$223" up />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <IconButton
              onClick={toggleTheme}
              ariaLabel={nextThemeLabel}
              ariaPressed={theme === "light"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </IconButton>

            <IconButton ariaLabel="View notifications">
              <Bell size={16} />
            </IconButton>

            <button
              type="button"
              aria-label="Open account options"
              className="motion-safe-transition flex items-center gap-3 rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
                {user.initials}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-[var(--text)]">{user.name}</p>
                <p className="text-[12px] text-[var(--muted)]">{user.tier}</p>
              </div>
              <ChevronDown size={14} className="hidden text-[var(--muted)] sm:block" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <>
          <div className="fixed inset-0 z-40 bg-black/55 lg:hidden" onClick={() => setIsMenuOpen(false)} />
          <div
            id="mobile-navigation"
            className="dropdown-panel fixed inset-x-0 top-[72px] z-50 border-b border-[color:var(--border)] bg-[color:var(--background)] px-4 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <nav className="space-y-2" aria-label="Mobile navigation links">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="motion-safe-transition block rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-sm text-[var(--text)] hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}

function IconButton({
  children,
  onClick,
  ariaLabel,
  ariaPressed,
}: {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  ariaPressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className="motion-safe-transition flex h-10 w-10 items-center justify-center rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] text-[var(--text)] hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40"
    >
      {children}
    </button>
  );
}

function Ticker({ symbol, price, up }: TickerData) {
  return (
    <div className="motion-safe-transition rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40">
      <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">{symbol}</p>
      <p className="mt-1 text-sm font-semibold text-[var(--text)]">{price}</p>
      <p className={`mt-1 text-[11px] ${up ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
        {up ? "+2.18%" : "-1.20%"}
      </p>
    </div>
  );
}