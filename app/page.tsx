import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
