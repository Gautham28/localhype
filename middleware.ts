import { type NextRequest, NextResponse } from "next/server";

import { isAdminEmail } from "@/lib/auth/admin";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, response, user } = await updateSession(request);
  const pathname = request.nextUrl.pathname;
  const isLoginPage = pathname === "/admin";
  const isProtectedAdminRoute =
    pathname.startsWith("/admin/") && pathname !== "/admin";

  if (isProtectedAdminRoute && !user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (user && isProtectedAdminRoute && !isAdminEmail(user.email)) {
    if (supabase) {
      await supabase.auth.signOut();
    }

    const redirectUrl = new URL("/admin", request.url);
    redirectUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(redirectUrl);
  }

  if (user && isLoginPage && isAdminEmail(user.email)) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  if (user && isLoginPage && !isAdminEmail(user.email)) {
    if (supabase) {
      await supabase.auth.signOut();
    }

    const redirectUrl = new URL("/admin", request.url);
    redirectUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
