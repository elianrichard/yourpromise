import { type PropsWithChildren } from "react";
import { type Variants, motion, useAnimationControls } from "framer-motion";

import Goals1 from "@/assets/svgs/goals/Goals1";
import Goals2 from "@/assets/svgs/goals/Goals2";
import Goals3 from "@/assets/svgs/goals/Goals3";
import Goals4 from "@/assets/svgs/goals/Goals4";
import Goals5 from "@/assets/svgs/goals/Goals5";
import Goals6 from "@/assets/svgs/goals/Goals6";

import SignBoardHorizon from "@/assets/svgs/SignBoardHorizon";
import SignBoardVertical from "@/assets/svgs/SignBoardVertical";

import LoveIcon from "@/assets/svgs/icons/LoveIcon";
import CircleIcon from "@/assets/svgs/icons/CircleIcon";
import TriangleIcon from "@/assets/svgs/icons/TriangleIcon";
import StarIcon from "@/assets/svgs/icons/StarIcon";

import BubbleText from "@/assets/svgs/BubbleText";
import GoalsTitleLines from "@/assets/svgs/lines/GoalTitleLine";
import LightningIcon from "@/assets/svgs/icons/LightningIcon";
import TrophyIcon from "@/assets/svgs/icons/TrophyIcon";
import PlaneIcon from "@/assets/svgs/icons/PlaneIcon";
import PlanetIcon from "@/assets/svgs/icons/PlanetIcon";
import DoubleLoveIcon from "@/assets/svgs/icons/DoubleLoveIcon";

const GoalsCard = ({
  children,
  additionalClass,
  padding,
  textBubble,
  bubbleClasses,
}: PropsWithChildren<{
  additionalClass: string;
  padding?: string;
  textBubble: string;
  bubbleClasses: string;
}>) => {
  const bubbleTextVariants: Variants = {
    initial: { scale: 0 },
    show: { scale: 1 },
  };

  const bubbleAnimControl = useAnimationControls();

  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{
        scale: 1.05,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
      onMouseEnter={() => void bubbleAnimControl.start("show")}
      onMouseLeave={() => void bubbleAnimControl.start("initial")}
    >
      <div
        className={`relative flex h-32 w-32 items-center justify-center rounded-lg border-8 border-solid border-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ${
          padding || "p-7"
        } ${additionalClass}`}
      >
        <motion.div
          variants={bubbleTextVariants}
          initial="initial"
          animate={bubbleAnimControl}
          transition={{ ease: "easeOut", duration: 0.25 }}
          className={`pointer-events-none absolute z-40 flex aspect-square w-44 origin-bottom-right items-center justify-center px-4 ${bubbleClasses}`}
        >
          <p className="z-10 text-center">{textBubble}</p>
          <div className="absolute top-0 left-0 w-full translate-y-3">
            <BubbleText />
          </div>
        </motion.div>
        {children}
      </div>
    </motion.div>
  );
};

