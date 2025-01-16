import { FC, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { cn } from "@/libs/utils";
import clsx from "clsx";

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
  const pinkRef = useRef<any>(null);
  const purpleRef = useRef<any>(null);
  const blueRef = useRef<any>(null);
  const yellowRef = useRef<any>(null);

  const [blue, setBlue] = useState(false);
  const [pink, setPink] = useState(false);
  const [purple, setPurple] = useState(false);
  const [yellow, setYellow] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPink(true);
        } else {
          setPink(false);
        }
      },
      { threshold: 0.1 }
    );

    const blueobserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlue(true);
        } else {
          setBlue(false);
        }
      },
      { threshold: 0.1 }
    );

    const purpleobserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPurple(true);
        } else {
          setPurple(false);
        }
      },
      { threshold: 0.1 }
    );

    const yellowobserver = new IntersectionObserver(
      ([entry]) => {
        console.log("yellow", entry);
        if (entry.isIntersecting) {
          
          setYellow(true);
        } else {
          setYellow(false);
        }
      },
      { threshold: 0.1 }
    );

    if (pinkRef.current) {
      observer.observe(pinkRef.current);
    }

    if (blueRef.current) {
       blueobserver.observe(blueRef.current);
    }

    if (purpleRef.current) {
      purpleobserver.observe(purpleRef.current);
    }

    if (yellowRef.current) {
      yellowobserver.observe(yellowRef.current);
    }

    return () => {
      if (pinkRef.current) {
        observer.unobserve(pinkRef.current);
      }

      if (purpleRef.current) {
        purpleobserver.unobserve(purpleRef.current);
      }

      if (blueRef.current) {
        blueobserver.unobserve(blueRef.current);
      }

      if (yellowRef.current) {
        yellowobserver.unobserve(yellowRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("flex flex-col gap-10 justify-start items-start relative")}
    >
      <Head>
        <title>Elijah Segun</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className="fixed z-10 h-[400px] top-[20%] left-12 flex flex-col justify-center items-center md:hidden">
        <a href="#hero"
          className={clsx(
            [pink ? "ring-2" : "ring-0"],
            "w-[7px] h-[7px] cursor-pointer duration-500 rounded-full bg-pink-600 p-1 border-[5px] border-[--my-black] ring-pink-600"
          )}
        ></a>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <a href="#skills"
          className={clsx(
            [purple ? "ring-2" : "ring-0"],
            "w-[7px] h-[7px] cursor-pointer duration-500 rounded-full bg-purple-600 p-1 border-[5px] border-[--my-black] ring-purple-600"
          )}
        ></a>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <a href="#portfolio"
          className={clsx(
            [blue ? "ring-2" : "ring-0"],
            "w-[7px] h-[7px] cursor-pointer duration-500 rounded-full bg-blue-600 p-1 border-[5px] border-[--my-black] ring-blue-600"
          )}
        ></a>
        <div className="w-[1px] h-[50px] bg-slate-400 opacity-30"></div>
        <a href="#contact"
          className={clsx(
            [yellow ? "ring-2" : "ring-0"],
            "w-[7px] h-[7px] cursor-pointer duration-500 rounded-full bg-yellow-600 p-1 border-[5px] border-[--my-black] ring-yellow-600"
          )}
        ></a>
      </div>
      <div ref={pinkRef} id="hero" className="w-full pb-3">
        <Hero />
      </div>
      <Divider />
      <div ref={purpleRef} id="skills" className="w-full">
        <Skills />
      </div>
      <Divider />
      <div ref={blueRef} id="portfolio" className="w-full">
        <Portfolio />
      </div>
      <Divider />
      <div ref={yellowRef} id="contact" className="w-full">
        <Footer />
      </div>
    </div>
  );
}
