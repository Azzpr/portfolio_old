import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row sm:flex-col h-20 items-center justify-around">
        <div className="left w-full md:w-1/3 sm:w-full justify-center md:justify-start  sm:justify-center flex items-center  ">
          <div className="logo ">
            <h1 className="font-bold text-black md:text-white sm:text-black bg-white rounded-full pl-2 pr-2 md:bg-black sm:bg-white hover:cursor-pointer text-xl">
              Mathias Ödlund
            </h1>
          </div>
        </div>
        <div className="right flex items-center  justify-around w-full md:w-2/3 sm:w-full ">
          <div className="center w-2/3 xl:w-1/3 lg:w-2/5 md:w-3/5  flex items-center justify-center text-black md:text-white sm:text-black bg-white rounded-full pl-2 pr-2 md:bg-black sm:bg-white ">
            <ul className="flex w-full justify-around">
              <li>
                <Link href="/">
                  <a className="">Home</a>
                </Link>
              </li>
              <li>
                <Link href="projects">
                  <a className="">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="services">
                  <a className="">Services</a>
                </Link>
              </li>
              <li>
                <Link href="contact">
                  <a className=" text-sec">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right flex w-1/3 items-center justify-end">
            <ul className="flex   w-full   xl:w-4/6 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-2/3 cursor-pointer items-center justify-around ">
              <li className="p-[10px] w-[37px] md:p-[13px] md:w-[44px] sm:p-[10px] sm:w-[37px] flex items-center justify-center bg-[#000000] text-white  rounded-full">
                <Link href="/github">
                  <i className="gg-code-slash   "></i>
                </Link>
              </li>
              <li className="p-2 md:p-3 sm:p-2 bg-[#000000] text-white  rounded-full">
                <Link href="/instagram">
                  <i className="gg-instagram   "></i>
                </Link>
              </li>

              <li className="p-2 md:p-3 sm:p-2 bg-[#000000] text-white  rounded-full">
                <Link href="/twitter">
                  <i className="gg-twitter   "></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
