import Button from "./Button";

function RenderHero({
  title,
  src,
  description,
  onClick,
  buttonText,
  button,
  className,
  buttonStyle,
}) {
  return (
    <div
      className={`w-full relative bg-fixed bg-center  bg-sniffGreen ${
        className ? className : " h-screen"
      }`}
    >
      <div className="w-full h-full absolute top-0 left-0">
        <img
          src={src}
          alt="Sniffing events limited"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="w-full h-screen absolute bg-darkGreen bg-opacity-80 top-0 left-0 lg:px-[70px] 2xl:px- md:px-[30px] px-[20px] flex items-center">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full grid place-items-center justify-center">
            <h1 className="lg:text-[40px] md:text-[35px] text-center text-[30px] tracking-wide lg:max-w-[60%] font-bold text-sniffBg">
              {title}
            </h1>
            <h3 className="text-white text-[18px] font-lato 2xl:text-[30px] lg:w-[70%] md:w-[90%] font-medium">
              {description}
            </h3>
            {button && (
              <div className="mt-[50px]">
                <Button
                  onClick={onClick}
                  buttonText={buttonText}
                  iconPresent={true}
                  iconStyle={"bg-beige ml-[20px] 2xl:ml-[70px]"}
                  buttonStyle={`  lg:pl-[50px] pl-[20px] 2xl:pl-[70px] ${
                    buttonStyle
                      ? buttonStyle
                      : "bg-darkGreen text-white hover:bg-opacity-70"
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderHero;
