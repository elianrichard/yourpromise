import { type NextPage } from "next";
import Head from "next/head";

import NavBar from "@/components/NavBar";
import HomePage from "@/modules/HomePage";
import BgDecoration from "@/components/BgDecoration";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YourPromise</title>
        <meta name="description" content="YourPromise Official Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-screen bg-mainBlue px-14">
        <NavBar />
        <BgDecoration />
        <main className="relative z-10 flex h-full w-full flex-col overflow-x-hidden">
          <HomePage />
        </main>
      </div>
    </>
  );
};

export default Home;
