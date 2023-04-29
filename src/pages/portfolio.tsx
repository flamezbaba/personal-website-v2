import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GrGithub } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import Button from "@/components/ui/Button";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/Footer";
import { cn, workType, myWorks, gloock } from "@/libs/utils";



export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<workType>({});

  const openModal = (index: number) => {
    setCurrentProject(myWorks[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openExternalLink = (link: string | undefined) => {
    if (typeof link == "string") {
      window.open(link, "_blank");
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.cssText = ";overflow: hidden;";
    } else {
      document.body.style.cssText = "";
    }
  }, [modalOpen]);

  return (
    <div
      className={cn("flex flex-col gap-10 justify-start items-start relative")}
    >
      <Head>
        <title>Sangosanya Segun</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Nav />

      {modalOpen && (
        <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 bg-black/80 w-full min-h-screen z-30 overflow-auto">
          <div className="absolute top-[100px] bottom-0 w-[80%] md:w-[95%] h-auto rounded-md z-50">
            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col px-[40px] py-[20px] bg-[--my-black] text-white">
                <div className="text-white flex justify-between items-center md:items-start">
                  <div className="text-xl">{currentProject.heading}</div>
                  <IoIosClose size={50} onClick={() => closeModal()} />
                </div>

                <div className="w-full flex md:flex-col gap-10 mt-10 md:mt-4">
                  <div className="w-2/3 md:w-full">
                    <Image
                      src={currentProject.image}
                      className="rounded-md w-full"
                      alt=""
                    />
                  </div>
                  <div className="leading-loose font-medium">
                    <p> {currentProject.tools}</p>
                    <div className="mt-5">
                      {currentProject.ideas?.map((idea) => (
                        <p className="">- {idea}</p>
                      ))}
                    </div>
                    <div className="mt-5 mb-10 flex gap-5">
                      {currentProject.link != "" && (
                        <Button
                          onClick={() => openExternalLink(currentProject.link)}
                          size="lg"
                          className="text-sm py-4 px-6 font-light uppercase"
                        >
                          Project Link
                        </Button>
                      )}
                      {currentProject.github != "" && (
                        <Button
                          onClick={() =>
                            openExternalLink(currentProject.github)
                          }
                          size="lg"
                          className="text-sm py-4 px-6 font-light uppercase"
                        >
                          <GrGithub size={27} />
                        </Button>
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
                  {work.title}
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => openModal(index)}
                    size="sm"
                    className="text-sm py-1 px-6 font-light uppercase"
                  >
                    Preview
                  </Button>
                  {work.github != "" && (
                    <div className="bg-white rounded-md text-[--main-color] px-2 py-1 cursor-pointer">
                      <GrGithub onClick={() => openExternalLink(work.github)} />
                    </div>
                  )}
                </div>
              </div>
              <Image
                onClick={() => openModal(index)}
                src={work.image}
                className="rounded-2xl border-[1px] border-[--main-color] border-solid w-full h-full object-fill"
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
