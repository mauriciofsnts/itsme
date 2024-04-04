import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales: string[] = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./i18n/${locale}.json`)).default,
  };
});
