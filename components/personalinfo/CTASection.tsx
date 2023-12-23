import React from "react";
import { FiDownload } from "react-icons/fi";

const CTASection = () => {
  return (
    <div data-aos="fade-up" className="buttons flex gap-5">
      <a
        href="https://www.linkedin.com/in/akshay-jadhav-a22319161/"
        rel="noopener noreferrer"
        target="_blank"
        className="bg-black text-[1rem] text-white md:px-10 py-2 px-8 rounded-lg font-bold  hover:text-yellow-500"
      >
        <span> Hire Me</span>
      </a>
      <a
        href={"/pdf/AkshayJadhavResume.pdf"}
        rel="noopener noreferrer"
        className="flex items-center gap-2 border- text-[1rem] bg-white border-black md:px-7 py-2 px-6 rounded-lg font-bold  hover:text-yellow-500"
        download
      >
        <div className="flex items-center gap-1">
          Resume <FiDownload />
        </div>
      </a>
    </div>
  );
};

export default CTASection;
