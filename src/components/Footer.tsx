import { FC } from "react";
import Link from "next/link";
import { cn, gloock } from "@/libs/utils";
import { GrGithub, GrMail, GrLinkedin } from "react-icons/gr";

interface props {}

const Footer: FC<props> = () => {
  const openExternalLink = (link: string | undefined) => {
    if (typeof link == "string") {
      window.open(link, "_blank");
    }
  };
  return (
    <div
      className="w-full flex flex-col justify-center pt-[50px] pb-[150px]"
      id="contact"
    >
      <div className="w-full flex justify-center items-center text-white">
        <p
          className={cn(gloock.className, "text-5xl text-with-shadow")}
          data-txt="Contact Me"
        >
          Contact Me
        </p>
      </div>

      <div className="w-full flex justify-center items-center text-white">
        <div className="w-[50%] flex justify-center gap-10 items-center mt-10">
          <Link href="mailto:sangosanyasegun@gmail.com" target="_blank">
            <GrMail size={50} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sangosanyasegun/"
            target="_blank"
          >
            <GrLinkedin size={40} />
          </Link>
          <Link href="https://github.com/flamezbaba" target="_blank">
            <GrGithub size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
