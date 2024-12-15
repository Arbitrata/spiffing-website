import React from "react";

export default function FeedCard({ image, name, title }) {
  return (
    <div className="w-[360px] h-[205px] shadow p-[20px] font-lato relative mr-5 cursor-pointer my-2">
      <img className="w-full h-full object-contain" src={image} alt={name} />
      <p className="text-[13px] text-textgray line-clamp-1">{title}</p>
    </div>
  );
}
