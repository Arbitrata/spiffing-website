import React from "react";
import { MdNavigateNext } from "react-icons/md";

export default function Button({
  onClick,
  type,
  buttonStyle,
  onSubmit,
  buttonText,
  iconPresent,
  iconStyle,
  disabled=false
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
      className={`h-[50px] w-fit text-[15px] py-[13px] flex items-center rounded-[2px] ${
        buttonStyle ? buttonStyle : ""
      } `}
    >
      <span className="font-lato">{buttonText}</span>
      {iconPresent && (
        <div
          className={`w-[50px] h-[50px] grid place-content-center text-[14px] font-lato font-extrabold ${
            iconStyle ? iconStyle : ""
          }`}
        >
          <MdNavigateNext size={20} />
        </div>
      )}
    </button>
  );
}
