import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/admin/logout-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isAdminEmail } from "@/lib/auth/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/admin");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    redirect("/admin");
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-bold">Admin Panel</h1>
          <p className="font-sans text-sm text-brand-black/70">
            Signed in as {user.email}
          </p>
        </div>
        <LogoutButton />
      </div>

      <Card className="border-2 border-brand-black bg-white shadow-brutal">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Coming soon</CardTitle>
          <CardDescription>
            Admin tools will be added here in a future update.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-sans text-sm text-brand-black/80">
            This is a protected placeholder dashboard. You can sign out above,
            and future features like review moderation will live on this page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
