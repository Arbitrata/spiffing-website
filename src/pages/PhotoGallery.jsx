import { useRef } from "react";
import {
  about1,
  about2,
  about3,
  about4,
  contact1,
  eventmanagement1,
  eventmanagement2,
  eventmanagement3,
  eventmanagement5,
  eventmanagement6,
  hero1,
  hero2,
  hero3,
  recent1,
  recent2,
  recent3,
  recent4,
  recent5,
  supply1,
  supply2,
  supply3,
} from "../assets";
import { HeaderTitle } from "../components/headers";
import AliceCarousel from "react-alice-carousel";
import { RenderHero } from "../components";

export default function PhotoGallery() {
  const heroCarouselRef = useRef();
  const allImages = [
    {
      image: hero1,
      title: "Spiffing Events Limited",
    },
    {
      image: hero2,
      title: "Spiffing Events Limited",
    },
    {
      image: hero3,
      title: "Spiffing Events Limited",
    },
    {
      image: about1,
      title: "Spiffing Events Limited",
    },
    {
      image: about2,
      title: "Spiffing Events Limited",
    },
    {
      image: about3,
      title: "Spiffing Events Limited",
    },
    {
      image: about4,
      title: "Spiffing Events Limited",
    },
    {
      image: contact1,
      title: "Spiffing Events Limited",
    },
    {
      image: recent1,
      title: "Spiffing Events Limited",
    },
    {
      image: recent5,
      title: "Spiffing Events Limited",
    },
    {
      image: recent4,
      title: "Spiffing Events Limited",
    },
    {
      image: recent3,
      title: "Spiffing Events Limited",
    },
    {
      image: recent2,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement1,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement2,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement3,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement5,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement5,
      title: "Spiffing Events Limited",
    },
    {
      image: eventmanagement6,
      title: "Spiffing Events Limited",
    },
    {
      image: supply1,
      title: "Spiffing Events Limited",
    },
    {
      image: supply2,
      title: "Spiffing Events Limited",
    },
    {
      image: supply3,
      title: "Spiffing Events Limited",
    },
  ];

  return (
    <div className="w-full h-fit relative">
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
            className={"h-[35vh] w-full"}
            src={about1}
            alt={"Spiffing Events Limited"}
            title={"Memories"}
          />
        </div>
      </AliceCarousel>
      <div className="w-full h-fit min-h-screen py-10 lg:p-[60px] md:p-[30px] p-[10px]">
        <div className="w-full h-fit flex justify-center lg:px-0 md:px-14 px-4">
          <HeaderTitle title={"Photo Gallery"} className={"text-darkGreen"} />
        </div>
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pb-[150px] max-w-screen-2xl mx-auto">
          {allImages.map((item, index) => (
            <div
              key={index}
              className="w-full h-[300px] rounded overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[300px] object-cover transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
