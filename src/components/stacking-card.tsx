"use client";
import { useRef } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useTransitionRouter } from "next-view-transitions";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export type Projects = {
  title: string;
  description: string;
  link: string;
  color: string;
  imageUrl: string;
};

export default function StackingCards({
  projects,
}: {
  projects: Projects[];
}): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <div ref={container} className="p-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              imageUrl={project.imageUrl}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  imageUrl: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  imageUrl,
}) => {
  const t = useTranslations("home");
  const router = useTransitionRouter();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[5%] h-[450px] w-[100%] rounded-md p-10 origin-top`}
      >
        <h2 className="text-2xl text-left font-semibold text-black">{title}</h2>

        <div className={`flex md:flex-row flex-col-reverse h-full mt-5 gap-5`}>
          <div className={`w-[100%] md:w-[40%] relative top-[10%]`}>
            <p className="text-sm text-black">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <Button variant="link" className="cursor-pointer text-black px-0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(url, { onTransitionReady: slideInOut });
                  }}
                >
                  {t("seeMore")}
                </a>
                <MoveRight />
              </Button>
            </span>
          </div>

          <div
            className={`relative w-[100%] md:w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src={imageUrl} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
      {
        opacity: 0,
        transform: "translate(-100px, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translate(100px, 0)",
      },
      {
        opacity: 1,
        transform: "translate(0, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
