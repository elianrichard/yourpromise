import { useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import { useAnimationControls } from "framer-motion";

import NavBar from "@/components/NavBar";

import HomePage from "@/modules/HomePage";
import StoryPage from "@/modules/StoryPage";
import VideoPage from "@/modules/VideoPage";
import DonationPage from "@/modules/DonationPage";
import GoalsPage from "@/modules/GoalsPage";

const Home: NextPage = () => {
  const homeControl = useAnimationControls();
  const navControl = useAnimationControls();

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
      <div className="relative w-screen">
        <NavBar animateControl={navControl} />
        <main
          className={`relative flex h-full w-full flex-col overflow-y-hidden bg-mainBlue bg-[url('/bg-squares.svg')] bg-repeat-y bg-blend-multiply`}
        >
          <HomePage animateControl={homeControl} />
          <StoryPage />
          {/* <div className="-mt-[30vh] flex h-full w-full flex-col "> */}
          <VideoPage />
          <DonationPage />
          <GoalsPage />
          {/* </div> */}
          <div className="h-screen w-screen" />
        </main>
      </div>
    </>
  );
};

export default Home;
