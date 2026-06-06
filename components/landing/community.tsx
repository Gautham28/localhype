import Link from "next/link";
import { PillBadge } from "@/components/landing/pill-badge";
import { CommunityGraphic } from "@/components/landing/community-graphic";
import { Button } from "@/components/ui/button";

const perks = [
  "Get matched with campaigns near you",
  "Post stories on your own schedule",
  "Earn per activation — no follower minimum",
  "Discover the best spots in your city",
];

export function Community() {
  return (
    <section
      id="community"
      className="bg-brand-lime px-4 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <PillBadge>For Community Members</PillBadge>

          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            Get Paid to Explore Your City.
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-brand-black/80 md:text-lg">
            Love trying new cafes, shops, and hidden gems? LocalHype pays you to
            share what you find — real stories, real places, real money.
          </p>

          <ul className="space-y-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="font-accent flex items-start gap-3 text-sm font-semibold uppercase tracking-wide text-brand-black md:text-base"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-purple" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<Link href="#community" />}
              className="font-accent h-11 rounded-full border-2 border-brand-black bg-brand-purple px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-purple/90"
            >
              Join Community
            </Button>
            <Button
              variant="outline"
              render={<Link href="#how-it-works" />}
              className="font-accent h-11 rounded-full border-2 border-brand-black bg-transparent px-6 text-sm font-semibold uppercase tracking-wide text-brand-black hover:bg-brand-black/5"
            >
              See How It Works
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <CommunityGraphic />
        </div>
      </div>
    </section>
  );
}
