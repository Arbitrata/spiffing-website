import { logo, recent1, recent2, recent3, recent4, recent5 } from "../assets";
import { FaPhone } from "react-icons/fa6";
import { BiSolidEnvelope, BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import servicesData from "../data/recentEvents.json";
import { useEffect, useState } from "react";

function Footer() {
  const [services, setServices] = useState([]);

  const images = {
    recent1,
    recent2,
    recent3,
    recent4,
    recent5,
  };

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const contactInfo = [
    {
      icon: <BiWorld size={20} />,
      text: "Alpha Road, Elgon View.",
    },
    {
      icon: <FaPhone size={20} />,
      text: "+254 748 925 103",
    },
    {
      icon: <FaPhone size={20} />,
      text: "+254 700 767 864",
    },
    {
      icon: <BiSolidEnvelope size={20} />,
      text: "info@spiffingevents.co.ke",
    },
  ];

  return (
    <>
      <footer id="contact" className="bg-sniffBg text-white h-fit font-lato">
        <div className="w-full max-w-screen-2xl mx-auto pt-14 pb-4 lg:px-[30px] font-lato">
          <div className="grid grid-cols-1 gap-8 px-4 pb-6 lg:grid-cols-[2fr_2fr_3fr] md:grid-cols-2 h-fit">
            <div>
              <img src={logo} alt="themis logo" className="w-fit" />
              <p className="text-darkGreen text-[16px] font-light md:text-left text-left lg:px-8 px-4 mt-12">
                A gathering place for event professionals, creators, and
                visionaries to inspire and shape unforgettable moments.
              </p>
            </div>

            <div className="p-4">
              <h2 className="uppercase text-[20px] text-darkGreen font-extrabold mb-[20px]">
                Contact us
              </h2>
              <ul className="space-y-8">
                {contactInfo.map((item, index) => (
                  <li
                    key={index}
                    className="flex text-[16px] items-center space-x-2"
                  >
                    <span className=" text-darkGreen">{item.icon}</span>
                    <span className=" text-textGray"> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 overflow-hidden lg:col-span-1 md:col-span-2">
              <h2 className="uppercase text-[20px] text-darkGreen font-extrabold mb-[20px]">
                Recent Event
              </h2>
              <div className="w-full h-fit flex-grow grid md:grid-cols-3 grid-cols-2 gap-1 justify-between">
                {services.map((event, index) => (
                  <img
                    key={index}
                    src={images[event.image]}
                    alt={`Spiffing events limited - ${event?.title}`}
                    className="w-full object-cover h-[150px] flex-grow"
                  />
                ))}
                <div className="w-full h-full flex flex-col text-darkGreen hover:text-sniffGreen text-center underline rounded-md justify-center px-4">
                  <Link to={"photo-gallery"}>See More</Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-darkGreen mt-2 mx-2 lg:mx-0" />
          <div className="w-full py-2 text-darkGreen text-center grid place-content-center font-bold text-[12px] md:text-[14px] mt-2">
            © Sniffing Events Limited. All Rights Reserved - 2024
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
