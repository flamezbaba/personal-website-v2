import { FC } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { cn } from "@/libs/utils";

const Divider: FC = () => {
  return (
    <div className="w-full flex justify-center items-center blur-[1px]">
      <div className="w-[50px] h-[1px] bg-slate-400 opacity-30"></div>
      <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
      <div className="w-[50px] h-[1px] bg-slate-400 opacity-30"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 justify-start items-start relative"
      )}
    >
      <Head>
        <title>Elijah Segun</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className="fixed h-[400px] top-[20%] left-12 flex flex-col justify-center items-center md:hidden">
        <div className="w-[7px] h-[7px] rounded-full bg-pink-600 p-1 border-[5px] border-[--my-black] ring-white ring-1"></div>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-purple-600"></div>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-blue-600"></div>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <div className="w-[7px] h-[7px] rounded-full bg-yellow-600"></div>
      </div>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Portfolio />
      <Divider />
      <Footer />
    </div>
  );
}
