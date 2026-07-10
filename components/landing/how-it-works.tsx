import { PillBadge } from "@/components/landing/pill-badge";
import { HowItWorksStep } from "@/components/landing/how-it-works-step";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Goals",
    description:
      "Share what you want to grow: awareness, footfall, menu launches, or a full content push. We'll recommend the right mix of campaigns and collabs.",
  },
  {
    number: "02",
    title: "We Plan the Mix",
    description:
      "Story campaigns, food or barter collabs, photoshoots, reels, or ongoing content. We build a clear brief, timeline, and creator brief tailored to your brand.",
  },
  {
    number: "03",
    title: "Match with Creators",
    description:
      "We shortlist local creators who fit your vibe, audience, and neighborhood. You approve the lineup before anything goes live.",
  },
  {
    number: "04",
    title: "Create & Launch",
    description:
      "Creators shoot, post, and collab with your brand. We coordinate briefs, posting, and delivery so every story, reel, and shoot lands on brand.",
  },
  {
    number: "05",
    title: "Insights & Results",
    description:
      "You get proof of work, performance highlights, and clear next steps, so you know what worked and how to keep the momentum going.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-hero-pattern px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <PillBadge className="mb-6 md:mb-8">How It Works</PillBadge>
          <h2 className="font-heading max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            From brief to buzz in five simple steps.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A clear process for local businesses that want marketing that feels
            human, and gets results.
          </p>
        </div>

        <ol className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-8 bottom-8 left-1/2 hidden w-0 -translate-x-1/2 border-l-2 border-dashed border-brand-black/20 md:block"
          />
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
