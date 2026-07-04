import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarRatingDisplay } from "@/components/reviews/star-rating";
import type { Review } from "@/lib/reviews/constants";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  review: Review;
};

function formatReviewDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function ReviewCard({ review }: ReviewCardProps) {
  const title =
    review.review_type === "client" && review.business_name
      ? review.business_name
      : review.reviewer_name;

  const subtitle =
    review.review_type === "client" && review.business_name
      ? review.reviewer_name
      : "Creator";

  return (
    <Card className="h-full rounded-2xl border-2 border-brand-black bg-white shadow-brutal ring-0">
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="font-heading text-xl font-extrabold text-brand-black md:text-2xl">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm text-brand-black/70">
              {subtitle}
            </CardDescription>
          </div>
          <StarRatingDisplay rating={review.rating} />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {review.comment ? (
          <p className="text-base leading-relaxed text-brand-black">
            &ldquo;{review.comment}&rdquo;
          </p>
        ) : null}

        {review.highlights.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {review.highlights.map((highlight) => (
              <li
                key={highlight}
                className={cn(
                  "font-accent rounded-full border-2 border-brand-black bg-brand-lime px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-black"
                )}
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-black/50">
          {formatReviewDate(review.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}
