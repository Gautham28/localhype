import { createSupabaseAdmin } from "@/lib/supabase/server";
import type { Review, ReviewType } from "@/lib/reviews/constants";

export async function getPublishedReviews(
  reviewType?: ReviewType
): Promise<Review[]> {
  const supabase = createSupabaseAdmin();
  if (!supabase) return [];

  let query = supabase
    .from("reviews")
    .select(
      "id, review_type, business_name, reviewer_name, rating, comment, highlights, created_at"
    )
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (reviewType) {
    query = query.eq("review_type", reviewType);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Failed to fetch reviews:", error.message);
    return [];
  }

  return data ?? [];
}

type SubmitPublicReviewInput = {
  reviewType: ReviewType;
  businessName?: string;
  reviewerName: string;
  rating: number;
  comment: string;
  highlights: string[];
};

export async function submitPublicReview(
  input: SubmitPublicReviewInput
): Promise<{ ok: true } | { error: string }> {
  const supabase = createSupabaseAdmin();
  if (!supabase) {
    return { error: "Reviews are not configured" };
  }

  if (input.reviewType === "client" && !input.businessName?.trim()) {
    return { error: "Business name is required" };
  }

  const { error: reviewError } = await supabase.from("reviews").insert({
    review_type: input.reviewType,
    business_name:
      input.reviewType === "client" ? input.businessName?.trim() ?? "" : "",
    reviewer_name: input.reviewerName,
    rating: input.rating,
    comment: input.comment,
    highlights: input.highlights,
    published: true,
  });

  if (reviewError) {
    console.error("Failed to save review:", reviewError.message);
    return { error: "Failed to save review" };
  }

  return { ok: true };
}
