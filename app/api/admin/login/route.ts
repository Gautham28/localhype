import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { isAdminEmail } from "@/lib/auth/admin";
import {
  getSupabaseAnonKey,
  getSupabaseUrl,
  isSupabaseAuthConfigured,
} from "@/lib/supabase/env";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  if (!isSupabaseAuthConfigured()) {
    return NextResponse.json(
      {
        error:
          "Supabase auth is not configured. Add NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local and restart the dev server.",
      },
      { status: 500 }
    );
  }

  const url = getSupabaseUrl()!;
  const anonKey = getSupabaseAnonKey()!;

  let body: LoginPayload;

  try {
    body = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = body.email?.trim();
  const password = body.password;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options)
        );
      },
    },
  });

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401 }
    );
  }

  if (!isAdminEmail(data.user.email)) {
    await supabase.auth.signOut();
    return NextResponse.json(
      { error: "You are not authorized to access the admin panel." },
      { status: 403 }
    );
  }

  return NextResponse.json({ success: true });
}
