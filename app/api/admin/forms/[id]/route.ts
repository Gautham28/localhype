import { NextResponse } from "next/server";

import { isAdminEmail } from "@/lib/auth/admin";
import { setCampaignFormOpen } from "@/lib/forms/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

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

export async function PATCH(request: Request, context: RouteContext) {
  const user = await requireAdminUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  let body: { isOpen?: boolean };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body.isOpen !== "boolean") {
    return NextResponse.json(
      { error: "isOpen must be a boolean" },
      { status: 400 }
    );
  }

  const result = await setCampaignFormOpen(id, body.isOpen);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
