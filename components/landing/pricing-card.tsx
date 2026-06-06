import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

type PricingCardProps = {
  tier: PricingTier;
};

export function PricingCard({ tier }: PricingCardProps) {
  const { name, price, period, description, features, highlighted, badge } =
    tier;

  return (
    <Card
      className={cn(
        "h-full rounded-2xl border-2 border-brand-black shadow-brutal ring-0",
        highlighted
          ? "bg-brand-lime md:-translate-y-2"
          : "bg-white"
      )}
    >
      <CardHeader className="gap-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="font-heading text-2xl font-extrabold text-brand-black md:text-3xl">
            {name}
          </CardTitle>
          {badge && (
            <span className="font-accent shrink-0 rounded-full border-2 border-brand-black bg-brand-purple px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>
        <CardDescription className="text-base text-brand-black/70">
          {description}
        </CardDescription>
        <div className="flex items-baseline gap-1 pt-1">
          <span className="font-heading text-4xl font-extrabold text-brand-black md:text-5xl">
            {price}
          </span>
          <span className="font-accent text-sm font-semibold uppercase tracking-wide text-brand-black/60">
            {period}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm md:text-base">
              <Check
                className="mt-0.5 size-4 shrink-0 text-brand-purple"
                strokeWidth={3}
              />
              <span className="leading-snug text-brand-black">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto border-0 bg-transparent">
        <Button
          render={<Link href="#launch" />}
          className={cn(
            "font-accent h-11 w-full rounded-full border-2 border-brand-black text-sm font-semibold uppercase tracking-wide",
            highlighted
              ? "bg-brand-purple text-white hover:bg-brand-purple/90"
              : "bg-brand-orange text-white hover:bg-brand-orange/90"
          )}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
