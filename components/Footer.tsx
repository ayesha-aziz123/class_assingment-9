import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:px-16 md:py-9 px-8 py-6 bg-[#d6edef] ">
      <h1 className="text-2xl font-semibold text-[#315c5f]">Contacts</h1>
      <h1 className="font-bold text-3xl py-3">Get in Touch</h1>
      <p>Ayesha1212@gmail.com</p>
      <div className="flex justify-start items-center py-4 gap-x-5">
        <Link
          className="text-[#315c5f]"
          target="_blank"
          href={"https://www.linkedin.com/in/ayesha-aziz-574780310/"}
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          className="text-[#315c5f]"
          target="_blank"
          href={"https://github.com/ayesha-aziz123"}
        >
          <FaGithub size={30} />
        </Link>
        <Link href={"#"} className="text-[#315c5f]">
          <FaInstagram size={30} />
        </Link>
      </div>

      <p className="pt-5 lg:text-[17px] text-[12px]">
        Copyright © 2023. Develope & Designed by Ayesha Aziz
      </p>
    </div>
  );
};

export default Footer;
