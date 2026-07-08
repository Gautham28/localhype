import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/login-form";
import { isAdminEmail } from "@/lib/auth/admin";
import { isSupabaseAuthConfigured } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type AdminPageProps = {
  searchParams: Promise<{ error?: string }>;
};

function getConfigError(): string | undefined {
  if (!isSupabaseAuthConfigured()) {
    return "Supabase auth is not configured. Add NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local and restart the dev server.";
  }

  return undefined;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const configError = getConfigError();
  const supabase = await createSupabaseServerClient();
  const params = await searchParams;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && isAdminEmail(user.email)) {
      redirect("/admin/dashboard");
    }
  }

  const errorMessage =
    configError ??
    (params.error === "unauthorized"
      ? "You are not authorized to access the admin panel."
      : undefined);

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-8">
      <div className="space-y-2 text-center">
        <h1 className="font-heading text-3xl font-bold">Admin Login</h1>
        <p className="font-sans text-sm text-brand-black/70">
          Sign in with your admin credentials.
        </p>
      </div>
      <LoginForm initialError={errorMessage} disableSubmit={!!configError} />
    </div>
  );
}
