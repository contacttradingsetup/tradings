import Card from "@/components/ui/Card";
import type { PanelShellProps } from "@/types";

export default function PanelShell({
  eyebrow,
  title,
  description,
  action,
  children,
  className = "",
}: PanelShellProps) {
  return (
    <Card className={`p-5 sm:p-6 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          {eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-[18px] font-semibold text-[var(--text)]">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
          ) : null}
        </div>

        {action ? <div className="shrink-0">{action}</div> : null}
      </div>

      <div className="mt-5">{children}</div>
    </Card>
  );
}
