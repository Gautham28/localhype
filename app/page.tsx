import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Vision } from "@/components/landing/vision";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <HowItWorks />
        <Pricing />
      </main>
    </div>
  );
}
