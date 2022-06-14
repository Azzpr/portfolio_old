import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
          <div className="project pb-2 hover:shadow-sm  xl:max-h-32 lg:max-h-32 md:max-h-38 sm:max-h-42 mb-2 hover:cursor-pointer bg-white w-[90%] p-4 rounded-md flex">
            <div className="img mr-2 h-full">
              <img
                src="bugg.png"
                alt="pic"
                className=" h-full object-cover rounded-md"
              />
            </div>

            <div className="info flex flex-col">
              <h2 className="font-bold text-primary ">
                Bug tracker and analyser{" "}
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                voluptates maxime fugiat quas suscipit dicta omnis similique
                labore officiis accusamus?
              </p>
              <div className="links flex self-end w-14 text-secondary ">
                <ul className="flex w-full justify-between">
                  <li>
                    <Link href={"https://github.com"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://github.com"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
