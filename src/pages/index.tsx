import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAnimationControls } from "framer-motion";

import NavBar from "@/components/NavBar";
import HomePage from "@/modules/HomePage";
import StoryPage from "@/modules/StoryPage";

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
      <div className="relative w-screen overflow-x-hidden">
        <NavBar animateControl={navControl} />
        <main className="relative flex h-full w-full flex-col bg-mainBlue">
          <div className="z-10">
            <HomePage animateControl={homeControl} />
            <StoryPage />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
