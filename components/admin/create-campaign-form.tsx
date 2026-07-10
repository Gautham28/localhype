"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const fieldClass =
  "font-sans w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:shadow-brutal-sm";

const labelClass =
  "font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black";

export function CreateCampaignForm() {
  const router = useRouter();
  const [title, setTitle] = useState("Reel Campaign Signup");
  const [businessName, setBusinessName] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/admin/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, businessName, description }),
      });

      const data = (await response.json()) as {
        error?: string;
        form?: { id: string };
      };

      if (!response.ok || !data.form) {
        setErrorMessage(data.error ?? "Failed to create form");
        return;
      }

      router.push(`/admin/forms/${data.form.id}`);
      router.refresh();
    } catch {
      setErrorMessage("Failed to create form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className={labelClass} htmlFor="form-title">
          Form title
        </label>
        <input
          id="form-title"
          className={fieldClass}
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor="form-business">
          Business / campaign name
        </label>
        <input
          id="form-business"
          className={fieldClass}
          required
          placeholder="e.g. Cafe Bloom Reel Campaign"
          value={businessName}
          onChange={(event) => setBusinessName(event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass} htmlFor="form-description">
          Description (optional)
        </label>
        <textarea
          id="form-description"
          className={`${fieldClass} min-h-28 resize-y`}
          placeholder="Short note for creators about the shoot, payout, or deadline"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <p className="rounded-lg border-2 border-brand-black bg-brand-lime/20 px-3 py-2 text-sm text-brand-black">
        Uses the fixed Reel campaign fields: name, Instagram, phone, city,
        availability, experience, and notes.
      </p>

      {errorMessage ? (
        <p className="rounded-lg border-2 border-brand-black bg-brand-orange/10 px-3 py-2 text-sm">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 border-2 border-brand-black bg-brand-orange text-white shadow-brutal-sm hover:bg-brand-orange/90"
      >
        {isLoading ? "Creating..." : "Create form & get link"}
      </Button>
    </form>
  );
}
