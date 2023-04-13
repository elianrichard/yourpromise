import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import useWindowDimensions from "@/utils/useViewport";
import PromoImgs from "@/static/promo-bts";
import { type StaticImageData } from "next/image";
import Image from "next/image";
import SugarImgs from "@/static/sugar-bts";

const ImageCard = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="flex h-full w-52 flex-col md:w-72">
      <div className="flex w-full justify-between py-1 md:py-3">
        {[...(Array(6) as [unknown])].map((_el, i) => (
          <div key={i} className="aspect-square w-4 rounded-sm bg-white" />
        ))}
      </div>
      <motion.div
        className="relative w-full flex-1 overflow-hidden"
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Image
          src={image}
          alt="yourpromise bts image"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </motion.div>
      <div className="flex w-full justify-between py-1 md:py-3">
        {[...(Array(6) as [unknown])].map((_el, i) => (
          <div key={i} className="aspect-square w-4 rounded-sm bg-white" />
        ))}
      </div>
    </div>
  );
};

const BTSPage = () => {
  const { width } = useWindowDimensions();
  const offset = 64;
  const cardWidth = width > 768 ? 288 : 208; // adjust with the card width above
  const baseVelocity = -0.25 * cardWidth;

  const baseX = useMotionValue(0);

  const x_sugar = useTransform(
    baseX,
    (v) =>
      `${wrap(
        offset - cardWidth,
        -cardWidth * (SugarImgs.length + 1) + width - offset,
        v
      )}px`
  );
  const x_promo = useTransform(
    baseX,
    (v) =>
      `${wrap(
        offset - cardWidth,
        -cardWidth * (PromoImgs.length + 1) + width - offset,
        v
      )}px`
  );

  useAnimationFrame((_t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="my-20 w-full" id="bts">
      <div className="top-0 flex w-full flex-col items-center justify-between">
        <div className="flex h-full w-full flex-col justify-center gap-10 overflow-x-hidden">
          <p className="px-10 text-2xl md:text-5xl">Promotional Video BTS</p>
          <div className="relative h-52 overflow-x-hidden bg-black px-5 text-black scrollbar-hide md:h-72">
            <motion.div
              className="absolute flex h-full w-fit gap-5 md:gap-8"
              style={{ left: x_promo }}
            >
              {PromoImgs.map((el, i) => (
                <ImageCard key={i} image={el} />
              ))}
            </motion.div>
          </div>
          <p className="self-end px-10 text-2xl md:text-5xl">Sugar Fix BTS</p>
          <div className="relative h-52 overflow-x-hidden bg-black px-5 text-black scrollbar-hide md:h-72">
            <motion.div
              className="absolute flex h-full w-fit gap-5 md:gap-8"
              style={{ right: x_sugar }}
            >
              {SugarImgs.reverse().map((el, i) => (
                <ImageCard key={i + 100} image={el} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BTSPage;
