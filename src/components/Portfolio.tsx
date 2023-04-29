import {FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import { cn, gloock, myWorks } from "@/libs/utils";
import { GrGithub } from "react-icons/gr";


interface props {}

const works = myWorks.slice(0, 3);

const Portfolio: FC<props> = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center pt-[50px] pb-[50px]">
      <div className="w-full flex justify-center items-center text-white">
        <span
          className={cn(gloock.className, "text-5xl text-with-shadow")}
          data-txt="Works"
        >
          Portfolio
        </span>
      </div>

      <div className="w-full flex md:flex-col justify-center items-center flex-wrap px-[90px] md:px-[20px] gap-20 mt-20 text-white">
        {works.map((work, index) => (
          <div
            key={index}
            className="w-[400px] md:w-[350px] ring-2 ring-[--main-color] h-[220px] px-[20px] py-[20px] rounded-2xl relative flex justify-center items-center"
          >
            <div className="flex items-center justify-between p-1 text-white font-sans absolute h-[40px] w-[90%] bg-gradient-to-b from-[--my-black] from-50% to-transparent rounded-2xl shadow-lg shadow-[--my-black] top-[-20px]">
              <div
                onClick={() => router.push("/portfolio")}
                className="ml-1 text-lg"
              >
                {work.title}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => router.push("/portfolio")}
                  size="sm"
                  className="text-sm py-1 px-6 font-light uppercase"
                >
                  Preview
                </Button>
                {work.github != "" && (
                  <div className="bg-white rounded-md text-[--main-color] px-2 py-1 cursor-pointer">
                    <GrGithub onClick={() => router.push("/portfolio")} />
                  </div>
                )}
              </div>
            </div>
            <Image
              onClick={() => router.push("/portfolio")}
              src={work.image}
              className="rounded-2xl border-[1px] border-[--main-color] border-solid w-full h-full object-fill"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <Button
          onClick={() => router.push("/portfolio")}
          size="sm"
          className="text-lg font-light capitalize"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
