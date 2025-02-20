import StackingCards from "@/components/stacking-card";
import { Typography } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="w-full max-w-7xl flex flex-col gap-10">
      <section className="flex flex-col justify-between p-10 gap-16">
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

      <section className="flex flex-col justify-between p-10 gap-10">
        <StackingCards />
      </section>

      <section className="flex flex-col justify-between p-10 gap-10">
        <Typography variant="h3">Random Toughts</Typography>

        <div className="">
          {[
            "Keycloak Customization: A Step-by-Step Guide to Themes and Interfaces",
            "Connect Everything: Introducing Omnia",
            "Elevate Your Online Presence with Squarefox's Stunning Designs",
          ].map((v) => (
            <Typography variant="h4" key={v}>
              {v}
            </Typography>
          ))}
        </div>
      </section>
    </div>
  );
}
