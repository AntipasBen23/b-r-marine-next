import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import StatCard from "@/components/layout/StatCard";
import { companyInfo } from "@/lib/data/company";
import { kogiMinerals } from "@/lib/data/kogi-minerals";
import { ExternalLink } from "lucide-react";

const REPORT_LINK =
  "https://pear-fireman-5e2.notion.site/Kogi-Technical-Report-for-gold-mineralization_Kirri-NE_Koton-Karfi-for-B-R-Marine-Energy-2ac3084ed3958068aaaae2f2c992b8e9?source=copy_link";

const KogiGold = () => {
  const site = companyInfo.sites.kogi;

  return (
    <>
      <HeroSection
        backgroundImage="/images/projects/kogi-gold-hero.jpg"
        title={site.name}
        subtitle={site.location}
        compact
      />

      {/* Stats */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard value={site.cadastralUnits} label="Cadastral Units" />
            <StatCard value="Gold" label="Primary Focus" />
            <StatCard value="Alluvial" label="Deposit Type" />
          </div>
        </Container>
      </section>

      {/* Location Details */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Location & Key Findings" />
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8">
              <p className="text-muted-foreground leading-relaxed">{site.nearRiver}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The Kogi State concession covers {site.cadastralUnits} cadastral units in the {site.location} area. 
                Geological surveys have confirmed significant gold mineralization across the site, with both alluvial 
                and primary gold deposits identified. The area's proximity to major river systems enhances the potential 
                for alluvial gold recovery operations.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Minerals */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Minerals Identified" />
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {kogiMinerals.map((mineral, i) => (
              <RevealOnScroll key={mineral.name} delay={Math.min(i * 50, 500)}>
                <div className="hover-lift rounded-lg border border-border bg-card p-4">
                  <div className="font-medium text-foreground">{mineral.name}</div>
                  {mineral.depth && <div className="mt-1 text-xs text-accent">{mineral.depth}</div>}
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

export default KogiGold;
