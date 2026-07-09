import { NextResponse } from "next/server";

import { submitCampaignFormResponse } from "@/lib/forms/queries";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  const { slug } = await context.params;

  let body: {
    fullName?: string;
    instagramHandle?: string;
    phone?: string;
    city?: string;
    availability?: string;
    contentExperience?: string;
    notes?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = await submitCampaignFormResponse(slug, {
    fullName: body.fullName ?? "",
    instagramHandle: body.instagramHandle ?? "",
    phone: body.phone ?? "",
    city: body.city ?? "",
    availability: body.availability ?? "",
    contentExperience: body.contentExperience,
    notes: body.notes,
  });

  if ("error" in result) {
    const status =
      result.error === "Form not found"
        ? 404
        : result.error.includes("no longer accepting")
          ? 403
          : 400;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ success: true });
}
