import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import StatCard from "@/components/layout/StatCard";
import { equipmentItems } from "@/lib/data/equipment";

const Equipment = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Mining Equipment"
        subtitle="State-of-the-art equipment and machinery for efficient mineral exploration, extraction, and processing."
        compact
      />

      {/* Equipment Grid */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Our Fleet" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipmentItems.map((item, i) => (
              <RevealOnScroll key={item.name} delay={Math.min(i * 100, 500)}>
                <div className="hover-lift overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value={equipmentItems.length} label="Equipment Types" />
            <StatCard value="200TPH" label="Processing Capacity" />
            <StatCard value="2" label="Active Sites" />
            <StatCard value="24/7" label="Operations" />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-green section-padding">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Invest in Our Operations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Our modern equipment fleet supports large-scale mineral extraction across both project sites.
            </p>
            <Link
              to="/investment"
              className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              View Investment Opportunities
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Equipment;
