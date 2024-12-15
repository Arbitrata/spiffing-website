import React from "react";

export default function Icon({ onClick, icon, className }) {
  return (
    <div
      onClick={onClick}
      className={`grid place-items-center cursor-pointer hover:bg-textblue ${
        className ? className : ""
      } `}
    >
      {icon}
    </div>
  );
}
