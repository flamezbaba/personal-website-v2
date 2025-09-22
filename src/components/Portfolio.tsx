import { FC, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import { cn, gloock, myWorks } from "@/libs/utils";
import { GrGithub, GrView } from "react-icons/gr";
import { IoEye, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Eye, EyeOff } from "lucide";
import PortfolioItem from "./PortfolioItem";

interface props {}

const works = myWorks.slice(0, 6);

const Portfolio = forwardRef<any, props>((props, ref) => {
  const router = useRouter();

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center pt-[50px] pb-[50px]"
    >
      <div className="w-full flex justify-center items-center text-white">
        <span
          className={cn(gloock.className, "text-5xl text-with-shadow")}
          data-txt="Works"
        >
          Portfolio
        </span>
      </div>

      <div className="w-full grid grid-cols-3 md:grid-cols-1 px-[90px] md:px-[20px] gap-20 mt-20 text-white">
        {works.map((work, index) => (
         <PortfolioItem work={work} key={index} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <Link href={`/portfolio`}>
          <Button size="sm" className="text-lg font-light capitalize">
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
});

export default Portfolio;
