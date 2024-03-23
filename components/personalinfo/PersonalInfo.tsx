import React from "react";
import PersonalDetails from "./PersonalDetails";
import ProfileSection from "./ProfileSection";

const PersonalInfo = () => {
  return (
    <div
      id="home"
      className="w-full h-full py-0 md:py-40 lg:py-0 flex items-center lg:h-screen bg-gradient-to-r from-green-200 to-blue-200"
    >
      <div className="container mx-auto pt-5 md:h-full md:flex-row px-8 md:px-0 flex flex-col sm:pt-0">
        <PersonalDetails />
        <ProfileSection />
      </div>
    </div>
  );
};

export default PersonalInfo;
