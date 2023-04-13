import Image from "next/image";
import MailBack from "@/assets/svgs/MailBack";
import MailFront from "@/assets/svgs/MailFront";
import BalloonSticker from "@/assets/images/stickers/sticker-6.png";
import GunFlowerSticker from "@/assets/images/gun-flower-2.png";

const MailPage = () => {
  return (
    <div
      className="flex h-[100vh] w-full items-center justify-center px-10 md:px-20"
      id="contact"
    >
      <a
        className="group relative w-full cursor-pointer md:w-[700px]"
        href="https://forms.gle/UgM3tmLLVTy5krg98"
        target="_blank"
        rel="noreferrer"
      >
        <MailBack />
        <div className="absolute bottom-1/2 left-1/2 flex h-full w-[75%] -translate-x-1/2 translate-y-[calc(50%-10px)] flex-col gap-20 rounded-md bg-[#EDFAD6] shadow-lightBlack transition-all duration-300 ease-out group-hover:translate-y-[calc(50%-30px)] sm:h-[300px] md:h-[400px]">
          <p className="absolute top-5 left-5 font-serif text-base text-black md:text-2xl">
            To: YourPromise Team
          </p>
          <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center self-center text-center font-serif text-base text-black underline md:text-2xl">
            <div className="absolute -left-3 hidden w-44 sm:block">
              <Image src={GunFlowerSticker} alt="gun n flower sticker" />
            </div>
            <p>Send us your message!</p>
            <div className="absolute right-10 hidden w-16 sm:block">
              <Image src={BalloonSticker} alt="balloon sticker" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2">
          <MailFront />
        </div>
      </a>
    </div>
  );
};
export default MailPage;
