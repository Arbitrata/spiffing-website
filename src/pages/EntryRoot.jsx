import { Link, Outlet, useLocation } from "react-router-dom";
import { Footer, Icon, NavBar } from "../components";
import { ScrollToTop } from "../helper";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
import { useEffect, useState } from "react";

const socialLinks = [
  {
    icon: <FaFacebookF size={20} className="text-sniffGreen" />,
    to: "/",
  },
  {
    icon: <BsTwitterX size={20} className="text-sniffGreen" />,
    to: "/",
  },
  {
    icon: <FaInstagram size={20} className="text-sniffGreen" />,
    to: "/",
  },
  {
    icon: <FaLinkedinIn size={20} className="text-sniffGreen" />,
    to: "/",
  },
];

function EntryRoot() {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowButton(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-primaryBackgroundWhite">
      <ScrollToTop />
      <NavBar />
      <div className="fixed z-50 top-1/2 right-0 -translate-y-1/2 text-[100px] w-fit px-4 h-auto">
        <div className="w-full flex flex-col items-center mb-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={link.icon} className={"w-[35px] h-[35px]"} />
            </Link>
          ))}
        </div>
      </div>
      {showButton && (
        <div className="w-fit h-fit bottom-8 z-30 fixed md:block hidden right-4">
          <button
            className="p-2 rounded-full bg-darkGreen text-white"
            onClick={scrollToTop}
          >
            <BiArrowToTop size={24} />
          </button>
        </div>
      )}
      <Outlet />
      <Footer />
    </main>
  );
}

export default EntryRoot;
