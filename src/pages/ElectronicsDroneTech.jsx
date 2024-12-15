import React, { useRef } from "react";
import drone from "../assets/drone&electronics/dronecover.svg";
import bgcover from "../assets/drone&electronics/bgcover1.svg";
import flyexperience from "../assets/drone&electronics/flyingexperience.svg";
import electronics from "../assets/drone&electronics/electronics.jpg";
import device from "../assets/drone&electronics/device.jpg";
import dronem from "../assets/drone&electronics/dronem.jpg";
import engine from "../assets/drone&electronics/engine.svg";
import rogue from "../assets/drone&electronics/rogue.jpg";
import vr from "../assets/drone&electronics/vr.jpg";
import plane from "../assets/drone&electronics/plane.jpg";
import AliceCarousel from "react-alice-carousel";
import calltoaction from "../assets/calltoaction.svg";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Icon, ImageCard, RenderHero } from "../components";
import { HeadingLayout, TitleLayout } from "../helper";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function ElectronicsDroneTech() {
  const carouselRef = useRef();
  const navigate = useNavigate();

  const responsive = {
    0: {
      items: 1,
    },
    744: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  const NavigateToCatalog = () => {
    navigate("/catalog", { replace: true });
  };

  const onGoingProjects = [
    {
      title: "Drone Manufacturing.",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: dronem,
    },
    {
      title: "Virtual Reality & 3D Simulators (Games and training platforms).",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: vr,
    },
    {
      title: "Engine Health Monitoring Electronics & their systems.",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: engine,
    },
    {
      title:
        "Devices for preventing runway incursions caused birds and/or animals.",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: device,
    },
    {
      title: "Tracking systems for both manned & unmanned aircraft.",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: plane,
    },
    {
      title: "Defense Management of rogue drones.",
      text: "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones.",
      image: rogue,
    },
  ];

  return (
    <div className="w-full h-fit pt-[90px]">
      <AliceCarousel
        duration={700}
        startIndex={0}
        fadeOutAnimation={`${true}`}
        disableDotsControls
        mouseDragEnabled={false}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        disableButtonsControls={`${true}`}
        infinite={true}
        autoPlay
      >
        <RenderHero
          onClick={NavigateToCatalog}
          src={drone}
          alt={"Themis aviation drone technology"}
          title={
            "Airlines were early adopters of ICT and have a long history of technological innovation."
          }
          description={
            "Use of drones,software management is one of the emerging technologies in a bid to offer a secure and safe way in managing traffic and air cargo transport in Africa."
          }
          buttonText={"Catalag"}
        />
        <RenderHero
          onClick={NavigateToCatalog}
          src={electronics}
          alt={"Themis aviation drone technology"}
          title={
            "Airlines were early adopters of ICT and have a long history of technological innovation."
          }
          description={
            "Use of drones,software management is one of the emerging technologies in a bid to offer a secure and safe way in managing traffic and air cargo transport in Africa."
          }
          buttonText={"Catalag"}
        />
      </AliceCarousel>
      <div className="w-full h-fit py-[50px]">
        <HeadingLayout
          title={"Elevate your aviation experience with Aeroplus+:"}
          text={
            "Discover the latest aviation electronics and drone technology to enhance your flying experience. “Aeroplus+ aviation electronics have greatly improved the functionality and safety of my aircraft.”"
          }
        />
      </div>
      <div className="w-full lg:h-[580px] h-[1000px] bg-darkgray relative">
        <img
          src={bgcover}
          alt="Themis aviation"
          className="w-full lg:h-full h-[1000px] object-cover absolute"
        />
        <div className="w-full lg:h-full h-[1000px] bg-darkgray bg-opacity-60 absolute lg:px-[70px] md:px-[30px] px-[20px] py-[50px] lg:flex grid place-content-center">
          <div className="max-w-screen-xl mx-auto lg:flex grid place-content-center">
            <div className="lg:w-[50%] lg:h-full h-fit lg:pr-[50px] pt-[20px]">
              <hr className="border-2 border-white rounded-full w-[30%] mb-8" />
              <h1 className="font-lato text-[24px] font-semibold text-white">
                The role of Information, Communication and Technology (ICT) in
                air cargo & passenger industry is an essential catalyst towards
                efficient transportation and delivery of goods in remote
                regions, lifesaving products to those in need and for commercial
                purposes.
              </h1>
            </div>
            <div className="lg:w-[50%] h-full lg:p-[20px] lg:mt-0 mt-12">
              <div className="w-full lg:h-full bg-beige rounded-[5px] lg:p-[50px] p-[20px]">
                <h1 className="lg:text-[33px] text-[28px] font-lato font-bold text-darkgray">
                  Cutting-edge technology
                </h1>
                <p className=" leading-[35px] mt-[50px] text-[18px] font-medium">
                  Aeroplus+ offers cutting-edge aviation electronics and drone
                  technology to provide you with the best flying experience. Use
                  of drones, software management is one of the emerging
                  technologies in a bid to offer a secure and safe way in
                  managing traffic and air cargo transport in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-beigeligter lg:static relative">
        <div className="w-full max-w-screen-xl mx-auto h-fit lg:px-[50px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="w-full bg-textblue h-[350px] rounded-[5px]">
            <img
              src={flyexperience}
              alt="Themis aviation law practices"
              className="w-full h-full object-cover rounded-[5px]"
            />
          </div>
          <div className="w-full h-full lg:pl-[70px] md:pl-4 pl-0">
            <TitleLayout title={"Enhance your flying experience"} />
            <div className="lg:w-[500px] h-fit text-left mt-[40px]">
              <p className="font-lato font-medium text-textblue text-[18px] leading-[138.5%]">
                Aeroplus+ innovative products are designed to enhance your
                flying experience and make aviation more accessible to everyone.
                "I love how Aeroplus+ keeps me informed about the latest drone
                technology. It has helped me take my aerial photography to new
                heights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full lg:pr-0 md:pr-4 pr-0">
          <TitleLayout title={"Stay ahead of aviation trends"} />
          <div className="lg:w-[500px] h-fit text-left mt-[40px]">
            <p className="font-lato font-medium text-textblue text-[18px] leading-[138.5%]">
              In an ever-evolving aviation landscape, staying at the forefront
              of industry trends and technological advancements is crucial for
              professionals and enthusiasts alike. With Aeroplus+, you gain a
              competitive edge by ensuring you're always up-to-date with the
              latest developments in aviation.
            </p>
          </div>
        </div>
        <div className="w-full bg-textblue h-[350px]">
          <img
            src={bgcover}
            alt="Themis aviation trending technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full h-fit bg-beigeligter py-[50px]">
        <HeadingLayout
          title={"At Themis Aviation, the sky is only the lower limit:"}
          text={
            "At Themis Aviation, the sky is only the lower limit; we have set aside a team of scientists & experts to carry out research & development of innovative activities in new services or products and improving existing ones."
          }
        />
        <div className="w-full max-w-screen-xl mx-auto lg:px-[70px] pt-[50px] md:px-[30px] px-[20px] flex items-center justify-center">
          <AliceCarousel
            ref={carouselRef}
            startIndex={0}
            responsive={responsive}
            autoPlayInterval={2000}
            infinite={true}
            autoPlayControls={false}
            disableDotsControls={true}
            items={onGoingProjects.map((item, index) => (
              <div key={index} className="flex w-full justify-center">
                <ImageCard
                  electronics={true}
                  lawPractices={true}
                  title={item.title}
                  image={item.image}
                  description={item.text}
                />
              </div>
            ))}
            renderPrevButton={({ isDisabled }) => (
              <Icon
                onClick={() => !isDisabled && carouselRef.current.slidePrev()}
                icon={<GrFormPrevious size={20} />}
                className={`absolute top-1/2 transform -translate-y-1/2 left-0 bg-beige rounded-full p-2 ${
                  isDisabled ? "hidden" : ""
                }`}
              />
            )}
            renderNextButton={({ isDisabled }) => (
              <Icon
                onClick={() => !isDisabled && carouselRef.current.slideNext()}
                icon={<GrFormNext size={20} />}
                className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-beige rounded-full p-2 ${
                  isDisabled ? "hidden" : ""
                }`}
              />
            )}
          />
        </div>
      </div>
      <div className="w-full lg:h-[300px] h-[800px] relative">
        <img
          src={calltoaction}
          alt="Themis aviation"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute w-full h-full bg-darkgray bg-opacity-60 md:px-[30px] px-[20px] lg:flex grid place-content-center">
          <div className="lg:flex w-full max-w-screen-xl mx-auto lg:px-[70px]">
            <div className="lg:w-[60%] w-full h-full grid place-content-center text-white">
              <h1 className="text-[40px] font-bold">
                Explore Our Exquisite Collection: View Out Latest Catalog!
              </h1>
              <p className="text-[16px] font-medium mt-[50px]">
                Use of drones, software management is one of the emerging
                technologies in a bid to offer a secure and safe way in managing
                traffic and air cargo transport in Africa.
              </p>
            </div>
            <div className="lg:w-[40%] w-full h-full lg:grid place-content-end relative">
              <Button
                onClick={NavigateToCatalog}
                buttonText={"View catalog"}
                buttonStyle={
                  "bg-darkgray text-white pl-[50px] lg:absolute lg:mt-0 mt-6 bottom-1/3 right-0 "
                }
                iconStyle={"bg-beige ml-[50px]"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicsDroneTech;
