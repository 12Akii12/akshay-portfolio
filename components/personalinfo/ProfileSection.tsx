import React from "react";
import { FaPlay } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="right order-1 md:order-2 top-5 pt-5 md:pt-0 flex-1 flex items-center justify-center md:items-end sm:items-end">
      <div className="relative h-[88%] w-fit mt-5 md:mt-0 flex items-center sm:items-end">
        <img
          data-aos="fade-up"
          className=" h-[90%] rounded-full w-full object-cover md:h-[85%] md:m-auto sm:m-0"
          src="/images/AkshayProfile.jpeg"
          alt="mine"
        />
        <div className="absolute bottom-3 md:bottom-10 right-2 md:right-8">
          <div data-aos="zoom-in" data-aos-duration="1000" className=" relative cursor-pointer">
            <img
              className="w-[90px] md:w-[135px] circle-text"
              src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
              alt=""
            />
            <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
