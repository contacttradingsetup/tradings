import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1920px] px-8 py-[120px] 2xl:px-12">
        <div className="rounded-[6px] bg-gradient-to-r from-[var(--primary)] via-[#4F46E5] to-[#7C3AED] px-12 py-28">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-[48px] font-bold leading-[1.12] tracking-[-0.01em] text-white">
              Ready to start trading?
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[20px] leading-relaxed text-white/60">
              Create your free account and access professional trading tools in under two minutes.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/signup"
                className="inline-flex h-[52px] items-center gap-2 rounded-[6px] bg-white px-12 text-[16px] font-semibold text-[var(--primary)] transition hover:bg-white/90"
              >
                Create free account
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-[52px] items-center gap-2 rounded-[6px] border border-white/[0.15] px-12 text-[16px] font-medium text-white backdrop-blur transition hover:bg-white/[0.08]"
              >
                View demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}