"use client";

import Link from "next/link";
import { Logo } from "@/components/landing/logo";
import {
  ContactNavLink,
  GetInTouchButton,
} from "@/components/landing/contact-modal";

const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#launch" },
  { label: "Community", href: "#community" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-orange text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-28">
        <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Ready to bring the hype?
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Launch a campaign and turn local word-of-mouth into real results for
          your business.
        </p>
        <GetInTouchButton variant="footer" className="mt-8" />
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
            <ContactNavLink />
          </nav>

          <p className="font-accent text-xs font-semibold uppercase tracking-wide text-white/70">
            © {new Date().getFullYear()} LocalHype
          </p>
        </div>
      </div>
    </footer>
  );
}
