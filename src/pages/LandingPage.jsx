import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, FeedCard, Icon, Input, RenderHero } from "../components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import about from "../assets/home/about.svg";
import Marquee from "react-fast-marquee";
import { heroSectionDetails, navigatingCardDetails } from "./WebsiteData";
import emailjs from "@emailjs/browser";
import Select from "react-select";
// import toast, { toastConfig } from "react-simple-toasts";
// import "react-simple-toasts/dist/theme/dark.css";
import farmland from "../assets/home/farm.png";
import { LearnMoreLink, ScrollToBehavior } from "../helper";
import 'react-alice-carousel/lib/alice-carousel.css';

// toastConfig({ theme: "dark" });

export const selectCustomStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "50px",
    marginTop: "8px",
  }),
};

function LandingPage() {
  const heroCarouselRef = useRef();
  const navigatingCarouselRef = useRef();
  const form = useRef();
  const selectModuleRef = useRef();
  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendEmailError, setSendEmailError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingEmail(true);
    emailjs
      .sendForm(
        "service_yuwrkqg",
        "template_u5tsbzj",
        form.current,
        "CsNgLCcS_8vK-qaY1"
      )
      .then(
        (result) => {
          setSendingEmail(false);
          form.current.reset();
          selectModuleRef.current.clearValue();
          toast("Your request has been sent successfully.");
        },
        (error) => {
          setSendEmailError(true);
          setSendingEmail(false);
          toast("Something went wrong. Try again later");
        }
      );
  };

  const events = [
    {
      image:
        "https://hapakenya.com/wp-content/uploads/2021/11/INN-SUMMIT-759x500.jpg",
      link: "https://x.com/KenyaAirways/status/1463473324571480069?s=20",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHPWatM7eyGsdke5nGIDfiSb5VSwLNP9VAzlZJNeSJSvSTYJ_rMEgPRVy2rm9iBGi0XQ&usqp=CAU",
      link: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD4D10AQHQB3UoUcipog%2Fimage-shrink_800%2F0%2F1692525681863%3Fe%3D1693166400%26v%3Dbeta%26t%3D843W2B0KDQ-lhFzlOzngyDDzH7HpWZ3qEfBWIbJg2ns&tbnid=7z0xQZPWT0UD7M&vet=12ahUKEwiXmbbp16uBAxXWpycCHTZTD8EQMygAegQIARBT..i&imgrefurl=https%3A%2F%2Fke.linkedin.com%2Fposts%2Fkenyacaa_why-a-secure-aviation-industry-is-crucial-activity-7029035504834654209-PMqY&docid=cqknNqukMU_OdM&w=800&h=800&itg=1&q=ICAO%20Aviation%20Safety%20week%20in%20Kenya&ved=2ahUKEwiXmbbp16uBAxXWpycCHTZTD8EQMygAegQIARBT",
    },
    {
      image:
        "https://www.easa.europa.eu/sites/default/files/styles/max_2600x2600/public/ifu/signaure_for_email_950x454.png?itok=1auw0Ck2",
      link: "https://www.easa.europa.eu/en/newsroom-and-events/events/icaoeasa-event-second-forum-regional-safety-oversight-organizations",
    },
    {
      image:
        "https://www.kcaa.or.ke/sites/default/files/events/imgonline-com-ua-twotoone-jLpDKefVPKY_0.jpg",
      link: "https://www.kcaa.or.ke/node/434",
    },
  ];

  const logos = [
    "https://logos-world.net/wp-content/uploads/2023/01/Kenya-Airways-Logo.png",
    "https://www.safeaircompany.com/resources/images/logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS851OROhE6PtENG7gy9KYj63K-szQKiSmY4Q&usqp=CAU",
    farmland,
  ];

  const handleNavigationClick = (id) => {
    const index = id - 10;
    if (
      heroCarouselRef.current &&
      index >= 0 &&
      index < heroSectionDetails.length
    ) {
      heroCarouselRef.current.slideTo(index);
    }
  };

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
    1536: { items: 5 },
  };

  const modules = [
    "Aircraft Flight Operations Module",
    "Aircraft Maintenance Module",
    "Integrated Quality, Safety & Risk Module",
    "HR Management Module",
    "Finance Management Module",
  ];

  const moduleOptions = modules.map((module) => ({
    value: module,
    label: module,
  }));

  return (
    <div className="w-full h-fit pt-[90px]">
      <AliceCarousel
        ref={heroCarouselRef}
        duration={700}
        startIndex={0}
        fadeOutAnimation={true}
        autoPlay={true}
        disableDotsControls
        mouseDragEnabled={false}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        disableButtonsControls={true}
        infinite={true}
      >
        {heroSectionDetails.map((pageSlide, index) => (
          <div key={index}>
            <RenderHero
              src={pageSlide.image}
              alt={pageSlide.title}
              title={pageSlide.title}
              description={pageSlide.text}
              buttonText={pageSlide.buttonText}
              onClick={pageSlide.onClick}
            />
          </div>
        ))}
      </AliceCarousel>
      <div className="w-full overflow-hidden relative -top-10">
        <div className="max-w-screen-2xl mx-auto lg:px-[70px] 2xl:px-0 md:px-[30px] px-[20px]">
          <AliceCarousel
            ref={navigatingCarouselRef}
            startIndex={0}
            responsive={responsive}
            autoPlayInterval={2000}
            infinite={true}
            autoPlayControls={false}
            disableDotsControls={true}
            items={navigatingCardDetails.map((card, index) => (
              <div className="w-fit h-fit flex">
                <div
                  key={index}
                  onClick={() => handleNavigationClick(card.id)}
                  className="h-[154px] cursor-pointer w-auto border-r-2 border-white bg-beigeligter p-[20px] text-darkgray"
                >
                  <div className="w-full h-fit flex items-center space-x-4 mb-[10px]">
                    {card.icon}
                    <h1 className="font-lato font-bold text-[18px]">
                      {card.title}
                    </h1>
                  </div>
                  <span className="text-[15px] leading-[130% font-medium]">
                    {card.text}
                  </span>
                </div>
              </div>
            ))}
            renderPrevButton={({ isDisabled }) => (
              <Icon
                onClick={() =>
                  !isDisabled && navigatingCarouselRef.current.slidePrev()
                }
                icon={<GrFormPrevious size={20} />}
                className={`absolute bottom-1/3 transform -translate-y-1/2 -left-4 bg-beige rounded-full z-30 p-2 ${
                  isDisabled ? "hidden" : ""
                }`}
              />
            )}
            renderNextButton={({ isDisabled }) => (
              <Icon
                onClick={() =>
                  !isDisabled && navigatingCarouselRef.current.slideNext()
                }
                icon={<GrFormNext size={20} />}
                className={`absolute bottom-1/3 transform -translate-y-1/2 -right-4 bg-beige rounded-full p-2 ${
                  isDisabled ? "hidden" : ""
                }`}
              />
            )}
          />
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="max-w-screen-2xl mx-auto lg:px-[70px] md:px-[30px] px-[20px] py-[50px] lg:flex">
          <div className="lg:w-[50%] h-[405px] lg:rounded-[5px] mb-6 lg:mb-0">
            <img
              src={about}
              alt="Themis aviation"
              className="w-full h-full object-cover rounded-[5px] lg:rounded-none"
            />
          </div>
          <div className="lg:w-[50%] lg:px-[50px]">
            <span className="font-lato font-bold text-[12px] text-textgray">
              ABOUT US
            </span>
            <h1 className="text-[24px] font-lato font-bold text-textblue leading-[130%] my-[10px]">
              Providing Reliable, cost-effective & robust Tech Solutions to the
              Aviation Industry
            </h1>
            <span className="text-[16px] font-lato font-semibold text-darkblue">
              Every day, we go to work hoping to do three major things; achieve
              company goals, share great moments with our friends and help make
              the world a little better than we found it.
            </span>
            <div className="mt-[6px] flex items-center">
              <div className="w-2 bg-darkgray rounded-full ml-2 h-[125px]" />
              <div className="ml-[15px] ">
                <span className="text-[16px] font-lato font-semibold text-textgray">
                  At Themis Aviation, we have invested in highly trained experts
                  who have vast knowledge & experience in their respective
                  fields which, combined, ensures that our products and services
                  are of high quality.
                </span>
              </div>
            </div>
            <div className="w-fit h-fit bg-darkgray mt-[20px]">
              <Button
                onClick={() => ScrollToBehavior("demoform")}
                buttonText={"schedule a demo"}
                buttonStyle={"bg-dakgray text-white pr-6 pl-12"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit bg-white py-[50px]">
        <div className="w-full h-[100px]">
          <h1 className="text-[32px] font-lato font-bold text-darkblue text-center">
            Companies we’ve had the pleasure to work with:
          </h1>
        </div>
        <div className="max-w-screen-2xl mx-auto lg:px-[70px] 2xl:px-24">
          <Marquee direction="left" pauseOnHover={true} speed={30}>
            {events.map((event, index) => (
              <div
                key={index}
                className="w-[360px] mr-5 h-[205px] shadow font-lato relative cursor-pointer"
              >
                <img
                  src={event.image}
                  alt="Themis aviation events"
                  className="object-contain absolute w-full h-full"
                />
                <div className="w-full h-fit p-4 bg-darkgray bg-opacity-30 absolute bottom-0 grid place-content-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={event.link}
                    className="hover:underline text-[23px] text-white"
                  >
                    <LearnMoreLink text={"Click to view"} />
                  </a>
                </div>
              </div>
            ))}
          </Marquee>
          <div className="mt-5">
            <Marquee
              direction="right"
              play={logos.length > 3 ? true : false}
              pauseOnHover={true}
              speed={30}
            >
              {logos.map((item, index) => (
                <div key={index}>
                  <FeedCard image={item} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[50px] max-w-screen-2xl mx-auto">
        <div
          id="demoform"
          className="w-full h-full grid lg:grid-cols-5 grid-cols-2  bg-beigeligter p-[40px] relative"
        >
          <div className="w-full lg:pr-5 lg:border-r-2 border-textblue lg:col-span-3 col-span-5">
            <h1 className="font-lato text-[24px] font-bold">
              Book a
              <span className=" text-darkgray font-extrabold"> DEMO,</span>
              <br />
              Explore Our Product in Action
            </h1>
            <hr className="w-[30%] border-2 border-darkgray rounded-full my-6" />
            <form
              onSubmit={sendEmail}
              ref={form}
              className="w-full lg:grid md:grid grid-cols-2 grid-rows-4 lg:space-y-0 md:space-y-0 space-y-8 gap-6"
            >
              <Input
                name={"name"}
                label={"Name"}
                placeholder={"Enter your name"}
                style={"w-full"}
              />
              <Input
                name={"email"}
                label={"Email"}
                placeholder={"Enter your email"}
                style={"w-full"}
              />
              <Input
                name={"telephone_number"}
                type={"number"}
                label={"Telephone Number"}
                placeholder={"Enter your Tell No."}
                style={"w-full"}
              />
              <Input
                name={"company"}
                label={"Company"}
                placeholder={"Enter your Company name"}
                style={"w-full"}
              />
              <div className=" col-span-2">
                <label className="font-extrabold capitalize font-lato text-darkblue text-[15px]">
                  Select Module
                </label>
                <Select
                  name="subject"
                  styles={selectCustomStyles}
                  options={moduleOptions}
                  placeholder={"Select a Module"}
                  ref={selectModuleRef}
                />
              </div>
              <Button
                type={"submit"}
                buttonStyle={"bg-darkgray text-white pl-[50px] pl-5 mt-4"}
                buttonText={
                  sendingEmail ? "Scheduling a demo..." : "Schedule a demo"
                }
                iconPresent={true}
                iconStyle={"bg-beige ml-[50px]"}
              />
            </form>
          </div>
          <div className="w-full lg:pl-5 lg:col-span-2 col-span-5 lg:mt-0 mt-6">
            <h1 className="font-lato text-[24px] font-bold">
              Please utilize the following details <br /> to
              <span className="text-darkgray font-extrabold"> GO</span>
            </h1>
            <hr className="w-[30%] border-2 border-darkgray rounded-full my-6" />
            <div className="w-full grid gap-6">
              <Input
                label={"Username"}
                placeholder={"Enter your provided username"}
                style={"w-full"}
              />
              <Input
                type={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
                style={"w-full"}
              />
              <Button
                buttonStyle={"bg-darkgray text-white pl-[30px] mt-4"}
                buttonText={"GO"}
                iconPresent={true}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
