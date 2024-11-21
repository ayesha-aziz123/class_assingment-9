import Image from "next/image";
const Skills = () => {
  return (
    <div className="min-h-screen w-full  flex justify-center items-center flex-col">
      <div className="text-center pb-9">
        <h1 className="font-bold lg:text-3xl text-[22px] py-4 text-[#2f8890]"> Skills</h1>
        <h1 className="font-bold md:text-4xl text-2xl">What I am Capable of?</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-8  gap-x-12 ">
        <Image
          src={"/skills/html.jpg"}
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          width={100}
          height={100}
          alt={"skills"}
        />
        <Image
          src={"/skills/css.jpg"}
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          width={100}
          height={100}
          alt={"skills"}
        />
        <Image
          src={"/skills/js.jpg"}
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          width={100}
          height={100}
          alt={"skills"}
        />
        <Image
          src={"/skills/ts.jpg"}
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          width={100}
          height={100}
          alt={"skills"}
        />
        <Image
          src={"/skills/nextjs.jpg"}
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          width={100}
          height={100}
          alt={"skills"}
        />
        <Image
          className="cursor-pointer hover:transition-all hover:scale-105 hover:ease"
          src={"/projects/tailwind.jpg"}
          width={100}
          height={100}
          alt={"skills"}
        />
      </div>
    </div>
  );
};

export default Skills;
