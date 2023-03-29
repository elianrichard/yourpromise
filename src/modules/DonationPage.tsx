import DonationPaper1 from "@/assets/svgs/DonationPaper1";
import DonationPaper2 from "@/assets/svgs/DonationPaper2";
import DonationPaper3 from "@/assets/svgs/DonationPaper3";
import DonationWallet from "@/assets/svgs/DonationWallet";
import { motion } from "framer-motion";

const DonationPage = () => {
  return (
    <div className="z-10 flex h-screen w-screen items-center justify-center pt-20">
      <div className="flex h-full w-full items-center justify-center">
        <motion.div
          className="relative mr-40 flex h-fit w-60 select-none flex-col items-center justify-center gap-5"
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
        >
          <div className="absolute top-1/2 left-1/2 -z-10 w-[450px] -translate-x-[50%] -translate-y-[50%]">
            <DonationPaper1 />
          </div>
          <p className="-rotate-[6deg] self-start font-serif text-xl font-bold text-black">
            Notes:
          </p>
          <p className="-rotate-[6deg] text-center font-serif text-lg leading-loose text-black">
            Contributions to your promise are{" "}
            <span className="bg-secondaryYellow px-2 font-bold">
              100% tax deductible.
            </span>
            The California State University, Northridge Foundation is a
            charitable organization 501 (c)(3) public benefit California
            Corporation.
          </p>
        </motion.div>
        <div className="flex h-full items-center justify-center">
          <motion.a
            className="w-[450px] cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", bounce: 0.6 },
            }}
            href="https://google.com"
            target={"_blank"}
          >
            <DonationWallet />
          </motion.a>
        </div>
        <div className="ml-40 flex h-full flex-col items-center justify-center">
          <motion.div
            className="relative flex h-80 w-40 select-none flex-col items-center justify-center gap-4 font-serif"
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
          >
            <div className="absolute -z-10 w-80">
              <DonationPaper3 />
            </div>
            <p className="-rotate-[8deg] self-start text-2xl font-bold text-mainPink">
              Attention!
            </p>
            <p className="-rotate-[8deg] text-center text-2xl leading-normal text-mainBlue">
              We are opening
              <br />
              donation!
            </p>
          </motion.div>
          <motion.a
            className="relative flex h-80 w-40 cursor-pointer flex-col items-center justify-center gap-6 font-serif"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", bounce: 0.6 },
            }}
            href="https://google.com"
            target={"_blank"}
          >
            <div className="absolute top-1/2 left-1/2 -z-10 w-80 -translate-y-[calc(50%+15px)] -translate-x-[calc(50%-20px)]">
              <DonationPaper2 />
            </div>
            <p className="rotate-[8deg] select-none self-start text-xl font-bold text-black">
              For International Donation
            </p>
            <p className="flex rotate-[8deg] flex-col items-center gap-2 text-center text-xl text-black">
              <span className="relative w-fit px-5 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:-rotate-[2deg] after:bg-mainYellow after:bg-opacity-90">
                https://engage.csun.edu/
              </span>
              <span className="relative w-fit px-5 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:rotate-[1deg] after:bg-mainYellow after:bg-opacity-90">
                your_promise_intl
              </span>
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default DonationPage;
