import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { HyperText } from "@/components/hyper-text";
import StackingCards from "@/components/stacking-card";
import { Typography } from "@/components/ui/typography";
import { getProjects } from "@/data/projects";

const randomThoughts = [
  { key: "keycloak", href: "/blog/keycloak-personalizacao-temas" },
  { key: "omnia", href: null },
  { key: "squarefox", href: null },
] as const;

export default async function Home() {
  const t = await getTranslations();

  const projects = getProjects(t);

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
                b: (v) => <span className="text-gray-50 tracking-wide">{v}</span>,
              })}
            </Typography>

            <Typography
              variant="h3"
              className="font-semibold tracking-wide text-stone-400 text-lg"
            >
              {t.rich("home.specialized", {
                b: (v) => <span className="text-gray-50 tracking-wide">{v}</span>,
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
          {randomThoughts.map(({ key, href }) => {
            const title = t(`projects.${key}.title`);

            if (href) {
              return (
                <Link
                  href={href}
                  key={key}
                  className="flex flex-col sm:flex-row md:py-0 py-3 w-full justify-between text-stone-500 hover:text-stone-300 transition-colors"
                >
                  <Typography variant="h4">{title}</Typography>
                  <HyperText className="text-lg">{t("home.seeMore")}</HyperText>
                </Link>
              );
            }

            return (
              <div
                className="flex flex-col sm:flex-row md:py-0 py-3 w-full justify-between text-stone-500 select-none cursor-pointer"
                key={key}
              >
                <Typography variant="h4">{title}</Typography>
                <HyperText className="text-lg">{t("home.soon")}</HyperText>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
