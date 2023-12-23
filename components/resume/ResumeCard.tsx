import React from "react";

interface props {
  header: string;
  cardData: any;
}

const ResumeCard: React.FC<props> = ({ header, cardData }) => {
  return (
    <>
      <legend className="w-fit ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
        {header}
      </legend>
      <div className="border-b-2 border-yellow-500 mb-2 mx-auto w-20 mt-1"></div>
      <div className="card-wrapper md:w-[90%] w-full mt-5 flex flex-col md:flex-row gap-5 md:gap-0 mx-auto ">
        {cardData.map((data: any) => {
          return (
            <div
              key={data.id}
              className="flex-1 flex-row flex-wrap flex items-center justify-center"
            >
              <fieldset data-aos="zoom-in" className="w-full md:w-[80%] md:p-6 py-8 md:py-12 p-2">
                <div className="relative">
                  <div className="design hidden md:flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] md:left-[-160px] ">
                    <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                    <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                    <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  </div>
                  <div className=" flex flex-col gap-1 md:gap-0 border-2 border-yellow-400 h-64 overflow-y-auto shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                    <h1 className="md:text-[1.4rem] font-semibold text-xl">{data.title}</h1>
                    <span className="md:text-[.9rem] font-semibold text-gray-500 text-base">
                      {data.name}
                    </span>
                    <span className="md:text-[.9rem] font-semibold text-yellow-500 text-base">
                      {data.joindate}
                    </span>
                    {data.grade && (
                      <span className="md:text-[.9rem] font-semibold text-gray-500 text-base">
                        {"Grade: "}
                        {data.grade}
                      </span>
                    )}
                    <ul className="text-[.9rem] text-justify break-words text-gray-500">
                      {data.description.split("\n").map((point: string, index: number) => (
                        <li key={index}>{point.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </fieldset>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResumeCard;
