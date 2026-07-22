import OverviewCard from "../cards/OverviewCard";
import { KPICardsSkeleton } from "../skeletons/DashboardSkeletons";
import { getOverviewMetrics } from "@/services";

export default async function DashboardOverview() {
  const overview = await getOverviewMetrics();
  return (
    <section aria-label="Portfolio overview metrics" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {overview.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </section>
  );
}

export function DashboardOverviewSkeleton() {
  return <KPICardsSkeleton />;
}