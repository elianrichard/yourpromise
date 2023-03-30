import { type PropsWithChildren } from "react";

import Goals1 from "@/assets/svgs/goals/Goals1";
import Goals2 from "@/assets/svgs/goals/Goals2";
import Goals3 from "@/assets/svgs/goals/Goals3";
import Goals4 from "@/assets/svgs/goals/Goals4";
import Goals5 from "@/assets/svgs/goals/Goals5";
import Goals6 from "@/assets/svgs/goals/Goals6";

const GoalsPage = () => {
  return (
    <div className="z-10 flex h-screen w-screen items-center justify-center px-20 pt-20 font-serif text-black">
      <div className="grid min-h-fit w-full grid-cols-2 gap-x-5 bg-mainCream px-10 py-14">
        <div className="my-5 flex flex-col items-start justify-center gap-10 text-2xl leading-loose">
          <p className="mt-2 -rotate-[8deg] text-5xl">Our Goal</p>
          <p className="pl-10">
            Our goal is to raise $35,000 to fund the production of this film,
            from pre-production to post. Also, donations will help us submit the
            finished film to various festivals. We intend to showcase our film
            at various festivals. With your contributions, we can showcase our
            crew&apos;s abilities and potential as the next generation of
            filmmakers
          </p>
        </div>
        <div className="flex h-full w-full  flex-col items-center justify-between gap-5">
          <p className="text-3xl">
            Your Donations will be used for the following:
          </p>
          <div className="grid h-fit w-full flex-1 grid-cols-3">
            <GoalsCard bgColor="bg-mainBlue">
              <Goals1 />
            </GoalsCard>
            <GoalsCard bgColor="bg-mainPink">
              <Goals2 />
            </GoalsCard>
            <GoalsCard bgColor="bg-mainPink">
              <Goals3 />
            </GoalsCard>
            <GoalsCard bgColor="bg-mainYellow">
              <Goals4 />
            </GoalsCard>
            <GoalsCard bgColor="bg-mainYellow" padding={"p-9"}>
              <Goals5 />
            </GoalsCard>
            <GoalsCard bgColor="bg-mainBlue">
              <Goals6 />
            </GoalsCard>
          </div>
          <p className="text-2xl">and much more!</p>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;

const GoalsCard = ({
  children,
  bgColor,
  padding,
}: PropsWithChildren<{ bgColor: string; padding?: string }>) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex h-32 w-32 items-center justify-center rounded-lg border-8 border-solid border-white ${
          padding || "p-7"
        } shadow-[0px_4px_10px_rgba(0,0,0,0.25)] ${bgColor}`}
      >
        {children}
      </div>
    </div>
  );
};
