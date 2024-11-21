import Image from "next/image";
import { projectData } from "@/data/data";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col py-16">
      <div className="text-center py-5">
        <h1 className="font-bold lg:text-3xl text-2xl text-[#2f8890]">
          Projects
        </h1>
        <h1 className="font-bold lg:text-4xl text-2xl pb-4 pt-2 ">
          What I have made?
        </h1>
      </div>

      <div className="w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3  gap-x-7 gap-y-4">
        {projectData.map((item) => {
          return (
            <div
              key={item.id}
              className=" pt-0 pb-4 m-1  shadow-lg shadow-[#353030be] rounded-lg hover:scale-105 transition-all duration-300 "
            >
              <Image
                src={item.image}
                width={2000}
                height={2000}
                alt={"project1"}
                className="w-full pb-3 rounded-lg cursor-pointer "
              />
              <div className="px-3">
                <h3 className="font-bold text-[20px]">{item.title}</h3>
                <p className="text-[13px] pt-2">{item.description}</p>
                <div className="pt-4 flex justify-start items-center gap-x-9">
                  <Link
                    className="text-[#1e3758] font-semibold"
                    href={item.live}
                    target="_blank"
                  >
                    Live view
                  </Link>
                  <Link
                    className="text-[#1e3758] font-semibold"
                    href={item.github}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
