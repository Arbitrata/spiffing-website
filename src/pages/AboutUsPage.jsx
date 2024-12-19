import { hero2, hero3 } from "../assets";
import { HeaderTitle } from "../components/headers";
import { HeroCard } from "../components/cards";
import { Counter } from "../components/counter";
import { CTA } from "./LandingPage";

export default function AboutUsPage() {
  return (
    <div className="w-full h-fit overflow-hidden pt-[95px]">
      <div className="w-full h-screen relative">
        <img src={hero3} alt="" className="w-full h-full object-cover" />
        <div className="w-full h-screen bg-rotorblue absolute top-0 bg-opacity-40 grid place-content-center">
          <div className="wfit h-fit grid justify-center ">
            <h1 className="md:text-[33px] text-[18px] text-center font-extrabold text-rotorwhite mb-6">
              Unmatched Excellence: Safety and Satisfaction
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-full h-fit flex justify-center py-[80px] lg:px-0 md:px-14 px-4">
          <HeaderTitle
            title={"Fly with us"}
            descriptions={
              "Whether you seek an unforgettable helicopter charter experience, an unparalleled journey with our high-quality private jet charter services, where luxury and efficiency converge at 40,000 feet, or an international top-tier maintenance services, we're here to elevate your expectations."
            }
          />
        </div>
        <div className="bg-rotorbg flex justify-center">
          <div className="w-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 h-fit lg:p-[60px] md:p-[30px] px-4 max-w-screen-2xl mx-auto">
            <HeroCard
              image={hero2}
              title={"Our Team"}
              description={
                "With a team of experienced pilots, seasoned engineers and customer service representatives we offer unmatched dedication to providing the highest level of safety and satisfaction to our customers. We prioritize ongoing training and education to ensure a top-notch experience."
              }
            />
            <HeroCard
              image={hero3}
              title={"Our Location"}
              description={
                "Based in the vibrant landscape of Kenya, nestled in the heart of Nairobi, along Langata road, opposite tamarind tree hotel into Langata road link, we are located in Wilson Airport, Apron 5, Hangar 11 and 12."
              }
            />
            <HeroCard
              image={hero2}
              title={"Our Services"}
              description={
                "Discover the extraordinary with your premium partner for luxury helicopter chartering, VIP Jet Services and meticulous helicopter maintenance services."
              }
            />
          </div>
        </div>
        <div className="w-full h-fit flex justify-center py-[80px] lg:px-0 md:px-14 px-4">
          <HeaderTitle
            title={"Our History"}
            descriptions={
              "We take pride in not only providing unparalleled services but also playing a leading role in showcasing the beauty of the African continent through our operations. We have been providing helicopter charter services for over 10 years. We started with a single helicopter and have since expanded to a fleet of 7, serving customers across the country and the world."
            }
          />
        </div>
        <div className="w-full h-fit bg-rotorblue flex justify-between">
          <div className="w-full lg:flex justify-between md:h-[225px] h-fit md:py-0 py-10 md:space-y-0 items-center gap-8 grid md:grid-cols-4 grid-cols-2 lg:px-[100px] px-[40px] max-w-screen-2xl mx-auto">
            <Counter start={11000} end={12000} label={"Flight hours"} />
            <Counter start={400} end={500} label={"Destinations"} />
            <Counter start={29000} end={30000} label={"Passengers"} />
            <Counter start={4000} end={5000} label={"Missions"} />
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
