import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { companyInfo } from "@/lib/data/company";
import { Search, Pickaxe, Factory } from "lucide-react";

const activityIcons = [Search, Pickaxe, Factory];

const Operations = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Our Operations"
        subtitle="Strategic mining operations across Nigeria's most mineral-rich regions, combining cutting-edge technology with sustainable practices."
        compact
      />

      {/* Kogi Site */}
      <section className="section-padding">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <RevealOnScroll>
              <img src="/images/kogi-site.jpg" alt="Kogi Site" className="rounded-xl shadow-lg" />
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">{companyInfo.sites.kogi.name}</h2>
                <p className="mt-2 text-accent font-medium">{companyInfo.sites.kogi.location}</p>
                <p className="mt-4 text-muted-foreground">{companyInfo.sites.kogi.nearRiver}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <div className="font-display text-2xl font-bold text-accent">{companyInfo.sites.kogi.cadastralUnits}</div>
                    <div className="text-xs text-muted-foreground">Cadastral Units</div>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <div className="font-display text-2xl font-bold text-accent">Gold</div>
                    <div className="text-xs text-muted-foreground">Primary Focus</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Cross River Site */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <RevealOnScroll delay={200} className="order-2 lg:order-1">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">{companyInfo.sites.crossRiver.name}</h2>
                <p className="mt-2 text-accent font-medium">{companyInfo.sites.crossRiver.location}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <div className="font-display text-2xl font-bold text-accent">{companyInfo.sites.crossRiver.cadastralUnits}</div>
                    <div className="text-xs text-muted-foreground">Cadastral Units</div>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <div className="font-display text-2xl font-bold text-accent">{companyInfo.sites.crossRiver.mineralsCount}+</div>
                    <div className="text-xs text-muted-foreground">Minerals Identified</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="order-1 lg:order-2">
              <img src="/images/cross-river-site.jpg" alt="Cross River Site" className="rounded-xl shadow-lg" />
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Activities */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Core Activities" subtitle="End-to-end mining operations from exploration to market-ready products." />
          <div className="grid gap-8 md:grid-cols-3">
            {companyInfo.activities.map((activity, i) => {
              const Icon = activityIcons[i];
              return (
                <RevealOnScroll key={activity.title} delay={i * 150}>
                  <div className="hover-lift rounded-xl border border-border bg-card p-8">
                    <Icon className="mb-4 h-8 w-8 text-accent" />
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{activity.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Operations;
