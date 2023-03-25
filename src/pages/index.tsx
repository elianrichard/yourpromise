import { useEffect } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { useAnimationControls } from "framer-motion";

import NavBar from "@/components/NavBar";
import HomePage from "@/modules/HomePage";
import StoryPage from "@/modules/StoryPage";

import { Waypoint } from "react-waypoint";

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
        <main className="relative flex h-full w-full flex-col overflow-y-hidden bg-mainBlue">
          <HomePage animateControl={homeControl} />
          <Waypoint
            onEnter={() => void homeControl.start("exit")}
            onLeave={({ currentPosition }) => {
              if (currentPosition === "above") {
                void homeControl.start("exit");
              } else {
                void homeControl.start("reshow");
              }
            }}
            bottomOffset={10}
          />
          <StoryPage />
        </main>
      </div>
    </>
  );
};

export default Home;
