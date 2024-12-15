import React from "react";

const HeadingLayout = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <hr className="border-2 border-darkgray w-[100px] rounded-full my-4" />
      <h1 className="font-lato font-extrabold lg:text-[33px] lg:px-[23%] px-[5%] text-[24px] text-darkgray text-center">
        {title}
      </h1>
      <h3 className="text-[18px] p-2 font-lato font-normal text-center text-textgray lg:px-[25%] mt-[10px]">
        {text}
      </h3>
    </div>
  );
};

export default HeadingLayout;
