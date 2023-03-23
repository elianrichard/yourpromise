import Image from "next/image";
import BalloonKid from "@/assets/images/kid-balloon.png";
import FlowerBox from "@/assets/images/flower.png";

const BgDecoration = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen">
      <div className="absolute top-0 left-0 h-full w-full bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-10" />
      <Image
        src={BalloonKid}
        alt="kid floating with a balloon"
        width={500}
        className="absolute -right-20 top-10"
      />
      <Image
        src={FlowerBox}
        alt="flower and gun in a box"
        width={500}
        className="absolute left-0 bottom-0"
      />
    </div>
  );
};
export default BgDecoration;
