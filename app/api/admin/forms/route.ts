import { NextResponse } from "next/server";

import { isAdminEmail } from "@/lib/auth/admin";
import { createCampaignForm, listCampaignForms } from "@/lib/forms/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";

async function requireAdminUser() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    return null;
  }

  return user;
}

export async function GET() {
  const user = await requireAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const forms = await listCampaignForms();
  return NextResponse.json({ forms });
}

export async function POST(request: Request) {
  const user = await requireAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    title?: string;
    businessName?: string;
    description?: string;
  };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = await createCampaignForm({
    title: body.title ?? "",
    businessName: body.businessName ?? "",
    description: body.description,
  });

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ form: result.form }, { status: 201 });
}
