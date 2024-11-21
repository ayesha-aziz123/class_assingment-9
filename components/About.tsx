import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen  lg:px-20 py-20 px-6  md:px-36  flex justify-between items-center lg:flex-row flex-col-reverse gap-x-5 ">
      {/* Image */}
      <div className="lg:w-[40%] w-full">
        <Image
          className="w-[350px] h-[350px] object-cover rounded-sm mx-auto"
          src={"/images/about.jpg"}
          alt={"about"}
          width={2000}
          height={2000}
        />
      </div>

      {/* Content */}
      <div className="lg:w-[60%] w-full lg:text-start text-center py-9">
        <h1 className="text-[20px] font-bold py-3 text-[#255356]">About</h1>
        <h2 className="md:text-[38px] text-[30px]  font-bold py-2">About ME?</h2>
        <p className="md:text-xl text-[14px]">
        Hi, I&apos;m Ayesha, a hardworking and passionate individual on the path to becoming a web developer, with a strong interest in technology and creativity. I&apos;m currently expanding my expertise in Next.js and React. I specialize in HTML, CSS, and JavaScript, with growing proficiency in TypeScript. I believe in continuous learning and enjoy working on projects that not only challenge me but also help enhance my skills both technically and creatively.
        </p>
      </div>
    </div>
  );
};

export default About;
