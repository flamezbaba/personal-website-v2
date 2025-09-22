import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
import { GrGithub } from "react-icons/gr";
import Image from "next/image";

export default function PortfolioItem({ work }: { work: any }) {
  const router = useRouter();

  const imgWidth = work?.stackImages?.length ? work.stackImages.length * 11 : 0;
  return (
    <div className="w-[400px] md:w-full ring-2 ring-[--main-color] h-[220px] px-[20px] py-[20px] rounded-2xl relative flex flex-col justify-center items-center">
      <div className="flex items-center justify-between p-1 text-white font-sans absolute h-[40px] w-[90%] bg-gradient-to-b from-[--my-black] from-50% to-transparent rounded-2xl shadow-lg shadow-[--my-black] top-[-20px]">
        <div onClick={() => router.push("/portfolio")} className="ml-1 text-lg">
          {work.heading}
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/portfolio?name=${work.name}`}>
            {/* <Button
                    size="sm"
                    className="text-sm py-1 px-6 font-light uppercase"
                  >
                    Preview
                  </Button> */}
            <div className="bg-[#6a47ef] rounded-md text-[--main-color] px-2 py-1 cursor-pointer">
              <IoEye color="#ffffff" />
            </div>
          </Link>
          {work?.github && (
            <div className="bg-white rounded-md text-[--main-color] px-2 py-1 cursor-pointer">
              <GrGithub
                onClick={() => router.push(`/portfolio?name=${work.name}`)}
              />
            </div>
          )}
        </div>
      </div>
      <Image
        onClick={() => router.push(`/portfolio?name=${work.name}`)}
        src={work.images[0]}
        className="rounded-2xl border-[1px] border-[--main-color] border-solid w-full h-full object-cover"
        alt=""
      />

      {work?.stackImages?.length > 0 && (
        <div
          style={{ width: `${imgWidth}%` }}
          className="py-5 flex gap-5 justify-center items-center overflow-hidden absolute bottom-0 top-[calc(100%_-_20px)] bg-gradient-to-b from-[--my-black] from-50% to-transparent rounded-2xl shadow-lg shadow-[--my-black]"
        >
          {work?.stackImages?.map((im: any, index: any) => (
            <img src={im} alt="" className="" key={index} width={20} />
          ))}
        </div>
      )}
    </div>
  );
}
