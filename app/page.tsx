import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Vision } from "@/components/landing/vision";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Reviews } from "@/components/landing/reviews";
import { Community } from "@/components/landing/community";
import { Footer } from "@/components/landing/footer";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
