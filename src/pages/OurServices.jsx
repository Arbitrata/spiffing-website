import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, RenderHero } from "../components";
import {
  about4,
  eventmanagement1,
  eventmanagement2,
  eventmanagement4,
  eventmanagement5,
  eventmanagement6,
  hero1,
  market1,
  market2,
  market3,
  market4,
  market5,
  market6,
  supply1,
  supply3,
  supply5,
  supply7,
} from "../assets";
import { HeaderTitle } from "../components/headers";
import { useNavigate } from "react-router-dom";

export default function OurServicesPage() {
  const heroCarouselRef = useRef();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const eventManagement = [
    eventmanagement2,
    eventmanagement5,
    eventmanagement1,
    eventmanagement6,
    eventmanagement4,
  ];

  const eventSupplies = [supply1, supply3, supply5, about4, supply7];

  const experientialMarketing = [
    market6,
    market3,
    market2,
    market4,
    market5,
  ];

  const ImageGrid = ({ data, side }) => {
    const leftSide = side && side === "left";
    return (
      <>
        <div className="lg:col-span-3 col-span-1 grid lg:grid-cols-3 grid-cols-2 grid-rows-2 bg-white gap-2">
          <div
            className={` ${
              leftSide ? "col-span-1" : "lg:col-span-2 col-span-1"
            } h-[220px] row-span-1 bg-sniffBg`}
          >
            <img
              src={data[0]}
              alt="Spiffing Events Limited"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            className={`${
              leftSide ? "lg:col-span-2 col-span-1" : "col-span-1"
            } h-[220px] row-span-1 bg-sniffBg`}
          >
            <img
              src={data[1]}
              alt="Spiffing Events Limited"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-1 col-span-2 h-[220px] row-span-1 bg-sniffBg">
            <img
              src={data[2]}
              alt="Spiffing Events Limited"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="col-span-1 h-[220px] row-span-1 bg-sniffBg">
            <img
              src={data[3]}
              alt="Spiffing Events Limited"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="col-span-1 h-[220px] row-span-1 bg-sniffBg">
            <img
              src={data[4]}
              alt="Spiffing Events Limited"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full">
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
            className={"h-[25vh]"}
            src={hero1}
            alt={"Spiffing Events Limited"}
          />
        </div>
      </AliceCarousel>
      <div className="w-full h-fit flex justify-center bg-sniffBg pt-[40px] lg:px-0 md:px-14 px-4">
        <HeaderTitle title={"Our Main Focus"} className={"text-darkGreen"} />
      </div>
      <div
        id="event-management"
        className="w-full h-fit overflow-hidden bg-sniffBg lg:px-[70px] md:px-[30px] px-[20px] pb-[60px] pt-[20px] "
      >
        <div className="w-full h-fit overflow-hidden max-w-screen-xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-x-[40px]">
          <ImageGrid side={"left"} data={eventManagement} />
          <div
            id="event-management"
            className="lg:col-span-2 lg:space-y-0 space-y-8 col-span-1 flex flex-col justify-around h-full py-8 relative"
          >
            <div className="w-full flex flex-col space-y-4">
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Event Management
              </h1>
              <hr className="border-sniffGreen border-[2px] rounded-full w-[40%] mt-6" />
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              From concept to celebration, we bring your vision to life with
              precision and creativity. Discover how Spiffing Events crafts
              unforgettable experiences, turning your ideas into spectacular
              realities for any occasion.
            </p>
            <div className="w-full lg:flex grid grid-cols-2 flex-wrap gap-6 h-fit">
              <Button
                onClick={() => handleNavigation("photo-gallery")}
                buttonStyle={
                  "bg-darkGreen text-[14px] text-white font-medium hover:bg-darkGreen/90"
                }
                buttonText={"Our Work"}
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

      <div
        id="event-supplies"
        className="w-full h-fit overflow-hidden bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[60px] "
      >
        <div className="w-full h-fit overflow-hidden max-w-screen-xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-x-[40px]">
          <div className="lg:col-span-2 lg:space-y-0 space-y-8 col-span-1 flex flex-col justify-around h-full py-8 relative">
            <div className="w-full flex flex-col space-y-4">
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Event Supplies
              </h1>
              <hr className="border-sniffGreen border-[2px] rounded-full w-[40%] mt-6" />
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              Elevate your event with premium supplies that blend quality and
              style. From stunning décor to essential equipment, Spiffing Events
              ensures every detail enhances your vision, creating a seamless and
              memorable experience.
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
          <ImageGrid side={"right"} data={eventSupplies} />
        </div>
      </div>

      <div
        id="experiential-marketing"
        className="w-full h-fit overflow-hidden bg-sniffBg lg:px-[70px] md:px-[30px] px-[20px] py-[60px]"
      >
        <div className="w-full h-fit overflow-hidden max-w-screen-xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-x-[40px]">
          <ImageGrid side={"left"} data={experientialMarketing} />
          <div className="lg:col-span-2 lg:space-y-0 space-y-8 col-span-1 flex flex-col justify-around h-full py-8 relative">
            <div className="w-full flex flex-col space-y-4">
              <h1 className="text-[33px] font-bold text-darkGreen max-w-[460px] leading-[130%]">
                Experiential Marketing
              </h1>
              <hr className="border-sniffGreen border-[2px] rounded-full w-[40%] mt-6" />
            </div>
            <p className="text-[16px] max-w-[460px] font-light text-textGray leading-[25px]">
              Engage your audience like never before with dynamic, immersive
              experiences. Spiffing Events combines creativity and strategy to
              bring your brand to life, leaving a lasting impression through
              unforgettable moments.
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
    </div>
  );
}
