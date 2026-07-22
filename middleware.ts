// ── Next.js Middleware ──
// Protects /dashboard routes. Phase 7: mock auth check
// Phase 8: validates session cookie / JWT

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protected routes
  if (pathname.startsWith("/dashboard")) {
    const hasSession = request.cookies.has("auth-session");

    if (!hasSession) {
      const response = NextResponse.next();
      response.cookies.set("auth-session", "mock", { path: "/", maxAge: 86400 });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
