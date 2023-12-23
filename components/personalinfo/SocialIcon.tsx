import React from "react";
import { AiFillTwitterCircle, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const SocialIcon = () => {
  return [
    <AiFillGithub key="github" className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />,
    <FaLinkedinIn key="linkedin" className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />,
    <AiFillInstagram key="instagram" className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />,
    <FaFacebook key="facebook" className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />,
    <AiFillTwitterCircle key="twitter" className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />,
  ];
};

export default SocialIcon;
