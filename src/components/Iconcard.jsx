import React from "react";

function Iconcard({ lawCard, dataCard, icon, title, description }) {
  return (
    <div
      className={`${
        lawCard ? "w-fit lg:w-[400px] xl:w-[400px]" : "rounded-[5px]"
      } relative w-[350px] h-fit md:h-[300px] xl:h-[300px] lg:h-[300px] bg-white shadow grid place-content-center font-lato text-center p-4 xl:p-[40px] md:p-[40px] lg:p-[40px] transition-all duration-300 group hover:bg-darkgray hover:text-white`}
    >
      <div
        className={`${
          dataCard ? "" : "grid place-content-center"
        } w-full h-fit mb-[18px] `}
      >
        {icon}
      </div>
      <h1
        className={`${
          dataCard ? " text-left" : "text-center"
        } font-extrabold text-[20px] text-darkgray group-hover:text-white `}
      >
        {title}
      </h1>
      <p
        className={`${
          dataCard ? "text-left" : "text-center"
        } my-[20px] text-[15px] font-regular `}
      >
        {description}
      </p>

      {!lawCard && (
        <div
          className={
            dataCard
              ? "hidden"
              : "uppercase text-center w-full grid place-content-center text-[14px]"
          }
        >
          {/* {learnMoreLink("learn more")} */}
        </div>
      )}
    </div>
  );
}

export default Iconcard;
