import { FC } from "react";
import { cn, gloock } from "@/libs/utils";
import Nav from "@/components/ui/Nav";
// const gloock = Gloock({ weight: "400", subsets: ["cyrillic-ext"] });

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <div className="w-full relative flex justify-center items-center pt-[200px] pb-[50px] md:pt-[100px] px-[80px] md:px-[40px] before:absolute before:-z-40 before:top-[-45%] before:h-[600px] md:before:h-[300px] before:w-[70%] before:rounded-full before:blur-[300px] before:bg-gradient-radial before:from-[--top-bg] before:to-transparent before:content-['']">
      <Nav />
      <div className="text-white text-center flex flex-col justify-center items-center">
        <div className="w-full md:px-[20px]">
          <span
            className={cn(
              gloock.className,
              "text-7xl md:text-5xl text-with-shadow"
            )}
            data-txt="Elijah"
          >
            Elijah
          </span>
          <p className={cn(gloock.className, "text-7xl md:text-5xl")}>Segun</p>
        </div>
        <div className="w-[60%] md:w-full mt-5">
          <p className="leading-relaxed text-lg md:text-sm md:font-[400] tracking-wider">
            I am Elijah, a <span className="">Full-Stack Web Developer </span>{" "}
            with over five years of real-world experience building web
            applications that match client needs. I am confident with the skills
            and talent that I had earned with my past working experience across
            different industries. <br/>I have developed several web applications from
            scratch, at the same time, I used to work on clients existing
            projects as I have outstanding debugging skills. I love my work, and
            that helps me deliver in a much professional way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
