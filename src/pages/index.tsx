import {
  type MutableRefObject,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";

import { useAnimationControls, useInView } from "framer-motion";

import NavBar from "@/components/NavBar";

import HomePage from "@/modules/HomePage";
import StoryPage from "@/modules/StoryPage";
import VideoPage from "@/modules/VideoPage";
import DonationPage from "@/modules/DonationPage";
import GoalsPage from "@/modules/GoalsPage";
import CrewPage from "@/modules/CrewPage";
import CrewListPage from "@/modules/CrewListPage";
import MerchPage from "@/modules/MerchPage";
import MailPage from "@/modules/MailPage";
import { Waypoint } from "react-waypoint";

const BTSPage = dynamic(() => import("@/modules/BTSPage"), {
  ssr: false,
});

const PageBreak = ({
  setCurrentSection,
  before,
  after,
}: {
  setCurrentSection: Dispatch<SetStateAction<string>>;
  before: string;
  after: string;
}) => {
  return (
    <Waypoint
      onEnter={({ previousPosition }) => {
        if (previousPosition === "above") setCurrentSection(before);
      }}
      onLeave={({ currentPosition }) => {
        if (currentPosition === "above") setCurrentSection(after);
        else setCurrentSection(before);
      }}
      topOffset={"100px"}
      bottomOffset={"100px"}
    />
  );
};

const Home: NextPage = () => {
  const [currentSection, setCurrentSection] = useState<string>("home");

  const homeControl = useAnimationControls();
  const navControl = useAnimationControls();
  const homeRef = useRef() as MutableRefObject<HTMLDivElement>;
  const isHomeInView = useInView(homeRef);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isHomeInView && homeRef.current)
      void homeControl.start({ opacity: 0 });
  }, [homeControl, isHomeInView]);

  useEffect(() => {
    void (async () => {
      await homeControl.start("show");
      void navControl.start("show");
    })();
  }, [homeControl, navControl]);

  return (
    <>
      <Head>
        <title>YourPromise</title>
        <meta name="description" content="YourPromise Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-0 w-screen max-w-[100%]">
        <div className="absolute -z-[1000] h-full w-full opacity-0">
          <Image
            src={"/snapshot.png"}
            alt="snapshot image web"
            fill
            className="h-auto w-96"
            priority
          />
        </div>
        <NavBar animateControl={navControl} current={currentSection} />
        <main className="relative h-full w-full">
          <div className="fixed top-0 left-0 -z-50 h-screen w-full bg-mainBlue bg-[url('/bg-squares.png')] bg-cover bg-blend-multiply" />
          <div className={`relative z-10 flex h-full w-full flex-col`}>
            <HomePage animateControl={homeControl} homeRef={homeRef} />

            <Waypoint
              onEnter={({ previousPosition }) => {
                if (previousPosition === "below") setCurrentSection("story");
                else setCurrentSection("home");
              }}
              bottomOffset={"100px"}
            />

            <StoryPage />
            <VideoPage />

            <PageBreak
              before="story"
              after="donate"
              setCurrentSection={setCurrentSection}
            />

            <DonationPage />
            <GoalsPage />

            <PageBreak
              before="donate"
              after="crew"
              setCurrentSection={setCurrentSection}
            />

            <CrewPage />
            {/* <CrewListPage /> */}

            {/* <PageBreak
              before="crew"
              after="merch"
              setCurrentSection={setCurrentSection}
            /> */}

            {/* <MerchPage />

            <PageBreak
              before="merch"
              after="bts"
              setCurrentSection={setCurrentSection}
            />

            <BTSPage />

            <PageBreak
              before="bts"
              after="contact"
              setCurrentSection={setCurrentSection}
            />

            <MailPage /> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
