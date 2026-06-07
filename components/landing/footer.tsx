"use client";

import Link from "next/link";
import { createLucideIcon, Mail, MessageCircle } from "lucide-react";
import { GetInTouchButton } from "@/components/landing/contact-modal";
import { Logo } from "@/components/landing/logo";

const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }],
]);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/localhype.india/",
    icon: Instagram,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:localhype.goa@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919405061349",
    icon: MessageCircle,
    external: true,
  },
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
          <Logo imageClassName="brightness-0 invert" />

          <nav aria-label="Social links" className="flex items-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-white/80 transition-colors hover:text-white"
              >
                <Icon className="size-6" strokeWidth={1.75} />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
