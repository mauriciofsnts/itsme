import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { siteMetadata } from "@/config/metadata";

import "../globals.css";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const font = Onest({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      type: "website",
      description,
    },
    twitter: {
      site: siteMetadata.siteUrl,
      title,
      card: "summary_large_image",
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  const gaId = process.env.GTAG;

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body className={cn(font.className, "dark:noise-bg")}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme={siteMetadata.theme}
              storageKey="mrtz-theme"
              disableTransitionOnChange
            >
              <div className="flex flex-col justify-center items-center">
                <Header />
                {children}
                <Footer />
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>

        {process.env.NODE_ENV === "production" && gaId && <GoogleAnalytics gaId={gaId} />}
      </html>
    </ViewTransitions>
  );
}
