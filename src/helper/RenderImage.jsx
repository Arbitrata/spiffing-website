import React from "react";

export default function RenderImage({ src, alt }) {
  return (
    <div className="w-full h-[350px]">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
