import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/section-title";

const Bio = () => {
  const t = useTranslations("Home");

  const items = [
    { date: "2019", description: t("BioItens.StartedCareer") },
    { date: "2020", description: t("BioItens.FrontEndDeveloper") },
    { date: "2021", description: t("BioItens.Graduated") },
    { date: "2022", description: t("BioItens.FullstackDeveloper") },
    { date: "2024", description: t("BioItens.Postgraduate") },
  ];

  return (
    <div>
      <SectionTitle>Bio</SectionTitle>

      <div className="flex flex-col gap-3 mt-5">
        {items.map((item, index) => (
          <div
            className="flex justify-start items-center flex-row gap-3"
            key={index}
          >
            <p className="font-bold text-sm dark:text-white/50 text-black/50">
              {item.date}
            </p>

            <p className="text-sm dark:text-white text-black">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;
