import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { localeCodes } from "../lib/locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !localeCodes.includes(locale as any)) notFound();

  return {
    messages: (await import(`./${locale}.json`)).default,
  };
});
