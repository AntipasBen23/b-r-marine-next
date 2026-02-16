import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  compact?: boolean;
}

const HeroSection = ({ backgroundImage, title, subtitle, children, compact = false }: HeroSectionProps) => {
  return (
    <section className={`relative flex items-center overflow-hidden ${compact ? "min-h-[50vh]" : "min-h-[80vh]"}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="gradient-hero absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
