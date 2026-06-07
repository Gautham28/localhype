import { NextResponse } from "next/server";

const VALID_PACKAGES = ["spark", "buzz", "hype", "reel", "unsure"] as const;

type ContactPayload = {
  businessName?: string;
  name?: string;
  email?: string;
  phone?: string;
  package?: string;
  message?: string;
  audience?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const businessName = body.businessName?.trim();
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const selectedPackage = body.package?.trim();
  const message = body.message?.trim() ?? "";

  if (!businessName || !name || !email || !phone || !selectedPackage) {
    return NextResponse.json(
      {
        error:
          "Business name, contact name, email, contact number, and package are required",
      },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (
    !VALID_PACKAGES.includes(
      selectedPackage as (typeof VALID_PACKAGES)[number]
    )
  ) {
    return NextResponse.json({ error: "Invalid package selection" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL is not set");
    return NextResponse.json(
      { error: "Form is not configured" },
      { status: 500 }
    );
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      payload: JSON.stringify({
        businessName,
        name,
        email,
        phone,
        package: selectedPackage,
        message,
      }),
    }).toString(),
  });

  if (!sheetResponse.ok) {
    console.error("Google Sheets webhook failed:", await sheetResponse.text());
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
