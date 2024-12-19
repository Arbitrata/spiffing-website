import { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button, RenderHero } from "../components";
import { hero1 } from "../assets";
import { HeaderTitle } from "../components/headers";
import { ScrollToBehavior } from "../helper";
import { useNavigate } from "react-router-dom";


export default function OurServicesPage() {
  const heroCarouselRef = useRef();
  const navigate = useNavigate();

  const renderImageCard = ({ image, title, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="w-full rounded group lg:h-[200px] h-auto overflow-hidden relative cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fit transition duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="w-full h-full bg-rotorblue absolute top-0 bg-opacity-30 group-hover:hidden grid place-content-center text-rotorwhite text-[33px] font-bold">
          {title}
        </div>
      </div>
    );
  };

  const r66Details = [
    {
      title: "Cruising Speed",
      descriptions: "204 km / h",
    },
    {
      title: "Flight Range",
      descriptions: "602 Km",
    },
    {
      title: "Number of Passengers",
      descriptions: 4,
    },
    {
      title: "Service Ceiling",
      descriptions: "14,000 ft",
    },
    {
      title: "Engine Type",
      descriptions: "turboshaft Engine",
    },
    {
      title: "Maximum Take Off Weight",
      descriptions: "1225 kg",
    },
    {
      title: "Passenger Emergency Exit",
      descriptions:
        "4, two on each side of the passenger cabin (intended for normal use)",
    },
  ];

  const r44Details = [
    {
      title: "Cruising Speed",
      descriptions: "180 km / h",
    },
    {
      title: "Flight Range",
      descriptions: "560 Km",
    },
    {
      title: "Number of Passengers",
      descriptions: 3,
    },
    {
      title: "Service Ceiling",
      descriptions: "14,000 ft",
    },
    {
      title: "Engine Type",
      descriptions: "Piston Engine",
    },
    {
      title: "Maximum Take Off Weight",
      descriptions: "1134 kg",
    },
    {
      title: "Passenger Emergency Exit",
      descriptions:
        "4, two on each side of the passenger cabin (intended for normal use)",
    },
  ];

  const h125Details = [
    {
      title: "Cruising Speed",
      descriptions: "250 km / h",
    },
    {
      title: "Flight Range",
      descriptions: "662 Km",
    },
    {
      title: "Number of Passengers",
      descriptions: 5,
    },
    {
      title: "Service Ceiling",
      descriptions: "20,000 ft",
    },
    {
      title: "Engine Type",
      descriptions: "turboshaft Engine",
    },
    {
      title: "Maximum Take Off Weight",
      descriptions: "2370 kg",
    },
    {
      title: "Passenger Emergency Exit",
      descriptions: "2, one on each side of the passenger cabin ",
    },
  ];

  const h130Details = [
    {
      title: "Cruising Speed",
      descriptions: "240 km / h",
    },
    {
      title: "Flight Range",
      descriptions: "610 Km",
    },
    {
      title: "Number of Passengers",
      descriptions: 6,
    },
    {
      title: "Service Ceiling",
      descriptions: "23,000 ft",
    },
    {
      title: "Engine Type",
      descriptions: "turboshaft Engine",
    },
    {
      title: "Maximum Take Off Weight",
      descriptions: "2,500 kg",
    },
    {
      title: "Passenger Emergency Exit",
      descriptions: "2, one on each side of the passenger cabin",
    },
  ];

  return (
    <div className="w-full pt-[100px]">
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
          <RenderHero src={hero1} alt={"Rotorjet charters"} />
        </div>
      </AliceCarousel>
      <div className="w-full h-fit flex justify-center pt-[80px] lg:px-0 md:px-14 px-4">
        <HeaderTitle
          title={"Our Private Helicopter Fleet"}
          descriptions={
            "Private Charter a Flight and hire is ideal for a wide variety of travel purposes, across both business and leisure needs. Whether you require a direct transfer from an airport terminal to the city centre, a remote worksite, or luxury lodge, our fleet can get you there."
          }
        />
      </div>
      <div className="w-full h-fit lg:p-[60px] md:p-[30px] p-4 pb-[60px] grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-screen-2xl mx-auto">
        {renderImageCard({
          image: hero1,
          title: "R66",
          onClick: () => ScrollToBehavior("r66"),
        })}
        {renderImageCard({
          image: hero1,
          title: "H125",
          onClick: () => ScrollToBehavior("h125"),
        })}
        {renderImageCard({
          image: hero1,
          title: "R44",
          onClick: () => ScrollToBehavior("r44"),
        })}
        {renderImageCard({
          image: hero1,
          title: "H130",
          onClick: () => ScrollToBehavior("h130"),
        })}
      </div>
      <div className="w-full h-fit lg:p-[60px] md:p-[30px] p-4 bg-rotorbg">
        <div
          id="r66"
          className="w-full lg:h-[520px] h-fit max-w-screen-2xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-8"
        >
          <div className="lg:col-span-3 lg:block hidden col-span-1 w-full h-full rounded overflow-hidden">
            <img
              src={hero1}
              alt=""
              className="w-full lg:h-[520px] h-auto object-fit"
            />
          </div>
          <div className="lg:col-span-2 col-span-1 h-full relative">
            <h1 className="text-rotorblue font-bold text-[27px]">R66</h1>
            <p className="text-rotorblue text-[18px] font-normal">
              R66 Robinson Helicopter
            </p>
            <hr className="border-rotorbrown border-[3px] rounded-full w-[40%] my-6" />
            <div className="lg:col-span-3 lg:hidden col-span-1 w-full h-fit rounded overflow-hidden">
              <img
                src={hero1}
                alt=""
                className="w-full lg:h-[520px] h-auto object-fit"
              />
            </div>
            <table className="w-full text-left rtl:text-right text-rotorblue">
              <tbody>
                {r66Details.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border flex border-rotorbrown text-rotorblue font-semibold text-[16px]"
                  >
                    <td
                      scope="row"
                      className="px-6 py-2 border-r w-1/2 flex-1 border-rotorbrown"
                    >
                      {item.title}
                    </td>
                    <td className="px-2 py-2 w-1/2 flex-1 ">
                      {item.descriptions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              onClick={() => {
                navigate("/request-demo/helicopter-charters", {
                  replace: true,
                });
              }}
              buttonStyle={
                "rounded-[6px] bg-rotorbrown hover:bg-rotorbrown/80 lg:absolute lg:mt-0 mt-6 bottom-0"
              }
              buttonText={"Charter a Flight"}
              iconPresent={true}
            />
          </div>
        </div>
      </div>
      <div id="h125" className="lg:p-[60px] md:p-[30px] p-4 lg:mt-0 mt-12">
        <div className="w-full lg:h-[520px] h-fit max-w-screen-2xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="lg:col-span-2 col-span-1 h-full relative">
            <h1 className="text-rotorblue font-bold text-[27px]">H125</h1>
            <p className="text-rotorblue text-[18px] font-normal">
              H125 Airbus Helicopter
            </p>
            <hr className="border-rotorbrown border-[3px] rounded-full w-[40%] my-6" />
            <div className="lg:col-span-3 lg:hidden col-span-1 w-full h-fit rounded overflow-hidden">
              <img
                src={hero1}
                alt=""
                className="w-full lg:h-[520px] h-auto object-fit"
              />
            </div>
            <table className="w-full text-left rtl:text-right text-rotorblue">
              <tbody>
                {h125Details.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border flex border-rotorbrown text-rotorblue font-semibold text-[16px]"
                  >
                    <td
                      scope="row"
                      className="px-6 py-2 border-r w-1/2 flex-1 border-rotorbrown"
                    >
                      {item.title}
                    </td>
                    <td className="px-2 py-2 w-1/2 flex-1 ">
                      {item.descriptions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              onClick={() => {
                navigate("/request-demo/helicopter-charters", {
                  replace: true,
                });
              }}
              buttonStyle={
                "rounded-[6px] bg-rotorbrown hover:bg-rotorbrown/80 lg:absolute lg:mt-0 mt-6 bottom-0"
              }
              buttonText={"Charter a Flight"}
              iconPresent={true}
            />
          </div>
          <div className="lg:col-span-3 lg:block hidden col-span-1 w-full h-full rounded overflow-hidden">
            <img
              src={hero1}
              alt=""
              className="w-full lg:h-[520px] h-auto object-fit"
            />
          </div>
        </div>
      </div>
      <div
        id="r44"
        className="w-full h-fit lg:p-[60px] md:p-[30px] p-4 bg-rotorbg lg:my-0 mt-12"
      >
        <div className="w-full lg:h-[520px] h-fit max-w-screen-2xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="lg:col-span-3 lg:block hidden col-span-1 w-full h-full rounded overflow-hidden">
            <img
              src={hero1}
              alt=""
              className="w-full lg:h-[520px] h-auto object-fit"
            />
          </div>
          <div className="lg:col-span-2 col-span-1 h-full relative">
            <h1 className="text-rotorblue font-bold text-[27px]">R44</h1>
            <p className="text-rotorblue text-[18px] font-normal">
              R44 Raven II Robinson Helicopter
            </p>
            <hr className="border-rotorbrown border-[3px] rounded-full w-[40%] my-6" />
            <div className="lg:col-span-3 lg:hidden col-span-1 w-full h-fit rounded overflow-hidden">
              <img
                src={hero1}
                alt=""
                className="w-full lg:h-[520px] h-auto object-fit"
              />
            </div>
            <table className="w-full text-left rtl:text-right text-rotorblue">
              <tbody>
                {r44Details.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border flex border-rotorbrown text-rotorblue font-semibold text-[16px]"
                  >
                    <td
                      scope="row"
                      className="px-6 py-2 border-r w-1/2 flex-1 border-rotorbrown"
                    >
                      {item.title}
                    </td>
                    <td className="px-2 py-2 w-1/2 flex-1 ">
                      {item.descriptions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              onClick={() => {
                navigate("/request-demo/helicopter-charters", {
                  replace: true,
                });
              }}
              buttonStyle={
                "rounded-[6px] bg-rotorbrown hover:bg-rotorbrown/80 lg:absolute lg:mt-0 mt-6 bottom-0"
              }
              buttonText={"Charter a Flight"}
              iconPresent={true}
            />
          </div>
        </div>
      </div>
      <div id="h130" className="lg:p-[60px] md:p-[30px] p-4 lg:my-0 my-12">
        <div className="w-full lg:h-[520px] h-fit max-w-screen-2xl mx-auto grid lg:grid-cols-5 grid-cols-1 gap-8">
          <div className="lg:col-span-2 col-span-1 h-full relative">
            <h1 className="text-rotorblue font-bold text-[27px]">H130</h1>
            <p className="text-rotorblue text-[18px] font-normal">
              H130 Airbus Helicopter
            </p>
            <hr className="border-rotorbrown border-[3px] rounded-full w-[40%] my-6" />
            <div className="lg:col-span-3 lg:hidden col-span-1 w-full h-fit rounded overflow-hidden">
              <img
                src={hero1}
                alt=""
                className="w-full lg:h-[520px] h-auto object-fit"
              />
            </div>
            <table className="w-full text-left rtl:text-right text-rotorblue">
              <tbody>
                {h130Details.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border flex border-rotorbrown text-rotorblue font-semibold text-[16px]"
                  >
                    <td
                      scope="row"
                      className="px-6 py-2 border-r w-1/2 flex-1 border-rotorbrown"
                    >
                      {item.title}
                    </td>
                    <td className="px-2 py-2 w-1/2 flex-1 ">
                      {item.descriptions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              onClick={() => {
                navigate("/request-demo/helicopter-charters", {
                  replace: true,
                });
              }}
              buttonStyle={
                "rounded-[6px] bg-rotorbrown hover:bg-rotorbrown/80 lg:absolute lg:mt-0 mt-6 bottom-0"
              }
              buttonText={"Charter a Flight"}
              iconPresent={true}
            />
          </div>
          <div className="lg:col-span-3 lg:block hidden col-span-1 w-full h-full rounded overflow-hidden">
            <img
              src={hero1}
              alt=""
              className="w-full lg:h-[520px] h-auto object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
