import { FC, useState, Fragment } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { cn, gloock } from "@/libs/utils";
import Link from "next/link";
import Image from "next/image";
import signature from "public/signature.png";

interface props {}

const Nav: FC<props> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <Fragment>
      <div className="w-full flex justify-between absolute top-0 left-0 px-[20px] py-[20px] md:py-[10px] text-white">
        <Link href="/">
          <Image src={signature} alt="" className="w-[100px]" />
        </Link>
        <IoIosMenu size={40} onClick={openNav} />
      </div>
      {isNavOpen && (
        <div className="fixed w-full min-h-screen bg-[--my-black] top-0 z-50 ">
          <div className="w-full h-screen flex flex-col justify-start items-center before:absolute before:-z-40 before:top-[-55%] before:h-[600px] md:before:h-[300px] before:w-[70%] before:rounded-full before:blur-[300px] before:bg-gradient-radial before:from-[--top-bg] before:to-transparent before:content-['']">
            <div className="text-white flex justify-between items-start w-full p-5">
              <Image src={signature} alt="" className="w-[100px]" />
              <IoIosClose
                onClick={closeNav}
                size={50}
                className="hover:scale-150 transition-all duration-500 cursor-pointer"
              />
            </div>
            <div
              className={cn(
                gloock.className,
                "w-full text-white text-3xl gap-10 mt-10 flex flex-col justify-center items-center"
              )}
            >
              <Link
                href="/"
                className="hover:scale-150 transition-all duration-500"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="hover:scale-150 transition-all duration-500"
              >
                Works
              </Link>
              <Link
                href="/about"
                className="hover:scale-150 transition-all duration-500"
              >
                About Me
              </Link>
              <Link
                onClick={() => setIsNavOpen(false)}
                href="/cv.pdf"
                target="_blank"
                className="hover:scale-150 transition-all duration-500"
              >
                Resume
              </Link>
              <Link
                onClick={() => setIsNavOpen(false)}
                href="/#contact"
                className="hover:scale-150 transition-all duration-500"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Nav;
