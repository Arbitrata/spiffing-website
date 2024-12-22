import { about1, about2, about3, about4, aboutBadge, aboutHero, bg2, hero1, hero2, hero3 } from "../assets";
import { HeaderTitle } from "../components/headers";
import { Counter } from "../components/counter";
import AliceCarousel from "react-alice-carousel";
import { RenderHero } from "../components";
import { useRef } from "react";
import { FaEye, FaFontAwesomeFlag, FaHeart } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";

export default function AboutUsPage() {
  const heroCarouselRef = useRef();

  const missionVisionValues = [
    {
      title: "Mission",
      icon: <FaFontAwesomeFlag size={30} />,
      description:
        "Our mission is to provide exceptional event hosting services, turning ideas into extraordinary moments. We deliver quality, attention to detail, and personalized solutions to craft celebrations that exceed expectations and build lasting relationships.",
      style: "text-[#ADD6D3]",
    },
    {
      title: "Vision",
      icon: <BsFillLightbulbFill size={30} />,
      description:
        "To become a globally renowned leader in event hosting by creating remarkable experiences that foster meaningful connections. We aim to inspire joy and innovation, leaving a lasting impact on clients and guests.",
      style: "text-[#FFFF00]",
    },
    {
      title: "Values",
      icon: <FaHeart size={30} />,
      description:
        "Creativity, quality, and innovation define our work. We focus on details, personalized solutions, and building strong client relationships to create extraordinary and memorable experiences.",
      style: "text-sniffGreen",
    },
  ];

  return (
    <div className="w-full h-fit">
      <AliceCarousel
        ref={heroCarouselRef}
        duration={700}
        startIndex={0}
        fadeOutAnimation={true}
        autoPlay={false}
        disableDotsControls={true}
        disableButtonsControls={true}
        mouseDragEnabled={false}
        autoPlayInterval={2000}
        infinite={true}
      >
        <div>
          <RenderHero
            className={"h-[50vh] w-full"}
            src={aboutHero}
            alt={"Spiffing Events Limited"}
            title={"Spiffing Events Limited Your Premier Event Partner"}
          />
        </div>
      </AliceCarousel>
      <div className="w-full h-fit overflow-hidden bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[60px]">
        <div className="w-full h-fit overflow-hidden max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-x-[40px]">
          <div className="col-span-1 grid lg:grid-cols-2 grid-cols-2 grid-rows-2 bg-white gap-2">
            <div className={` lg:h-full h-[200px] row-span-1 bg-sniffBg`}>
              <img
                src={aboutBadge}
                alt="Spiffing Events Limited"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className={`  lg:h-full h-[200px] row-span-1 bg-sniffBg`}>
              <img
                src={about2}
                alt="Spiffing Events Limited"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="col-span-1  lg:h-full h-[200px] row-span-1 bg-sniffBg">
              <img
                src={about3}
                alt="Spiffing Events Limited"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="col-span-1  lg:h-full h-[200px] row-span-1 bg-sniffBg">
              <img
                src={about4}
                alt="Spiffing Events Limited"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="lg:space-y-10 space-y-8 col-span-1 flex flex-col justify-start h-full py-8 relative">
            <div className="w-full flex flex-col space-y-4">
              <p className="text-[16px] max-w-[460px] font-medium text-sniffGreen mb-4 leading-[25px]">
                {`About Us`}
              </p>
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Your Premier Event Partner
              </h1>
              <hr className="border-sniffGreen border-[2px] rounded-full w-[40%] mt-6" />
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              Relive the magic of 2024 with Spiffing Events. From grand galas to
              intimate gatherings, we've crafted unforgettable experiences. Our
              team of experts excels in event planning, design, and execution.
              Ready to make 2025 even more spectacular? Let's transform your
              vision into reality. Explore our portfolio of successful events
              and discover how Spiffing Events can elevate your next occasion.
            </p>
            <div className=" w-full flex flex-wrap justify-between max-w-[400px]">
              <Counter start={5000} end={7000} label={"Events"} />
              <Counter start={5} end={15} label={"Clients"} />
              <Counter start={100} end={250} label={"Equipments"} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-fit bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="relative h-full w-full bg-darkGreen bg-opacity-80 lg:px-[80px] md:px-[40px] px-[12px] flex flex-col pb-12 justify-center">
          <div className="w-full h-full p-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto gap-8">
            {missionVisionValues.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="w-full h-fit flex justify-center">
                  <p
                    className={`text-center py-4 border-b-4 rounded ${
                      item.style ? item.style : ""
                    }`}
                  >
                    {item.icon}
                  </p>
                </div>
                <h1 className="text-[33px] font-bold text-white text-center">
                  Our
                  <em className={`${item.style ? item.style : ""}`}>
                    {item.title}
                  </em>
                </h1>
                <p className="w-full text-[14px] font-medium text-center text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
