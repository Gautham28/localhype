import Link from "next/link";
import { PillBadge } from "@/components/landing/pill-badge";
import { VisionImage } from "@/components/landing/vision-image";
import { Button } from "@/components/ui/button";

const perks = [
  "Get matched with campaigns in your area",
  "Earn cash for posting Stories with your personal touch",
  "Support businesses you genuinely like",
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
          Turn Your Instagram Stories into Income.
          </h2>

          <p className="max-w-lg text-base leading-relaxed text-brand-black/80 md:text-lg">
          Your everyday posts about local spots have real value.
          LocalHype connects you with businesses that want authentic promotion from real locals.
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

          <Button
            render={
              <Link
                href="https://chat.whatsapp.com/I3bvHlm8KUi9A93KbR6Rug?s=cl&p=a&mlu=1&amv=3&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="font-accent h-11 w-fit rounded-full border-2 border-brand-black bg-brand-purple px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-purple/90"
          >
            Join Community
          </Button>
        </div>

        <div className="order-1 md:order-2">
          <VisionImage
            src="/lh_vision31.png"
            alt="Hand holding a phone showing LocalHype with coins representing earnings"
            className="h-80 max-w-sm md:h-[28rem] md:max-w-md lg:h-[32rem] lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
