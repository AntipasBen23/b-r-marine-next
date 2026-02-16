import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import StatCard from "@/components/layout/StatCard";
import { companyInfo } from "@/lib/data/company";
import { minerals } from "@/lib/data/minerals";
import { ExternalLink } from "lucide-react";

const REPORT_LINK =
  "https://pear-fireman-5e2.notion.site/Technical-Report-for-Alluvial-gold-mineralization_Parts-of-Sheet-314_Ugep-1-final-draft-2af3084ed39580748926cabbe6a2e6cd?source=copy_link";

const CrossRiver = () => {
  const site = companyInfo.sites.crossRiver;

  return (
    <>
      <HeroSection
        backgroundImage="/images/projects/cross-river-hero.jpg"
        title={site.name}
        subtitle={site.location}
        compact
      />

      {/* Stats */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value={site.cadastralUnits} label="Cadastral Units" />
            <StatCard value={`${site.mineralsCount}+`} label="Minerals Identified" />
            <StatCard value={site.availableUnits!} label="Available Units" />
            <StatCard value="Sheet 314" label="Survey Sheet" />
          </div>
        </Container>
      </section>

      {/* Minerals */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Minerals Identified" subtitle={`Over ${site.mineralsCount} minerals identified across the concession area.`} />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {minerals.map((mineral, i) => (
              <RevealOnScroll key={mineral.name} delay={Math.min(i * 30, 500)}>
                <div className="hover-lift rounded-lg border border-border bg-card p-4">
                  <div className="font-medium text-foreground">{mineral.name}</div>
                  {mineral.depth && <div className="mt-1 text-xs text-accent">Depth: {mineral.depth}</div>}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTAs */}
      <section className="gradient-green section-padding">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Interested in This Project?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/investment"
                className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
              >
                Investment Opportunities
              </Link>
              <a
                href={REPORT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Technical Report <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CrossRiver;
