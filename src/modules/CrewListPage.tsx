import Image, { type StaticImageData } from "next/image";
import { headList, crewList } from "@/static/crew-list";

import Sticker1Img from "@/assets/images/stickers/sticker-1.png";
import Sticker2Img from "@/assets/images/stickers/sticker-2.png";
import Sticker3Img from "@/assets/images/stickers/sticker-3.png";
import Sticker4Img from "@/assets/images/stickers/sticker-4.png";
import Sticker5Img from "@/assets/images/stickers/sticker-5.png";

const CrewCard = ({
  name,
  role,
  image,
  bio,
}: {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
}) => {
  return (
    <div className="flex select-none flex-col gap-3">
      <div className="flex w-fit justify-center whitespace-nowrap bg-mainYellow/90 py-2 px-5 font-sans text-2xl text-black">
        {role}
      </div>
      <div className="group h-[425px] w-[300px] [perspective:1000px]">
        <div className="relative h-full w-full transition-all duration-[750ms] ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute flex h-full w-full flex-col items-end bg-paleWhite px-7 pt-7 shadow-mediumBlack">
            <div className="relative w-full flex-1">
              <div className="absolute z-10 h-full w-full shadow-[inset_0px_4px_20px_rgba(0,0,0,0.35)]" />
              <Image
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="py-6 font-serif text-xl text-black">{name}</p>
          </div>
          <div className="absolute z-20 flex h-full w-full flex-col overflow-hidden bg-[#2e2e2e] pt-7 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-1 flex-col items-center justify-center bg-black px-10">
              <p>{bio}</p>
            </div>
            <div className="flex -translate-x-10 gap-10">
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
              <p className="py-6 font-[Fuji] text-xl text-white">YOURPROMISE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CrewListPage = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-20 py-20 px-20">
      <div className="relative flex w-full justify-around">
        {headList.map((el, i) => (
          <CrewCard
            name={el.name}
            role={el.role}
            image={el.image}
            bio={el.bio}
            key={i}
          />
        ))}
        {/* DECORATION */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full">
          <div className="absolute translate-x-10 -translate-y-20 transition-all duration-200 ease-out hover:rotate-[10deg] hover:scale-110">
            <Image
              src={Sticker1Img}
              alt="sticker decoration"
              className="h-auto w-[150px]"
            />
          </div>
          <Image
            src={Sticker2Img}
            alt="sticker decoration"
            className="absolute right-0 h-auto w-[150px] -translate-x-10 transition-all duration-200 ease-out hover:rotate-[20deg] hover:scale-110"
          />
          <Image
            src={Sticker5Img}
            alt="sticker decoration"
            className="absolute left-1/2 top-1/2 h-auto w-[200px] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out hover:rotate-[10deg] hover:scale-110"
          />
          <Image
            src={Sticker4Img}
            alt="sticker decoration"
            className="absolute left-0 bottom-0 h-auto w-[100px] rotate-[10deg] transition-all duration-200 ease-out hover:rotate-[30deg] hover:scale-110"
          />
          <Image
            src={Sticker3Img}
            alt="sticker decoration"
            className="absolute right-0 bottom-0 h-auto w-[150px] translate-y-10 rotate-[20deg] transition-all duration-200 ease-out hover:-rotate-[5deg] hover:scale-110"
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-around gap-y-16">
        {crewList.map((el, i) => (
          <CrewCard
            name={el.name}
            role={el.role}
            image={el.image}
            bio={el.bio}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
export default CrewListPage;
