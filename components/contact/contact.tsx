import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="container m-auto px-8 md:px-0 mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">Contact</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[100%] md:w-[90%] mx-auto mt-5 flex items-center justify-center flex-col md:flex-row">
        <div className="left w-full md:w-[70%] flex-1 flex items-center justify-center flex-col md:flex-row">
          <div className="flex-3 md:w-1/2 gap-3 flex items-end justify-end  flex-col w-3/4">
            <div data-aos="zoom-in">
              <h1 className="md:text-5xl font-bold text-3xl">Get in Touch</h1>
              <h3 className="md:text-xl text-lg">
                Connect with me for a sprinkle of creativity and collaboration!
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 md:w-[70%] w-[95%] mx-auto"
            action="mailto:ajakshayjadhav2207@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name=""
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. John Doe"
              name=""
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows={4}
              cols={50}
              placeholder="Write your message"
              name=""
              id=""
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="number"
              placeholder="e.g. 12345 56785"
              name=""
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
