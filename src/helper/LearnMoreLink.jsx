import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function LearnMoreLink({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex text-[13px] items-center space-x-2 hover:underline cursor-pointer"
    >
      <span className="font-lato font-medium"> {text}</span>
      <span>
        <IoIosArrowRoundForward size={20} />
      </span>
    </div>
  );
}
