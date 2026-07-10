import Link from "next/link";
import { notFound } from "next/navigation";

import { PublicCampaignForm } from "@/components/forms/public-campaign-form";
import { Logo } from "@/components/landing/logo";
import { getCampaignFormBySlug } from "@/lib/forms/queries";

type PublicFormPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PublicFormPage({ params }: PublicFormPageProps) {
  const { slug } = await params;
  const form = await getCampaignFormBySlug(slug);

  if (!form) {
    notFound();
  }

  return (
    <div className="flex min-h-full flex-col bg-white">
      <header className="border-b-2 border-brand-black px-4 py-5">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black hover:underline"
          >
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border-2 border-brand-black bg-white p-6 shadow-brutal md:p-8">
            <div className="mb-6">
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                Reel campaign
              </p>
              <h1 className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-brand-black md:text-4xl">
                {form.title}
              </h1>
              <p className="mt-2 font-sans text-sm font-medium text-brand-black">
                {form.business_name}
              </p>
              {form.description ? (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {form.description}
                </p>
              ) : null}
            </div>

            {form.is_open ? (
              <PublicCampaignForm
                slug={form.slug}
                businessName={form.business_name}
              />
            ) : (
              <div className="rounded-xl border-2 border-brand-black bg-brand-orange/10 p-6 text-center">
                <h2 className="font-heading text-xl font-bold">
                  Form closed
                </h2>
                <p className="mt-2 text-sm text-brand-black/80">
                  This campaign is no longer accepting signups.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
