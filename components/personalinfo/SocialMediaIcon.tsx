import React from "react";
import SocialIcon from "./SocialIcon";
import { socialMediaLinks } from "@/utils/constants/GlobalConstant";

interface props {}

const SocialMediaIcon: React.FC<props> = ({}) => {
  return (
    <div className="icons flex mt-3 mb-3 md:mb-0 md:mt-5">
      <ul data-aos="fade-up" data-aos-duration="1500" className=" flex gap-5">
        {SocialIcon().map((icon, index) => (
          <li key={index}>
            <a href={socialMediaLinks[index]} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaIcon;
