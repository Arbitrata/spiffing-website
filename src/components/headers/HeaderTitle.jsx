import React from "react";

export default function HeaderTitle({
  title,
  descriptions,
  renderDescription,
  className,
}) {
  return (
    <div className="w-auto h-fit max-w-[810px] space-y-[24px]">
      <div className="w-full h-fit flex justify-center space-x-6 items-center">
        <div className="lg:w-[150px] md:w-[100px] w-[50px] h-[4px] rounded-full bg-sniffGreen" />
        <h1
          className={`lg:text-[33px] md:text-[27px] text-[18px] font-bold text-center leading-[130%] ${
            className ? className : "text-white"
          } `}
        >
          {title}
        </h1>
        <div className="lg:w-[150px] md:w-[100px] w-[50px] h-[4px] rounded-full bg-sniffGreen" />
      </div>
      {!renderDescription && (
        <p
          className={`text-[16px] text-center font-light leading-[25px] ${
            className ? className : "text-white"
          } `}
        >
          {descriptions}
        </p>
      )}
    </div>
  );
}
