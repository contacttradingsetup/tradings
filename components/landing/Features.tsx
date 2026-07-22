import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const features = [
  "Secure Trading",
  "Lightning Fast",
  "Advanced Analytics",
];

export default function Features() {
  return (
    <section className="py-20 bg-[var(--surface)]">

      <Container>

        <h2 className="mb-10 text-[var(--text-h1)] font-bold text-[var(--text)]">

          Why Tradings?

        </h2>

        <div className="grid gap-6 lg:grid-cols-3">

          {features.map((feature) => (

            <Card key={feature}>

              <h3 className="text-[var(--text-h3)] font-semibold text-[var(--text)]">

                {feature}

              </h3>

              <p className="mt-4 text-[var(--text-small)] text-[var(--muted)]">

                Professional tools designed
                for modern traders.

              </p>

            </Card>

          ))}

        </div>

      </Container>

    </section>
  );
}