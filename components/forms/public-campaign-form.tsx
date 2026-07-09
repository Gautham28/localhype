"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { REEL_CAMPAIGN_FIELDS } from "@/lib/forms/constants";

const fieldClass =
  "font-sans w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:shadow-brutal-sm";

const labelClass =
  "font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black";

type FormStatus = "idle" | "loading" | "success" | "error";

type PublicCampaignFormProps = {
  slug: string;
  businessName: string;
};

export function PublicCampaignForm({
  slug,
  businessName,
}: PublicCampaignFormProps) {
  const [values, setValues] = useState({
    fullName: "",
    instagramHandle: "",
    phone: "",
    city: "",
    availability: "",
    contentExperience: "",
    notes: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(key: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`/api/forms/${slug}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to submit");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border-2 border-brand-black bg-brand-lime/30 p-6 text-center">
        <h2 className="font-heading text-2xl font-bold">You&apos;re in!</h2>
        <p className="mt-2 text-sm text-brand-black/80">
          Thanks for signing up for {businessName}. We&apos;ll reach out on
          WhatsApp if you&apos;re selected.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {REEL_CAMPAIGN_FIELDS.map((field) => {
        const key = field.key as keyof typeof values;
        const commonProps = {
          id: field.key,
          className: fieldClass,
          required: field.required,
          placeholder: field.placeholder,
          value: values[key],
          onChange: (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => updateField(key, event.target.value),
        };

        return (
          <div key={field.key} className="space-y-2">
            <label className={labelClass} htmlFor={field.key}>
              {field.label}
              {field.required ? "" : " (optional)"}
            </label>
            {field.type === "textarea" ? (
              <textarea
                {...commonProps}
                className={`${fieldClass} min-h-24 resize-y`}
              />
            ) : (
              <input {...commonProps} type={field.type} />
            )}
          </div>
        );
      })}

      {status === "error" && errorMessage ? (
        <p className="rounded-lg border-2 border-brand-black bg-brand-orange/10 px-3 py-2 text-sm">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-11 w-full border-2 border-brand-black bg-brand-orange text-white shadow-brutal-sm hover:bg-brand-orange/90"
      >
        {status === "loading" ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
