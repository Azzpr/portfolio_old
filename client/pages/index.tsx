import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Homepage</title>
      </Head>
      <main className="flex flex-col w-full ">
        <h1 className="text-7xl xl:text-7xl xl:w-3/6 lg:text-6xl md:text-5xl sm:text-4xl  font-bold w-4/6  tracking-wide">
          Building digital products, brands
          <span className="text-primary flex w-96 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h1> experience.</h1>
          </span>
        </h1>
        <p className="w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/3 xs:w-2/3 mt-2">
          a <span className="font-bold">Full-stack Developer</span>
          and <span className="font-bold">Automation Engenieer</span>. I
          specialize in Responsive Web Design, Mobile development and general
          SaaS.
        </p>
        <form className="mt-4" action="">
          <input
            className="p-2 pr-12 rounded-sm"
            type="text"
            placeholder="Email address"
          />
          <button className="p-2 ml-1 rounded-sm text-white bg-primary">
            Connect With Me
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
