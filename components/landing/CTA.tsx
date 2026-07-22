import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24">

      <Container>

        <div className="rounded-[var(--radius)] bg-gradient-to-br from-[var(--primary)] via-[var(--primary-soft)] to-[#1E40AF] p-16 text-center shadow-[0_0_60px_rgba(37,99,235,0.15)]">

          <h2 className="text-[var(--text-display)] font-bold text-[var(--text)]">

            Ready to start?

          </h2>

          <p className="mt-6 text-[var(--text-secondary)]">

            Create your account and start trading today.

          </p>

          <div className="mt-10">

            <Button className="bg-[var(--text)] text-[var(--background)] hover:bg-[var(--surface-strong)]">

              Create Account

            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}