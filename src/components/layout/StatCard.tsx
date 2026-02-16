interface StatCardProps {
  value: string | number;
  label: string;
  light?: boolean;
}

const StatCard = ({ value, label, light = false }: StatCardProps) => {
  return (
    <div className="hover-lift rounded-lg border border-border/50 bg-card/80 p-6 text-center backdrop-blur-sm">
      <div className={`font-display text-3xl font-bold md:text-4xl ${light ? "text-accent" : "text-accent"}`}>
        {value}
      </div>
      <div className={`mt-2 text-sm font-medium ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;
