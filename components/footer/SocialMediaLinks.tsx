import { footerSocialMediaLinks } from "@/utils/constants/GlobalConstant";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const SocialMediaLinks = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "telegram":
        return <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />;
      case "whatsapp":
        return <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />;
      case "instagram":
        return <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />;
      default:
        return null;
    }
  };

  return (
    <>
      {footerSocialMediaLinks.map((data, index) => (
        <a
          key={index}
          data-aos="fade-up"
          data-aos-duration={data.duration}
          href={data.link}
          rel="noopener noreferrer"
          className="box font-medium text-white flex items-center justify-center flex-col"
          target="_blank"
        >
          {getIcon(data.icon)}
          <p>{data.text}</p>
        </a>
      ))}
    </>
  );
};

export default SocialMediaLinks;
