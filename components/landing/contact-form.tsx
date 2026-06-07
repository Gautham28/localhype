"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const fieldClass =
  "font-sans w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-brutal-sm";

const labelClass =
  "font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black";

const packages = [
  { value: "spark", label: "Spark", price: "₹2,000" },
  { value: "buzz", label: "Buzz", price: "₹3,500" },
  { value: "hype", label: "Hype", price: "₹6,000" },
  { value: "reel", label: "Reel Add-on", price: null },
  { value: "unsure", label: "Not sure yet", price: null },
] as const;

type ContactFormProps = {
  onSuccess?: () => void;
  formId?: string;
  showSubmit?: boolean;
  onStatusChange?: (status: FormStatus) => void;
};

export function ContactForm({
  onSuccess,
  formId = "contact-form",
  showSubmit = true,
  onStatusChange,
}: ContactFormProps) {
  const [businessName, setBusinessName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [packageChoice, setPackageChoice] = useState("");
  const [message, setMessage] = useState("");
  const [packageError, setPackageError] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!packageChoice) {
      setPackageError(true);
      return;
    }

    setPackageError(false);
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          name,
          email,
          package: packageChoice,
          message,
          audience: "business",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
      setBusinessName("");
      setName("");
      setEmail("");
      setPackageChoice("");
      setMessage("");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border-2 border-brand-black bg-brand-lime p-8 text-center">
        <p className="font-heading text-2xl font-extrabold text-brand-black">
          Message sent!
        </p>
        <p className="mt-3 text-base leading-relaxed text-brand-black/80">
          Thanks for reaching out. We&apos;ll be in touch about your campaign
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-business" className={labelClass}>
          Business Name
        </label>
        <input
          id="contact-business"
          name="businessName"
          type="text"
          required
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Your business name"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={labelClass}>
            Your Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contact name"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@business.com"
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={cn(labelClass, "mb-3 block")}>Select Package</legend>
        <div className="flex flex-wrap gap-2">
          {packages.map((pkg) => (
            <label
              key={pkg.value}
              className={cn(
                "font-accent cursor-pointer rounded-full border-2 border-brand-black px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide transition-colors md:px-4 md:text-sm",
                packageChoice === pkg.value
                  ? "bg-brand-purple text-white shadow-brutal-sm"
                  : "bg-white text-brand-black hover:bg-muted"
              )}
            >
              <input
                type="radio"
                name="package"
                value={pkg.value}
                checked={packageChoice === pkg.value}
                onChange={() => {
                  setPackageChoice(pkg.value);
                  setPackageError(false);
                }}
                className="sr-only"
              />
              <span className="block">{pkg.label}</span>
              {pkg.price && (
                <span
                  className={cn(
                    "mt-0.5 block text-[10px] font-bold tracking-wider",
                    packageChoice === pkg.value
                      ? "text-white/80"
                      : "text-brand-black/60"
                  )}
                >
                  {pkg.price}
                </span>
              )}
            </label>
          ))}
        </div>
        {packageError && (
          <p className="mt-2 text-sm font-medium text-brand-orange">
            Please select a package
          </p>
        )}
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClass}>
          Tell us about your campaign{" "}
          <span className="normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you looking to promote? Any goals or timelines?"
          className={cn(fieldClass, "min-h-20 resize-y md:min-h-28")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-orange">
          Something went wrong. Please try again or email hello@localhype.com
          directly.
        </p>
      )}

      {showSubmit && (
        <Button
          type="submit"
          disabled={status === "loading"}
          className="font-accent h-11 w-full rounded-full border-2 border-brand-black bg-brand-orange text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-orange/90 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      )}
    </form>
  );
}
