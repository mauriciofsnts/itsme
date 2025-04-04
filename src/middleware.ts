import { locales, defaultLocale } from "@/lib/locales";
import createMiddleware from "next-intl/middleware";
import { type NextRequest, type NextResponse } from "next/server";

const localesCodes = locales.map((locale) => locale.code);

const nextIntlMiddleware = createMiddleware({
  locales: localesCodes,
  defaultLocale,
  localePrefix: "never",
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