const GoalsPage = () => {
  return (
    <div className="z-10 flex w-screen items-center justify-center px-20 pt-20 font-serif text-black">
      <div className="relative grid min-h-[550px] w-full grid-cols-2 gap-x-4 bg-mainCream px-20 py-14">
        {/* DECORATION  */}
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="absolute bottom-[100%] left-0 h-fit w-full bg-black shadow-xl">
            <SignBoardHorizon />
          </div>
          <div className="absolute top-[100%] left-0 h-fit w-full bg-black shadow-xl">
            <SignBoardHorizon />
          </div>
          <div className="absolute top-0 left-0 h-full bg-black shadow-xl">
            <SignBoardVertical />
          </div>
          <div className="absolute top-0 right-0 h-full bg-black shadow-xl">
            <SignBoardVertical />
          </div>
          <div className="absolute top-0 left-1/2 w-28 -translate-x-40 translate-y-5 text-transparent">
            <PlaneIcon strokeColor="#1B92A7" />
          </div>
          <div className="absolute bottom-0 left-1/2 w-32 -translate-y-10 -translate-x-20 text-transparent">
            <PlanetIcon strokeColor="#E5C726" />
          </div>
          <div className="absolute top-0 left-1/2 w-20 translate-y-24 text-mainPink">
            <DoubleLoveIcon />
          </div>
        </div>
        {/* LEFT CONTENT */}
        <div className="my-5 flex flex-col items-start justify-center gap-12 text-2xl leading-loose">
          <div className="relative mt-2 -rotate-[7deg] text-5xl">
            <div className="absolute left-0 -z-10 w-60 translate-y-4 -translate-x-5 text-mainPink">
              <GoalsTitleLines />
            </div>
            <div className="absolute left-[100%] top-0 w-24 translate-x-12 -translate-y-4 rotate-[10deg] text-[#E5C726]">
              <TrophyIcon />
            </div>
            <p>Our Goal</p>
          </div>
          <div className="pl-10">
            Our goal is to{" "}
            <div className="relative inline-block bg-mainYellow/80 px-2">
              raise $35,000{" "}
              <span className="absolute right-0 top-0 w-12 translate-x-[calc(100%-10px)] -translate-y-[100%] text-transparent">
                <LightningIcon strokeColor="#FF9933" />
              </span>
            </div>{" "}
            to fund the production of this film, from{" "}
            <span className="bg-mainPink/80 px-2">pre-production to post.</span>{" "}
            Also, donations will help us submit the finished film to various
            festivals. We intend to showcase our{" "}
            <span className="bg-secondaryYellow/80 px-2">
              film at various festivals.
            </span>{" "}
            With your contributions, we can showcase our crew&apos;s abilities
            and potential as the{" "}
            <span className="bg-mainSage px-2">
              next generation of filmmakers.
            </span>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="flex h-full w-full flex-col items-center justify-between gap-5">
          {/* TITLE */}
          <div className="relative -translate-y-4 rotate-[3deg] bg-mainSage px-10 py-3 text-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 w-14 -translate-x-[50%] -translate-y-[calc(50%-7px)] -rotate-[15deg] text-mainPink drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
              <LoveIcon />
            </div>
            <div className="absolute bottom-0 right-0 w-10 translate-x-[50%] translate-y-[50%] rotate-[25deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
              <CircleIcon />
            </div>
            Your Donations will be used for the following:
          </div>
          {/* GOALS CARDS */}
          <div className="grid h-fit w-full flex-1 grid-cols-3">
            <GoalsCard
              additionalClass="bg-mainBlue -rotate-[10deg] translate-y-5"
              textBubble="Location (permits, insurance, transportation, etc.)"
              bubbleClasses="bottom-[calc(100%-30px)] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 right-0 w-12 translate-x-[50%] -translate-y-[50%] rotate-[25deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <LoveIcon />
              </div>
              <div className="absolute bottom-0 left-0 w-10 -translate-x-[50%] translate-y-[50%] rotate-[25deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals1 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainPink rotate-[14deg] translate-x-4 -translate-y-2"
              textBubble="Casting (casting director, talent, extras, studio teacher, etc.)"
              bubbleClasses="bottom-[25px] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 left-1/2 w-10 -translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-mainYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals2 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainPink translate-y-8 -rotate-[5deg] translate-x-4"
              textBubble="Rentals (camera, audio, grip and electric, expendables, etc.)"
              bubbleClasses="bottom-[calc(100%-30px)] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 right-0 w-12 translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <StarIcon />
              </div>
              <Goals3 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainYellow translate-y-12 rotate-[10deg] translate-x-8"
              textBubble="Art (production design, wardrobe, hair, makeup, etc.)"
              bubbleClasses="bottom-[30px] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 left-0 w-12 -translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals4 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainYellow translate-y-2 -rotate-[5deg] translate-x-5"
              padding={"p-9"}
              textBubble="Catering and Craft Services (to feed our hardworking cast and crew!)"
              bubbleClasses="bottom-[calc(100%-40px)] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 right-0 w-14 translate-x-[50%] -translate-y-[50%] rotate-[20deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <TriangleIcon />
              </div>
              <div className="absolute bottom-0 left-0 w-12 -translate-x-[50%] translate-y-[50%] rotate-[25deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals5 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainBlue translate-y-16 rotate-[8deg]"
              textBubble="COVID Enforcement (PPE, cleaning supplies, testing, etc.)"
              bubbleClasses="bottom-[calc(100%-60px)] right-[calc(100%-30px)]"
            >
              <div className="absolute top-0 right-0 w-12 translate-x-[50%] -translate-y-[50%] rotate-[25deg] text-mainYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <div className="absolute bottom-0 left-0 w-16 -translate-x-[50%] translate-y-[50%] rotate-[5deg] text-mainPink drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <LoveIcon />
              </div>
              <Goals6 />
            </GoalsCard>
          </div>
          <p className="translate-y-2 text-2xl">
            and{" "}
            <span className="relative after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[calc(100%+20px)] after:-translate-x-1/2 after:-rotate-2 after:rounded-full after:bg-mainPink">
              much more!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
