import Link from "next/link";

import { CreateCampaignForm } from "@/components/admin/create-campaign-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth/require-admin";

export default async function NewCampaignFormPage() {
  await requireAdmin();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <div className="space-y-2">
        <Link
          href="/admin/dashboard"
          className="font-accent text-xs font-semibold uppercase tracking-[0.15em] hover:underline"
        >
          ← Back to dashboard
        </Link>
        <h1 className="font-heading text-3xl font-bold">New campaign form</h1>
        <p className="font-sans text-sm text-brand-black/70">
          Creates a Reel campaign signup form with a shareable public link.
        </p>
      </div>

      <Card className="border-2 border-brand-black bg-white shadow-brutal">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Form details</CardTitle>
          <CardDescription>
            Fields are fixed for Reel campaigns. You only set the campaign info.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateCampaignForm />
        </CardContent>
      </Card>
    </div>
  );
}
