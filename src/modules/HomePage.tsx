import Image from "next/image";
import BalloonKidImg from "@/assets/images/kid-balloon.png";
import FlowerBoxImg from "@/assets/images/flower.png";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-mainBlue px-14">
      {/* BG DECORATION */}
      <div className="fixed top-0 left-0 h-screen w-screen">
        <div className="absolute top-0 left-0 h-full w-full bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-10" />
        <Image
          src={BalloonKidImg}
          alt="kid floating with a balloon"
          width={500}
          className="absolute -right-20 top-10"
        />
        <Image
          src={FlowerBoxImg}
          alt="flower and gun in a box"
          width={500}
          className="absolute left-0 bottom-0"
        />
      </div>
      {/* END BG DECORATION */}
      <h2 className="text-lg font-light uppercase tracking-[0.3em]">
        A CSUN CTVA Thesis Film
      </h2>
      <h1 className="font-serif text-[90px] uppercase">Your Promise</h1>
      <h2 className="font-serif text-xl font-light tracking-widest">
        Directed by Haoqian &quot;Eric&quot; He & Ricardo Medina
      </h2>
    </div>
  );
};
export default HomePage;
