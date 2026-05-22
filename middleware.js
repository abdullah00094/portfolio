import { NextResponse } from "next/server";

const UNDER_CONSTRUCTION_PATH = "/under-construction";

function isAllowedPath(pathname) {
  if (pathname === UNDER_CONSTRUCTION_PATH) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/api")) return true;
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return true;
  return false;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url-pathname", pathname);

  if (process.env.SITE_LOCKED === "false") {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  if (isAllowedPath(pathname)) {
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = UNDER_CONSTRUCTION_PATH;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
