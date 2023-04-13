import { motion } from "framer-motion";
import { type MutableRefObject, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

import MerchBubble1 from "@/assets/svgs/MerchBubble1";
import Merch1Img from "@/assets/images/merch/merch-1.png";
import Merch2Img from "@/assets/images/merch/merch-2.png";
import Merch3Img from "@/assets/images/merch/merch-3.png";

import EggIcon from "@/assets/svgs/icons/fun/EggIcon";
import FlowerIcon from "@/assets/svgs/icons/fun/FlowerIcon";
import TrophyIcon from "@/assets/svgs/icons/TrophyIcon";
import AtomIcon from "@/assets/svgs/icons/AtomIcon";
import CalendarIcon from "@/assets/svgs/icons/CalendarIcon";
import PlanetIcon from "@/assets/svgs/icons/PlanetIcon";
import PlaneIcon from "@/assets/svgs/icons/PlaneIcon";

const MerchCard = ({ images }: { images: Array<StaticImageData> }) => {
  const [imgNumber, setImgNumber] = useState<number>(0);
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef() as MutableRefObject<ReturnType<typeof setInterval>>;

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (start) {
      tick.current = setInterval(
        () => setImgNumber((imgNumber) => imgNumber + 1),
        1000
      );
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  }, [start]);

  return (
    <motion.div
      className="relative z-0 h-[200px] w-full select-none bg-mainPink xl:h-full"
      whileHover={{ scale: 1.5, backgroundColor: "#FF9933", zIndex: 100 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      onHoverStart={() => {
        setImgNumber((imgNumber) => imgNumber + 1);
        setStart(true);
      }}
      onHoverEnd={() => {
        setStart(false);
        setImgNumber(0);
      }}
    >
      <div className="absolute z-10 h-full w-full" />
      <div className="h-full w-full overflow-hidden p-1">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={images[imgNumber % images.length] || ""}
            alt="merch img"
            className="absolute h-full w-full object-cover"
          />
          <div className="absolute right-0 bottom-0 flex gap-1 pr-2 pb-2">
            {images.map((_el, i) => (
              <div
                key={i}
                className={`aspect-square w-3 rounded-full border-2 border-solid border-mainPink ${
                  i === imgNumber % images.length
                    ? "bg-mainYellow"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MerchPage = () => {
  const MerchImgLists = [
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
    [Merch1Img, Merch2Img, Merch3Img],
  ];

  return (
    <div
      className="flex h-fit w-full items-center justify-center overflow-x-hidden px-5 py-32 sm:px-10 md:px-20"
      id="merch"
    >
      <div className="relative w-full max-w-[1500px] bg-mainPink p-5 text-mainPink shadow-heavyBlack">
        <div className="relative z-0 h-full w-full bg-mainSage">
          {/* DECORATION */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full">
            <div
              className="absolute top-0 left-0 h-10 w-96 -translate-x-[calc(50%-100px)] -translate-y-[calc(50%-30px)] -rotate-[30deg] bg-white opacity-60 shadow-lightBlack md:h-20
          "
            />
            <div
              className="absolute bottom-0 right-0 h-10 w-96 translate-x-[calc(50%-100px)] translate-y-[calc(50%-30px)] -rotate-[30deg] bg-white opacity-60 shadow-lightBlack md:h-20
            "
            />
          </div>
          <div className="absolute top-0 left-0 -z-10 hidden h-full w-full lg:block">
            <div className="absolute bottom-0 left-0 w-20 translate-x-96 -translate-y-10 -rotate-[20deg] text-mainPink">
              <TrophyIcon />
            </div>
            <div className="absolute top-1/2 left-1/2  w-20 -translate-x-60 -translate-y-20 rotate-[10deg] text-mainPink xl:-translate-y-36">
              <PlanetIcon strokeColor={"#FF729F"} />
            </div>
            <div className="absolute bottom-0 left-0 w-32 translate-x-40 -translate-y-10  rotate-[0deg]">
              <PlaneIcon strokeColor="#FF729F" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 -translate-x-40 -translate-y-14 rotate-[0deg]">
              <CalendarIcon strokeColor="#FF729F" />
            </div>
            <div className="absolute bottom-0 right-0 w-24 -translate-x-80 -translate-y-10 -rotate-[45deg] text-mainPink">
              <AtomIcon />
            </div>
          </div>

          <div className="z-0 flex w-full flex-col items-center justify-center gap-10 px-5 py-14">
            <div className="flex h-fit w-full flex-col gap-10 lg:flex-row xl:h-[400px]">
              {/* left content */}
              <div className="flex flex-[10] flex-col items-center justify-around xl:justify-between">
                <div className="z-0 select-none py-10">
                  <div className="relative -rotate-[6deg]">
                    <p className="text-center font-serif text-5xl leading-relaxed text-mainPink md:text-7xl">
                      Our Merchandise!
                    </p>
                    <p
                      className="absolute top-0 left-0 -z-10 text-center font-serif text-5xl leading-relaxed text-mainLime drop-shadow-lightBlack md:text-7xl"
                      style={{
                        WebkitTextStrokeColor: "#E8FCC2",
                        WebkitTextStrokeWidth: 7,
                      }}
                    >
                      Our Merchandise!
                    </p>
                    <div className="absolute h-full w-full -rotate-[6deg]"></div>
                  </div>
                </div>
                <div className="relative z-0 w-full">
                  <div className="h-[200px] lg:w-full">
                    <MerchBubble1 />
                  </div>
                  <p className="absolute top-1/2 left-1/2 w-full -translate-x-[calc(50%-20px)] -translate-y-[calc(50%+10px)] pl-5 pr-10 text-base md:pl-10 md:pr-14 md:text-xl lg:px-14 xl:px-14 xl:text-2xl 2xl:text-3xl">
                    Get your hands on the exclusive{" "}
                    <b>Your Promise Merchandise</b> and be a part of our
                    film-making journey!
                  </p>
                  <div className="absolute top-0 left-0 hidden h-full w-full md:block">
                    <div className="absolute bottom-0 left-0 w-20 lg:translate-y-1/2 xl:w-32">
                      <EggIcon />
                    </div>
                    <div className="absolute top-0 right-0 w-20 translate-x-[calc(50%-30px)] -translate-y-4 rotate-90 lg:-translate-y-1/2 xl:w-28">
                      <FlowerIcon />
                    </div>
                  </div>
                </div>
              </div>
              {/* right content */}
              <div className="grid flex-[9] grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
                {MerchImgLists.map((el, i) => (
                  <MerchCard key={i} images={el} />
                ))}
              </div>
            </div>
            <div className="relative flex w-fit items-center justify-center">
              <a
                href="https://www.instagram.com/yourpromisefilm/"
                target="_blank"
                rel="noreferrer"
                className="flex cursor-pointer justify-center rounded-xl border-4 border-solid border-mainPink bg-secondaryYellow px-10 py-2 text-xl font-bold shadow-lightBlack transition-all duration-200 ease-out hover:px-16 md:text-3xl"
              >
                SHOP NOW!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MerchPage;
