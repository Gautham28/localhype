import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#launch" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "mailto:hello@localhype.com" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-orange text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28">
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Ready to bring the hype?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Whether you&apos;re a local business or a community member — your city
          is waiting.
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Button
            render={<Link href="#launch" />}
            className="font-accent h-11 rounded-full border-2 border-brand-black bg-brand-lime px-8 text-sm font-semibold uppercase tracking-wide text-brand-black hover:bg-brand-lime/90"
          >
            Launch Campaign
          </Button>
          <Button
            variant="outline"
            render={<Link href="#community" />}
            className="font-accent h-11 rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
          >
            Join Community
          </Button>
        </div>
      </div>

      <div className="border-t-2 border-brand-black/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between">
          <Logo imageClassName="brightness-0 invert" />

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-accent text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="font-accent text-xs font-semibold uppercase tracking-wide text-white/70">
            © {new Date().getFullYear()} LocalHype
          </p>
        </div>
      </div>
    </footer>
  );
}
