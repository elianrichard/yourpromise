import { useMemo, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

import StoryBgImg from "@/assets/images/bg-story.png";
import InspirationBgImg from "@/assets/images/bg-inspiration.png";

const StoryPage = () => {
  const paragraphOne = useRef(null);
  const paragraphTwo = useRef(null);
  const paragraphThree = useRef(null);
  const paragraphTwoThree = useRef(null);
  const paragraphAll = useRef(null);
  const isInViewOne = useInView(paragraphOne);
  const isInViewTwo = useInView(paragraphTwo);
  const isInViewThree = useInView(paragraphThree);

  const text = useMemo(() => {
    if (isInViewOne) return { title: "Our Story", paragraph: 1 };
    else if (isInViewTwo) return { title: "Our Inspiration", paragraph: 2 };
    else if (isInViewThree) return { title: "Our Inspiration", paragraph: 3 };
    return { title: "Our Story", paragraph: 1 };
  }, [isInViewOne, isInViewThree, isInViewTwo]);

  const { scrollYProgress: useParOneScroll } = useScroll({
    target: paragraphOne,
    offset: ["start end", "end center"],
    smooth: 1,
  });
  const { scrollYProgress: useParTwoScroll } = useScroll({
    target: paragraphTwo,
    offset: ["start end", "end center"],
    smooth: 1,
  });
  const { scrollYProgress: useParThreeScroll } = useScroll({
    target: paragraphThree,
    offset: ["start end", "end center"],
    smooth: 1,
  });
  const { scrollYProgress: useParTwoThreeScroll } = useScroll({
    target: paragraphTwoThree,
    offset: ["start end", "end center"],
    smooth: 1,
  });
  const { scrollYProgress: useParAllScroll } = useScroll({
    target: paragraphAll,
    offset: ["start end", "end center"],
    smooth: 1,
  });

  const springedOpacityOneTitle = useSpring(
    useTransform(useParOneScroll, [0, 0.2, 0.3, 0.6, 1], [0, 0, 1, 1, 0])
  );
  const springedOpacityOneBg = useSpring(
    useTransform(useParOneScroll, [0, 0.6, 1], [1, 1, 0])
  );
  const springedOpacityOne = useSpring(
    useTransform(useParOneScroll, [0, 0.3, 0.4, 0.6, 1], [0, 0, 1, 1, 0])
  );
  const springedOpacityTwo = useSpring(
    useTransform(useParTwoScroll, [0, 0.1, 0.4, 0.6, 1], [0, 0, 1, 1, 0])
  );
  const springedOpacityThree = useSpring(
    useTransform(useParThreeScroll, [0, 0.4, 0.6, 1], [0, 1, 1, 0])
  );
  const springedOpacityTwoThree = useSpring(
    useTransform(useParTwoThreeScroll, [0, 0.1, 0.8, 1], [0, 1, 1, 0])
  );
  const springedOpacityAll = useSpring(
    useTransform(useParAllScroll, [0, 0.05, 0.9, 1], [0, 1, 1, 0])
  );

  return (
    <div className="relative z-30 flex w-full flex-col items-center justify-center px-20 pt-20">
      {/* FLOATING TEXT */}
      <div className="fixed top-0 left-0 z-10 h-screen w-screen">
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-start gap-10 px-20 pt-[calc(50vh-200px)]">
          <motion.div
            className="absolute top-0 left-0 -z-10 h-full w-full"
            style={{ opacity: springedOpacityAll }}
          >
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/70" />
            <motion.div
              className="absolute top-0 left-0 h-full w-full"
              style={{ opacity: springedOpacityOneBg }}
            >
              <Image src={StoryBgImg} alt="story background image" />
            </motion.div>
            <Image src={InspirationBgImg} alt="inspiration background image" />
          </motion.div>
          {text.paragraph === 1 ? (
            <>
              <motion.h2
                className="font-serif text-3xl font-bold"
                style={{ opacity: springedOpacityOneTitle }}
              >
                {text.title}
              </motion.h2>
              <motion.p
                className="text-5xl leading-normal"
                style={{ opacity: springedOpacityOne }}
              >
                <span className="italic">David</span>, an elementary school boy,{" "}
                <span className="italic">died in a school shooting</span> after
                believing his last promise was broken. He is{" "}
                <span className="italic">given a chance to revisit</span> parts
                of his life, to <span className="italic">reflect</span> on those
                around him, and to find <span className="italic">closure</span>{" "}
                with his family.
              </motion.p>
            </>
          ) : text.paragraph === 2 ? (
            <>
              <motion.h2
                className="font-serif text-3xl font-bold"
                style={{ opacity: springedOpacityTwoThree }}
              >
                {text.title}
              </motion.h2>
              <motion.p
                className="text-5xl leading-normal"
                style={{ opacity: springedOpacityTwo }}
              >
                During Eric&apos;s first year in Cal State Northridge in 2018, a{" "}
                <span className="italic">lockdown</span> was placed due to a{" "}
                <span className="italic">
                  potential threat of a School Shooter
                </span>
                . Eric and his classmates that lived in the dorms were asked to
                keep their outings to a minimum and they started transitioning
                to online classes that week.
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2
                className="font-serif text-3xl font-bold"
                style={{ opacity: springedOpacityTwoThree }}
              >
                {text.title}
              </motion.h2>
              <motion.p
                className="text-5xl leading-normal"
                style={{ opacity: springedOpacityThree }}
              >
                Luckily for Eric,{" "}
                <span className="italic">it was a false alarm</span>. Eric took
                his experience for inspiration and decides to tell the story of
                many who&apos;ve experienced{" "}
                <span className="italic">the fear or tragedy of losing</span>{" "}
                loved ones and friends to{" "}
                <span className="italic">unnecessary violence</span>. An issue
                that is <span className="italic">prevalent</span> in our current
                society.
              </motion.p>
            </>
          )}
        </div>
      </div>
      {/* END FLOATING TEXT */}

      <div
        className="my-[50vh] flex w-full flex-col gap-[100vh]"
        // style={{ backgroundColor: "rgb(22, 163, 74)" }} // UNCOMMENT TO DEBUG
        ref={paragraphAll}
      >
        <div
          className="h-[200vh] w-full"
          // style={{ backgroundColor: "rgb(220, 38, 38)" }} // UNCOMMENT TO DEBUG
          ref={paragraphOne}
        />

        <div
          className="flex w-full flex-col gap-[100vh]"
          // style={{ backgroundColor: "rgb(37, 99, 235)" }} // UNCOMMENT TO DEBUG
          ref={paragraphTwoThree}
        >
          <div
            className="h-[200vh] w-full"
            // style={{ backgroundColor: "rgb(220, 38, 38)" }} // UNCOMMENT TO DEBUG
            ref={paragraphTwo}
          />

          <div
            className="h-[200vh] w-full"
            // style={{ backgroundColor: "rgb(220, 38, 38)" }} // UNCOMMENT TO DEBUG
            ref={paragraphThree}
          />
        </div>
      </div>
    </div>
  );
};
export default StoryPage;
