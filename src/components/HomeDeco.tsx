import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

import BalloonKid from "@/assets/images/kid-balloon.png";
import FlowerBox from "@/assets/images/flower.png";

const HomeDeco = () => {
  const baloonKidControl = useAnimationControls();
  return (
    <div className="fixed top-0 left-0 -z-10 h-screen w-screen">
      <div className="absolute top-0 left-0 h-full w-full bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-10" />
      <motion.div
        initial={{ top: "100%" }}
        className="absolute -right-10 lg:-right-20"
        animate={{ top: "40px" }}
        transition={{
          ease: "circOut",
          duration: 3,
        }}
        onAnimationComplete={() => {
          void baloonKidControl.start({ y: 40 });
        }}
      >
        <motion.div
          initial={{ y: 0 }}
          transition={{
            ease: "easeInOut",
            repeatType: "mirror",
            repeat: Infinity,
            duration: 2,
          }}
          animate={baloonKidControl}
        >
          <Image
            src={BalloonKid}
            alt="kid floating with a balloon"
            className="w-[250px] sm:w-[300px] lg:w-[400px] xl:w-[500px]"
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 5 }}
      >
        <Image
          src={FlowerBox}
          alt="flower and gun in a box"
          className="sm:[300px] absolute left-0 bottom-0 w-[250px] lg:w-[400px] xl:w-[500px]"
          priority
        />
      </motion.div>
    </div>
  );
};
export default HomeDeco;
