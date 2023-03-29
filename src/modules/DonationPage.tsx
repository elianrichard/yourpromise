import DonationPaperOne from "@/assets/svgs/donation-paper-1";

const DonationPage = () => {
  return (
    <div className="z-10 flex h-screen w-screen items-center justify-center pt-20">
      <div className="relative flex w-72 flex-col items-center justify-center gap-5">
        <div className="absolute top-1/2 left-1/2 -z-10 w-[550px] -translate-x-[50%] -translate-y-[50%]">
          <DonationPaperOne />
        </div>
        <p className="-rotate-[6deg] self-start font-serif text-2xl font-bold text-black">
          Notes:
        </p>
        <p className="-rotate-[6deg] text-center font-serif text-xl leading-loose text-black">
          Contributions to your promise are{" "}
          <span className="bg-secondaryYellow px-2">100% tax deductible.</span>
          The California State University, Northridge Foundation is a charitable
          organization 501 (c)(3) public benefit California Corporation.
        </p>
      </div>
    </div>
  );
};
export default DonationPage;
