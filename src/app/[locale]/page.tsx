import StackingCards from "@/components/stacking-card";
import { HyperText } from "@/components/hyper-text";
import { Typography } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  const projects = [
    {
      title: "Omnia",
      description: t("projects.omnia.description"),
      link: "/pexels-expect-best-79873-351265.jpg",
      color: "#fff",
    },
    {
      title: "Squarefox",
      description: t("projects.squarefox.description"),
      link: "/red-fox-vulpes-vulpes-european-forest.jpg",
      color: "#fff",
    },
    {
      title: "Hermes",
      description: t("projects.hermes.description"),
      link: "/pexels-ijonrobles-2388936.jpg",
      color: "#fff",
    },
    {
      title: "Vulcano",
      description: t("projects.vulcano.description"),
      link: "/volcanic-eruption-natural-disaster.jpg",
      color: "#fff",
    },
  ];

  return (
    <div className="w-full max-w-7xl flex flex-col gap-14">
      <section className="flex flex-col justify-between p-10 mt-14 gap-16">
        <Typography
          variant="h1"
          className="max-w-[720px] text-6xl lg:text-6xl tracking-wide font-bold"
        >
          {t("home.title")}
        </Typography>

        <div className="flex flex-row gap-32 items-start">
          <div className="flex flex-col gap-5">
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

      <section className="flex flex-col justify-between p-10 gap-10">
        <Typography variant="h3">{t("home.randomToughts")}</Typography>

        <div className="">
          {[
            t("projects.keycloak.title"),
            t("projects.omnia.title"),
            t("projects.squarefox.title"),
          ].map((v) => (
            <div
              className="flex w-full flex-row justify-between text-stone-500 select-none cursor-pointer"
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
