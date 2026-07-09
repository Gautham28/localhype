"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type CopyFormLinkButtonProps = {
  url: string;
};

export function CopyFormLinkButton({ url }: CopyFormLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleCopy}
      className="border-2 border-brand-black bg-white shadow-brutal-sm hover:bg-brand-lime/40"
    >
      {copied ? "Copied!" : "Copy link"}
    </Button>
  );
}

type ToggleFormOpenButtonProps = {
  formId: string;
  isOpen: boolean;
};

export function ToggleFormOpenButton({
  formId,
  isOpen,
}: ToggleFormOpenButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleToggle() {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/admin/forms/${formId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isOpen: !isOpen }),
      });

      if (response.ok) {
        router.refresh();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isLoading}
      onClick={handleToggle}
      className="border-2 border-brand-black bg-white shadow-brutal-sm hover:bg-brand-lime/40"
    >
      {isLoading ? "Updating..." : isOpen ? "Close form" : "Reopen form"}
    </Button>
  );
}
