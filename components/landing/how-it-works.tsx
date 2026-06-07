import { PillBadge } from "@/components/landing/pill-badge";
import { HowItWorksStep } from "@/components/landing/how-it-works-step";

const steps = [
  {
    number: "01",
    title: "Choose Your Package",
    description:
      "Pick the right size campaign for your goals , from testing the waters to full city coverage.",
  },
  {
    number: "02",
    title: "Campaign Setup",
    description:
      "We finalize the creative brief, offer, timing, hashtags, tags, and location strategy together. Most campaigns are ready in under 10 minutes.",
  },
  {
    number: "03",
    title: "Activation",
    description:
      "We post the campaign to our community. Interested locals apply. We carefully shortlist the best matches and brief them with detailed posting instructions.",
  },
  {
    number: "04",
    title: "Hype",
    description:
      "Selected community members post authentic Instagram Stories (with your provided creatives + their personal touch). This creates multiple trusted touchpoints across the city.",
  },
  {
    number: "05",
    title: "Insights & Payouts",
    description:
      "After 24 hours, participants submit story screenshots + view counts. We compile a clear report for you and pay every community member promptly.",
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
            Five steps from campaign to citywide buzz.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A simple vertical flow built for local businesses that want real
            results.
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
