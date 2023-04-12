import Image from "next/image";
import { motion } from "framer-motion";

import DonationPaper1 from "@/assets/svgs/DonationPaper1";
import DonationPaper2 from "@/assets/svgs/DonationPaper2";
import DonationPaper3 from "@/assets/svgs/DonationPaper3";
import DonationWallet2 from "@/assets/svgs/DonationWallet2";

import GunFlowerImg from "@/assets/images/gun-flower.png";

const DonationPage = () => {
  return (
    <div
      className="z-10 flex h-fit w-full items-center justify-center lg:h-screen lg:pt-20"
      id="donate"
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-between px-24 lg:flex-row xl:px-40">
        {/* LEFT DECORATION */}
        <motion.div
          className="relative hidden h-fit w-52 select-none flex-col items-center justify-center pt-2 lg:flex lg:pt-0 xl:w-60"
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
        >
          <div className="absolute top-1/2 left-1/2 -z-10 w-[360px] -translate-x-[50%] -translate-y-[calc(50%-1px)] xl:w-[450px] ">
            <DonationPaper1 />
            <div className="absolute -left-10 -bottom-20 -rotate-[10deg] xl:-bottom-12">
              <Image
                src={GunFlowerImg}
                alt="image of gun and flower"
                className="w-[300px] xl:w-[350px]"
              />
            </div>
          </div>
          <p className="-rotate-[6deg] self-start font-serif text-lg font-bold text-black xl:text-xl">
            Notes:
          </p>
          <p className="-rotate-[6deg] text-center font-serif text-base leading-loose text-black xl:text-lg">
            Contributions to your promise are{" "}
            <span className="bg-secondaryYellow px-2 font-bold">
              100% tax deductible.
            </span>
            The California State University, Northridge Foundation is a
            charitable organization 501 (c)(3) public benefit California
            Corporation.
          </p>
        </motion.div>
        {/* MIDDLE DECORATION */}
        <div className="flex h-full flex-col-reverse items-center justify-center gap-28 md:flex-row md:gap-20">
          <motion.div
            className="relative flex h-fit w-52 select-none flex-col items-center justify-center pt-2 sm:ml-10 lg:hidden"
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
          >
            <div className="absolute top-1/2 left-1/2 -z-10 w-[360px] -translate-x-[50%] -translate-y-[calc(50%-1px)] xl:w-[450px] ">
              <DonationPaper1 />
              <div className="absolute -left-10 -bottom-10 -rotate-[10deg] xl:-bottom-12">
                <Image
                  src={GunFlowerImg}
                  alt="image of gun and flower"
                  className="w-[250px] lg:w-[350px]"
                />
              </div>
            </div>
            <p className="-rotate-[6deg] self-start font-serif text-lg font-bold text-black xl:text-xl">
              Notes:
            </p>
            <p className="-rotate-[6deg] text-center font-serif text-base leading-loose text-black xl:text-lg">
              Contributions to your promise are{" "}
              <span className="bg-secondaryYellow px-2 font-bold">
                100% tax deductible.
              </span>
              The California State University, Northridge Foundation is a
              charitable organization 501 (c)(3) public benefit California
              Corporation.
            </p>
          </motion.div>
          <motion.a
            className="w-[350px] cursor-pointer sm:w-[450px] md:w-[300px] lg:w-[400px] 2xl:w-[475px]"
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", bounce: 0.6 },
            }}
            href="https://csunfunder.csun.edu/project/36190"
            target={"_blank"}
          >
            <DonationWallet2 />
          </motion.a>
        </div>
        {/* RIGHT DECORATION */}
        <div className="mb-10 flex h-full flex-col items-center justify-center gap-10 md:flex-row md:gap-40 lg:mb-0 lg:flex-col lg:gap-0">
          <motion.div
            className="relative flex h-48 w-36 select-none flex-col items-center justify-center gap-4 font-serif lg:h-80 xl:w-40"
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
          >
            <div className="absolute -z-10 w-64 xl:w-80">
              <DonationPaper3 />
            </div>
            <p className="-rotate-[8deg] self-start text-xl font-bold text-mainPink xl:text-2xl">
              Attention!
            </p>
            <p className="-rotate-[8deg] text-center text-xl leading-normal text-mainBlue xl:text-2xl">
              We are opening
              <br />
              donation!
            </p>
          </motion.div>
          <motion.a
            className="relative flex h-48 w-36 cursor-pointer flex-col items-center justify-center gap-3 font-serif lg:h-80 xl:w-40 xl:gap-6"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", bounce: 0.6 },
            }}
            href="https://engage.csun.edu/your_promise_intl"
            target={"_blank"}
          >
            <div className="absolute top-1/2 left-1/2 -z-10 w-64 -translate-y-[calc(50%+15px)] -translate-x-[calc(50%-20px)] xl:w-80">
              <DonationPaper2 />
            </div>
            <p className="rotate-[8deg] select-none self-start text-lg font-bold text-black xl:text-xl">
              For International Donation
            </p>
            <p className="flex rotate-[8deg] flex-col items-center gap-2 text-center text-lg text-black xl:text-xl">
              <span className="relative w-fit px-3 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:-rotate-[2deg] after:bg-mainYellow after:bg-opacity-90 xl:px-5">
                https://engage.csun.edu/
              </span>
              <span className="relative w-fit px-3 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-full after:rotate-[1deg] after:bg-mainYellow after:bg-opacity-90 xl:px-5">
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
