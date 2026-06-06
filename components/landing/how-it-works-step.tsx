type HowItWorksStepProps = {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function HowItWorksStep({
  number,
  title,
  description,
  isLast = false,
}: HowItWorksStepProps) {
  return (
    <li className="relative flex flex-col items-center">
      <div
        aria-hidden="true"
        className="font-heading text-7xl font-extrabold leading-none text-brand-lime md:text-8xl"
      >
        {number}
      </div>

      <div className="mt-4 w-full rounded-2xl border-2 border-brand-black bg-white p-6 shadow-brutal md:p-8">
        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-brand-black md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      {!isLast && (
        <div
          aria-hidden="true"
          className="my-8 h-14 w-0 border-l-2 border-dashed border-brand-black md:my-10 md:h-16"
        />
      )}
    </li>
  );
}
