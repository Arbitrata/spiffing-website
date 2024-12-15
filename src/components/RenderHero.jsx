import React from "react";
import Button from "./Button";

function RenderHero({ title, src, alt, description, onClick, buttonText }) {
  return (
    <div className="w-full h-screen relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-screen lg:object-cover object-cover absolute"
      />
      <div className="w-full h-screen absolute bg-darkgray bg-opacity-60 lg:px-[70px] 2xl:px- md:px-[30px] px-[20px] flex items-center">
        <div className="max-w-screen-2xl mx-auto">
          <div className="lg:w-[80%] 2xl:w-[90%] md:w-[80%] w-full lg:ml-[20px] 2xl:ml-[50px] ml-[10px] text-left">
            <h1 className="lg:text-[50px] 2xl:text-[70px] md:text-[30px] text-[24px] font-lato font-extrabold text-white mb-[50px]">
              {title}
            </h1>
            <h3 className="text-white text-[18px] font-lato 2xl:text-[30px] lg:w-[70%] md:w-[90%] font-medium">
              {description}
            </h3>
            <div className="mt-[50px]">
              <Button
                onClick={onClick}
                buttonText={buttonText}
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
    </div>
  );
}

export default RenderHero;
