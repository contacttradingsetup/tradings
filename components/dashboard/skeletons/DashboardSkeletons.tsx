import Skeleton from "./Skeleton";

export function KPICardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-5 w-28" />
            </div>
            <Skeleton className="h-8 w-8 rounded-[var(--radius)]" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TradingChartSkeleton() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 sm:px-5">
        <div className="space-y-2">
          <Skeleton className="h-2.5 w-16" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-3 w-28" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-7 w-10 rounded-full" />
          <Skeleton className="h-7 w-10 rounded-full" />
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] p-3">
          <Skeleton className="h-[560px] w-full sm:h-[700px]" />
        </div>
      </div>
    </div>
  );
}

export function WatchlistSkeleton() {
  return (
    <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-2.5 w-20" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <div className="mt-4 space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-8" />
              <Skeleton className="h-2.5 w-16" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-2.5 w-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NewsSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="mt-3 space-y-2">
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-4/5" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)]">
      <div className="grid grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr] border-b border-[color:var(--border)] px-3 py-2.5">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="ml-auto h-3 w-12" />
        <Skeleton className="ml-auto h-3 w-10" />
        <Skeleton className="ml-auto h-3 w-12" />
      </div>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="grid grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr] items-center px-3 py-2.5">
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-2.5 w-16" />
          </div>
          <Skeleton className="ml-auto h-3 w-14" />
          <Skeleton className="ml-auto h-3 w-10" />
          <Skeleton className="ml-auto h-3 w-14" />
        </div>
      ))}
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-2">
          <Skeleton className="h-2.5 w-20" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
        <Skeleton className="h-7 w-20 rounded-full" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-2.5 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="mt-4">
            <TableSkeleton />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-2.5 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="mt-4 space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2.5">
                  <Skeleton className="h-3 w-8" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <Skeleton className="h-24 w-full rounded-[var(--radius)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
