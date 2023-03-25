import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const StoryPage = () => {
  const [text, setText] = useState<{
    title: string;
    paragraph: number;
  }>({
    title: "Our Story",
    paragraph: 1,
  });

  const [isShowText, setIsShowText] = useState<boolean>(false);

  const containerVar: Variants = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  // const paragraphOne = useRef(null);
  // const paragraphTwo = useRef(null);
  // const paragraphThree = useRef(null);
  // const isInViewOne = useInView(paragraphOne, { amount: 1 });
  // const isInViewTwo = useInView(paragraphTwo, { amount: 1 });
  // const isInViewThree = useInView(paragraphThree, { amount: "some" });

  return (
    <div className="relative z-30 flex w-full flex-col items-center justify-center px-20">
      <div className="fixed top-0 left-0 z-10 h-screen w-screen px-20 pt-20">
        <motion.div
          variants={containerVar}
          initial={"hidden"}
          animate={isShowText ? "show" : "hidden"}
          transition={{
            type: "spring",
            duration: 1,
          }}
          className="flex h-full w-full flex-col items-start justify-center gap-10"
        >
          <h2 className="font-serif text-3xl font-bold">{text.title}</h2>
          <p className="text-5xl leading-normal">
            {text.paragraph === 1 ? (
              <>
                <span className="italic">David</span>, an elementary school boy,{" "}
                <span className="italic">died in a school shooting</span> after
                believing his last promise was broken. He is{" "}
                <span className="italic">given a chance to revisit</span> parts
                of his life, to <span className="italic">reflect</span> on those
                around him, and to find <span className="italic">closure</span>{" "}
                with his family.
              </>
            ) : text.paragraph === 2 ? (
              <>
                During Eric&apos;s first year in Cal State Northridge in 2018, a{" "}
                <span className="italic">lockdown</span> was placed due to a{" "}
                <span className="italic">
                  potential threat of a School Shooter
                </span>
                . Eric and his classmates that lived in the dorms were asked to
                keep their outings to a minimum and they started transitioning
                to online classes that week.
              </>
            ) : (
              <>
                Luckily for Eric,{" "}
                <span className="italic">it was a false alarm</span>. Eric took
                his experience for inspiration and decides to tell the story of
                many who&apos;ve experienced{" "}
                <span className="italic">the fear or tragedy of losing</span>{" "}
                loved ones and friends to{" "}
                <span className="italic">unnecessary violence</span>. An issue
                that is <span className="italic">prevalent</span> in our current
                society.
              </>
            )}
          </p>
        </motion.div>
      </div>

      <Waypoint
        onEnter={() => {
          setText({ title: "Our Story", paragraph: 1 });
          setIsShowText(true);
        }}
        onLeave={() => {
          setIsShowText(false);
        }}
        bottomOffset={10}
      />

      <motion.div
        className="mb-[500px] flex h-screen flex-col items-start justify-center gap-10 pt-20"
        // onViewportEnter={() => {
        //   setText({ title: "Our Story", paragraph: 1 });
        // }}
        // viewport={{ amount: 0.8 }}
        // ref={paragraphOne}
      >
        {/* <h2 className="font-serif text-3xl font-bold">Our Story</h2>
        <p className="text-5xl leading-normal">
          <span className="italic">David</span>, an elementary school boy,{" "}
          <span className="italic">died in a school shooting</span> after
          believing his last promise was broken. He is{" "}
          <span className="italic">given a chance to revisit</span> parts of his
          life, to <span className="italic">reflect</span> on those around him,
          and to find <span className="italic">closure</span> with his family.
        </p> */}
      </motion.div>

      <Waypoint
        onEnter={() => {
          setText({ title: "Our Insipration", paragraph: 2 });
          setIsShowText(true);
        }}
        onLeave={() => {
          setIsShowText(false);
        }}
      />

      <motion.div
        className="mb-[500px] flex h-screen flex-col items-start justify-center gap-10 pt-20"
        // onViewportEnter={() => {
        //   setText({ title: "Our Inpiration", paragraph: 2 });
        // }}
        // viewport={{ amount: 0.8 }}
        // ref={paragraphTwo}
      >
        {/* <h2 className="font-serif text-3xl font-bold">Our Inspiration</h2>
        <p className="text-5xl leading-normal">
          During Eric’s first year in Cal State Northridge in 2018, a{" "}
          <span className="italic">lockdown</span> was placed due to a{" "}
          <span className="italic">potential threat of a School Shooter</span>.
          Eric and his classmates that lived in the dorms were asked to keep
          their outings to a minimum and they started transitioning to online
          classes that week.
        </p> */}
      </motion.div>

      <Waypoint
        onEnter={() => {
          setText({ title: "Our Insipration", paragraph: 3 });
          setIsShowText(true);
        }}
        onLeave={() => {
          setIsShowText(false);
        }}
      />

      <motion.div
        className="flex h-screen flex-col items-start justify-center gap-10 pt-20"
        // onViewportEnter={() => {
        //   setText({ title: "Our Inpiration", paragraph: 3 });
        // }}
        // viewport={{ amount: 0.8 }}
        // ref={paragraphThree}
      >
        {/* <h2 className="font-serif text-3xl font-bold">Our Inspiration</h2>
        <p className="text-5xl leading-normal">
          Luckily for Eric, <span className="italic">it was a false alarm</span>
          . Eric took his experience for inspiration and decides to tell the
          story of many who&apos;ve experienced{" "}
          <span className="italic">the fear or tragedy of losing</span> loved
          ones and friends to{" "}
          <span className="italic">unnecessary violence</span>. An issue that is{" "}
          <span className="italic">prevalent</span> in our current society.
        </p> */}
      </motion.div>
    </div>
  );
};
export default StoryPage;
