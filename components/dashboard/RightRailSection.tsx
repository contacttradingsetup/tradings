import Card from "@/components/ui/Card";
import { useId } from "react";
import type { RightRailSectionProps } from "@/types";

export default function RightRailSection({
  title,
  subtitle,
  icon: Icon,
  children,
}: RightRailSectionProps) {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <Card className="rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-none">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">{title}</p>
            <p id={headingId} className="mt-1 text-[14px] font-semibold text-[var(--text)]">
              {subtitle}
            </p>
          </div>
          <div className="grid h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
            <Icon size={15} />
          </div>
        </div>

        <div className="mt-3 space-y-2">{children}</div>
      </Card>
    </section>
  );
}
