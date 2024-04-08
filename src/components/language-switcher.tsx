"use client";
import { locales } from "@/lib/locales";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = locales.find((loc) => loc.code === e.target.value);
    if (!selectedLocale) return;
    document.cookie = `NEXT_LOCALE=${selectedLocale?.code}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div>
      <select value={locale} onChange={switchLocale}>
        {locales.map((loc) => (
          <option key={loc.code} value={loc.code}>
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
}
