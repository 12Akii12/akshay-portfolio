import LandingPage from "@/components/LandingPage";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeMeta from "@/components/metaTags/HomeMeta";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
    }); // Initialize AOS once the component is mounted on the client side
  }, []);

  return (
    <>
      <HomeMeta />
      <LandingPage />
    </>
  );
};

export default Home;
