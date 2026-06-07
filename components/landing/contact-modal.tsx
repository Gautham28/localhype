"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { X } from "lucide-react";
import { PillBadge } from "@/components/landing/pill-badge";
import { ContactForm } from "@/components/landing/contact-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactModalContextValue = {
  open: () => void;
  close: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-brand-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-brand-black bg-white p-6 shadow-brutal-lg md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border-2 border-brand-black bg-white text-brand-black transition-colors hover:bg-muted"
        >
          <X className="size-4" strokeWidth={2.5} />
        </button>

        <div className="mb-6 pr-8">
          <PillBadge className="mb-4">For Local Businesses</PillBadge>
          <h2
            id="contact-modal-title"
            className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-brand-black md:text-3xl"
          >
            Get in Touch
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            Tell us about your business and we&apos;ll help you launch your first
            LocalHype campaign.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ContactModalContext.Provider
      value={{ open: handleOpen, close: handleClose }}
    >
      {children}
      <ContactModal open={open} onClose={handleClose} />
    </ContactModalContext.Provider>
  );
}

type GetInTouchButtonProps = {
  variant?: "navbar" | "footer";
  className?: string;
};

export function GetInTouchButton({
  variant = "navbar",
  className,
}: GetInTouchButtonProps) {
  const { open } = useContactModal();

  return (
    <Button
      type="button"
      onClick={open}
      className={cn(
        "font-accent h-11 rounded-full text-xs font-semibold uppercase tracking-wide md:text-sm",
        variant === "navbar" &&
          "bg-brand-orange px-5 text-white hover:bg-brand-orange/90 md:px-6",
        variant === "footer" &&
          "border-2 border-brand-black bg-brand-lime px-8 text-brand-black hover:bg-brand-lime/90",
        className
      )}
    >
      Get in Touch
    </Button>
  );
}

export function ContactNavLink({ className }: { className?: string }) {
  const { open } = useContactModal();

  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "font-accent text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white",
        className
      )}
    >
      Contact
    </button>
  );
}
