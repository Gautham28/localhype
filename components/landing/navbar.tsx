"use client";

import { Logo } from "@/components/landing/logo";
import { GetInTouchButton } from "@/components/landing/contact-modal";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 w-full px-4 md:top-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border-2 border-brand-black bg-white/90 px-4 py-2.5 shadow-brutal backdrop-blur-md md:gap-4 md:px-6 md:py-3"
      >
        <Logo />
        <GetInTouchButton />
      </nav>
    </header>
  );
}
