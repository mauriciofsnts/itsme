import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/sectionTitle";

const Info = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col-reverse md:flex-row  gap-5 mt-10">
      {/* TODO: find pictures :) */}
      <div className="mt-10 flex flex-1 flex-row gap-5 justify-start h-full hidden">
        <div className="self-start">
          <Image
            alt="Just an placeholder"
            src="https://placehold.co/237x260"
            width="237"
            height="260"
            className="rounded-lg"
          />
        </div>

        <div className="self-end h-max">
          <Image
            alt="Just an placeholder"
            src="https://placehold.co/266x386"
            width="266"
            height="386"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex-1">
        <SectionTitle>{t('info')}</SectionTitle>

        <p className="text-sm text-[#3b3d41] leading-6 mt-5">
          {t("InfoParagraph1")}
        </p>
        <br />
        <p className="text-sm text-[#3b3d41] leading-6">
          {t("InfoParagraph2")}
        </p>
        <br />
        <p className="text-sm text-[#3b3d41] leading-6">
          {t("InfoParagraph3")}
        </p>
      </div>
    </div>
  );
};

export default Info;
