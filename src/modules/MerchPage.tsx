import MerchBubble1 from "@/assets/svgs/MerchBubble1";
import MerchImg from "@/assets/images/merch/merch-1.png";
import Image, { type StaticImageData } from "next/image";

const MerchCard = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="h-full w-full bg-mainPink">
      <div className="h-full w-full overflow-hidden p-1">
        <div className="relative h-full w-full overflow-hidden">
          <Image src={image} alt="merch img" className="absolute w-full" />
        </div>
      </div>
    </div>
  );
};

const MerchPage = () => {
  const MerchImgLists = [
    MerchImg,
    MerchImg,
    MerchImg,
    MerchImg,
    MerchImg,
    MerchImg,
    MerchImg,
    MerchImg,
  ];

  return (
    <div className="flex h-fit w-full items-center justify-center overflow-x-hidden px-20 py-32">
      <div className="relative w-full max-w-[1500px] bg-mainPink p-5 text-mainPink shadow-heavyBlack">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
          <div
            className="absolute top-0 left-0 h-20 w-96 -translate-x-[calc(50%-100px)] -translate-y-[calc(50%-30px)] -rotate-[30deg] bg-white opacity-60 shadow-lightBlack
          "
          />
          <div
            className="absolute bottom-0 right-0 h-20 w-96 translate-x-[calc(50%-100px)] translate-y-[calc(50%-30px)] -rotate-[30deg] bg-white opacity-60 shadow-lightBlack
          "
          />
        </div>
        <div className="flex w-full flex-col gap-10 bg-mainSage px-5 py-14">
          <div className="flex h-[400px] w-full gap-10">
            <div className="flex w-[600px] flex-col items-center justify-between">
              <div className="z-0 select-none py-10">
                <div className="relative -rotate-[6deg]">
                  <p className="font-serif text-7xl text-mainPink">
                    Our Merchandise!
                  </p>
                  <p
                    className="absolute top-0 left-0 -z-10 font-serif text-7xl text-mainLime drop-shadow-lightBlack"
                    style={{
                      WebkitTextStrokeColor: "#E8FCC2",
                      WebkitTextStrokeWidth: 7,
                    }}
                  >
                    Our Merchandise!
                  </p>
                </div>
              </div>
              <div className="relative z-0 w-full">
                <div className="w-full">
                  <MerchBubble1 />
                </div>
                <p className="absolute top-1/2 left-1/2 w-full -translate-x-[calc(50%-20px)] -translate-y-[calc(50%+10px)] px-14 text-2xl">
                  Get your hands on the exclusive{" "}
                  <b>Your Promise Merchandise</b> and be a part of our
                  film-making journey!
                </p>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-4 gap-x-3 gap-y-3">
              {MerchImgLists.map((el, i) => (
                <MerchCard key={i} image={el} />
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="flex cursor-pointer justify-center rounded-xl border-4 border-solid border-mainPink bg-secondaryYellow px-10 py-2 text-3xl font-bold shadow-lightBlack transition-all duration-200 ease-out hover:px-16">
              SHOP NOW!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MerchPage;
