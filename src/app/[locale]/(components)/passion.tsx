import { useTranslations } from "next-intl";
import localFont from "next/font/local";
import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const Passion = () => {
  const t = useTranslations("Home");

  const passionItems = Object.keys(t.raw("PassionItems"));

  return (
    <div className="flex flex-row">
      <div className="flex flex-1 items-start justify-center flex-col">
        <SectionTitle className="mb-5">{t("ThingsILoveToDo")}</SectionTitle>

        {passionItems.map((item, index) => (
          <h3
            key={index}
            className={cn(
              "font-medium tracking-tight text-2xl text-[#3b3d41] dark:text-white/80",
              headingFont.className
            )}
          >
            {t(`PassionItems.${item}`)}
          </h3>
        ))}
      </div>

      <div className="flex flex-1 items-end justify-center gap-3">
        <Image
          alt="Coding"
          src="/astronaut.svg"
          width="240"
          height="380"
          className="rounded-lg"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Passion;
