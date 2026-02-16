import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { minerals } from "@/lib/data/minerals";
import { kogiMinerals } from "@/lib/data/kogi-minerals";
import StatCard from "@/components/layout/StatCard";

const Minerals = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Mineral Resources"
        subtitle="A comprehensive inventory of minerals across our Cross River and Kogi State concession areas."
        compact
      />

      {/* Cross River */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Cross River Minerals" subtitle={`${minerals.length} minerals identified across Sheet 314 (Ugep).`} />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {minerals.map((mineral, i) => (
              <RevealOnScroll key={mineral.name} delay={Math.min(i * 20, 400)}>
                <div className="hover-lift rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{mineral.name}</span>
                    {mineral.symbol && (
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">{mineral.symbol}</span>
                    )}
                  </div>
                  {mineral.depth && <div className="mt-1 text-xs text-muted-foreground">Depth: {mineral.depth}</div>}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Kogi */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Kogi State Minerals" subtitle={`${kogiMinerals.length} minerals identified in the Kogi concession area.`} />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {kogiMinerals.map((mineral, i) => (
              <RevealOnScroll key={mineral.name} delay={Math.min(i * 50, 400)}>
                <div className="hover-lift rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{mineral.name}</span>
                    {mineral.symbol && (
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">{mineral.symbol}</span>
                    )}
                  </div>
                  {mineral.depth && <div className="mt-1 text-xs text-muted-foreground">{mineral.depth}</div>}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="64+" label="Total Minerals" />
            <StatCard value="720+" label="Cadastral Units" />
            <StatCard value="2" label="Active Sites" />
            <StatCard value="Gold" label="Primary Target" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Minerals;
