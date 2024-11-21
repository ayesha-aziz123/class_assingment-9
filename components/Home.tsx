import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="min-h-screen py-14 bg-[#457B9D1A]  w-full lg:flex-row  flex-col flex lg:justify-between justify-center  items-center lg:gap-x-14 lg:gap-y-0 lg:px-20  sm:px-14 gap-y-10 px-5 lg:text-start text-center">
      {/* content */}
      <div className="lg:w-[60%] w-full mx-auto">
        <h3 className={` text-[24px] text-[#457B9D]`}>Hi Everyone, I am</h3>
        <h1 className="text-[48px] font-bold">Ayesha Aziz</h1>
        <p className="md:text-[18px] text-[14px]">
        Developed responsive web applications with optimized performance, enhanced user interfaces, and integrated UI/UX design principles to create engaging and intuitive user experiences.
        </p>
        <br />
        <button className="md:py-3 md:px-9 sm:px-5 sm:py-2 px-3 py-3 my-3 mr-3 bg-[#457B9D] rounded-[5px] shadow-md shadow-[#363636be] text-white inline-flex items-center gap-x-4 hover:transition-all hover:translate-y-[-4px] hover:ease-linear">
          Download CV <IoCloudDownloadOutline />
        </button>
        <button  className="md:py-3 md:px-9 sm:px-8 sm:py-2  px-4 py-3 border-[1px] shadow-md shadow-[#484747b7] border-[#457B9D] text-[#457B9D] bg-[#457B9D1A] rounded-[5px] hover:transition-all hover:translate-y-[-4px] hover:ease-linear hover:text-[#fff] hover:bg-[#446a8285] ">
          Explore More
        </button>
      </div>

      {/* image */}
      <div className="lg:w-[40%] w-full  ">
        <Image
          className="md:h-[400px] md:w-[400px] h-[300px] w-[300px] mx-auto rounded-[10px] object-cover"
          src={"/images/dp2.jpg"}
          alt={"image"}
          height={2000}
          width={2000}
        />
      </div>
    </div>
  );
};

export default Home;
