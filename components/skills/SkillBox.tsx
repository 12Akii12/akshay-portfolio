import React from "react";

interface props {
  logo: any;
  black: string;
  white: string;
  skill: string;
}

const SkillBox: React.FC<props> = ({ logo, black, white, skill }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`box w-[7.2rem] h-[7.2rem] md:w-[11rem] md:h-[11rem] rounded-lg bg-${black} text-${white} shadow-2xl flex flex-col items-center justify-center gap-4 p-1`}
    >
      <div
        className={`bg-${white} text-${black} h-14 w-14 md:w-14 md:h-14 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl`}
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
