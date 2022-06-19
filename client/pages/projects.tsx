import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/card/Card";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Projects</title>
      </Head>
      <main className="flex flex-col w-full">
        <h1 className="text-2xl xl:text-2xl xl:w-3/6 mb-2 lg:text-2xl md:text-2xl sm:text-42xl  font-bold w-4/6  tracking-wide">
          Featured
        </h1>
        <div className="projects flex flex-col">
          {/* project */}
          <Card
            title=" Company website for Tusvik Pulverlakk, a Norwegian color powder company"
            description="This project was made for Norwegian based color powder comany. The project was developed with the JavaScript framework Next.js, a framework that is built on top of React.js."
            url="tusvik.png"
          />
          {/* project */}
          <Card title="Bug tracker and analyser" url="bugg.png" />
        </div>
      </main>
    </div>
  );
};

export default Projects;
