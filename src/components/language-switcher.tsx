"use client";

import { locales, defaultLocale } from "@/lib/locales";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (!locales.some((loc) => loc.code === newLocale)) return;

    const localePrefix = `/${locale}`;
    const pathWithoutLocale = pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length) || "/"
      : pathname;

    const localizedPath =
      newLocale === defaultLocale
        ? pathWithoutLocale
        : `/${newLocale}${pathWithoutLocale}`;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(localizedPath);
  };

  return (
    <select
      value={locale}
      onChange={switchLocale}
      className="bg-white dark:bg-zinc-800 border outline-none border-gray-300 dark:border-zinc-900 text-gray-800 dark:text-white shadow-lg text-sm rounded-lg block w-full p-2"
    >
      {locales.map((loc) => (
        <option key={loc.code} value={loc.code}>
          {loc.name}
        </option>
      ))}
    </select>
  );
}
