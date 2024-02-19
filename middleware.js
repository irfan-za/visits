import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const pathname = req.nextUrl.pathname;
  // protecting routes
  const {
    data: { user },
  } = await supabaseMiddleware.auth.getUser();
  if (pathname === "/profile" && !user) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url.href);
  } else if (pathname.startsWith("/auth") && user) {
    return NextResponse.redirect(new URL("/profile", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/profile", "/auth/:path*"],
};
