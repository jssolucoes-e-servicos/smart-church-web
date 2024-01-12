import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("scp0")?.value;
  const userCookie = request.cookies.get("scp1")?.value;
  if (request.nextUrl.pathname.startsWith("/acesso")) {
    if (token && userCookie) {
      return NextResponse.redirect(new URL("/app", request.url));
    }
    return null;
  }
  if (request.nextUrl.pathname.startsWith("/app")) {
    if (!token || !userCookie) {
      return NextResponse.redirect(new URL("/acesso", request.url));
    }
    if(request.nextUrl.pathname.startsWith("/app/admin")) {
      const user = JSON.parse(userCookie);
      if (user?.rule !== "admin") {
        return NextResponse.redirect(new URL("/app", request.url));
      }
    }
  }
  return null;
}

export const config = {
  matcher: ["/acesso", "/app/:path*"],
};