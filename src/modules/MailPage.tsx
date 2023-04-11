import Image from "next/image";
import MailBack from "@/assets/svgs/MailBack";
import MailFront from "@/assets/svgs/MailFront";
import BalloonSticker from "@/assets/images/stickers/sticker-6.png";
import GunFlowerSticker from "@/assets/images/gun-flower-2.png";

const MailPage = () => {
  return (
    <div
      className="flex h-[100vh] w-full items-center justify-center"
      id="contact"
    >
      <a
        className="group relative w-[700px] cursor-pointer overflow-hidden"
        href="https://google.com"
        target="_blank"
        rel="noreferrer"
      >
        <MailBack />
        <div className="absolute bottom-0 left-1/2 flex h-[400px] w-[75%] -translate-x-1/2 flex-col gap-20 rounded-md bg-[#EDFAD6] px-5 py-5 shadow-lightBlack transition-all duration-300 ease-out group-hover:-translate-y-10">
          <p className="font-serif text-2xl text-black">To: YourPromise Team</p>
          <div className="relative flex w-full translate-y-0 items-center justify-center self-center text-center font-serif text-2xl text-black underline">
            <div className="absolute -left-10 w-44">
              <Image src={GunFlowerSticker} alt="gun n flower sticker" />
            </div>
            <p>Send us your message!</p>
            <div className="absolute right-4 w-16">
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
