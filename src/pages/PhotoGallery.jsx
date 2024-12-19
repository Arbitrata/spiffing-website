import React, { useEffect, useState } from "react";
import { hero1, hero2 } from "../assets";
import { HeaderTitle } from "../components/headers";

export default function PhotoGallery() {
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
      title: "All Photos",
    },
    {
      id: 2,
      title: "Helicopter Charters",
    },
    {
      id: 3,
      title: "Private Jet Services",
    },
    {
      id: 4,
      title: "Helicopter Maintenace",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("All Photos");
  const [filteredImages, setFilteredImages] = useState(allImages);

  useEffect(() => {
    if (selectedTab === "All Photos") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter((item) => item.title === selectedTab);
      setFilteredImages(filtered);
    }
  }, [selectedTab]);

  return (
    <div className="w-full h-fit relative top-[100px]">
      <div className="h-[400px] relative">
        <img
          src={hero2}
          alt="Rotorjet helicopter-flying-city-with-sky"
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full bg-rotorblue absolute top-0 bg-opacity-50 grid place-content-center text-[33px] font-bold text-rotorwhite">
          Photo Gallery
        </div>
      </div>
      <div className="w-full h-fit min-h-screen py-10 lg:p-[60px] md:p-[30px] p-[10px]">
        <div className="w-full h-fit flex justify-center lg:px-0 md:px-14 px-4">
          <HeaderTitle
            title={"Our Private Helicopter Fleet"}
            renderDescription={true}
          />
        </div>
        <div className="w-full h-fit py-12 max-w-screen-2xl mx-auto">
          <div className="text-[18px] font-medium text-center text-rotorblue pb-1 border-b">
            <ul className="flex flex-wrap  md:space-x-2 space-x-1">
              {tabLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`inline-block md:p-4 px-0.5 md:border-b-4 border-b-2 md:text-[18px] text-[10px] rounded-t-lg hover:text-rotorblue hover:border-rotorbrown rounded cursor-pointer ${
                    selectedTab === item.title
                      ? "text-rotorblue border-rotorbrown rounded"
                      : "text-rotorblue border-rotorwhite"
                  }`}
                  onClick={() => setSelectedTab(item.title)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
