import SectionTitle from "@/components/sectionTitle";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Home");

  const projects = Object.keys(t.raw("MyProjects"));

  return (
    <div className="flex flex-col">
      <SectionTitle>{t("Projects")}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-5 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-bold text-[#3b3d41]">{project}</p>
            <p className="text-sm text-[#3b3d41] leading-6">
              {t(`MyProjects.${project}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
