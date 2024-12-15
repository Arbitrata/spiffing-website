import React from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import catalog from "../assets/catalog.jpg";

export default function Catalog() {
  const navigate = useNavigate();

  const NavigateToCatalog = () => {
    navigate("/Electronics&drone-technology", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <img src={catalog} alt="Coming soon" className="w-full h-full absolute" />
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-opacity-40 bg-darkgray grid place-content-center">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10 text-center">
          Coming Soon
        </h1>
        <p className="text-white text-xl md:text-2xl">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="w-full grid place-content-center mt-10">
          <Button
            onClick={NavigateToCatalog}
            buttonStyle={"bg-darkgray px-[50px] text-white"}
            buttonText={"Go back"}
          />
        </div>
      </div>
    </div>
  );
}
