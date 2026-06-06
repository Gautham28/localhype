import { PillBadge } from "@/components/landing/pill-badge";
import { HeroMockups } from "@/components/landing/hero-mockups";

export function Hero() {
  return (
    <section className="bg-hero-pattern relative overflow-hidden px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <PillBadge className="mb-6 md:mb-8">
          The new era of local marketing
        </PillBadge>

        <h1 className="font-heading max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-black md:text-6xl lg:text-7xl">
          Local Word-of-Mouth, at Scale.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
          Turn everyday community members into your most trusted marketing
          channel — authentic Instagram stories that drive real foot traffic.
        </p>

        <HeroMockups />
      </div>
    </section>
  );
}
