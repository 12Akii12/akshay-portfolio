import React from "react";
import { TypeAnimation } from "react-type-animation";
import CTASection from "./CTASection";
import SocialMediaIcon from "./SocialMediaIcon";
import { SkillSeats } from "@/utils/constants/GlobalConstant";

const PersonalDetails = () => {
  return (
    <div className="left order-2 md:order-1 mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-full md:py-2 sm:py-0">
      <div className="info w-fit flex flex-col items-start justify-center gap-3 md:gap-2">
        <h2 data-aos="fade-up" className="text-4xl font-bold md:text-[2rem]">
          Hello, I&apos;m Akshay Jadhav
        </h2>
        <TypeAnimation
          data-aos="fade-up"
          sequence={["Frontend Developer", 2000, "Fullstack Enthusiast", 2000, ""]}
          speed={30}
          wrapper="h2"
          repeat={Infinity}
          className="text-yellow-500 text-3xl font-bold md:text-4xl"
        />
        <p className="md:text-[1.1rem] font-medium w-full md:w-full text-gray-600 text-[.95rem]">
          Software Development Engineer at Fitpage
        </p>
        <p className="md:text-[1rem] font-medium w-full md:w-3/4 text-gray-600 text-[.95rem]">
          {SkillSeats}
        </p>
      </div>
      <CTASection />
      <SocialMediaIcon />
    </div>
  );
};

export default PersonalDetails;
