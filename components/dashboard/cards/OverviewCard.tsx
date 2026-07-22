import Card from "@/components/ui/Card";
import type { OverviewCardProps } from "@/types";

export default function OverviewCard({
  title,
  value,
  change,
  trend,
  positive = true,
  icon: Icon,
  iconBg,
}: OverviewCardProps) {
  return (
    <Card className="h-full rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition-colors duration-180 ease-out hover:border-[color:var(--primary)]/40">
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">{title}</p>
            <p className="mt-2 tabular-nums text-[20px] font-bold leading-6 text-[var(--text)]">{value}</p>
          </div>

          <div className={`grid h-8 w-8 place-items-center rounded-[var(--radius)] ${iconBg}`} aria-hidden="true">
            <Icon size={15} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className={`text-[13px] font-medium ${positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
            {change}
          </p>

          <div
            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium ${positive ? "border-[color:var(--success)]/20 bg-[color:var(--success)]/10 text-[var(--success)]" : "border-[color:var(--danger)]/20 bg-[color:var(--danger)]/10 text-[var(--danger)]"}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${positive ? "bg-[var(--success)]" : "bg-[var(--danger)]"}`} />
            {trend}
          </div>
        </div>
      </div>
    </Card>
  );
}