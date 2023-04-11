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
      <div className="absolute top-0 left-0 w-28 -translate-x-36 -translate-y-10 -rotate-[20deg] text-mainSage">
        <TrophyIcon />
      </div>
      <div className="absolute top-1/2 left-0  w-5 -translate-x-20 -translate-y-10 rotate-[25deg] text-mainSage">
        <PencilIcon />
      </div>
      <div className="absolute bottom-0 left-0 w-24 -translate-x-40 -translate-y-0  rotate-[0deg]">
        <FormulaIcon1 strokeColor="white" />
      </div>
      <div className="absolute top-0 right-0 w-24 translate-x-36 -translate-y-10 -rotate-[20deg] text-mainLime">
        <AtomIcon />
      </div>
      <div className="absolute top-1/2 right-0 w-20 translate-x-48 -translate-y-10 rotate-[0deg]">
        <CalendarIcon strokeColor="#D0F4EA" />
      </div>
      <div className="absolute bottom-0 right-0 w-10 translate-x-20 -translate-y-0 -rotate-[10deg]">
        <MusicNoteIcon strokeColor="#D0F4EA" />
      </div>
      <div className="absolute top-0 right-1/2 w-32 translate-x-20 -translate-y-32 -rotate-[10deg] text-white">
        <PlaneTrailsIcon strokeColor="white" />
      </div>
    </div>
  );
};

const CrewPage = () => {
  return (
    <div className="relative mt-20 flex h-screen w-full items-center justify-center pt-20">
      <div className="relative h-[550px] w-[1000px] rotate-[2deg] text-black ">
        <Decoration />
        <motion.div
          className="relative flex h-full w-full flex-col bg-paleWhite px-8 pt-8 shadow-heavyBlack"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          <div className="absolute top-0 left-1/2 z-10 h-10 w-60 -translate-x-1/2 -translate-y-1/2 -rotate-[1deg] bg-mainYellow opacity-80 shadow-lightBlack" />
          <div className="relative h-[300px] w-full flex-1">
            <div className="absolute z-10 h-full w-full shadow-[inset_0px_4px_20px_rgba(0,0,0,0.5)]" />
            <Image src={OurCrewImg} alt="YourPromise crews image" fill />
          </div>
          <div className="flex min-h-[80px] w-full items-center justify-center gap-5 font-serif text-4xl">
            <div className="w-10 -translate-y-1">
              <StarIcon />
            </div>
            Our Crew
            <div className="w-10 -translate-y-1">
              <StarIcon />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default CrewPage;
