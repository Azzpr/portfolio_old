import React from "react";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Contact</title>
      </Head>
      <main className="flex flex-col justify-center items-center">
        <form
          action="mailto:post@tusvikpulverlakk.no"
          method="GET"
          className=""
        >
          <div>
            <div className="w-full flex items-center justify-center my-12">
              <div className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                  Contact me.
                </p>
                <div className="md:flex items-center mt-12">
                  <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Name
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-black mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Enter your name."
                    />
                  </div>
                  <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base capitalize font-semibold leading-none text-gray-800">
                      Email address
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input email address"
                      type="name"
                      name="subject"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-black mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                      placeholder="Enter your email address."
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Subject
                    </label>
                    <textarea
                      tabIndex={0}
                      aria-label="Enter your message"
                      role="textbox"
                      type="body"
                      name="body"
                      className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-black mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 mt-4">
                  Feel free to contact me through my buisness email; &nbsp;
                  <span className="underline">
                    mathiasodlund@protonmail.com
                  </span>
                </p>

                <div className="flex items-center justify-center w-full">
                  <button
                    value="send"
                    type="submit"
                    className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-black rounded hover:bg-black-600 focus:ring-2 focus:ring-offset-2 focus:ring-black-700 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default contact;
