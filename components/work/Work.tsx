import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div id="works" className="container m-auto px-4 md:px-0 mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="md:text-3xl font-black text-gray-400 text-2xl">Works</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">Here are some of my works.</p>
      </div>
      <div className="card-wrapper mx-auto md:w-[90%] w-fit mt-5">
        <div className="card-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 md:gap-12 space-y-5 md:space-y-0 ">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
