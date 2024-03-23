import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = (name: any) => {
    setActiveIndex(name === activeIndex ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateToLandingPage = () => {
    window.scrollTo(0, 0);
    router.push("/");
  };

  const clickOnHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full mx-auto px-8 md:px-0 fixed top-0 py-5 md:py-0 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className="container m-auto flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <button onClick={navigateToLandingPage} className="text-xl font-bold md:text-3xl">
            Portfolio.
          </button>
        </div>
        <div data-aos="fade-down" className="nav-items flex items-center space-x-11">
          <button
            onClick={clickOnHamburgerMenu}
            className="cursor-pointer text-2xl md:hidden block"
          >
            <HiMenu size={25} />
          </button>

          <NavItem
            isOpen={isOpen}
            toggleNav={toggleNav}
            activeItem={activeIndex}
            closeMenu={clickOnHamburgerMenu}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
