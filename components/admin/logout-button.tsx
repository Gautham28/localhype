"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);

    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isLoading}
      onClick={handleLogout}
      className="border-2 border-brand-black bg-white shadow-brutal-sm hover:bg-brand-lime/40"
    >
      {isLoading ? "Signing out..." : "Sign out"}
    </Button>
  );
}
