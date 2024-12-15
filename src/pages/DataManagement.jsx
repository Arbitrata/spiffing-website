import React from "react";
import { Button, Iconcard } from "../components";
import datacover from "../assets/datamanagement/datacover.svg";
import Financialadvice from "../assets/datamanagement/Financialadvice.svg";
import Insurancereview from "../assets/datamanagement/Insurancereview.svg";
import marketstatistics from "../assets/datamanagement/marketstatistics.svg";
import Tradestocks from "../assets/datamanagement/Tradestocks.svg";
import { MdOutlineSecurity } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";
import { ScrollToBehavior, TitleLayout } from "../helper";
import QuerySection from "../components/QuerySection";
import RenderImage from "../helper/RenderImage";

function DataManagement(props) {
  const topDataCardItems = [
    {
      title: "Automate cyber security",
      text: "automates cyber security measures to ensure the safety and integrity of your aviation data.",
      icon: <MdOutlineSecurity size={60} />,
    },
    {
      title: "Gain valuable insights",
      text: "With Themis Aviation analytics capabilities, you can extract valuable insights from your aviation data to make informed decisions.",
      icon: <SiSimpleanalytics size={60} />,
    },
    {
      title: "Access comprehensive aviation statistics",
      text: "Our platform provides access to a comprehensive database of aviation statistics, allowing you to stay informed about industry trends.",
      icon: <FaChartBar size={60} />,
    },
  ];

  return (
    <div className="w-full h-fit pt-[100px]">
      <div className="w-full h-screen relative">
        <img
          src={datacover}
          alt={"Themis aviation data management"}
          className="w-full h-screen lg:object-cover object-cover absolute"
        />
        <div className="w-full h-screen absolute bg-darkgray bg-opacity-60 lg:pt-[5%] pt-[20%] lg:px-[70px] 2xl:px- md:px-[30px] px-[20px]">
          <div className="max-w-screen-2xl mx-auto">
            <h1 className="lg:text-[50px] 2xl:text-[70px] md:text-[30px] text-[24px] lg:w-[70%] 2xl:w-[90%] font-lato font-extrabold text-white mb-[50px]">
              Aviation Data Management: Streamline your aviation data management
            </h1>
            <h3 className="text-white text-[18px] font-lato 2xl:text-[30px] lg:w-[60%] 2xl:w-[55%] font-medium">
              Streamline your aviation data management: Our platform automates
              cyber security, provides analytics, and offers a comprehensive
              aviation statistics database.
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
      <div className="w-full max-w-screen-2xl mx-auto justify-items-center h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-4 lg:px-[70px] md:px-[30px] px-[20px] py-[50px]">
        {topDataCardItems.map((item, index) => (
          <div key={index}>
            <Iconcard
              dataCard={true}
              title={item.title}
              description={item.text}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="lg:hidden md:hidden visible">
            <RenderImage src={marketstatistics} alt={"Themis aviation"} />
          </div>
          <div className="w-full h-full lg:pr-0 md:pr-4 pr-0">
            <TitleLayout title={"Aviation market statistics"} />
            <div className="lg:w-[500px] h-fit text-left mt-[40px] mx-auto md:mx-0">
              <p className="font-lato font-medium text-textblue lg:text-[18px] text-[14px] leading-[138.5%]">
                We offer reports of market sizes, forecasts for all segmented
                regions to enhance an effective drive-operations which ensures
                correct decision-making and strategic planning.
              </p>
            </div>
          </div>
          <div className="lg:block md:block hidden">
            <RenderImage
              src={marketstatistics}
              alt={"Themis aviation market statistics"}
            />
          </div>
        </div>
        <div className="w-full max-w-screen-2xl mx-auto h-fit lg:px-[70px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            <RenderImage
              src={Tradestocks}
              alt={"Themis aviation Trade stocks"}
            />
          </div>
          <div className="w-full h-full lg:pl-[70px] md:pl-4 pl-0">
            <TitleLayout title={"Trade stocks"} />
            <div className="lg:w-[500px] h-fit text-left mt-[40px]">
              <p className="font-lato font-medium text-textblue lg:text-[18px] text-[14px] leading-[138.5%]">
                At Themis Aviation, we help assess aviation company's financial
                performance, covering revenue, profit-margins, degree of debt
                and cash flow, for investment viabilities and enable investors
                to determine the constancy of a company’s ability to turn a
                profit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-2xl mx-auto bg-white lg:px-[70px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="lg:hidden md:hidden visible">
            <RenderImage
              src={Financialadvice}
              alt={"Themis aviation Financial advice"}
            />
          </div>
          <div className="w-full h-full lg:pr-0 md:pr-4 pr-0">
            <TitleLayout title={"Financial advice"} />
            <div className="lg:w-[500px] h-fit text-left mt-[40px]">
              <p className="font-lato font-medium text-textblue lg:text-[18px] text-[14px] leading-[138.5%]">
                With airline industry net profits expected to reach $9.8 billion
                in 2023 (1.2% net profit margin), Themis Aviation will help your
                company address hindrances such as causes of loss, bloated cost
                structure, vulnerability to exogenous events and a reputation
                for poor service that combine to present a huge impediment to
                profitability.
              </p>
            </div>
          </div>
          <div className="lg:block md:block hidden">
            <RenderImage
              src={Financialadvice}
              alt={"Themis aviation Financial advice"}
            />
          </div>
        </div>
        <div className="w-full h-fit max-w-screen-2xl mx-auto lg:px-[70px] md:px-[30px] px-[20px] py-[50px] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div>
            <RenderImage
              src={Insurancereview}
              alt={"Themis aviation Insurance review"}
            />
          </div>
          <div className="w-full h-full lg:pl-[70px] md:pl-4 pl-0">
            <TitleLayout title={"Aviation Law Practice"} />
            <div className="lg:w-[500px] h-fit text-left mt-[40px]">
              <p className="font-lato font-medium text-textblue text-[18px] leading-[138.5%]">
                We offer expert oversight, audits & commendations for companies
                to be able to adapt to the changes of the sector quickly and
                have the main capabilities required for various management
                positions, and thus to contribute to the future of the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <QuerySection />
    </div>
  );
}

export default DataManagement;
