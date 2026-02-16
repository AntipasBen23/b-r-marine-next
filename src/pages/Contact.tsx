import HeroSection from "@/components/layout/HeroSection";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import { contactInfo } from "@/lib/data/company";
import { Mail, Phone, Globe, User } from "lucide-react";

const Contact = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/images/hero-background.png"
        title="Contact Us"
        subtitle="Get in touch with our team to discuss opportunities, partnerships, or any inquiries."
        compact
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Email */}
            <RevealOnScroll>
              <div className="hover-lift rounded-xl border border-border bg-card p-8">
                <Mail className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Email</h3>
                {contactInfo.contact.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-sm text-muted-foreground transition-colors hover:text-accent">
                    {email}
                  </a>
                ))}
              </div>
            </RevealOnScroll>

            {/* Phone */}
            <RevealOnScroll delay={150}>
              <div className="hover-lift rounded-xl border border-border bg-card p-8">
                <Phone className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Phone</h3>
                {contactInfo.contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="block text-sm text-muted-foreground transition-colors hover:text-accent">
                    {phone}
                  </a>
                ))}
                <p className="mt-2 text-xs text-muted-foreground">WhatsApp: {contactInfo.contact.whatsapp}</p>
              </div>
            </RevealOnScroll>

            {/* Website */}
            <RevealOnScroll delay={300}>
              <div className="hover-lift rounded-xl border border-border bg-card p-8">
                <Globe className="mb-4 h-8 w-8 text-accent" />
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Website</h3>
                <a
                  href={`https://${contactInfo.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {contactInfo.contact.website}
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="section-padding bg-secondary/50">
        <Container>
          <SectionHeading title="Our Offices" />
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

      {/* Managing Director */}
      <section className="section-padding">
        <Container>
          <SectionHeading title="Managing Director" />
          <RevealOnScroll>
            <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <User className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{contactInfo.managingDirector.name}</h3>
              <p className="mt-1 text-sm text-accent">{contactInfo.managingDirector.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{contactInfo.managingDirector.role}</p>
              <p className="mt-3 text-xs text-muted-foreground">Direct: {contactInfo.contact.direct}</p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
};

export default Contact;
