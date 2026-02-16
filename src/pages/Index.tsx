import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import StatCard from "@/components/layout/StatCard";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { companyInfo } from "@/lib/data/company";
import { Search, Pickaxe, Factory, ArrowRight } from "lucide-react";

const activityIcons = [Search, Pickaxe, Factory];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title={companyInfo.tagline}
        subtitle={companyInfo.overview}
      >
        <Link
          to="/investment"
          className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
        >
          Investment Opportunities
        </Link>
        <Link
          to="/contact"
          className="rounded-md border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
        >
          Contact Us
        </Link>
      </HeroSection>

      {/* Authority Band */}
      <section className="gradient-green section-padding">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="410" label="Kogi Cadastral Units" />
            <StatCard value="310" label="Cross River Cadastral Units" />
            <StatCard value="64+" label="Minerals Identified" />
            <StatCard value="720+" label="Total Cadastral Units" />
          </div>
        </Container>
      </section>

      {/* Operations */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Our Operations" subtitle="From exploration to processing, we deliver excellence at every stage." />
          <div className="grid gap-8 md:grid-cols-3">
            {companyInfo.activities.map((activity, i) => {
              const Icon = activityIcons[i];
              return (
                <RevealOnScroll key={activity.title} delay={i * 150}>
                  <div className="hover-lift rounded-xl border border-border bg-card p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{activity.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Project Sites */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Project Sites & Assets" subtitle="Strategic mining operations across Nigeria's most mineral-rich regions." />
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { site: companyInfo.sites.kogi, image: "/images/kogi-site.jpg", link: "/projects/kogi-gold" },
              { site: companyInfo.sites.crossRiver, image: "/images/cross-river-site.jpg", link: "/projects/cross-river" },
            ].map((item, i) => (
              <RevealOnScroll key={item.site.name} delay={i * 200}>
                <Link to={item.link} className="group block">
                  <div className="hover-lift overflow-hidden rounded-xl border border-border bg-card">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.site.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{item.site.name}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{item.site.location}</p>
                      <div className="flex items-center gap-2 text-sm font-medium text-accent">
                        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Core Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {companyInfo.coreValues.map((value, i) => (
              <RevealOnScroll key={value} delay={i * 100}>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-8 text-center">
                  <div className="mb-3 font-display text-4xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{value}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="gradient-green section-padding">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Invest in Africa's Mineral Future?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Explore our investment opportunities and partner with us to unlock the vast mineral wealth of Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/investment" className="rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110">
                View Opportunities
              </Link>
              <Link to="/contact" className="rounded-md border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10">
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
