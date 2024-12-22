import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import PropTypes from "prop-types";
import { ScrollToBehavior } from "../helper";

const NavDropDownItem = ({ to, children }) => {
  return (
    <>
      <Link to={to} className="hover:text-rotorbrown">
        {children}
      </Link>
    </>
  );
};

NavDropDownItem.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  url: PropTypes.string,
};

const NavDropDown = ({ data, style, showNav }) => {
  return (
    <div
      className={` bg-none ${
        showNav ? "flex" : "hidden"
      } lg:hidden lg:group-hover:flex flex-col gap-2 font-medium lg:text-[14px] hover:text-white absolute cursor-pointer mt-[95px]`}
    >
      <div
        className={`bg-sniffBg lg:group-flex lg:bg-white flex flex-wrap justify-start gap-4 bg-tranparent  lg:shadow-sm text-darkGreen lg:shadow-sniffGreen border-t-[2px] border-sniffGreen ${
          !style ? "lg:w-[300px]" : style
        } rounded-[10px]`}
      >
        <ul className=" mx-auto lg:group-flex w-full flex flex-wrap justify-start gap-6 px-[15px] py-[15px] pb-[20px]">
          {data.map(({ to, label }) => (
            <li
              onClick={to}
              className="flex gap-4 w-full"
              key={Math.random(100)}
            >
              <NavDropDownItem to={to}>{label}</NavDropDownItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

NavDropDown.propTypes = {
  style: PropTypes.string,
  data: PropTypes.array,
  showNav: PropTypes.bool,
  onClick: PropTypes.func,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const leftNavlinks = [
    {
      to: "about-us",
      label: "About us",
    },
    {
      to: "photo-gallery",
      label: "Photo Gallery",
    },
  ];

  const dropDownLinks = [
    {
      to: "our-services",
      link: "Our Services",
      sections: [
        {
          to: () => {
            if (location.pathname !== "/our-services") {
              navigate("/our-services", {
                state: { id: "event-management" },
              });
            } else {
              ScrollToBehavior("event-management");
            }
          },
          label: "Event Management",
        },
        {
          to: () => {
            if (location.pathname !== "/our-services") {
              navigate("/our-services", {
                state: { id: "event-supplies" },
              });
            } else {
              ScrollToBehavior("event-supplies");
            }
          },
          label: "Event Supplies",
        },
        {
          to: () => {
            if (location.pathname !== "/our-services") {
              navigate("/our-services", {
                state: { id: "experiential-marketing" },
              });
            } else {
              ScrollToBehavior("experiential-marketing");
            }
          },
          label: "Experiential Marketing",
        },
      ],
    },
  ];

  const activeLink = "text-[16px] text-white font-bold cursor-pointer";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreenAndOpen = window.innerWidth >= 1024 && open;
  const isLargeScreen = window.innerWidth >= 1024;

  return (
    <nav
      className={`h-[100px] lg:px-[60px] md:px-[20px] px-[10px] fixed w-full z-50 shadow ${
        !scrolling
          ? open
            ? "bg-white text-darkGreen"
            : "bg-transparent text-darkGreen"
          : "bg-darkGreen bg-opacity-80 lg:text-white text-darkGreen"
      }`}
    >
      <div className="items-center flex lg:justify-start justify-between w-full h-full max-w-screen-2xl mx-auto">
        <div className="lg:hidden w-fit items-center">
          <Link to="/">
            <img
              src={logo}
              className={`h-[60px] w-auto flex lg:hidden `}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="basis-1/6 lg:flex hidden items-center">
          <Link to={""}>
            <img
              src={logo}
              className={`h-[80px] w-auto lg:flex hidden `}
              alt="Logo"
            />
          </Link>
        </div>
        <ul
          className={`lg:flex lg:space-x-8 lg:flex-grow lg:items-center mt-[100px] lg:mt-0 transition-all duration-300 lg:static fixed top-0 left-0 lg:justify-center lg:px-0 px-6 h-screen lg:h-full ${
            open
              ? `top-[0px] lg:py-0 py-10 lg:space-y-0 space-y-8 bg-white border-r w-[50%] ${
                  !isLargeScreenAndOpen ? `bg-white` : "bg-white"
                }`
              : "left-[-100%] bg-opacity-100 top-[0px] lg:py-0 py-10 lg:space-y-0 space-y-8"
          } ${"top-[0px]"}`}
        >
          {leftNavlinks.map((link) => (
            <li
              key={link.to}
              onClick={!isLargeScreen ? () => setOpen(!open) : null}
              className="text-left capitalize"
            >
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? activeLink
                    : scrolling
                    ? "flex text-[16px] lg:text-sniffGreen font-bold cursor-pointer"
                    : "lg:text-sniffGreen text-[16px] font-bold cursor-pointer"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {dropDownLinks.map((dropdown) => (
            <li
              key={dropdown.link}
              className="group flex flex-col cursor-pointer lg:h-full w-full lg:w-fit relative"
            >
              <NavLink
                to={dropdown.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `
                    flex items-center justify-between font-bold lg:justify-normal h-full w-full lg:w-fit ${
                      isActive
                        ? activeLink
                        : scrolling
                        ? "flex text-[16px] lg:text-sniffGreen cursor-pointer"
                        : "lg:text-sniffGreen text-[16px]"
                    }
                      `}
              >
                {dropdown.link}
                <svg
                  className="hidden lg:block w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              <NavDropDown
                data={dropdown.sections}
                showNav={false}
                // onClick={NavLinkClicked}
              />
            </li>
          ))}
          <li>
            <NavLink
              to={"contact-us"}
              className={({ isActive }) =>
                isActive
                  ? activeLink
                  : scrolling
                  ? "flex text-[16px] lg:text-sniffGreen font-bold cursor-pointer"
                  : "lg:text-sniffGreen text-[16px] font-bold cursor-pointer"
              }
            >
              {`Contact us`}
            </NavLink>
          </li>
        </ul>
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
