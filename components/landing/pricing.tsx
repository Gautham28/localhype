import { PillBadge } from "@/components/landing/pill-badge";
import { PricingCard, type PricingTier } from "@/components/landing/pricing-card";
import { Clapperboard } from "lucide-react";

const tiers: PricingTier[] = [
  {
    name: "Story Campaigns",
    price: "From ₹2,000",
    period: "/ campaign",
    description: "Paid Instagram Story campaigns with local creators.",
    features: [
      "Local creators posting for your brand",
      "Ready-made Story creatives & briefing",
      "Clear posting instructions for every creator",
      "Proof of posting (screenshots + view counts)",
      "Campaign report with key highlights",
    ],
  },
  {
    name: "Creator Collabs",
    price: "Custom",
    period: "/ collab",
    description: "Food collabs, barter collabs, and brand partnerships that feel real.",
    features: [
      "Food & dining collabs with local creators",
      "Barter collabs for product or experience trades",
      "Creator matching based on vibe & audience",
      "Coordinated briefs, visits, and deliverables",
      "Content you can reuse across your channels",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Content Studio",
    price: "Custom",
    period: "/ project",
    description: "Product photoshoots, reel creation, and content that sells.",
    features: [
      "Product & brand photoshoots",
      "Reel creation with local creators",
      "Ongoing content creation for your brand",
      "On-brand creative direction & editing",
      "Assets ready for Instagram, WhatsApp & more",
    ],
  },
];

export function Pricing() {
  return (
    <section id="launch" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <PillBadge className="mb-6 md:mb-8">Services</PillBadge>
          <h2 className="font-heading max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            Everything you need to market locally.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Pick a service or mix them. We build campaigns around local micro
            creators. No long-term contracts required.
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
                Full-service option
              </span>
            </div>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-white md:text-4xl">
              Custom Marketing Mix
            </h3>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Need stories, collabs, and content together? We design a custom
              package that combines paid story campaigns, food or barter
              collabs, product photoshoots, and reel creation around your goals.
            </p>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              Tell us what you&apos;re launching, and we&apos;ll recommend the right
              mix of local creators and deliverables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
