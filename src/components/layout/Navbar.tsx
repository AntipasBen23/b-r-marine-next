import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Operations", path: "/operations" },
  { label: "Projects", path: "/projects" },
  { label: "Equipment", path: "/equipment" },
  { label: "Minerals", path: "/minerals" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/30 bg-card/90 backdrop-blur-lg">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="B&R Marine Energy" className="h-10 w-auto md:h-12" />
            <span className="hidden font-display text-sm font-bold text-foreground sm:block lg:text-base">
              B&R Marine Energy
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/investment"
              className="ml-3 rounded-md bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Invest
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="animate-slide-down border-t border-border/30 pb-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === link.path ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/investment"
              onClick={() => setOpen(false)}
              className="mx-4 mt-2 block rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Invest
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
