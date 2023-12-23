import React from "react";
import ResumeCard from "./ResumeCard";
import { educationCardData, resumeData } from "@/utils/constants/GlobalConstant";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto px-8 md:px-0 mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-2xl font-black text-gray-400 md:text-3xl">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      <div>
        <ResumeCard header={"Experience"} cardData={resumeData} />
        <div className="mt-10">
          <ResumeCard header={"Education"} cardData={educationCardData} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
