import React from "react";

interface props {
  logo: any;
  name: string;
  value: number;
  duration?: number;
}

const ProgressBar: React.FC<props> = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-1 text-xl font-semibold">
      <div className="flex justify-between">
        <p className="text-[1.15rem] flex items-center gap-3 sm:text-[1rem] exsm:text-sm exsm:gap-3">
          {logo} {name}
        </p>{" "}
      </div>
      <div className="h-[8px] w-full rounded-3xl bg-gray-300 ">
        <div
          className={`h-[8px] rounded-3xl bg-yellow-500`}
          style={{
            width: `${value}%`,
            transition: `width ${duration}ms ease-in-out`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
