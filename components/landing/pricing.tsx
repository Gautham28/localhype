import { PillBadge } from "@/components/landing/pill-badge";
import { PricingCard, type PricingTier } from "@/components/landing/pricing-card";
import { Clapperboard } from "lucide-react";

const tiers: PricingTier[] = [
  {
    name: "Spark",
    price: "₹2,000",
    period: "/ campaign",
    description: "Perfect for first-time launches and testing the waters.",
    features: [
      "10 local Instagram accounts",
      "Up to 2 ready-made Story creatives",
      "Clear briefing + detailed posting instructions",
      "Proof of posting (screenshots + view counts)",
      "Basic report with all screenshots"
    ],
  },
  {
    name: "Buzz",
    price: "₹3,500",
    period: "/ campaign",
    description: "Our sweet spot for growing local businesses.",
    features: [
      "20 local Instagram accounts",
      "Up to 4 ready-made Story creatives",
      "Higher quality participant filtering",
      "Professional report with total & average views",
      "Everything in Spark",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Hype",
    price: "₹6,000",
    period: "/ campaign",
    description: "Maximum reach for brands that want to own the conversation.",
    features: [
      "40 local Instagram accounts",
      "Up to 6 ready-made Story creatives",
      "Premium participant filtering",
      "Advanced insights & reporting",
      "Performance bonus for top performers",
      "Everything in Buzz"
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

        <div className="mt-8 rounded-2xl border-2 border-brand-black bg-brand-orange p-6 shadow-brutal-lg md:mt-10 md:p-10">
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
            We produce one high-quality promotional Reel featuring one of our local micro-influencers (3K+ followers).
            </p>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
            The Reel is posted on their account and can also be shared with our broader community for extra reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
