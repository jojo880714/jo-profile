import { NextResponse, type NextRequest } from "next/server";

/**
 * Forward the current pathname to server components via a request
 * header. Lets the root layout pick `<html lang>` based on the URL
 * (Next.js App Router can't pass route params into the root layout
 * directly).
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Run on every page route except static assets and Next.js internals.
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
