import { Link } from "react-router-dom";
import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { companyInfo } from "@/lib/data/company";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    site: companyInfo.sites.kogi,
    image: "/images/kogi-site.jpg",
    link: "/projects/kogi-gold",
    stats: [
      { label: "Cadastral Units", value: "410" },
      { label: "Focus", value: "Gold" },
    ],
  },
  {
    site: companyInfo.sites.crossRiver,
    image: "/images/cross-river-site.jpg",
    link: "/projects/cross-river",
    stats: [
      { label: "Cadastral Units", value: "310" },
      { label: "Minerals", value: "64+" },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Our Projects"
        subtitle="Strategic mineral exploration and extraction projects across Nigeria's most resource-rich regions."
        compact
      />

      <section className="section-padding">
        <Container>
          <SectionHeading title="Active Projects" />
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.link} delay={i * 200}>
                <div className="hover-lift overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.site.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-2xl font-bold text-foreground">{project.site.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{project.site.location}</p>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="rounded-lg bg-secondary/50 p-3 text-center">
                          <div className="font-display text-xl font-bold text-accent">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                    >
                      View Project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
