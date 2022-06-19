import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Portfolio - Homepage</title>
      </Head>
      <main className="flex flex-col w-full   items-center md:items-start sm:items-center pt-[5%] md:pt-[5%] md:pl-[10%] sm:pt-[5%] sm:pl-[10%] ">
        <h1 className="text-5xl xl:text-7xl lg:text-5x  lg:text-7xl md:text-6xl sm:text-5xl xl:w-3/6   font-bold w-4/6  tracking-wide">
          Building digital products, SaaS
          <span className="text-primary flex  ">
            <h1> solutions.</h1>
          </span>
        </h1>
        <p className="w-2/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/3 xs:w-2/3 mt-2">
          a <span className="font-bold">Full-stack Developer</span>
          and <span className="font-bold">Automation Engenieer</span>. I
          specialize in Responsive Web Design, Mobile development and general
          SaaS.
        </p>
        <form
          className="w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-2/3 mt-4"
          action="mailto:post@tusvikpulverlakk.no"
        >
          <input
            className="p-2 pr-12 rounded-sm"
            type="name"
            placeholder="Email address"
          />
          <button className="p-2 mt-2 md:mt-0 sm:mt-2 ml-1 rounded-sm text-white bg-primary">
            Connect With Me
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
