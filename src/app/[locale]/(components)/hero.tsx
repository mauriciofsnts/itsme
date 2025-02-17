import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import localFont from "next/font/local";
import Image from "next/image";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

function hashString(s: string) {
  let hash = 0;
  if (s.length === 0) return hash;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash;
}

const Hero = () => {
  const t = useTranslations("Home");
  const roles = Object.keys(t.raw("Roles"));

  function getDailyRandomRole() {
    const today = new Date().toISOString().slice(0, 10);
    const hash = hashString(today);
    const index = Math.abs(hash) % roles.length;
    return t(`Roles.${roles[index]}`);
  }

  const todayRole = getDailyRandomRole();

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <h1
          className={cn(
            "text-8xl md:text-9xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-heading",
            headingFont.className
          )}
        >
          Mauricio Ferraz
        </h1>

        <p className="text-xl md:text-2xl font-medium text-gray-500 dark:text-white/80 mt-2">
          {t("Role", { todayRole })}
        </p>
      </div>

      <div className="hidden flex-1 xl:flex flex-row flex-nowrap justify-end gap-5 bg-gradient-radial mt-20 md:mt-0 ">
        <Image
          alt="Hero"
          src="/hero-image.svg"
          width="400"
          height="225"
          className="rounded-lg"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Hero;
