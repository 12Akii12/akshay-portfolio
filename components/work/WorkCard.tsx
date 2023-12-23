import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { data } from "@/utils/constants/GlobalConstant";
import WorkLink from "./WorkLink";

const WorkCard = () => {
  return (
    <>
      {data.map((data, i) => (
        <div
          data-aos="zoom-in"
          key={data.id}
          className="flex flex-col justify-center items-center gap-4 relative group"
        >
          <div className="relative h-[260px] w-[92%] md:h-[280px] md:w-[380px] hover:scale-[.87] transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden bg-cover mx-auto ">
            <img
              src={`/images/${data.img}.png`}
              alt={data.title}
              className="object-fit w-full h-full hover:scale-[.87] transition duration-500 cursor-pointer"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity backdrop-blur-md bg-white bg-opacity-80 rounded-md overflow-hidden p-4 popup group-hover:opacity-90">
              <div className="flex items-center justify-center gap-4">
                <WorkLink
                  hrefLink={data.link}
                  icon={
                    <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  }
                  text={"Demo"}
                />
                <WorkLink
                  hrefLink={data.git}
                  icon={
                    <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  }
                  text={"Code"}
                />
              </div>
            </div>
          </div>
          <p className="text-gray-800 text-lg font-medium md:text-lg">{data.title}</p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
