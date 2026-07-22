import { getCoins } from "@/services";

export default async function TopMovers() {
  const coins = await getCoins();
  return (
    <div className="h-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[var(--text-h2)] font-semibold text-[var(--text)]">Top Movers</h2>
          <p className="text-[var(--text-small)] text-[var(--muted)]">Track the market leaders right now.</p>
        </div>
        <button className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-[var(--text-caption)] uppercase tracking-[0.24em] text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]">
          View All Markets
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {coins.map((coin) => {
          const positive = coin.change.startsWith("+");

          return (
            <div
              key={coin.symbol}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--panel)] p-6 transition hover:border-[var(--border-strong)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--text-body)] font-semibold text-[var(--text)]">
                    {coin.symbol}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text)]">{coin.name}</p>
                    <p className="text-[var(--text-small)] text-[var(--muted)]">{coin.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[var(--text-body)] font-semibold text-[var(--text)]">{coin.price}</p>
                  <p className={`text-[var(--text-small)] font-medium ${positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                    {coin.change}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}