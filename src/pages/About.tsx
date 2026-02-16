import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { companyInfo, contactInfo } from "@/lib/data/company";
import { Target, Eye, Shield, Lightbulb, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/about-hero.jfif"
        title="About B&R Marine Energy"
        subtitle={companyInfo.overview}
        compact
      />

      {/* Mission & Vision */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <RevealOnScroll>
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">{companyInfo.mission}</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">{companyInfo.vision}</p>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Core Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {companyInfo.coreValues.map((val, i) => {
              const icons = [Shield, Lightbulb, Heart];
              const Icon = icons[i];
              return (
                <RevealOnScroll key={val} delay={i * 150}>
                  <div className="hover-lift rounded-xl border border-border bg-card p-8 text-center">
                    <Icon className="mx-auto mb-4 h-8 w-8 text-accent" />
                    <h3 className="font-display text-lg font-semibold text-foreground">{val}</h3>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Leadership" />
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/managing-director.png" alt={contactInfo.managingDirector.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground">{contactInfo.managingDirector.name}</h3>
                <p className="mt-1 text-sm text-accent">{contactInfo.managingDirector.title}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{contactInfo.managingDirector.role}</p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Partners */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Partners" />
          <RevealOnScroll>
            <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-8 text-center">
              <img src="/images/ebranell-logo.png" alt="Enbranell Ores Nig Ltd" className="mx-auto mb-4 h-20 w-auto" />
              <h3 className="font-display text-xl font-bold text-foreground">ENBRANELL ORES NIG LTD</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our strategic partner in mineral exploration and extraction across Nigeria.
              </p>
              <a
                href="http://www.enbranell.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
              >
                Visit Website
              </a>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Our Clients" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Ministry of Solid Minerals Development", logo: "/images/ministry-solid-minerals.png" },
              { name: "Mining Cadastre Office", logo: "/images/mining-cadastre-office.png" },
              { name: "Nigerian Geological Survey Agency", logo: "/images/nigerian-geological-survey.png" },
            ].map((client, i) => (
              <RevealOnScroll key={client.name} delay={i * 150}>
                <div className="hover-lift flex flex-col items-center rounded-xl border border-border bg-card p-8">
                  <img src={client.logo} alt={client.name} className="mb-4 h-16 w-auto" />
                  <h4 className="text-center text-sm font-medium text-foreground">{client.name}</h4>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Global Presence" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.offices.map((office, i) => (
              <RevealOnScroll key={office.city} delay={i * 100}>
                <div className="hover-lift rounded-xl border border-border bg-card p-6">
                  <h4 className="font-display text-lg font-bold text-foreground">{office.city}</h4>
                  <p className="mt-1 text-sm font-medium text-accent">{office.country}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{office.address}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
