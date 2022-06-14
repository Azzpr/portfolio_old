import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="flex h-20 items-center justify-around">
        <div className="left w-1/3 flex items-center ">
          <div className="logo ">
            <h1 className="font-bold hover:cursor-pointer">Mathias Odlund</h1>
          </div>
        </div>
        <div className="center w-1/3 flex items-center justify-center">
          <ul className="flex w-full justify-around">
            <li>
              <Link href="/">
                <a className="hover:text-primary">About</a>
              </Link>
            </li>
            <li>
              <Link href="projects">
                <a className="hover:text-primary">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="services">
                <a className="hover:text-primary">Services</a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a className="hover:text-primary text-sec">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right flex w-1/3 items-center justify-end">
          <ul className="flex  w-2/3 lg:w-1/3 md:w-2/3 sm:w-2/3 xs:w-2/3 justify-around ">
            <li className="p-4 hover:bg-[#f9f9fc] rounded-full">
              <Link href="/github">
                <i className="gg-code-slash text-secondary  hover:text-primary"></i>
              </Link>
            </li>
            <li className="p-4 hover:bg-[#f9f9fc] rounded-full">
              <Link href="/instagram">
                <i className="gg-instagram  text-secondary hover:text-primary"></i>
              </Link>
            </li>

            <li className="p-4 hover:bg-[#f9f9fc] rounded-full">
              <Link href="/twitter">
                <i className="gg-twitter rounded-full text-secondary   hover:text-primary"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
