import React from "react";

function Input({ label, type, id, name, placeholder, text, style, disabled }) {
  return (
    <div className={``}>
      <label className="block mb-[3px] text-[15px] font-extrabold text-rotorblue capitalize">
        {label}
      </label>
      {text ? (
        <textarea
          required
          name={name}
          id={id}
          className="outline-none p-[10px] w-full min-h-[120px] rounded border border-rotorgray"
          placeholder={placeholder}
        />
      ) : (
        <input
          required
          type={type}
          disabled={disabled}
          id={id}
          name={name}
          className={`${
            style ? style : "w-[200px]"
          } bg-rotorwhite outline-none px-[10px] h-[50px] rounded border border-rotorgray`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default Input;
