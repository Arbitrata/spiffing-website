import React from "react";

function TitleLayout({ title }) {
  return (
    <div className="w-fit">
      <h1 className="lg:text-[32px] text-[24px] font-lato font-extrabold text-darkgray">
        {title}
      </h1>
      <hr className="w-[30%] border-2 border-darkgray rounded-full mt-6" />
    </div>
  );
}

export default TitleLayout;
