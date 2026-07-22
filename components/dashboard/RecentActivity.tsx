import Card from "@/components/ui/Card";
import { getRecentActivity } from "@/services";

export default async function RecentActivity() {
  const activity = await getRecentActivity();
  return (
    <Card className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[var(--text-h2)] font-semibold text-[var(--text)]">Recent Activity</h2>
          <p className="text-[var(--text-small)] text-[var(--muted)]">Track the latest trades in your portfolio.</p>
        </div>
        <button className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--text-caption)] uppercase tracking-[0.24em] text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activity.map((item) => (
          <div key={item.title} className="grid gap-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--panel)] p-6 sm:grid-cols-[1.1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-[var(--radius)] ${
                  item.type === "buy" ? "bg-[var(--success)]/10 text-[var(--success)]" : "bg-[var(--danger)]/10 text-[var(--danger)]"
                }`}>
                  {item.type === "buy" ? "+" : "-"}
                </div>
                <div>
                  <p className="font-semibold text-[var(--text)]">{item.title}</p>
                  <p className="text-[var(--text-small)] text-[var(--muted)]">{item.amount}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[var(--text)]">{item.value}</p>
              <p className="text-[var(--text-small)] text-[var(--muted)]">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
