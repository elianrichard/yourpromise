import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

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
import GoalsTitleLines from "@/assets/svgs/lines/GoalTitleLine";

const GoalsPage = () => {
  return (
    <div className="z-10 flex w-screen items-center justify-center px-20 pt-20 font-serif text-black">
      <div className="relative grid min-h-[550px] w-full grid-cols-2 gap-x-4 bg-mainCream px-20 py-14">
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
        <div className="my-5 flex flex-col items-start justify-center gap-12 text-2xl leading-loose">
          <div className="relative mt-2 -rotate-[7deg] text-5xl">
            <div className="absolute left-0 -z-10 w-60 translate-y-4 -translate-x-5 text-mainPink">
              <GoalsTitleLines />
            </div>
            <p>Our Goal</p>
          </div>
          <p className="pl-10">
            Our goal is to{" "}
            <span className="bg-mainYellow/80 px-2">raise $35,000</span> to fund
            the production of this film, from{" "}
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
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-between gap-5">
          <div className="relative -translate-y-4 rotate-[3deg] bg-mainSage px-10 py-3 text-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
            <div className="absolute top-0 left-0 w-14 -translate-x-[50%] -translate-y-[calc(50%-7px)] -rotate-[15deg] text-mainPink drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
              <LoveIcon />
            </div>
            <div className="absolute bottom-0 right-0 w-10 translate-x-[50%] translate-y-[50%] rotate-[25deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
              <CircleIcon />
            </div>
            Your Donations will be used for the following:
          </div>
          <div className="grid h-fit w-full flex-1 grid-cols-3">
            <GoalsCard additionalClass="bg-mainBlue -rotate-[10deg] translate-y-5">
              <div className="absolute top-0 right-0 w-12 translate-x-[50%] -translate-y-[50%] rotate-[25deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <LoveIcon />
              </div>
              <div className="absolute bottom-0 left-0 w-10 -translate-x-[50%] translate-y-[50%] rotate-[25deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals1 />
            </GoalsCard>
            <GoalsCard additionalClass="bg-mainPink rotate-[14deg] translate-x-4 -translate-y-2">
              <div className="absolute top-0 left-1/2 w-10 -translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-mainYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals2 />
            </GoalsCard>
            <GoalsCard additionalClass="bg-mainPink translate-y-8 -rotate-[5deg] translate-x-4">
              <div className="absolute top-0 right-0 w-12 translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <StarIcon />
              </div>
              <Goals3 />
            </GoalsCard>
            <GoalsCard additionalClass="bg-mainYellow translate-y-12 rotate-[10deg] translate-x-8">
              <div className="absolute top-0 left-0 w-12 -translate-x-[50%] -translate-y-[50%] rotate-[15deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals4 />
            </GoalsCard>
            <GoalsCard
              additionalClass="bg-mainYellow translate-y-2 -rotate-[5deg] translate-x-5"
              padding={"p-9"}
            >
              <div className="absolute top-0 right-0 w-14 translate-x-[50%] -translate-y-[50%] rotate-[20deg] text-secondaryYellow drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <TriangleIcon />
              </div>
              <div className="absolute bottom-0 left-0 w-12 -translate-x-[50%] translate-y-[50%] rotate-[25deg] text-mainSage drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
                <CircleIcon />
              </div>
              <Goals5 />
            </GoalsCard>
            <GoalsCard additionalClass="bg-mainBlue translate-y-16 rotate-[8deg]">
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

const GoalsCard = ({
  children,
  additionalClass,
  padding,
}: PropsWithChildren<{ additionalClass: string; padding?: string }>) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{
        scale: 1.05,
        transition: { ease: "easeOut", duration: 0.2 },
      }}
    >
      <div
        className={`relative flex h-32 w-32 items-center justify-center rounded-lg border-8 border-solid border-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ${
          padding || "p-7"
        } ${additionalClass}`}
      >
        {children}
      </div>
    </motion.div>
  );
};
