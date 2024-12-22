import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, FeedCard, RenderHero } from "../components";
import Marquee from "react-fast-marquee";
import { ScrollToBehavior } from "../helper";
import { about1, bg1, hero1, hero2, hero3 } from "../assets";
import { HeroCard } from "../components/cards";
import { HeaderTitle } from "../components/headers";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaTools } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

export const CTA = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative h-[400px] overflow-hidden">
      <img src={hero3} alt="" className="w-full h-full object-cover" />
      <div className="h-full w-full bg-rotorblue bg-opacity-50 absolute top-0 flex justify-center items-center">
        <div className="w-full md:px-[60px] px-4 max-w-screen-2xl mx-auto">
          <h1 className="md:text-center font-bold md:text-[33px] text-[18px] text-rotorwhite text-opacity-50">
            Find Your Flight Estimate
          </h1>
          <div className="w-full h-fit md:flex justify-between items-center lg:space-x-14 md:space-x-4 md:space-y-0 space-y-6 mt-[140px]">
            <Button
              buttonText={"Helicopter Charter"}
              onClick={() => {
                navigate("/request-demo/helicopter-charters", {
                  replace: true,
                });
              }}
              iconPresent={true}
              buttonStyle={
                "border border-rotorwhite bg-rotorblack bg-opacity-30 text-rotorwhite rounded-full"
              }
            />
            <Button
              buttonText={"Private Jet Services"}
              onClick={() => {
                navigate("/request-demo/private-jet-charters", {
                  replace: true,
                });
              }}
              iconPresent={true}
              buttonStyle={
                "border border-rotorwhite bg-rotorblack bg-opacity-30 text-rotorwhite rounded-full"
              }
            />
            <Button
              buttonText={"Helicopter Maintenance"}
              onClick={() => {
                navigate("/request-demo/helicopter-maintenance", {
                  replace: true,
                });
              }}
              iconPresent={true}
              buttonStyle={
                "border border-rotorwhite bg-rotorblack bg-opacity-30 text-rotorwhite rounded-full"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function LandingPage() {
  const heroCarouselRef = useRef();
  const navigate = useNavigate();

  const logos = [
    "https://spiffing-v2.vercel.app/assets/img/elements/brand3.png",
    "https://spiffing-v2.vercel.app/assets/img/elements/ampathhh.jpg",
    "https://spiffing-v2.vercel.app/assets/img/elements/magical.png",
    "https://spiffing-v2.vercel.app/assets/img/elements/EPZ-Logo.png",
    "https://spiffing-v2.vercel.app/assets/img/elements/stLuke.png",
    "https://spiffing-v2.vercel.app/assets/img/elements/Golazo.png",

    "https://spiffing-v2.vercel.app/assets/img/elements/athletics-kenya-logo.png",
    "https://spiffing-v2.vercel.app/assets/img/elements/kenyatb.png",
  ];

  const memories = [
    {
      title: "Events Management",
      description:
        "We design exceptional experiences that inspire, connect, and empower businesses.",
      icon: <SlCalender size={40} />,
    },
    {
      title: "Events Supplies",
      description:
        "We aim to create a lasting impact through expert staging, rigging, and trussing.",
      icon: <FaTools size={40} />,
    },
    {
      title: "Experiential Marketing",
      description:
        "We create immersive experiences to engage, excite, and connect brands.",
      icon: <TbTargetArrow size={40} />,
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full h-fit">
      <AliceCarousel
        ref={heroCarouselRef}
        duration={700}
        startIndex={0}
        fadeOutAnimation={true}
        autoPlay={false}
        disableDotsControls={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        autoPlayInterval={2000}
        disableButtonsControls={true}
        infinite={true}
      >
        <RenderHero
          button={true}
          src={hero2}
          alt={"Spiffing Events Limited"}
          title={
            "Spiffing Events Limited - Turning Your Vision into Extraordinary, Unforgettable Experiences"
          }
          onClick={() => handleNavigation("our-services")}
          buttonText={"Make Your Event Extraordinary"}
          buttonStyle={"text-white bg-sniffGreen hover:bg-sniffGreen/80"}
        />
      </AliceCarousel>
      <div className="w-full h-fit py-[80px] bg-sniffBg">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[80px] lg:px-[70px] md:px-[30px] px-[20px] w-full h-full max-w-screen-2xl mx-auto justify-center">
          <div className="col-span-1 w-full h-full flex flex-col justify-center overflow-hidden">
            <img src={about1} alt="" className="w-full h-full" />
          </div>
          <div className="col-span-1 space-y-10 lg:mt-0 mt-6 flex flex-col justify-center">
            <div>
              <p className="text-[16px] max-w-[460px] font-medium text-sniffGreen mb-4 leading-[25px]">
                {`Who we are ?`}
              </p>
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Your Premier Event Partner
              </h1>
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              {`Spiffing Events is your go-to event solutions provider. We
              specialize in creating unforgettable experiences, from corporate
              events to private parties. With a wide range of services and
              state-of-the-art equipment, we're committed to delivering
              top-notch events that leave a lasting impression.`}
            </p>
            <div className="w-fit h-fit">
              <Button
                onClick={() => handleNavigation("about-us")}
                buttonStyle={
                  "bg-darkGreen text-[14px] text-white font-medium hover:bg-darkGreen/90"
                }
                buttonText={"More About Us"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-fit min-h-[70vh] bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="relative h-full w-full bg-darkGreen bg-opacity-80 min-h-[70vh] lg:px-[80px] md:px-[40px] px-[12px] flex flex-col pb-12 justify-center">
          <div className="w-full h-fit flex justify-center md:px-[60px] px-2 py-[80px]">
            <HeaderTitle
              title={"Your Vision, Our Expertise"}
              descriptions={`Spiffing Events is dedicated to excellence and innovation in a rapidly evolving industry. Our Services include:`}
            />
          </div>
          <div className="w-full h-fit justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-screen-xl mx-auto">
            {memories.map((memory, index) => (
              <HeroCard
                key={index}
                image={memory.hero1}
                title={memory.title}
                description={memory.description}
                icon={memory.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit py-[80px] bg-white">
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-x-[40px] lg:px-[70px] md:px-[30px] px-[20px] w-full h-full max-w-screen-2xl mx-auto justify-center">
          <div className="col-span-1 lg:col-span-3 w-full lg:h-[400px] flex flex-col justify-center overflow-hidden">
            <AliceCarousel
              ref={heroCarouselRef}
              duration={700}
              startIndex={0}
              fadeOutAnimation={true}
              autoPlay={true}
              disableDotsControls={true}
              mouseDragEnabled={true}
              playButtonEnabled={true}
              autoPlayInterval={2000}
              disableButtonsControls={true}
              infinite={true}
            >
              <img src={about1} alt="" className="w-full h-full object-cover" />
            </AliceCarousel>
          </div>
          <div className="col-span-1 lg:col-span-2 space-y-8 lg:mt-0 mt-6 flex flex-col justify-around py-8">
            <div className="w-full flex flex-col space-y-4">
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Recent Memories 2024
              </h1>
              <hr className="border-sniffGreen border-[2px] rounded-full w-[40%] mt-6" />
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              Ready to make 2025 even more spectacular? Lets transform your
              vision into reality. Explore our portfolio of successful events
              and discover how Spiffing Events can elevate your next occasion.
            </p>
            <div className="w-full lg:flex grid grid-cols-2 flex-wrap gap-6 h-fit">
              <Button
                onClick={() => handleNavigation("photo-gallery")}
                buttonStyle={
                  "bg-darkGreen text-[14px] text-white font-medium hover:bg-darkGreen/90"
                }
                buttonText={"Our portfolio"}
                iconPresent={true}
              />
              <Button
                onClick={() => handleNavigation("contact-us")}
                buttonStyle={
                  "text-[14px] text-sniffGreen border border-sniffGreen font-medium"
                }
                buttonText={"Get a Quote!"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-sniffBg py-[60px]">
        <div className="max-w-screen-2xl mx-auto lg:px-[60px] md:px-[40px] px-[20px] flex flex-col">
          <div className="w-full h-fit flex justify-center md:px-[60px] px-2 pb-[30px]">
            <HeaderTitle
              title={"Our Partners & Clients"}
              className={"text-darkGreen"}
            />
          </div>
          <div className="w-[100%]">
            <Marquee
              direction="right"
              play={true}
              pauseOnHover={false}
              speed={30}
            >
              {logos.map((item, index) => (
                <FeedCard key={index} image={item} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
