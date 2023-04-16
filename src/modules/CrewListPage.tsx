import Image, { type StaticImageData } from "next/image";
import {
  type MutableRefObject,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { motion, useInView } from "framer-motion";
import _ from "lodash";

import { headList, crewList } from "@/static/crew-list";

import Sticker1Img from "@/assets/images/stickers/sticker-1.png";
import Sticker2Img from "@/assets/images/stickers/sticker-2.png";
import Sticker3Img from "@/assets/images/stickers/sticker-3.png";
import Sticker4Img from "@/assets/images/stickers/sticker-4.png";
import Sticker5Img from "@/assets/images/stickers/sticker-5.png";

import useWindowDimensions from "@/utils/useViewport";

const CrewCard = ({
  name,
  role,
  image,
  bio,
  isMobile = false,
}: {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  isMobile?: boolean;
}) => {
  const cardRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isCardInView = useInView(cardRef);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  // console.log(isCardInView, name);

  const debounceSelected = useMemo(
    () => _.debounce((i: boolean) => setIsHover(i), 200),
    []
  );

  useEffect(() => {
    return () => debounceSelected.cancel();
  }, [debounceSelected]);

  return (
    <motion.div
      className="flex w-full select-none flex-col items-center gap-3 sm:w-[200px] lg:w-[300px]"
      ref={cardRef}
      onClick={() => isMobile && setIsOpen((isOpen) => !isOpen)}
      onHoverStart={() => !isMobile && debounceSelected(true)}
      onHoverEnd={() => !isMobile && debounceSelected(false)}
    >
      <div className="flex w-fit justify-center bg-mainYellow/90 py-2 px-3 font-sans text-lg text-black lg:whitespace-nowrap lg:px-5 lg:text-2xl">
        {role}
      </div>
      <div className="group z-0 aspect-[7/10] w-[300px] [perspective:1000px] sm:w-[200px] lg:w-[300px]">
        <div
          className={`relative z-0 h-full w-full transition-all duration-[750ms] ease-out [transform-style:preserve-3d] ${
            isMobile
              ? isOpen
                ? "[transform:rotateY(180deg)]"
                : ""
              : isHover
              ? "[transform:rotateY(180deg)]"
              : ""
          }`}
        >
          <div
            className={`absolute z-10 flex h-full w-full flex-col items-end bg-paleWhite px-7 pt-7 opacity-100 shadow-mediumBlack transition-opacity duration-[750ms] ease-out sm:px-5 sm:pt-5 lg:px-7 lg:pt-7 ${
              isMobile
                ? isOpen
                  ? "opacity-0 [backface-visibility:hidden]"
                  : ""
                : isHover
                ? "opacity-0 [backface-visibility:hidden]"
                : ""
            }`}
          >
            <div className="relative w-full flex-1">
              <div className="absolute z-10 h-full w-full shadow-[inset_0px_4px_20px_rgba(0,0,0,0.35)]" />
              <Image
                src={
                  isMobile
                    ? isCardInView
                      ? image
                      : "/crews/placeholder.jpg"
                    : image
                }
                alt={name}
                fill
                className="absolute z-0 h-full w-full object-cover"
              />
            </div>
            <p className="py-6 font-serif text-xl text-black sm:py-2 sm:text-lg md:py-3 lg:text-xl">
              {name}
            </p>
          </div>
          <div className="absolute z-20 flex h-full w-full flex-col overflow-hidden bg-[#2e2e2e] pt-7 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
            <div className="flex flex-1 flex-col items-center justify-center bg-black px-10 text-base sm:px-3 sm:text-xs lg:px-10 lg:text-base">
              <p>{bio}</p>
            </div>
            <div className="flex -translate-x-10 gap-10">
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CrewListPage = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-20 py-20 sm:px-10 lg:px-20">
      <div className="relative flex w-full flex-row flex-wrap items-center justify-around gap-y-16">
        {headList.map((el, i) => (
          <CrewCard
            name={el.name}
            role={el.role}
            image={el.image}
            bio={el.bio}
            key={i}
            isMobile={width < 786}
          />
        ))}
        {/* DECORATION */}
        <div className="absolute top-0 left-0 -z-10 hidden h-full w-full sm:block">
          <Image
            src={Sticker1Img}
            alt="sticker decoration"
            className="absolute h-auto w-[100px] translate-x-10 -translate-y-20 transition-all duration-200 ease-out hover:rotate-[10deg] hover:scale-110 xl:w-[150px]"
          />
          <Image
            src={Sticker2Img}
            alt="sticker decoration"
            className="absolute right-0 h-auto w-[100px] -translate-x-10 transition-all duration-200 ease-out hover:rotate-[20deg] hover:scale-110 xl:w-[150px]"
          />
          <Image
            src={Sticker5Img}
            alt="sticker decoration"
            className="absolute left-1/2 top-1/2 h-auto w-[100px] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out hover:rotate-[10deg] hover:scale-110 xl:w-[200px]"
          />
          <Image
            src={Sticker4Img}
            alt="sticker decoration"
            className="absolute left-0 bottom-0 h-auto w-[100px] rotate-[10deg] transition-all duration-200 ease-out hover:rotate-[30deg] hover:scale-110 xl:w-[100px]"
          />
          <Image
            src={Sticker3Img}
            alt="sticker decoration"
            className="absolute right-0 bottom-0 h-auto w-[100px] translate-y-10 rotate-[20deg] transition-all duration-200 ease-out hover:-rotate-[5deg] hover:scale-110 xl:w-[150px]"
          />
        </div>
      </div>
      <div className="custom-scrollbar flex w-full gap-x-10 overflow-x-scroll px-5 pb-10 sm:flex-wrap sm:justify-around sm:gap-y-16 sm:px-0">
        {crewList.map((el, i) => (
          <CrewCard
            name={el.name}
            role={el.role}
            image={el.image}
            bio={el.bio}
            key={i}
            isMobile={width < 786}
          />
        ))}
      </div>
    </div>
  );
};
export default CrewListPage;
