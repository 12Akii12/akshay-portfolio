import React from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "@/utils/constants/GlobalConstant";

interface props {
  isOpen: boolean;
  toggleNav: Function;
  activeItem: string | null;
  closeMenu: Function;
}

const NavItem: React.FC<props> = ({ isOpen, toggleNav, activeItem, closeMenu }) => {
  return (
    <ul
      className={`flex items-center text-black md:space-x-6 md:flex-row
            ${
              isOpen ? "bg-white right-[0%] space-y-6" : "md:flex"
            } flex-col absolute m-auto top-0 w-[58%] md:w-full md:static h-screen md:h-fit
          
          `}
    >
      {/* Use a button tag for better accessibility */}
      {isOpen && (
        <button
          onClick={() => closeMenu()}
          className={`text-3xl block md:hidden relative right-1 top-4 left-4 container mx-auto`}
        >
          <RxCross2 size={25} />
        </button>
      )}

      {navItems.map((item) => (
        <li key={item.id} className="m-0 lg:m-6 flex gap-0 lg:gap-6 items-center justify-center">
          <Link
            onClick={() => toggleNav(item.name)}
            href={`#${item.name}`}
            className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
              item.name === activeItem ? "text-yellow-600" : "text-black"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}

      <a
        href="https://www.linkedin.com/in/akshay-jadhav-a22319161/"
        rel="noopener noreferrer"
        className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block  md:w-fit lg:px-8"
      >
        HIRE ME
      </a>
    </ul>
  );
};

export default NavItem;
