interface SectionHeadingProps {
  titleId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  titleId,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-3 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 leading-7 text-navy">{description}</p>
      ) : null}
    </div>
  );
}
