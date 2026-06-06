import { PillBadge } from "@/components/landing/pill-badge";
import { HowItWorksStep } from "@/components/landing/how-it-works-step";

const steps = [
  {
    number: "01",
    title: "Choose Vibe",
    description:
      "Pick the campaign style, audience, and local energy you want to create — from soft launches to full-city buzz.",
  },
  {
    number: "02",
    title: "Setup",
    description:
      "Configure your offer, creative brief, and target neighborhoods. Most campaigns are live in under ten minutes.",
  },
  {
    number: "03",
    title: "Activation",
    description:
      "Community members discover your campaign and post authentic Instagram stories about your business.",
  },
  {
    number: "04",
    title: "Hype",
    description:
      "Stories stack up views and conversations. Real locals drive real foot traffic through trusted word-of-mouth.",
  },
  {
    number: "05",
    title: "Insights",
    description:
      "Track reach, engagement, and ROI in one dashboard — so you know exactly what is working.",
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
            results — not vanity metrics.
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
