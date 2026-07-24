import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Typography } from "@/components/ui/typography";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="w-full max-w-7xl flex flex-col gap-6 px-0 p-5 sm:px-6 lg:px-0 py-24 items-start">
      <Typography variant="h1" className="text-4xl font-bold lg:text-6xl">
        {t("title")}
      </Typography>
      <Typography variant="lead" className="text-stone-400">
        {t("description")}
      </Typography>
      <Link
        href="/"
        className="text-primary hover:text-gray-300 underline underline-offset-4 transition-colors"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
