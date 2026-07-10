import Image from "next/image";
import { PillBadge } from "@/components/landing/pill-badge";

export function Hero() {
  return (
    <section className="bg-hero-pattern relative overflow-hidden px-4 pb-20 pt-8 md:pb-28 md:pt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <PillBadge className="mb-6 md:mb-8">
          Local marketing with creators
        </PillBadge>

        <h1 className="font-heading max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-black md:text-6xl lg:text-7xl">
          Grow Your Local Business with Creators Who Know Your City
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg">
          LocalHype is a marketing company that connects local businesses with
          local creators for paid story campaigns, food &amp; barter
          collabs, product photoshoots, reels, and content that actually
          converts.
        </p>

        <div className="relative mt-12 w-full max-w-sm md:mt-16 md:max-w-xl lg:max-w-2xl">
          <Image
            src="/hero2.png"
            alt="Local creators collaborating with neighborhood businesses"
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
