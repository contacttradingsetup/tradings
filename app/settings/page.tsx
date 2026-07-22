export default function SettingsPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
      <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-5">
        <h1 className="text-[22px] font-bold tracking-tight text-[var(--text)]">Settings</h1>
        <p className="text-[var(--muted)]">Customize your workspace preferences and notifications.</p>
      </div>

      <div className="rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-12 text-center">
        <p className="text-lg font-semibold text-[var(--text)]">Settings panel coming soon</p>
        <p className="mt-2 text-[var(--muted)]">Theme preferences, API keys, notification settings, and account management are under development.</p>
      </div>
    </div>
  );
}
