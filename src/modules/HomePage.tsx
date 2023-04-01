import { useRef } from "react";
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
}

const HomePage = ({ animateControl }: Props) => {
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

  const containerRef = useRef(null);
  const { scrollYProgress: useContainerScroll } = useScroll({
    target: containerRef,
    offset: ["start", "end center"],
    smooth: 1,
  });
  const useSpringedOpacity = useSpring(
    useTransform(useContainerScroll, [0, 0.2], [1, 0])
  );

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate={animateControl}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="pointer-events-none flex h-screen w-full select-none flex-col items-center justify-center gap-8 overflow-hidden px-14"
      ref={containerRef}
      style={{ opacity: useSpringedOpacity }}
    >
      <HomeDeco />
      <motion.h2
        variants={childrenVar}
        className="text-lg font-light uppercase tracking-[0.3em]"
      >
        A CSUN CTVA Thesis Film
      </motion.h2>
      <motion.h1
        variants={childrenVar}
        className="font-serif text-[90px] uppercase"
      >
        Your Promise
      </motion.h1>
      <motion.h2
        variants={childrenVar}
        className="font-serif text-xl font-light tracking-widest"
      >
        Directed by Haoqian &quot;Eric&quot; He & Ricardo Medina
      </motion.h2>
    </motion.div>
  );
};
export default HomePage;
