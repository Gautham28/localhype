import { PillBadge } from "@/components/landing/pill-badge";
import { ReviewCard } from "@/components/landing/review-card";
import { getPublishedReviews } from "@/lib/reviews/queries";
import type { ReviewType } from "@/lib/reviews/constants";

type ReviewSectionProps = {
  reviewType: ReviewType;
  badge: string;
  title: string;
  description: string;
  className?: string;
  id?: string;
};

async function ReviewSection({
  reviewType,
  badge,
  title,
  description,
  className,
  id,
}: ReviewSectionProps) {
  const reviews = await getPublishedReviews(reviewType);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <PillBadge className="mb-6 md:mb-8">{badge}</PillBadge>
          <h2 className="font-heading max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="-mx-4 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[85%] shrink-0 snap-center sm:w-[70%] md:w-auto"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function Reviews() {
  return (
    <>
      <ReviewSection
        id="reviews"
        reviewType="client"
        badge="Client Reviews"
        title="Trusted by local businesses."
        description="Real feedback from brands that have grown with LocalHype and our creators."
        className="bg-white px-4 py-20 md:py-28"
      />
      <ReviewSection
        reviewType="creator"
        badge="Creator Reviews"
        title="Loved by local creators."
        description="What creators say about collaborating with local brands through LocalHype."
        className="border-b-2 border-brand-black bg-white px-4 py-20 md:py-28"
      />
    </>
  );
}
