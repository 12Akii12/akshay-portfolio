import React from "react";
import {
  SiJavascript,
  SiTailwindcss,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import ProgressBar from "@/components/skills/ProgressBar";
import SkillBox from "@/components/skills/SkillBox";
import TechIconStripe from "./TechIconStripe";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto px-8 md:px-0 mt-16">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 md:text-2xl">My Skills</h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="left flex-1 w-full">
            <p data-aos="fade-up" className=" text-gray-700 font-medium w-[100%]">
              Here are my skills.
            </p>
            <div
              data-aos="zoom-in"
              className="left progress flex items-center h-[100%] md:justify-end justify-center"
            >
              <div className=" flex flex-col gap-6 md:w-3/4 my-5 w-[90%]">
                <ProgressBar logo={<SiJavascript />} name={"Javascript"} value={90} />
                <ProgressBar logo={<SiTypescript />} name={"Typescript"} value={75} />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={85} />
                <ProgressBar logo={<SiNextdotjs />} name={"Next Js"} value={80} />
                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind CSS"} value={95} />
                <ProgressBar logo={<SiRedux />} name={"Redux toolkit"} value={85} />
              </div>
            </div>
          </div>
          <div className="right relative flex-1 flex flex-wrap p-3 md:p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10 ">
              <SkillBox logo={<IoLogoNodejs />} black={"white"} white={"black"} skill={"Node Js"} />
              <SkillBox logo={<SiNestjs />} black={"white"} white={"black"} skill={"Nest Js"} />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiPostgresql />}
                black={"black"}
                white={"white"}
                skill={"PostgreSQL"}
              />
              <SkillBox logo={<SiPostman />} black={"black"} white={"white"} skill={"Postman"} />
            </div>
          </div>
        </div>

        {/* icons */}
        <TechIconStripe />
      </div>
    </div>
  );
};

export default Skills;
