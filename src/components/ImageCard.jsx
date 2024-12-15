import React from "react";
import Button from "./Button";
import { LearnMoreLink, ScrollToBehavior } from "../helper";

function ImageCard({
  lawPractices,
  image,
  title,
  description,
  onClick,
  electronics,
}) {
  return (
    <div
      className={`${
        lawPractices ? "h-fit" : " h-[445px]"
      } bg-white shadow w-[350px] rounded-[5px]`}
    >
      <div className="w-full h-[200px] overflow-hidden">
        <img
          className="hover:scale-105 w-full h-full object-cover rounded-t-[5px]"
          src={image}
          alt={image}
        />
      </div>
      <div className="w-full py-[25px] px-[20px] font-lato">
        <h1
          className={`${
            electronics ? "" : "truncate"
          } font-extrabold text-[20px] text-darkgray`}
        >
          {title}
        </h1>
        {!electronics && (
          <p className="my-[20px] text-[16px] font-regular text-darkblue line-clamp-3 leading-[24px]">
            {description}
          </p>
        )}
        {electronics ? null : lawPractices ? (
          <div className="uppercase text-darkgray">
            <LearnMoreLink text={"LEARN MORE"} onClick={onClick} />
          </div>
        ) : (
          <div className="w-full flex justify-between items-center uppercase text-darkgray">
            <Button
              onClick={onClick}
              buttonStyle={"bg-darkgray text-white px-[20px]"}
              buttonText={"LEARN MORE"}
            />
            <LearnMoreLink
              text={"GET QUOTE"}
              onClick={() => ScrollToBehavior("courseForm")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
