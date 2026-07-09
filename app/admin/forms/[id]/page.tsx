import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CopyFormLinkButton,
  ToggleFormOpenButton,
} from "@/components/admin/form-actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { requireAdmin } from "@/lib/auth/require-admin";
import {
  getCampaignFormById,
  getCampaignFormResponses,
} from "@/lib/forms/queries";
import { getPublicFormUrl } from "@/lib/forms/slug";

type FormDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CampaignFormDetailPage({
  params,
}: FormDetailPageProps) {
  await requireAdmin();
  const { id } = await params;

  const form = await getCampaignFormById(id);
  if (!form) {
    notFound();
  }

  const responses = await getCampaignFormResponses(form.id);
  const publicUrl = getPublicFormUrl(form.slug);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <div className="space-y-2">
        <Link
          href="/admin/dashboard"
          className="font-accent text-xs font-semibold uppercase tracking-[0.15em] hover:underline"
        >
          ← Back to dashboard
        </Link>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="font-heading text-3xl font-bold">{form.title}</h1>
            <p className="font-sans text-sm text-brand-black/70">
              {form.business_name} · {form.is_open ? "Open" : "Closed"} ·{" "}
              {responses.length} response{responses.length === 1 ? "" : "s"}
            </p>
          </div>
          <ToggleFormOpenButton formId={form.id} isOpen={form.is_open} />
        </div>
      </div>

      <Card className="border-2 border-brand-black bg-white shadow-brutal">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Share link</CardTitle>
          <CardDescription>
            Copy this and send it in your WhatsApp group.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <code className="min-w-0 flex-1 break-all rounded-lg border-2 border-brand-black bg-brand-lime/20 px-3 py-2 font-mono text-sm">
            {publicUrl}
          </code>
          <CopyFormLinkButton url={publicUrl} />
          <Link
            href={`/f/${form.slug}`}
            target="_blank"
            className="inline-flex h-8 items-center rounded-lg border-2 border-brand-black bg-white px-3 text-sm font-medium shadow-brutal-sm hover:bg-brand-lime/40"
          >
            Open
          </Link>
        </CardContent>
      </Card>

      <Card className="border-2 border-brand-black bg-white shadow-brutal">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Responses</CardTitle>
          <CardDescription>
            People who filled the form for this campaign.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {responses.length === 0 ? (
            <p className="font-sans text-sm text-brand-black/70">
              No responses yet. Share the link to start collecting signups.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-brand-black font-accent text-xs uppercase tracking-[0.15em]">
                    <th className="py-2 pr-3 font-semibold">Name</th>
                    <th className="py-2 pr-3 font-semibold">Instagram</th>
                    <th className="py-2 pr-3 font-semibold">Phone</th>
                    <th className="py-2 pr-3 font-semibold">City</th>
                    <th className="py-2 pr-3 font-semibold">Availability</th>
                    <th className="py-2 pr-3 font-semibold">Experience</th>
                    <th className="py-2 font-semibold">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {responses.map((response) => (
                    <tr
                      key={response.id}
                      className="border-b border-brand-black/10 align-top"
                    >
                      <td className="py-3 pr-3 font-medium">
                        {response.full_name}
                        {response.notes ? (
                          <p className="mt-1 text-xs font-normal text-brand-black/60">
                            {response.notes}
                          </p>
                        ) : null}
                      </td>
                      <td className="py-3 pr-3">@{response.instagram_handle}</td>
                      <td className="py-3 pr-3">{response.phone}</td>
                      <td className="py-3 pr-3">{response.city}</td>
                      <td className="py-3 pr-3">{response.availability}</td>
                      <td className="py-3 pr-3">
                        {response.content_experience || "—"}
                      </td>
                      <td className="py-3 whitespace-nowrap text-brand-black/60">
                        {new Date(response.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
