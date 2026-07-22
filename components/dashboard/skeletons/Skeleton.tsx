import type { SkeletonProps } from "@/types";

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer rounded-[var(--radius)] bg-[color:var(--surface)]/80 ${className}`}
      aria-hidden="true"
    />
  );
}
