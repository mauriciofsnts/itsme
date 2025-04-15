import StackingCards, { Projects } from "@/components/stacking-card";
import { HyperText } from "@/components/hyper-text";
import { Typography } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  const projects: Projects[] = [
    {
      title: "Omnia",
      description: t("projects.omnia.description"),
      imageUrl: "/pexels-expect-best-79873-351265.jpg",
      link: "/projects/omnia",
      color: "#fff",
    },
    {
      title: "Squarefox",
      description: t("projects.squarefox.description"),
      imageUrl: "/red-fox-vulpes-vulpes-european-forest.jpg",
      link: "/projects/omnia",
      color: "#fff",
    },
    {
      title: "Hermes",
      description: t("projects.hermes.description"),
      imageUrl: "/pexels-ijonrobles-2388936.jpg",
      link: "/projects/omnia",
      color: "#fff",
    },
    {
      title: "Vulcano",
      description: t("projects.vulcano.description"),
      imageUrl: "/volcanic-eruption-natural-disaster.jpg",
      link: "/projects/omnia",
      color: "#fff",
    },
  ];

  return (
    <div className="w-full max-w-7xl flex flex-col gap-14 px-0 p-5 sm:px-6 lg:px-0">
      <section className="flex flex-col justify-between p-6 sm:p-10 mt-0 md:mt-16 gap-10 sm:gap-16">
        <Typography
          variant="h1"
          className="max-w-[720px] text-4xl tracking-wide font-bold lg:text-6xl"
        >
          {t("home.title")}
        </Typography>

        <div className="flex flex-col md:flex-row gap-10 md:gap-32 items-start">
          <div className="flex flex-col gap-10">
            <Typography
              variant="h3"
              className="font-semibold tracking-wide text-stone-400 text-lg"
            >
              {t.rich("home.experience", {
                b: (v) => (
                  <span className="text-gray-50 tracking-wide">{v}</span>
                ),
              })}
            </Typography>

            <Typography
              variant="h3"
              className="font-semibold tracking-wide text-stone-400 text-lg"
            >
              {t.rich("home.specialized", {
                b: (v) => (
                  <span className="text-gray-50 tracking-wide">{v}</span>
                ),
              })}
            </Typography>
          </div>

          <Typography
            variant="h3"
            className="font-semibold tracking-wider text-stone-400 text-lg"
          >
            {t.rich("home.functions", {
              b: (v) => <span className="text-gray-50 tracking-wide">{v}</span>,
            })}
          </Typography>
        </div>
      </section>

      <StackingCards projects={projects} />

      <section className="flex flex-col justify-between p-10 sm:p-10 gap-8 sm:gap-10">
        <Typography variant="h3">{t("home.randomToughts")}</Typography>

        <div>
          {[
            t("projects.keycloak.title"),
            t("projects.omnia.title"),
            t("projects.squarefox.title"),
          ].map((v) => (
            <div
              className="flex flex-col sm:flex-row md:py-0 py-3 w-full justify-between text-stone-500 select-none cursor-pointer"
              key={v}
            >
              <Typography variant="h4">{v}</Typography>
              <HyperText className="text-lg">{t("home.soon")}</HyperText>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
