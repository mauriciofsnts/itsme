import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { GoogleAnalytics } from "@next/third-parties/google";

import "../globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Ferraz - Full Stack Developer",
  description:
    "Welcome to my personal website, where you can explore my creative world through my portfolio, blog, and projects. Dive into my journey of design, development, and reflections as you browse through my creations. Join me on this journey of innovation and inspiration. Welcome aboard!",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = params;
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            storageKey="mrtz-theme"
            disableTransitionOnChange
          >
            <div className="flex flex-col md:flex-row overflow-hidden max-h-screen">
              <Sidebar />

              <div className="flex-grow overflow-auto">{children}</div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId={process.env.GTAG!} />
    </html>
  );
}
