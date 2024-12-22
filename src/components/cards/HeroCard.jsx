
function HeroCard({ title, description, icon }) {
  return (
    <div
      className={`w-full max-w-[400px] bg-darkGreen bg-opacity-50 group h-full rounded-[5px] relative overflow-hidden shadow  `}
    >
      <div className="text-white justify-start space-y-4 rounded-[5px] md:px-[26px] px-2 h-full w-full py-4 flex flex-col">
        <p className="text-sniffGreen">
          {icon}
        </p>
        <h1 className="md:text-[20px] text-[18px] font-bold leading-[130%]">
          {title}
        </h1>
        <span className="text-[16px] font-light leading-[25px]">
          {description}
        </span>
      </div>
    </div>
  );
}

export default HeroCard;
