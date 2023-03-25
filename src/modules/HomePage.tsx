import { type AnimationControls, motion, type Variants } from "framer-motion";

interface Props {
  animateControl: AnimationControls;
}

const HomePage = ({ animateControl }: Props) => {
  const containerVar: Variants = {
    show: {
      transition: { staggerChildren: 1.5, delayChildren: 0.3 },
    },
  };
  const childrenVar: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const childrenTransition = { bounce: 0, duration: 0.5 };

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate={animateControl}
      className="flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden px-14"
    >
      <motion.h2
        variants={childrenVar}
        transition={childrenTransition}
        className="text-lg font-light uppercase tracking-[0.3em]"
      >
        A CSUN CTVA Thesis Film
      </motion.h2>
      <motion.h1
        variants={childrenVar}
        transition={childrenTransition}
        className="font-serif text-[90px] uppercase"
      >
        Your Promise
      </motion.h1>
      <motion.h2
        variants={childrenVar}
        transition={childrenTransition}
        className="font-serif text-xl font-light tracking-widest"
      >
        Directed by Haoqian &quot;Eric&quot; He & Ricardo Medina
      </motion.h2>
    </motion.div>
  );
};
export default HomePage;
