import React from "react";
import NavBar from "./navBar/NavBar";
import PersonalInfo from "./personalinfo/PersonalInfo";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Resume from "./resume/Resume";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Tools from "./Tools/Tools";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <PersonalInfo />
      <Skills />
      <Tools />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
