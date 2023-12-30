import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrGithub } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/ui/Button";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/Footer";
import { cn, workType, myWorks, gloock } from "@/libs/utils";

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
                  <div className="text-lg">{currentProject.heading}</div>
                  <IoIosClose size={30} onClick={() => closeModal()} />
                </div>

                <div className="w-full  mt-10 md:mt-4">
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
                            <img alt="" src={i.src} key={index} />
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
                    <p className="font-bold">Tech Stack & Tools</p>
                    <ul className="mt-1 list-disc space-y-2 ml-8 md:ml-4 text-sm">
                      {currentProject.tools?.map((tool, index) => (
                        <li className="" key={index}>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentProject.services.length > 0 && (
                    <div className="w-full mt-5">
                      <p className="font-bold text-[1rem]">Deliverables</p>
                      <ul className="mt-1 list-disc space-y-2 ml-8 md:ml-4 text-sm">
                        {currentProject.services?.map((s, index) => (
                          <li className="" key={index}>
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
        <div className="w-full flex md:flex-col justify-start items-start md:justify-center md:items-center flex-wrap px-[50px] md:px-0 gap-20 mt-20 text-white">
          {myWorks.map((work, index) => (
            <div
              key={index}
              className="w-[400px] md:w-[350px] ring-2 ring-[--main-color] h-[220px] px-[20px] py-[20px] rounded-2xl relative flex justify-center items-center"
            >
              <div className="flex items-center justify-between p-1 text-white font-sans absolute h-[40px] w-[90%] bg-gradient-to-b from-[--my-black] from-50% to-transparent rounded-2xl shadow-lg shadow-[--my-black] top-[-20px]">
                <div onClick={() => openModal(index)} className="ml-1 text-lg">
                  {work.heading}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => openModal(index)}
                    size="sm"
                    className="text-sm py-1 px-6 font-light uppercase"
                  >
                    Preview
                  </Button>
                  {work.github && (
                    <Link href={work.github} target="_blank">
                      <div className="bg-white rounded-md text-[--main-color] px-2 py-1 cursor-pointer">
                        <GrGithub />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
              <Image
                onClick={() => openModal(index)}
                src={work.images[0]}
                className="rounded-2xl border-[1px] border-[--main-color] border-solid w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
