import { NextResponse } from "next/server";

const VALID_PACKAGES = ["spark", "buzz", "hype", "reel", "unsure"] as const;

type ContactPayload = {
  businessName?: string;
  name?: string;
  email?: string;
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
  const selectedPackage = body.package?.trim();
  const message = body.message?.trim() ?? "";

  if (!businessName || !name || !email || !selectedPackage) {
    return NextResponse.json(
      { error: "Business name, contact name, email, and package are required" },
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

  console.log("Business contact submission:", {
    businessName,
    name,
    email,
    package: selectedPackage,
    message,
    audience: "business",
  });

  return NextResponse.json({ ok: true });
}
