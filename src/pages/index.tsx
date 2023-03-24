import { type NextPage } from "next";
import Head from "next/head";

import NavBar from "@/components/NavBar";
import HomePage from "@/modules/HomePage";
// import BgDecoration from "@/components/BgDecoration";
import StoryPage from "@/modules/StoryPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YourPromise</title>
        <meta name="description" content="YourPromise Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-screen">
        <NavBar />
        {/* <BgDecoration /> */}
        <main className="relative z-10 flex h-full w-full flex-col overflow-x-hidden">
          <HomePage />
          <StoryPage />
        </main>
      </div>
    </>
  );
};

export default Home;
