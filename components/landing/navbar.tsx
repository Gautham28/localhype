import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 md:top-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border-2 border-brand-black bg-white/90 px-4 py-2.5 shadow-brutal backdrop-blur-md md:gap-4 md:px-6 md:py-3"
      >
        <Logo />

        <div className="flex items-center gap-2 md:gap-3">
          <Button
            render={<Link href="#launch" />}
            className="font-accent h-11 rounded-full bg-brand-orange px-3 text-xs font-semibold uppercase tracking-wide text-white hover:bg-brand-orange/90 md:px-5 md:text-sm"
          >
            Launch Campaign
          </Button>
          <Button
            variant="outline"
            render={<Link href="#community" />}
            className="font-accent h-11 rounded-full border-2 border-brand-black bg-white px-3 text-xs font-semibold uppercase tracking-wide text-brand-black hover:bg-muted md:px-5 md:text-sm"
          >
            Join Community
          </Button>
        </div>
      </nav>
    </header>
  );
}
