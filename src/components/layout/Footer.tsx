import { Link } from "react-router-dom";
import Container from "./Container";
import { contactInfo } from "@/lib/data/company";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Operations", path: "/operations" },
  { label: "Projects", path: "/projects" },
  { label: "Equipment", path: "/equipment" },
];

const resourceLinks = [
  { label: "Minerals", path: "/minerals" },
  { label: "Investment", path: "/investment" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="gradient-green text-primary-foreground">
      <Container className="section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="B&R Marine Energy" className="mb-4 h-12 w-auto brightness-200" />
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Empowering Mineral Wealth, Transforming African Prosperity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/70 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {contactInfo.contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="transition-colors hover:text-accent">{email}</a>
                </li>
              ))}
              {contactInfo.contact.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone}`} className="transition-colors hover:text-accent">{phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <Container>
          <p className="py-6 text-center text-sm text-primary-foreground/50">
            © 2025 B&R Marine Energy Logistics Ltd. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
