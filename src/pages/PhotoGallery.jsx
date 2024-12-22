import React, { useEffect, useRef, useState } from "react";
import { about1, hero1, hero2 } from "../assets";
import { HeaderTitle } from "../components/headers";
import AliceCarousel from "react-alice-carousel";
import { RenderHero } from "../components";

export default function PhotoGallery() {
  const heroCarouselRef = useRef();
  const allImages = [
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Helicopter Charters",
    },
    {
      image: hero1,
      title: "Private Jet Services",
    },
    {
      image: hero1,
      title: "Private Jet Services",
    },
    {
      image: hero1,
      title: "Private Jet Services",
    },
    {
      image: hero1,
      title: "Private Jet Services",
    },
    {
      image: hero1,
      title: "Private Jet Services",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
    {
      image: hero1,
      title: "Helicopter Maintenace",
    },
  ];

  const tabLinks = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Wedding",
    },
    {
      id: 3,
      title: "Birthday",
    },
    {
      id: 4,
      title: "Helicopter Maintenace",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("All");
  const [filteredImages, setFilteredImages] = useState(allImages);

  useEffect(() => {
    if (selectedTab === "All") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter((item) => item.title === selectedTab);
      setFilteredImages(filtered);
    }
  }, [selectedTab]);

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
        {/* <div className="w-full h-fit pb-2 max-w-screen-xl mx-auto">
          <div className="text-[18px] font-medium text-center  pb-1 border-b">
            <ul className="flex flex-wrap  md:space-x-2 space-x-1">
              {tabLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`inline-block md:p-4 px-0.5 md:border-b-4 border-b-2 md:text-[18px] text-[10px] rounded-t-lg hover:text-sniffGreen rounded cursor-pointer ${
                    selectedTab === item.title
                      ? "text-sniffGreen rounded"
                      : "text-darkGreen border-white"
                  }`}
                  onClick={() => setSelectedTab(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pb-[150px] max-w-screen-2xl mx-auto">
          {filteredImages.map((item, index) => (
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
