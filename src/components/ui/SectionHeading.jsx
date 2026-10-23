/**
 * Reusable section heading with consistent hierarchy and optional subtitle.
 */
export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
  tag = "h2",
}) {
  const Tag = tag;
  return (
    <section className={className}>
      {subtitle && (
        <p
          className={[
            "text-sm font-semibold tracking-wider text-navy-600 uppercase mb-3",
            `text-${align}`,
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
      <Tag
        className={[
          "text-3xl md:text-4xl font-bold text-navy-900 mb-0",
          `text-${align}`,
        ].join(" ")}
      >
        {title}
      </Tag>
    </section>
  );
}
