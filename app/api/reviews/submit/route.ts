import { NextResponse } from "next/server";
import {
  CLIENT_REVIEW_HIGHLIGHTS,
  CREATOR_REVIEW_HIGHLIGHTS,
  type ClientReviewHighlight,
  type CreatorReviewHighlight,
  type ReviewType,
} from "@/lib/reviews/constants";
import { submitPublicReview } from "@/lib/reviews/queries";

type SubmitPayload = {
  reviewType?: ReviewType;
  businessName?: string;
  reviewerName?: string;
  rating?: number;
  comment?: string;
  highlights?: string[];
};

function isValidHighlight(reviewType: ReviewType, highlight: string) {
  if (reviewType === "client") {
    return CLIENT_REVIEW_HIGHLIGHTS.includes(highlight as ClientReviewHighlight);
  }

  return CREATOR_REVIEW_HIGHLIGHTS.includes(
    highlight as CreatorReviewHighlight
  );
}

export async function POST(request: Request) {
  let body: SubmitPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const reviewType = body.reviewType;
  const businessName = body.businessName?.trim();
  const reviewerName = body.reviewerName?.trim();
  const rating = body.rating;
  const comment = body.comment?.trim() ?? "";
  const highlights = body.highlights ?? [];

  if (
    (reviewType !== "client" && reviewType !== "creator") ||
    !reviewerName ||
    !rating
  ) {
    return NextResponse.json(
      { error: "Review type, name, and rating are required" },
      { status: 400 }
    );
  }

  if (reviewType === "client" && !businessName) {
    return NextResponse.json(
      { error: "Business name is required" },
      { status: 400 }
    );
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "Rating must be between 1 and 5 stars" },
      { status: 400 }
    );
  }

  const validHighlights = highlights.filter((highlight) =>
    isValidHighlight(reviewType, highlight)
  );

  const result = await submitPublicReview({
    reviewType,
    businessName,
    reviewerName,
    rating,
    comment,
    highlights: validHighlights,
  });

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
