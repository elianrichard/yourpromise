import Image from "next/image";

import OurCrewImg from "@/assets/images/ourcrew.png";

import StarIcon from "@/assets/svgs/icons/StarIcon";
import AtomIcon from "@/assets/svgs/icons/AtomIcon";
import FormulaIcon1 from "@/assets/svgs/icons/FormulaIcon1";
import MusicNoteIcon from "@/assets/svgs/icons/MusicNoteIcon";
import PencilIcon from "@/assets/svgs/icons/PencilIcon";
import PlaneTrailsIcon from "@/assets/svgs/icons/PlaneTrailsIcon";
import TrophyIcon from "@/assets/svgs/icons/TrophyIcon";
import CalendarIcon from "@/assets/svgs/icons/CalendarIcon";
import { motion } from "framer-motion";

const Decoration = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <div className="absolute top-0 left-0 w-20 -translate-y-32 -rotate-[20deg] text-mainSage md:w-28 lg:-translate-x-36 lg:-translate-y-10">
        <TrophyIcon />
      </div>
      <div className="absolute top-0 left-0 hidden w-3 -translate-y-32 translate-x-40 rotate-[25deg] text-mainSage sm:block md:w-5 lg:top-1/2 lg:-translate-x-20 lg:-translate-y-10">
        <PencilIcon />
      </div>
      <div className="absolute bottom-0 left-0 w-20 translate-x-3 translate-y-28 rotate-[0deg] md:w-24 lg:-translate-x-40  lg:-translate-y-0">
        <FormulaIcon1 strokeColor="white" />
      </div>
      <div className="absolute top-0 right-0 w-20 -translate-x-0 -translate-y-24 -rotate-[20deg] text-mainLime md:w-24 lg:translate-x-36 lg:-translate-y-10">
        <AtomIcon />
      </div>
      <div className="absolute bottom-0 right-1/2 w-16 translate-y-28 translate-x-10 rotate-[0deg] md:w-20 lg:top-1/2 lg:right-0 lg:translate-x-48 lg:-translate-y-10">
        <CalendarIcon strokeColor="#D0F4EA" />
      </div>
      <div className="absolute bottom-0 right-0 w-8 translate-y-28 -translate-x-8 rotate-[30deg] md:w-10 lg:translate-x-20 lg:-translate-y-0 lg:-rotate-[10deg]">
        <MusicNoteIcon strokeColor="#D0F4EA" />
      </div>
      <div className="absolute top-0 right-1/2 w-28 translate-x-20 -translate-y-32 -rotate-[10deg] text-white md:w-32">
        <PlaneTrailsIcon strokeColor="white" />
      </div>
    </div>
  );
};

const CrewPage = () => {
  return (
    <div
      className="relative flex h-fit max-w-full select-none items-center justify-center overflow-hidden py-40 px-4 sm:px-10 md:px-20"
      id="crew"
    >
      <div className="relative h-fit w-full rotate-[2deg] text-black md:aspect-[16/9] lg:w-[800px] xl:h-[550px] xl:w-[1000px] ">
        <Decoration />
        <motion.div
          className="relative flex h-full w-full flex-col bg-paleWhite px-5 pt-5 shadow-heavyBlack md:px-8 md:pt-8"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <div className="absolute top-0 left-1/2 z-10 h-10 w-60 -translate-x-1/2 -translate-y-1/2 -rotate-[1deg] bg-mainYellow opacity-80 shadow-lightBlack" />
          <div className="relative w-full flex-1 md:h-[300px]">
            <div className="absolute z-10 h-full w-full shadow-[inset_0px_4px_20px_rgba(0,0,0,0.5)]" />
            <Image
              src={OurCrewImg}
              alt="YourPromise crews image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-5 py-2 font-serif text-xl sm:text-2xl lg:text-4xl xl:min-h-[80px]">
            <div className="w-6 -translate-y-1 sm:w-8 lg:w-10">
              <StarIcon />
            </div>
            Our Crew
            <div className="w-6 -translate-y-1 sm:w-8 lg:w-10">
              <StarIcon />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default CrewPage;
