import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const headingFont = localFont({
  src: "../../../../public/font/SequelSansMediumDisp.woff2",
});

const Hero = () => {
  return (
    <div className="">
      <h1
        className={cn(
          "text-9xl font-extrabold select-none",
          headingFont.className
        )}
      >
        Mauricio Ferraz
      </h1>

      <TextGenerateEffect words="Front-end Developer" />
    </div>
  );
};

export default Hero;
