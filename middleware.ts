/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextResponse } from "next/server";
import { authConfig } from "./auth";
import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt";

const API_KEY = process.env.API_KEY || '7ap_c994d4734213dc3918c8d142c6b7801f74b431c';
const WHITELIST_URL = ["http://www.pycho.tech"];

const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth(async req => {
  const isLoggedIn = !!req.auth;
  const session = await getToken({ req, secret: process.env.AUTH_SECRET });

  const origin = req.headers.get('Access-Control-Allow-Origin') || "";
  const fetchSite = req.headers.get("Sec-Fetch-Site");
  const isSameOrigin = fetchSite === "same-origin" || fetchSite === "same-site";

  // API KEY Validation only on Api routes
  if (req.nextUrl.pathname.includes("/api") && !isSameOrigin && !WHITELIST_URL.includes(origin)) {
    const apiKey = req.headers.get('X-Api-Key');

    if (apiKey !== API_KEY) {
      return new NextResponse(
        JSON.stringify({ message: 'Forbidden: Invalid API Key' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Only USER can access favourite page
  if (req.nextUrl.pathname.includes("/favourite") && (session?.role === "ADMIN" || !isLoggedIn)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Only ADMIN can access admin page
  if (req.nextUrl.pathname.includes("/admin") && (session?.role === "USER" || !isLoggedIn)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return null;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};