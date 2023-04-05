import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import config from "@/lib/config";
import useWindowSize from "@/lib/hooks/use-window-size";
import type { ReactNode } from "react";

export default function Home({ mySocials, myProjects }: { mySocials: ReactNode, myProjects: ReactNode }) {
  const { isDesktop } = useWindowSize();

  return (
    <>
      <motion.div
        className="stop-wrapping max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[0.03em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{config.title}</Balancer>
        </motion.h1>
        <motion.p
          className={`mt-6 text-center text-gray-500 md:text-xl ${
            isDesktop ? "stop-wrapping" : ""
          }`}
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {isDesktop ? config.aboutMe : <Balancer>{config.aboutMe}</Balancer>}
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-3"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {mySocials}
        </motion.div>
      </motion.div>
      {myProjects}
    </>
  );
}