"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fieldClass =
  "font-sans w-full rounded-xl border-2 border-brand-black bg-white px-4 py-3 text-base text-brand-black outline-none transition-shadow focus:shadow-brutal-sm";

const labelClass =
  "font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black";

type LoginFormProps = {
  initialError?: string;
  disableSubmit?: boolean;
};

export function LoginForm({ initialError, disableSubmit = false }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(initialError ?? "");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Unable to sign in. Please try again.");
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setErrorMessage("Unable to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="border-2 border-brand-black bg-white shadow-brutal">
      <CardHeader>
        <CardTitle className="font-heading text-xl">Sign in</CardTitle>
        <CardDescription>
          Use the email and password from your Supabase admin account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className={labelClass} htmlFor="admin-email">
              Email
            </label>
            <input
              id="admin-email"
              className={fieldClass}
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="admin-password">
              Password
            </label>
            <input
              id="admin-password"
              className={fieldClass}
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {errorMessage ? (
            <p className="rounded-lg border-2 border-brand-black bg-brand-orange/10 px-3 py-2 text-sm text-brand-black">
              {errorMessage}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={isLoading || disableSubmit}
            className="h-11 w-full border-2 border-brand-black bg-brand-orange text-white shadow-brutal-sm hover:bg-brand-orange/90"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
