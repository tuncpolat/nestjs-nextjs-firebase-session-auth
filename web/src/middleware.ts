import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Config } from "@/services/config";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = request.cookies.get("session");

  if (!session || !session.value) {
    if (pathname.startsWith("/auth")) return NextResponse.next();
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  const response = await fetch(`${Config.baseUrl}/auth`, {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  if (response.status !== 200 && !pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  if (response.status === 200 && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};
