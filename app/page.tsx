import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Vision } from "@/components/landing/vision";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main>
        <Hero />
        <Vision />
      </main>
    </div>
  );
}
