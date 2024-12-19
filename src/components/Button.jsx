/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

export default function Button({
  onClick,
  type,
  buttonStyle,
  onSubmit,
  buttonText,
  iconPresent,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
      className={`h-[50px] w-fit px-[24px] flex items-center ${
        buttonStyle ? buttonStyle : "text-[18px] text-white"
      } `}
    >
      <div className="w-fit h-fit flex items-center space-x-4 font-semibold">
        <span>{buttonText}</span>
        <span>{iconPresent && <FaArrowRight size={20} />}</span>
      </div>
    </button>
  );
}
