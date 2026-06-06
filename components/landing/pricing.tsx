import { PillBadge } from "@/components/landing/pill-badge";
import { PricingCard, type PricingTier } from "@/components/landing/pricing-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

const tiers: PricingTier[] = [
  {
    name: "Spark",
    price: "$149",
    period: "/ campaign",
    description: "Perfect for first-time launches and testing the waters.",
    features: [
      "5 community story activations",
      "1 neighborhood zone",
      "Basic insights dashboard",
      "48-hour campaign setup",
    ],
  },
  {
    name: "Buzz",
    price: "$349",
    period: "/ campaign",
    description: "Our most popular package for businesses ready to grow.",
    features: [
      "15 community story activations",
      "3 neighborhood zones",
      "Priority member matching",
      "Full analytics & export",
      "Dedicated campaign support",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Hype",
    price: "$699",
    period: "/ campaign",
    description: "Maximum reach for brands that want to own the conversation.",
    features: [
      "40+ community story activations",
      "Citywide coverage",
      "Premium member matching",
      "Advanced insights & reporting",
      "Strategy call included",
    ],
  },
];

export function Pricing() {
  return (
    <section id="launch" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <PillBadge className="mb-6 md:mb-8">Pricing</PillBadge>
          <h2 className="font-heading max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            Packages built for every stage of growth.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose a campaign size that fits your goals. Scale up anytime — no
            long-term contracts.
          </p>
        </div>

        <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="w-[85%] shrink-0 snap-center sm:w-[70%] md:w-auto"
            >
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border-2 border-brand-black bg-brand-orange p-6 shadow-brutal-lg md:mt-10 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="flex flex-col gap-4 md:max-w-xl">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border-2 border-white bg-white/10">
                <Clapperboard className="size-6 text-white" />
              </div>
              <span className="font-accent text-sm font-bold uppercase tracking-[0.2em] text-white/90">
                Add-on package
              </span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-white md:text-4xl">
              Special Reel Production
            </h3>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              We turn your best community stories into a polished, branded reel
              — ready to post, boost, and share across every channel.
            </p>
          </div>

          <Button
            render={<Link href="#launch" />}
            className="font-accent mt-6 h-11 shrink-0 rounded-full border-2 border-brand-black bg-brand-lime px-6 text-sm font-semibold uppercase tracking-wide text-brand-black hover:bg-brand-lime/90 md:mt-0"
          >
            Add Reel Package
          </Button>
        </div>
      </div>
    </section>
  );
}
