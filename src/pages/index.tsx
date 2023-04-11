import { type MutableRefObject, useEffect, useRef } from "react";
import { type NextPage } from "next";
import Head from "next/head";

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
import BTSPage from "@/modules/BTSPage";
import MailPage from "@/modules/MailPage";

const Home: NextPage = () => {
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
      <div className="relative w-screen max-w-[100%]">
        <NavBar animateControl={navControl} />
        <main className="relative h-full w-full">
          <div className="fixed top-0 left-0 -z-50 h-screen w-full bg-mainBlue bg-[url('/bg-squares.png')] bg-cover bg-blend-multiply" />
          <div className={`relative z-10 flex h-full w-full flex-col`}>
            <HomePage animateControl={homeControl} homeRef={homeRef} />
            <StoryPage />
            <VideoPage />
            <DonationPage />
            <GoalsPage />
            <CrewPage />
            <CrewListPage />
            <MerchPage />
            <BTSPage />
            <MailPage />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
