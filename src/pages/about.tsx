import Image from "next/image";
import Head from "next/head";
import Nav from "@/components/ui/Nav";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { cn, gloock } from "@/libs/utils";

import myPic from "public/pic.jpg";

export default function About() {
  return (
    <div
      className={cn("flex flex-col gap-10 justify-start items-start relative")}
    >
      <Head>
        <title>Sangosanya Segun</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Nav />
      <div className="w-full flex flex-col justify-center items-center px-[90px] md:px-[20px]">
        <div className="w-full flex justify-center items-center pt-[100px] text-white">
          <p
            className={cn(gloock.className, "text-5xl text-with-shadow")}
            data-txt="About Me"
          >
            About Me
          </p>
        </div>
        <div className="flex items-start justify-center flex-wrap gap-10 mt-10 w-[60%] md:w-full">
          <div className="w-[300px] h-[300px] ring-2 ring-[--main-color] rounded-lg">
            <Image src={myPic} alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="text-white flex-1 tracking-wider text-lg font-san font-thin">
            I am Segun, a Full-Stack Web Developer with over five
            years of real-world experience building web applications that match
            client needs.
            <br />
            <br />
            I am confident with the skills and talent that I had earned with my
            past working experience across different industries. I have
            developed several web applications from scratch, at the same time, I
            used to work on clients existing projects as I have outstanding
            debugging skills.
            <br />
            <br />I love my work, and that helps me deliver in a much
            professional way.
          </div>
        </div>
      </div>
      <Skills />
      <Footer />
    </div>
  );
}
