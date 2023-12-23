import { TechIcon } from "@/utils/constants/GlobalConstant";
import React from "react";

const TechIconStripe = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="container m-auto md:flex hidden items-center justify-center mt-8 gap-8 md:gap-5"
    >
      {TechIcon.map((item) => {
        return (
          <img
            key={item.id}
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src={item.link}
            alt={item.name}
          />
        );
      })}
    </div>
  );
};

export default TechIconStripe;
