import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <div className="max-w-screen md:max-w-7xl p-10 mt-10 mx-auto flex flex-col gap-3">
      <h1 className="font-bold text-4xl">{t("unfortunately")}</h1>

      <p>{t("inTheMeantime")}</p>

      <div className="mt-3">
        <Link href="/">
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 border-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            <a>{t("returnToHomepage")}</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
