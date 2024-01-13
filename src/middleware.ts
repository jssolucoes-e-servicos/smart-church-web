import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("elb0")?.value;
  const userCookie = request.cookies.get("elb1")?.value;
  if (request.nextUrl.pathname.startsWith("/acesso")) {
    if (token && userCookie) {
      return NextResponse.redirect(new URL("/erp", request.url));
    }
    return null;
  }
  if (request.nextUrl.pathname.startsWith("/erp")) {
    if (!token || !userCookie) {
      return NextResponse.redirect(new URL("/acesso", request.url));
    }
  }
  return null;
}

export const config = {
  matcher: ["/acesso", "/erp/:path*"],
};