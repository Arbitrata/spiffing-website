import AliceCarousel from "react-alice-carousel";
import { about1, contact1 } from "../assets";
import { ContactForm, RenderHero } from "../components";
import { useRef } from "react";

export default function ContactUsPage() {
  const heroCarouselRef = useRef();
  return (
    <div className="w-full">
      <AliceCarousel
        ref={heroCarouselRef}
        duration={700}
        startIndex={0}
        fadeOutAnimation={true}
        autoPlay={false}
        disableDotsControls={true}
        disableButtonsControls={true}
        mouseDragEnabled={false}
        autoPlayInterval={2000}
        infinite={true}
      >
        <div>
          <RenderHero
            className={"h-[35vh] w-full"}
            src={about1}
            alt={"Spiffing Events Limited"}
            title={"Contact"}
          />
        </div>
      </AliceCarousel>
      <div className="min-h-screen bg-whitelg:px-[70px] md:px-[30px] py-10 px-[20px] w-full h-full max-w-screen-xl lg:flex mx-auto">
        <div className="lg:w-[40%] relative w-full bg-textGray rounded-l-md overflow-hidden">
          <img
            src={contact1}
            alt="Spiffing Events limited"
            className="w-full absolute top-0 left-0 h- h-[100%] object-cover"
          />
        </div>
        <div className="lg:w-[60%] w-full p-7 bg-sniffBg rounded-r-md">
          <div>
            <h1 className="text-[33px] py-6 font-bold text-darkGreen text-center">
              Talk to Us!
            </h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
