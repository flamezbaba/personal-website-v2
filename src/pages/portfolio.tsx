import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrGithub } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/ui/Button";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/Footer";
import { cn, workType, myWorks, gloock } from "@/libs/utils";
import PortfolioItem from "@/components/PortfolioItem";

export default function Portfolio() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<workType>({
    name: "",
    heading: "",
    writeup: "",
    images: [],
    tools: [],
    youtube: "",
    link: "",
    github: "",
    services: [],
  });

  const openModal = (index: number) => {
    setCurrentProject(myWorks[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    router.push("/portfolio");
  };

  function findProject(name: string) {
    return myWorks.findIndex((i) => i.name == name);
  }

  useEffect(() => {
    if (modalOpen) {
      document.body.style.cssText = ";overflow: hidden;";
    } else {
      document.body.style.cssText = "";
    }
  }, [modalOpen]);

  useEffect(() => {
    if (router.query.name) {
      const index = findProject(router.query.name.toString());
      openModal(index);
      // console.log("Dd", index);
    }
  }, [router]);

  return (
    <div
      className={cn("flex flex-col gap-10 justify-start items-start relative")}
    >
      <Head>
        <title>Elijah Segun</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Nav />

      {modalOpen && (
        <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-black/80 w-full min-h-screen z-30 overflow-auto">
          <div className="absolute top-[100px] bottom-0 w-[80%] md:w-[95%] h-auto rounded-md z-50">
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col px-[40px] md:px-[20px] py-[20px] bg-[--my-black] text-white">
                <div className="text-white flex justify-between items-center md:items-start">
                  <div className="text-xl">{currentProject.heading}</div>
                  <IoIosClose size={40} onClick={() => closeModal()} className="cursor-pointer"/>
                </div>

                <div className="w-full mt-20 md:mt-4">
                  <div className="w-full">
                    {currentProject.youtube ? (
                      <div className="mb-5">
                        <iframe
                          className="w-full"
                          height={400}
                          src={`https://www.youtube.com/embed/${currentProject.youtube}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    ) : (
                      <Carousel autoPlay>
                        {currentProject.images.map((i, index) => (
                          <div>
                            {/* <p>{i}</p> */}
                            <img
                              alt=""
                              src={i.src}
                              key={index}
                              style={{
                                width:
                                  currentProject?.type == "app" ? "250px" : "",
                              }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    )}
                  </div>
                  <div className="w-full">
                    <div
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: currentProject.writeup,
                      }}
                    />
                  </div>

                  <div className="w-full mt-5">
                    <p className="font-bold text-xl">Tech Stack & Tools</p>

                    <div className="w-full flex flex-wrap gap-5 mt-2">
                      {currentProject.tools?.map((tool, index) => (
                        <div
                          key={index}
                          className="ring-1 ring-white px-5 py-2 rounded-full text-[12px]"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {currentProject.services.length > 0 && (
                    <div className="w-full mt-10">
                      <p className="font-bold text-xl">Project Highlights</p>
                      <ul className="mt-1 list-disc space-y-2 ml-8 md:ml-4 text-sm">
                        {currentProject?.highlights?.map((s, index) => (
                          <li className="font-light text-sm" key={index}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="leading-loose font-medium">
                    <div className="mt-5 mb-10 flex gap-5">
                      {currentProject.link && (
                        <Link href={currentProject.link} target="_blank">
                          <Button
                            size="lg"
                            className="text-sm py-4 px-6 font-light uppercase"
                          >
                            Project Link
                          </Button>
                        </Link>
                      )}
                      {currentProject.github && (
                        <Link href={currentProject.github} target="_blank">
                          <Button
                            size="lg"
                            className="text-sm py-3 px-6 font-light uppercase"
                          >
                            <GrGithub size={26} />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[300px]"></div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col justify-center items-center px-[40px] md:px-[20px]">
        <div className="w-full flex justify-center items-center pt-[100px] text-white">
          <span
            className={cn(gloock.className, "text-6xl text-with-shadow")}
            data-txt="Works"
          >
            Portfolio
          </span>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-1 px-[50px] md:px-0 gap-20 mt-20 text-white">
          {myWorks.map((work, index) => (
            <PortfolioItem work={work} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
