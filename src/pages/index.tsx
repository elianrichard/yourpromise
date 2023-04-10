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
import CrewPage from "@/modules/CrewPage";
import CrewListPage from "@/modules/CrewListPage";
import MerchPage from "@/modules/MerchPage";

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
        <main className="relative h-full w-full overflow-y-hidden">
          <div className="fixed top-0 left-0 -z-50 h-screen w-full bg-mainBlue bg-[url('/bg-squares.svg')] bg-repeat-y bg-blend-multiply" />
          <div className={`relative z-10 flex h-full w-full flex-col`}>
            {/* <HomePage animateControl={homeControl} /> */}
            <StoryPage />
            {/* <VideoPage /> */}
            <DonationPage />
            <GoalsPage />
            <CrewPage />
            <CrewListPage />
            <MerchPage />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
