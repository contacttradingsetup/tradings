// ── Signup Page ──

"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks";

export default function SignupPage() {
  const router = useRouter();
  const { signup, isLoading, error } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password.length < 8) return;
    const ok = await signup(name, email, password);
    if (ok) router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-[400px] rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
      <h1 className="text-[var(--text-h2)] font-semibold text-[var(--text)]">Create account</h1>
      <p className="mt-2 text-[var(--text-small)] text-[var(--muted)]">
        Get started with your free trading workspace.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[var(--text-small)] font-medium text-[var(--text)]">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2.5 text-[var(--text-body)] text-[var(--text)] outline-none transition focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)]"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[var(--text-small)] font-medium text-[var(--text)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2.5 text-[var(--text-body)] text-[var(--text)] outline-none transition focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)]"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-[var(--text-small)] font-medium text-[var(--text)]">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            className="w-full rounded-[8px] border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2.5 text-[var(--text-body)] text-[var(--text)] outline-none transition focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)]"
          />
        </div>

        {error ? (
          <p className="rounded-[8px] border border-[color:var(--danger)]/20 bg-[color:var(--danger)]/5 px-4 py-2.5 text-[var(--text-small)] text-[var(--danger)]">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-[8px] bg-[var(--primary)] px-4 py-2.5 text-[var(--text-body)] font-semibold text-white transition hover:bg-[var(--primary-soft)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-[var(--text-small)] text-[var(--muted)]">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[var(--primary)] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
