import { NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/projects/quandoo", "/projects/att", "/projects/global-payments"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

  if (!isProtected) return NextResponse.next();

  const auth = request.cookies.get("portfolio-auth")?.value;
  if (auth === process.env.PORTFOLIO_PASSWORD) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/projects/:path*"],
};
