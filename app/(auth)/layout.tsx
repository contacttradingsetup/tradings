// ── Auth Layout ──

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { default: "Sign In", template: "%s | Tradings" },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-4">
      <Link href="/" className="mb-8 text-[20px] font-semibold tracking-tight text-[var(--text)]">
        Tradings
      </Link>
      {children}
    </div>
  );
}
