import React from "react";
import querybg from "../assets/queryBG.svg";
import Button from "./Button";
import Input from "./Input";

function QuerySection(props) {
  return (
    <div id="query" className="w-full lg:h-[400px] h-[800px] relative">
      <img
        src={querybg}
        className="absolute w-full lg:h-full h-full object-cover"
        alt="Themis Aviation"
      />
      <div className="w-full lg:h-full h-full absolute bg-darkgray bg-opacity-60 lg:px-[70px] md:px-[30px] px-[20px] py-[50px] flex flex-col justify-center">
        <div className="max-w-screen-2xl mx-auto lg:flex block">
          <div className="w-full font-lato text-white lg:mb-0 mb-10">
            <h1 className="text-[40px] font-bold">Request a Free Query</h1>
            <p className="text-[16px] font-medium mt-[50px]">
              Would you like to speak to one of our specialists? Just submit
              your details and we’ll be in touch shortly.
            </p>
          </div>
          <div className="h-fit lg:h-auto lg:grid md:grid lg:space-y-0 md:space-y-0 space-y-6 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 w-full lg:px-[50px]">
            <Input
              style={"w-full"}
              label={"Name"}
              placeholder={"Enter your name"}
            />
            <Input
              style={"w-full"}
              label={"Email"}
              placeholder={"Enter your email"}
            />
            <div className="lg:col-span-2 md:col-span-2 col-span-1">
              <Input
                style={"w-full"}
                text={true}
                label={"Send a query"}
                placeholder={"Type query..."}
              />
            </div>
            <div className="w-full flex justify-end relative col-span-2">
              <Button
                buttonText={"Request a Query"}
                buttonStyle={"bg-darkgray text-white pl-[50px] pr-[30px]"}
                iconPresent={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuerySection;
