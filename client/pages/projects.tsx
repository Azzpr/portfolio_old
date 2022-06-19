import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card/Card";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Projects</title>
      </Head>
      <main className="flex flex-col w-full pt-[5%] pl-[10%]">
        <h1 className="text-2xl xl:text-2xl xl:w-3/6 mb-2 lg:text-2xl md:text-2xl sm:text-2xl  font-bold w-4/6  tracking-wide">
          Featured
        </h1>
        <div className="projects flex flex-col">
          {/* project */}
          <Card
            title="Company website for Tusvik Pulverlakk, a Norwegian color powder company"
            description="This website was made for a Norwegian-based color powder company. The project was developed with the JavaScript framework Next.js."
            url="tusvik.png"
          />
          {/* project */}
          <Card
            title="Bug tracker and analyser"
            description="A bug tracker and analyser used for detecting and categorizing bugs and errors before the project is shipped to production."
            url="bugg.png"
          />
        </div>
      </main>
    </div>
  );
};

export default Projects;
