interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-lupo-green-muted">
        {tag}
      </p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-0.5 w-16 bg-lupo-green rounded-full ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-4 text-lg text-lupo-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
