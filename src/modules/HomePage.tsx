import { type MutableRefObject } from "react";
import HomeDeco from "@/components/HomeDeco";
import {
  type AnimationControls,
  motion,
  type Variants,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";

interface Props {
  animateControl: AnimationControls;
  homeRef: MutableRefObject<HTMLDivElement>;
}

const HomePage = ({ animateControl, homeRef }: Props) => {
  const containerVar: Variants = {
    show: {
      opacity: 1,
      transition: { staggerChildren: 1.25, delayChildren: 1 },
    },
  };
  const childrenVar: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { bounce: 0, duration: 0.5 } },
  };

  const { scrollYProgress: useContainerScroll } = useScroll({
    target: homeRef,
    offset: ["start", "end center"],
    smooth: 1,
  });
  const useSpringedOpacity = useSpring(
    useTransform(useContainerScroll, [0, 0.2, 100000], [1, 0, 0])
  );

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate={animateControl}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="pointer-events-none z-0 flex h-screen w-full select-none flex-col items-center justify-center gap-10 overflow-hidden px-2 sm:px-14"
      ref={homeRef}
      style={{ opacity: useSpringedOpacity }}
      id="home"
    >
      <HomeDeco />
      <motion.h2
        variants={childrenVar}
        className="text-sm font-light uppercase tracking-[0.3em] sm:text-base lg:text-lg"
      >
        A CSUN CTVA Thesis Film
      </motion.h2>
      <motion.h1
        variants={childrenVar}
        className="font-serif text-5xl uppercase sm:text-7xl lg:text-[90px]"
      >
        Your Promise
      </motion.h1>
      <motion.h2
        variants={childrenVar}
        className="text-center font-serif text-base font-light tracking-widest sm:text-lg lg:text-xl"
      >
        Directed by Haoqian &quot;Eric&quot; He & Ricardo Medina
      </motion.h2>
    </motion.div>
  );
};
export default HomePage;
