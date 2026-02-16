interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className={`font-display text-3xl font-bold md:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2 justify-center">
        <div className="h-1 w-12 rounded-full bg-accent" />
        <div className="h-1 w-6 rounded-full bg-accent/50" />
      </div>
    </div>
  );
};

export default SectionHeading;
