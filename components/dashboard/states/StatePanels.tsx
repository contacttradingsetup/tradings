import { AlertCircle, RefreshCcw, SearchX } from "lucide-react";
import type { EmptyStateProps, ErrorStateProps, EmptySearchStateProps } from "@/types";

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="rounded-[10px] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--background)] text-[var(--primary)]">
        <Icon size={16} />
      </div>
      <p className="mt-4 text-[14px] font-semibold text-[var(--text)]">{title}</p>
      <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{description}</p>
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="motion-safe-transition mt-4 inline-flex items-center justify-center rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2 text-[12px] font-medium text-[var(--text)] hover:-translate-y-[1px] hover:border-[color:var(--primary)]/40"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export function ErrorState({
  title = "We hit a snag",
  description = "The latest data could not be loaded right now.",
  actionLabel = "Retry",
  onAction,
}: ErrorStateProps) {
  return (
    <div className="rounded-[10px] border border-[color:var(--danger)]/30 bg-[color:var(--surface)] p-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--danger)]/20 bg-[color:var(--background)] text-[var(--danger)]">
        <AlertCircle size={16} />
      </div>
      <p className="mt-4 text-[14px] font-semibold text-[var(--text)]">{title}</p>
      <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">{description}</p>
      {onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="motion-safe-transition mt-4 inline-flex items-center justify-center gap-2 rounded-[8px] border border-[color:var(--danger)]/20 bg-[color:var(--background)] px-3 py-2 text-[12px] font-medium text-[var(--text)] hover:-translate-y-[1px]"
        >
          <RefreshCcw size={14} />
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

export function EmptySearchState({
  title = "No matches found",
  description = "Try a broader search term or reset the filter.",
  actionLabel = "Clear search",
  onAction,
}: EmptySearchStateProps) {
  return (
    <EmptyState
      icon={SearchX}
      title={title}
      description={description}
      actionLabel={actionLabel}
      onAction={onAction}
    />
  );
}
