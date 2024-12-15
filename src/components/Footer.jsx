import React from "react";
import Logo from "../assets/Themis_logo.png";
import Icon from "./Icon";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import {
  MdAlternateEmail,
  MdNavigateNext,
  MdOutlineLocationOn,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const path = pathname.replace("/", "");

  const socialLinks = [
    {
      icon: <FaFacebookF size={15} />,
      to: "https://www.facebook.com/profile.php?id=100066285712103&mibextid=ZbWKwL",
    },
    {
      icon: <FiTwitter size={15} />,
      to: "https://x.com/AviationThemis?s=20",
    },
    {
      icon: <FaInstagram size={15} />,
      to: "https://instagram.com/themis_aviation?igshid=MzRlODBiNWFlZA==",
    },
    {
      icon: <FaLinkedinIn size={15} />,
      to: "https://www.linkedin.com/company/themis-aviation/",
    },
  ];

  const contactInfo = [
    {
      icon: <FiPhoneCall size={15} />,
      text: "+254 20 203 3011",
    },
    {
      icon: <MdAlternateEmail size={15} />,
      text: "info@themisaviation.com",
    },
    {
      icon: <MdOutlineLocationOn size={15} />,
      text: "Nairobi, Kenya",
    },
  ];

  const quickLinks = [
    {
      link: "Software",
      to: "",
    },
    {
      link: "Courses",
      to: "courses",
    },
    {
      link: "Data management",
      to: "data-management",
    },
    {
      link: "Law practices",
      to: "law-practices",
    },
    {
      link: "Electronics & drone technology",
      to: "Electronics&drone-technology",
    },
  ];

  const scrollToTop = (to) => {
    if (to === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate(to);
    }
  };

  return (
    <footer
      id="contact"
      className="bg-darkgray lg:h-[352px] h-fit text-white font-lato"
    >
      <div className="w-full max-w-screen-2xl mx-auto lg:px-[50px] lg:pt-[70px] pt-[50px] px-[30px] font-lato">
        <div className="grid grid-cols-1 gap-8 px-4 pb-6 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <img src={Logo} alt="themis logo" className="w-[200px]"/>
            <div className="w-full py-[15px]">
              <h1 className="text-[15px] font-semibold font-lato">
                Your trusted CAMO solutions
              </h1>
              <div className="w-full flex space-x-3 mt-[15px]">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      icon={link.icon}
                      className={
                        "w-[35px] h-[35px] rounded-full border border-textgray"
                      }
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="uppercase text-[14px] font-extrabold mb-[20px]">
              Quick Links
            </h2>
            <ul className="font-medium font-lato space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex text-[15px] items-center cursor-pointer hover:underline capitalize"
                >
                  <MdNavigateNext size={20} />
                  <div onClick={() => scrollToTop(link.to)}>{link.link}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="uppercase text-[15px] font-extrabold mb-[20px]">
              Contact us
            </h2>
            <ul className=" text-[15px] font-medium space-y-3">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex text-[15px] items-center space-x-2"
                >
                  <span>{item.icon}</span>
                  <span> {item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-[15px] font-extrabold">
              Our Location
            </h2>
            <iframe
              className="w-full py-3 h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17044271548!2d36.76499566887959!3d-1.3030359780507914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1694770649092!5m2!1sen!2ske"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <hr className="border border-white" />
        <div className=" w-full h-[55px] text-center grid place-content-center font-medium text-[15px]">
          © 2023 Themis Aviation Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
