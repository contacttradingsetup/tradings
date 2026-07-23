import LandingHeader from "@/components/landing/LandingHeader";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import MarketOverview from "@/components/landing/MarketOverview";
import CTA from "@/components/landing/CTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-start)] to-[var(--bg-end)]">
      <LandingHeader />
      <main>
        <Hero />
        <Features />
        <MarketOverview />
        <CTA />
      </main>
      <footer className="border-t border-white/[0.05]">
        <div className="mx-auto flex w-full max-w-[1920px] flex-wrap items-center justify-between gap-6 px-8 py-12 2xl:px-12">
          <div className="flex items-center gap-3 text-[15px] text-[var(--muted)]">
            <span className="h-5 w-5 rounded-[4px] bg-[var(--primary)]/40" />
            <span>&copy; {new Date().getFullYear()} Tradings. All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-10 text-[15px] text-[var(--muted)]">
            <a href="#" className="transition hover:text-[var(--text)]">Terms of Service</a>
            <a href="#" className="transition hover:text-[var(--text)]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[var(--text)]">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}