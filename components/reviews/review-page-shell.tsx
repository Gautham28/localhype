import { Logo } from "@/components/landing/logo";
import { ReviewForm } from "@/components/reviews/review-form";
import { REVIEW_FORM_COPY, type ReviewType } from "@/lib/reviews/constants";

type ReviewPageShellProps = {
  reviewType: ReviewType;
};

export function ReviewPageShell({ reviewType }: ReviewPageShellProps) {
  const copy = REVIEW_FORM_COPY[reviewType];

  return (
    <div className="flex min-h-full flex-col bg-white">
      <header className="border-b-2 border-brand-black px-4 py-5">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <Logo />
          <a
            href="/"
            className="font-accent text-xs font-semibold uppercase tracking-[0.15em] text-brand-black hover:underline"
          >
            Back to site
          </a>
        </div>
      </header>

      <main className="flex flex-1 items-center px-4 py-12 md:py-16">
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border-2 border-brand-black bg-white p-6 shadow-brutal md:p-8">
            <div className="mb-6">
              <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                {copy.badge}
              </p>
              <h1 className="font-heading mt-2 text-3xl font-extrabold tracking-tight text-brand-black md:text-4xl">
                {copy.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {copy.description}
              </p>
            </div>

            <ReviewForm reviewType={reviewType} />
          </div>
        </div>
      </main>
    </div>
  );
}
