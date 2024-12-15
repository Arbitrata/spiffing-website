import React, { useRef, useState } from "react";
import lawcover from "../assets/law/lawcover1.svg";
import lawcoverpic from "../assets/law/aviationlaw.svg";
import AliceCarousel from "react-alice-carousel";
import aviation from "../assets/law/aviation.jpg";
import competition from "../assets/law/competition.jpg";
import consumerp from "../assets/law/consumerp.svg";
import datap from "../assets/law/datap.svg";
import ethics from "../assets/law/ethics.svg";
import investigation from "../assets/law/investigation.jpg";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Icon, Iconcard, ImageCard, Input } from "../components";
import { HeadingLayout, ScrollToBehavior, TitleLayout } from "../helper";
import {
  FaGavel,
  FaHandsHelping,
  FaPuzzlePiece,
  FaShieldAlt,
} from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import QuerySection from "../components/QuerySection";
import Modal from "../components/Modal";

export default function LawPractices() {
  const carouselRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openCardModal = () => {
    setOpenModal(true);
  };

  const closeCardModal = () => {
    setOpenModal(false);
  };

  const handleDetails = (course) => {
    setSelectedCard(course);
    openCardModal();
  };

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

  const lawCardItems = [
    {
      image: datap,
      title: "Data protection laws.",
      description:
        "At Themis Aviation, we help companies incorporate recommended data protection principles prior to collecting data. To ensure fair, lawful & transparent processing, data be collected for specific, explicit, and legitimate purposes, data collected will be adequate, relevant and limited to what is necessary for the purposes of processing and, data will be kept accurate and up to date.",
    },
    {
      image: ethics,
      title: "Ethics & Compliance laws.",
      description:
        "We develop Ethics & Compliance Programmes for companies that seek to ensure that the company's business practices conform to applicable laws, regulations and ethical business principles, as well as contribute to a culture of integrity.",
    },
    {
      image: consumerp,
      title: "Consumer Protection laws.",
      description:
        "With reference to local, regional & international regulations, Themis Aviation helps companies ensure that all Aviation Consumers obtain the best services and value from the service providers within the industry.",
    },
    {
      image: competition,
      title: "Competition & Anti-trust laws.",
      description:
        "At Themis Aviation, we link you with renowned & recommended companies that offer insurance against claims and losses arising from the ownership, maintenance, or use of aircraft, hangars, or airports including damage to aircraft, personal injury, and property damage. Provides coverage for hull losses as well as liability for passenger injuries, environmental and third-party damage caused by aircraft accidents.",
    },
    {
      image: aviation,
      title: "Aviation Insurance.",
      description:
        "At Themis Aviation, we link you with renowned & recommended companies that offer insurance against claims and losses arising from the ownership, maintenance, or use of aircraft, hangars, or airports including damage to aircraft, personal injury, and property damage. Provides coverage for hull losses as well as liability for passenger injuries, environmental and third-party damage caused by aircraft accidents.",
    },
  ];

  return (
    <div className="w-full pt-[90px]">
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
      >
        <div className="w-full h-screen relative">
          <img
            src={lawcover}
            alt="Themis aviation courses"
            className="w-full h-screen object-cover absolute"
          />
          <div className="w-full h-screen absolute bg-darkgray bg-opacity-60 lg:pt-[8%] pt-[20%] lg:px-[70px] md:px-[30px] px-[20px]">
            <div className="max-w-screen-xl mx-auto">
              <h1 className="lg:text-[50px] md:text-[30px] text-[24px] font-lato font-extrabold lg:w-[680px] w-[80%] text-white mb-[50px]">
                Take flight with our aviation courses and training services
              </h1>
              <h3 className="text-white text-[18px] font-lato font-medium lg:w-[500px] w-full">
                Want to pursue a career in aviation? Our platform offers a wide
                range of courses and training services to help you achieve your
                dreams.
              </h3>
              <div className="mt-[50px]">
                <Button
                  onClick={() => ScrollToBehavior("query")}
                  buttonText={"Send a Query"}
                  iconPresent={true}
                  iconStyle={"bg-beige ml-[25px] 2xl:ml-[70px]"}
                  buttonStyle={
                    "bg-darkgray text-white pl-[50px] 2xl:pl-[70px] hover:bg-opacity-70"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </AliceCarousel>
      <Modal
        isOpen={openModal}
        setIsOpen={closeCardModal}
        className={"h-fit py-10 bg-white"}
      >
        {selectedCard && (
          <div className="h-[550px] px-4 overflow-y-auto">
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full max-h-[400px] object-cover h-auto"
            />
            <h2 className="text-[30px] font-lato text-darkgray font-semibold mt-12">
              {selectedCard.title}
            </h2>
            <p className="text-textgray font-lato font-medium text-[16px] mt-6">
              {selectedCard.description}
            </p>
          </div>
        )}
      </Modal>
      <div className="w-full h-fit py-[50px]">
        <HeadingLayout
          title={"Comprehensive courses we offer in the Field of Aviation"}
          text={
            "Our platform offers a wide range of courses and training services to help youachieve your dreams. “The aviation courses offered by Aviation Academy are top-notch."
          }
        />
        <div className="w-full h-fit pt-[50px] grid place-content-center justify-items-center">
          <div className="w-fit h-fit border border-border grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 md:grid-rows-2 grid-rows-1">
            <Iconcard
              lawCard={true}
              icon={<FaGavel size={60} />}
              title={"Expert aviation law consultacy"}
              description={
                "Providing specialised legal and compliance services for the aviation industry. Trust our expertise to navigate complex regulations and protect your business."
              }
            />
            <Iconcard
              lawCard={true}
              icon={<FaPuzzlePiece size={60} />}
              title={"Navigate complex regulations"}
              description={
                "Themis Aviation helps you navigate the complex regulations of the aviation industry. Our expertise ensures compliance with data protection, ethics, consumer protection, competition, and insurance laws."
              }
            />
            <Iconcard
              lawCard={true}
              icon={<FaShieldAlt size={60} />}
              title={"Protect your business"}
              description={
                "With Themis Aviation you can protect your business from legal risks and ensure compliance with aviation laws. Our consultancy services provide guidance on data protection, ethics, consumer protection, competition, and insurance investigations."
              }
            />
            <Iconcard
              lawCard={true}
              icon={<FaHandsHelping size={60} />}
              title={"Expert guidance & support"}
              description={
                "Themis Aviation offers expert guidance and support to aviation businesses. Our specialized knowledge in aviation law and compliance helps you make informed decisions and mitigate legal risks."
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto h-fit bg-white lg:px-[50px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full ">
          <TitleLayout
            title={" Ensuring Safety, Fairness, and Efficiency in Air Travel"}
          />
          <div className="lg:w-[500px] h-fit text-left mt-[20px]">
            <p className="font-lato font-medium text-textblue text-[18px] leading-[138.5%]">
              Aviation law, a specialized branch of legal practice, revolves
              around the intricate realm of flight, air travel, and the myriad
              legal and business intricacies that accompany these activities.
              This multifaceted field often intersects with admiralty law and
              frequently falls under the purview of international law, given the
              inherently global nature of air travel.
            </p>
            <div className="mt-[20px]">
              <Button
                onClick={() => ScrollToBehavior("query")}
                buttonText={"Send a Query"}
                buttonStyle={"bg-darkgray pl-[50px] pr-[30px] text-white"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-textblue h-[400px] lg:mt-0 mt-12 rounded">
          <img
            src={lawcoverpic}
            alt="Themis aviation law practices"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="w-full h-fit bg-beigeligter py-[50px]">
        <HeadingLayout
          title={"Aviation Legal Services"}
          text={
            "Explore our comprehensive legal expertise in aviation law, ensuring safety, compliance, and protection in the aviation industry. Services include data protection, ethics, consumer rights, competition, insurance, and investigations."
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
            items={lawCardItems.map((item, index) => (
              <div key={index} className="flex w-full justify-center">
                <ImageCard
                  onClick={() => handleDetails(item)}
                  lawPractices={true}
                  title={item.title}
                  image={item.image}
                  description={item.description}
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
      <QuerySection />
    </div>
  );
}
