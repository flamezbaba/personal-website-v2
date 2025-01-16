import { FC } from "react";
import { cn, gloock } from "@/libs/utils";

interface props {}

const frontEnd: string[] = [
  "HTML, CSS, Javascript",
  "TypeScript",
  "React.js, Next.js, Redux ToolKits, Styled-components",
  "Vue.js, Nuxt.js, Vuex, Pinia",
  "SCSS, TailwindCSS, Bootstrap",
  "Framer Motion, GSAP, Three.js",
  "Storybook, Cypress, Jest",
];

const backEnd: string[] = [
  "PHP, Laravel, Inertia JS",
  "NodeJs, Express",
  "MySQL, MongoDB, Firebase, GraphQL",
  "RESTApi",
  "AWS, Vercel, Netlify, Digital Ocean",
];

const mobileApp: string[] = [
  "React Native",
  "Expo",
  "Zustand",
  "React Query",
];

const Skills: FC<props> = () => {
  return (
    <div className="w-full flex flex-col justify-center pt-[50px] pb-[50px]">
      <div className="w-full flex justify-center items-center text-white">
        <span
          className={cn(gloock.className, "text-5xl text-with-shadow")}
          data-txt="My Skills"
        >
          My Skills
        </span>
      </div>

      <div className="w-full flex md:flex-col md:px-[50px] justify-center gap-20 md:gap-12 items-start mt-10 text-white">
        <div className="flex flex-col justify-start items-start">
          <div className="">
            <span
              className={cn(gloock.className, "text-3xl text-with-shadow")}
              data-txt="01"
            >
              Front End Dev
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {frontEnd.map((skill, index) => (
              <span key={index} className="text-lg tracking-wider  relative font-thin font-sans before:absolute before:top-[calc(40%)] before:left-[-20px] before:contents-[''] before:h-[10px] before:w-[10px] before:border-[2px] before:border-[--my-black] before:ring-white before:ring-1 before:bg-[--main-color] before:rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">
            <span
              className={cn(gloock.className, "text-3xl text-with-shadow")}
              data-txt="02"
            >
              Back End Dev
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {backEnd.map((skill, index) => (
              <span key={index} className="text-lg tracking-wider relative font-thin font-sans before:absolute before:top-[calc(40%)] before:left-[-20px] before:contents-[''] before:h-[10px] before:w-[10px] before:border-[2px] before:border-[--my-black] before:ring-white before:ring-1 before:bg-[--main-color] before:rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">
            <span
              className={cn(gloock.className, "text-3xl text-with-shadow")}
              data-txt="03"
            >
              Mobile App Dev
            </span>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            {mobileApp.map((skill, index) => (
              <span key={index} className="text-lg tracking-wider relative font-thin font-sans before:absolute before:top-[calc(40%)] before:left-[-20px] before:contents-[''] before:h-[10px] before:w-[10px] before:border-[2px] before:border-[--my-black] before:ring-white before:ring-1 before:bg-[--main-color] before:rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
