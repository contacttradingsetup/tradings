import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import RightRail from "@/components/dashboard/RightRail";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[8px] focus:border focus:border-[color:var(--primary)] focus:bg-[color:var(--surface)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--text)]"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex min-h-screen max-w-[1800px]">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <Header />

          <div className="flex flex-1">
            <main id="main-content" tabIndex={-1} className="flex-1 overflow-x-hidden" aria-label="Dashboard content">
              <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
            </main>

            <RightRail />
          </div>
        </div>
      </div>
    </div>
  );
}