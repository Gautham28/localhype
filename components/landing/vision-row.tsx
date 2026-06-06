import { PillBadge } from "@/components/landing/pill-badge";
import { cn } from "@/lib/utils";

type VisionRowProps = {
  pill: string;
  headline: string;
  body: string;
  illustration: React.ReactNode;
  reversed?: boolean;
};

export function VisionRow({
  pill,
  headline,
  body,
  illustration,
  reversed = false,
}: VisionRowProps) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div
        className={cn(
          "order-2 flex flex-col gap-5",
          reversed ? "md:order-2" : "md:order-1"
        )}
      >
        <PillBadge className="w-fit border-white text-white">{pill}</PillBadge>
        <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
          {body}
        </p>
      </div>

      <div
        className={cn(
          "order-1",
          reversed ? "md:order-1" : "md:order-2"
        )}
      >
        {illustration}
      </div>
    </div>
  );
}
