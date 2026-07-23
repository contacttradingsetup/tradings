import Card from "@/components/ui/Card";
import { Newspaper } from "@/components/ui/Icons";
import Link from "next/link";
import { NewsSkeleton } from "../skeletons/DashboardSkeletons";
import { EmptyState, ErrorState } from "../states/StatePanels";
import { getNews } from "@/services";

export default async function NewsSection() {
  const news = await getNews();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">News</p>
          <h2 className="mt-1 text-[18px] font-semibold text-[var(--text)]">Latest market news</h2>
        </div>
        <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
          Live
        </div>
      </div>

      <ul className="space-y-2" aria-label="Latest market news">
        {news.length ? news.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="block">
              <Card className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 hover:border-[color:var(--primary)]/30">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)] px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-[var(--muted)]">{item.timestamp}</span>
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold leading-6 text-[var(--text)]">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-6 text-[var(--muted)]">{item.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-[12px] text-[var(--muted)]">
                    <span>{item.source}</span>
                    <span className="text-[var(--primary)]">Read more →</span>
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        )) : (
          <li>
            <EmptyState
              icon={Newspaper}
              title="No latest news"
              description="The market feed is quiet right now. Check back later for fresh updates."
              actionLabel="Refresh"
              onAction={() => undefined}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export function NewsSectionSkeleton() {
  return <NewsSkeleton />;
}

export function NewsSectionError() {
  return (
    <ErrorState
      title="News feed unavailable"
      description="We could not load the latest headlines."
      actionLabel="Retry"
      onAction={() => undefined}
    />
  );
}
