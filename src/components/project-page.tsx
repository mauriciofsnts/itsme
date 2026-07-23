import { Typography } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

type ProjectPageProps = {
  projectKey: "omnia" | "squarefox" | "hermes" | "vulcano";
};

export async function ProjectPage({ projectKey }: ProjectPageProps) {
  const t = await getTranslations(`projects.${projectKey}`);

  return (
    <div className="w-full max-w-7xl flex flex-col gap-8 p-6 sm:p-10">
      <Typography variant="h1">{t("title")}</Typography>
      <Typography variant="lead">{t("description")}</Typography>
    </div>
  );
}
