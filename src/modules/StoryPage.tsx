const StoryPage = () => {
  return (
    <div className="relative z-30 flex min-h-screen w-full flex-col items-center justify-center bg-mainBlue px-20">
      <div className="flex h-screen flex-col items-start justify-center gap-10 pt-20">
        <h2 className="font-serif text-3xl font-bold">Our Story</h2>
        <p className="text-5xl leading-normal">
          <span className="italic">David</span>, an elementary school boy,{" "}
          <span className="italic">died in a school shooting</span> after
          believing his last promise was broken. He is{" "}
          <span className="italic">given a chance to revisit</span> parts of his
          life, to <span className="italic">reflect</span> on those around him,
          and to find <span className="italic">closure</span> with his family.
        </p>
      </div>

      <div className="flex h-screen flex-col items-start justify-center gap-10 pt-20">
        <h2 className="font-serif text-3xl font-bold">Our Inspiration</h2>
        <p className="text-5xl leading-normal">
          During Eric’s first year in Cal State Northridge in 2018, a{" "}
          <span className="italic">lockdown</span> was placed due to a{" "}
          <span className="italic">potential threat of a School Shooter</span>.
          Eric and his classmates that lived in the dorms were asked to keep
          their outings to a minimum and they started transitioning to online
          classes that week.
        </p>
      </div>

      <div className="flex h-screen flex-col items-start justify-center gap-10 pt-20">
        <h2 className="font-serif text-3xl font-bold">Our Inspiration</h2>
        <p className="text-5xl leading-normal">
          Luckily for Eric, <span className="italic">it was a false alarm</span>
          . Eric took his experience for inspiration and decides to tell the
          story of many who&apos;ve experienced{" "}
          <span className="italic">the fear or tragedy of losing</span> loved
          ones and friends to{" "}
          <span className="italic">unnecessary violence</span>. An issue that is{" "}
          <span className="italic">prevalent</span> in our current society.
        </p>
      </div>

      {/* <div className="z-10 flex h-screen flex-row-reverse items-center gap-20 pt-20">
        <div className="flex flex-1 flex-col gap-10 ">
          <h2 className="font-serif text-5xl font-bold">Inspiration</h2>
          <p className="text-2xl font-light leading-relaxed tracking-wider">
            During Eric’s first year in Cal State Northridge in 2018, a{" "}
            <span className="font-medium">lockdown</span> was placed due to a{" "}
            <span className="font-medium">
              potential threat of a School Shooter
            </span>
            . Eric and his classmates that lived in the dorms were asked to keep
            their outings to a minimum and they started transitioning to online
            classes that week. Luckily for Eric,{" "}
            <span className="font-medium">it was a false alarm</span>. Eric took
            his experience for inspiration and decides to tell the story of many
            who&apos;ve experienced{" "}
            <span className="font-medium">the fear or tragedy of losing</span>{" "}
            loved ones and friends to{" "}
            <span className="font-medium">unnecessary violence</span>. An issue
            that is <span className="font-medium">prevalent</span> in our
            current society.
          </p>
        </div>
        <div className="flex w-[500px] justify-center">
          <div className="relative flex h-full justify-center">
            <Image src={CandlesImg} alt="candle image" />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default StoryPage;
