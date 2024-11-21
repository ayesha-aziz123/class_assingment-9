"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  function toggel() {
    setMenu(!isMenu);
  }

  useEffect(() => {
    const sidebar = document.querySelector(".nav") as HTMLElement;

    if (sidebar) {
      if (isMenu) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenu]);

  return (
    <div className=" bg-[#457B9D1A] border-b-[1px] border-b-[#202528] flex justify-between items-center  px-12 py-5">
      <h1 className="text-2xl font-bold">Ayesha</h1>

      <MdOutlineMenu className=" md:hidden block " size={30} onClick={toggel} />
      {/* Mobile reponsive */}
      <ul className="hidden h-[40vh] nav absolute right-0  flex-col justify-center  items-center px-6 py-9 rounded-xl top-[72px] bg-[#ffffff] w-1/2 ">
        <li className="py-2 border-b-[1px] border-b-black">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="py-2 border-b-[1px] border-b-black">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="py-2 border-b-[1px] border-b-black">
          <Link href={"/skills"}>Skills</Link>
        </li>
        <li className="py-2 border-b-[1px] border-b-black">
          <Link href={"/projects"}>Projects</Link>
        </li>
      </ul>
      {/* Desktop reponsive */}

      <ul className="hidden md:flex justify-between md:items-center text-xl  gap-x-9 ">
        <li className="hover:transition-all hover:scale-105 hover:text-blue-500">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:transition-all hover:scale-105 hover:text-blue-500">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:transition-all hover:scale-105 hover:text-blue-500">
          <Link href={"/skills"}>Skills</Link>
        </li>
        <li className="hover:transition-all hover:scale-105 hover:text-blue-500">
          <Link href={"/projects"}>Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
