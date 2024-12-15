import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "../assets/Themis_logo.png";
import { ScrollToBehavior } from "../helper";

const Navbar = ({}) => {
  const navlinks = [
    {
      to: "/",
      label: "Software",
    },
    {
      to: "courses",
      label: "Courses",
    },
    {
      to: "data-management",
      label: "Data management",
    },
    {
      to: "law-practices",
      label: "Law practices",
    },
    {
      to: "Electronics&drone-technology",
      label: "Electronics & Drone Tech",
    },
  ];

  const [open, setOpen] = useState(false);

  const renderButton = () => {
    return (
      <Button
        onClick={() => ScrollToBehavior("contact")}
        buttonText={"Contact us"}
        buttonStyle={"text-white bg-darkgray px-[50px]"}
      />
    );
  };

  const activeLink =
    "text-[15px] text-textblue font-extrabold font-lato cursor-pointer";

  const inactiveLink =
    "text-[15px] text-textgray font-medium font-lato cursor-pointer";

  return (
    <nav className="h-[100px] lg:px-[70px] md:px-[30px] px-[20px] fixed bg-white w-full z-50 shadow">
      <div className="items-center flex justify-between w-full h-full max-w-screen-2xl mx-auto">
        <div className="w-full h-full basis-1/5 grid place-content-center">
          <img src={Logo} className="lg:w-[150px] w-auto" />
        </div>
        <ul
          onClick={() => setOpen(!open)}
          className={`lg:flex lg:w-full lg:h-full w-[60%] h-screen lg:space-x-5 lg:bg-white bg-beigeligter transition-all duration-200 lg:static absolute left-0 lg:justify-around lg:px-[80px] px-6 items-center ${
            open
              ? "top-[100px] lg:py-0 py-10 lg:space-y-0 space-y-8"
              : "left-[-100%] bg-opacity-100 top-[100px]"
          }`}
        >
          {navlinks.map((link) => (
            <li key={link.to} className="text-left uppercase">
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : "text-[15px] text-textgray font-medium font-lato cursor-pointer"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {open && <div className="lg:hidden py-[20px]">{renderButton()}</div>}
        </ul>

        <div className="basis-1/4 w-full h-full grid place-content-center lg:visible invisible">
          {renderButton()}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden visible md:pl-0 pl-4 text-darkgray"
        >
          {open ? <BiX size={30} /> : <BiMenu size={35} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
