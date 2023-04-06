import Image, { type StaticImageData } from "next/image";
import { headList, crewList } from "@/static/crew-list";

const CrewCard = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: StaticImageData;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-3xl">{role}</p>
      <div className="flex h-[425px] w-[300px] flex-col items-end bg-paleWhite px-7 pt-7 shadow-mediumBlack">
        <div className="relative w-full flex-1">
          <div className="absolute z-10 h-full w-full shadow-[inset_0px_4px_20px_rgba(0,0,0,0.35)]" />
          <Image src={image} alt={name} fill />
        </div>
        <p className="py-6 font-serif text-xl text-black">{name}</p>
      </div>
    </div>
  );
};

const CrewListPage = () => {
  return (
    <div className="flex h-fit w-screen flex-col items-center justify-center gap-20 py-20 px-20">
      <div className="flex w-full justify-around">
        {headList.map((el, i) => (
          <CrewCard name={el.name} role={el.role} image={el.image} key={i} />
        ))}
      </div>
      <div className="flex w-full flex-wrap justify-around gap-y-16">
        {crewList.map((el, i) => (
          <CrewCard name={el.name} role={el.role} image={el.image} key={i} />
        ))}
      </div>
    </div>
  );
};
export default CrewListPage;
