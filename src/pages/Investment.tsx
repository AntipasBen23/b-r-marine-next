import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { companyInfo } from "@/lib/data/company";
import { TrendingUp, Shield, Globe } from "lucide-react";

const opportunities = [
  {
    title: companyInfo.sites.kogi.name,
    description: `${companyInfo.sites.kogi.cadastralUnits} cadastral units focused on gold exploration and extraction in ${companyInfo.sites.kogi.location}.`,
    image: "/images/projects/kogi-gold-hero.jpg",
    link: "/projects/kogi-gold",
  },
  {
    title: companyInfo.sites.crossRiver.name,
    description: `${companyInfo.sites.crossRiver.cadastralUnits} cadastral units with ${companyInfo.sites.crossRiver.mineralsCount}+ minerals identified in ${companyInfo.sites.crossRiver.location}.`,
    image: "/images/projects/cross-river-hero.jpg",
    link: "/projects/cross-river",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "High Growth Potential",
    description: "Nigeria's solid minerals sector is poised for significant growth, offering early-mover advantages to strategic investors.",
  },
  {
    icon: Shield,
    title: "Secure Investment",
    description: "Fully licensed operations with government-approved exploration licenses and transparent reporting.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Contribute to Africa's economic development while generating strong returns from critical mineral resources.",
  },
];

const Investment = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Investment Opportunities"
        subtitle="Partner with us to unlock Nigeria's vast mineral wealth. Strategic investment opportunities across two premier mining sites."
        compact
      />

      {/* Opportunity Cards */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Explore Opportunities" />
          <div className="grid gap-8 md:grid-cols-2">
            {opportunities.map((opp, i) => (
              <RevealOnScroll key={opp.link} delay={i * 200}>
                <div className="hover-lift overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-video overflow-hidden">
                    <img src={opp.image} alt={opp.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-xl font-bold text-foreground">{opp.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{opp.description}</p>
                    <Link
                      to={opp.link}
                      className="inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Why Invest With Us" />
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <RevealOnScroll key={benefit.title} delay={i * 150}>
                <div className="hover-lift rounded-xl border border-border bg-card p-8 text-center">
                  <benefit.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Contact our team to discuss investment opportunities and partnership options.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Investment;
