import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <div id="works" className="mx-auto m-auto md:h-[300px] mt-16 h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between md:p-10 p-7">
        <h2 data-aos="zoom-out" className="font-bold text-5xl sm:text-3xl">
          Let&apos;s Talk
        </h2>
        <div className="flex items-center justify-center md:gap-8 gap-5">
          <SocialMediaLinks />
        </div>
        <div className="text-[12px] md:text-base">
          | Copyright &copy; <span>2023 Portfolio </span> All rights reserved
          <a href="#" rel="noopener noreferrer"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
