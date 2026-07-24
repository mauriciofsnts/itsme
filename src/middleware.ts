import type { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "@/lib/locales";

const localesCodes = locales.map((locale) => locale.code);

const nextIntlMiddleware = createMiddleware({
  locales: localesCodes,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: true,
});

export function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
