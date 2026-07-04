import { NextResponse } from "next/server";
import { getPublishedReviews } from "@/lib/reviews/queries";

export async function GET() {
  const reviews = await getPublishedReviews();
  return NextResponse.json({ reviews });
}
