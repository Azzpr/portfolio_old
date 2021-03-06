import React from "react";
import Link from "next/router";

const Card = (props: {
  url: string | undefined;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="project pb-4 pt-4 hover:shadow-sm    mb-2 hover:cursor-pointer bg-white w-[90%] p-4 rounded-md flex">
      <div className="img mr-2 self-center h-20">
        <img
          src={props.url}
          alt="pic"
          className="  h-full min-w-[130px] object-cover  rounded-md"
        />
      </div>

      <div className="info flex ml-4 flex-col justify-between">
        <h2 className="font-bold text-primary ">{props.title}</h2>
        <p>{props.description}</p>
        <div className="links flex self-start w-14 text-secondary  ">
          <ul className="flex w-full justify-between mt-2">
            <li>
              <a href={"https://github.com"}>
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
              </a>
            </li>
            <li>
              <a href={"https://github.com"}>
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
