import { hero1, logo } from "../assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiSolidEnvelope, BiWorld } from "react-icons/bi";

function Footer() {

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
              <p className="text-textGray text-[14px] font-medium mt-4">
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
                Our Location
              </h2>
              <img
                src={hero1}
                alt="Rotorjet Aviation"
                className="w-full h-[300px]"
              />
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
