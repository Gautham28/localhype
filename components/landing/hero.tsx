import Image from "next/image";
import { PillBadge } from "@/components/landing/pill-badge";

export function Hero() {
  return (
    <section className="bg-hero-pattern relative overflow-hidden px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <PillBadge className="mb-6 md:mb-8">
          The new era of local marketing
        </PillBadge>

        <h1 className="font-heading max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-black md:text-6xl lg:text-7xl">
          Turn Everyday Locals into Your Brand’s Loudest Advocates
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
          LocalHype connects local businesses with real people who share
          authentic stories on Instagram. No big influencers. Just genuine
          word-of-mouth at scale.
        </p>

        <div className="relative mt-12 w-full max-w-sm md:mt-16 md:max-w-xl lg:max-w-2xl">
          <Image
            src="/hero2.png"
            alt="Community members sharing local business stories on Instagram around a neighborhood coffee shop"
            width={1200}
            height={800}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
