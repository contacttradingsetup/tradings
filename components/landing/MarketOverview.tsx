import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const stats = [
  {
    title: "Assets",
    value: "500+",
  },
  {
    title: "Markets",
    value: "120",
  },
  {
    title: "Countries",
    value: "180",
  },
  {
    title: "Uptime",
    value: "99.99%",
  },
];

export default function MarketOverview() {
  return (
    <section className="py-20">
      <Container>

        <h2 className="mb-10 text-[var(--text-h1)] font-bold text-[var(--text)]">
          Market Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <Card key={item.title}>

              <p className="text-[var(--muted)]">
                {item.title}
              </p>

              <h3 className="mt-3 text-[var(--text-h1)] font-bold text-[var(--text)]">
                {item.value}
              </h3>

            </Card>

          ))}

        </div>

      </Container>
    </section>
  );
}