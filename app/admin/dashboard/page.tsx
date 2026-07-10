import Link from "next/link";

import { LogoutButton } from "@/components/admin/logout-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth/require-admin";
import { listCampaignForms } from "@/lib/forms/queries";
import { getPublicFormUrl } from "@/lib/forms/slug";

export default async function AdminDashboardPage() {
  const user = await requireAdmin();
  const forms = await listCampaignForms();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
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
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle className="font-heading text-xl">
              Campaign forms
            </CardTitle>
            <CardDescription>
              Create a Reel campaign signup form and share the link in WhatsApp.
            </CardDescription>
          </div>
          <Link
            href="/admin/forms/new"
            className="inline-flex h-9 items-center rounded-lg border-2 border-brand-black bg-brand-orange px-3 text-sm font-medium text-white shadow-brutal-sm hover:bg-brand-orange/90"
          >
            New form
          </Link>
        </CardHeader>
        <CardContent>
          {forms.length === 0 ? (
            <p className="font-sans text-sm text-brand-black/70">
              No forms yet. Create one to get a shareable link for your group.
            </p>
          ) : (
            <ul className="divide-y-2 divide-brand-black/10">
              {forms.map((form) => (
                <li
                  key={form.id}
                  className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0 space-y-1">
                    <Link
                      href={`/admin/forms/${form.id}`}
                      className="font-heading text-base font-semibold hover:underline"
                    >
                      {form.title}
                    </Link>
                    <p className="font-sans text-sm text-brand-black/70">
                      {form.business_name} · {form.response_count ?? 0}{" "}
                      response{(form.response_count ?? 0) === 1 ? "" : "s"} ·{" "}
                      {form.is_open ? "Open" : "Closed"}
                    </p>
                    <p className="truncate font-mono text-xs text-brand-black/50">
                      {getPublicFormUrl(form.slug)}
                    </p>
                  </div>
                  <Link
                    href={`/admin/forms/${form.id}`}
                    className="font-accent text-xs font-semibold uppercase tracking-[0.15em] hover:underline"
                  >
                    View
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
