import React from "react";
import {
  SiPostgresql,
  SiPostman,
  SiGithub,
  SiGit,
  SiGitlab,
  SiBitbucket,
  SiFigma,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import SkillBox from "@/components/skills/SkillBox";

const Tools = () => {
  return (
    <div id="tools">
      <div className=" container m-auto px-8 md:px-0 mt-16">
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 md:text-2xl">Tools</h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <p data-aos="fade-up" className=" text-gray-700 font-medium w-[100%]">
          I&apos;m proficient with the following tools.
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className="right relative flex-1 flex flex-wrap p-3 md:p-5 gap-10 items-center justify-center sm:w-full">
            <div className="tools1 flex flex-col gap-10 ">
              <SkillBox logo={<SiGit />} black={"white"} white={"black"} skill={"Git"} />
              <SkillBox logo={<SiGithub />} black={"white"} white={"black"} skill={"Github"} />
            </div>
            <div className="tools3 flex flex-col gap-10">
              <SkillBox
                logo={<SiPostgresql />}
                black={"black"}
                white={"white"}
                skill={"pgAdmin4"}
              />
              <SkillBox logo={<SiPostman />} black={"black"} white={"white"} skill={"Postman"} />
            </div>
            <div className="tools2 flex flex-col gap-10 ">
              <SkillBox logo={<SiGitlab />} black={"white"} white={"black"} skill={"Gitlab"} />
              <SkillBox
                logo={<SiBitbucket />}
                black={"white"}
                white={"black"}
                skill={"Bitbucket"}
              />
            </div>
            <div className="tools2 flex flex-col gap-10 ">
              <SkillBox logo={<SiFigma />} black={"black"} white={"white"} skill={"Figma"} />
              <SkillBox logo={<TbBrandVscode />} black={"black"} white={"white"} skill={"VsCode"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
