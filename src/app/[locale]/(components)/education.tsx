import Image from "next/image";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

import SectionTitle from "@/components/section-title";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const Education = () => {
  const t = useTranslations("Home");

  return (
    <div>
      <SectionTitle>{t("education")}</SectionTitle>

      <div className="flex flex-col md:flex-row  gap-5 mt-5">
        <div className="flex justify-center flex-col flex-1 w-full">
          <h3
            className={cn(
              "font-medium tracking-tight text-3xl text-[#3b3d41] ",
              headingFont.className
            )}
          >
            {t("Impacta University of Technology")}
          </h3>

          <h3
            className={cn(
              "font-medium tracking-tight text-2xl text-[#A0A5AC] ",
              headingFont.className
            )}
          >
            {t("Postgraduate in Digital Solutions Architecture")}
          </h3>

          <p className="text-xs mt-2 text-[#A0A5AC]">2023 - 2024</p>
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <Image
            alt="Impacta Tecnologia"
            src="/university.svg"
            width="300"
            height="200"
            className="rounded-lg"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
