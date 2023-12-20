import React, { useState } from "react";
import Copy from "../../icons/Copy.tsx";

const ContactInfo = ({
  value = "",
  text = "Email:",
}: {
  value: string;
  text: string;
}) => {
  const [inputValue] = useState(value);
  const [active, setActive] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setActive(true);
      setTimeout(() => {
        setActive(false);
      }, 1500);
    });
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="font-medium">{text}</div>
      <div className="flex gap-2">
        <input
          id="correo"
          type="text"
          disabled
          className="bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-300"
          value={inputValue}
        />
        <button
          onClick={handleCopyClick}
          className="flex bg-primary hover:bg-opacity-90 text-indigo-100 py-2.5 px-4 rounded-lg cursor-pointer relative"
        >
          <Copy />
          {active && (
            <div className="absolute z-10 bg-white text-black py-1 px-2 text-sm rounded-md shadow-md bottom-14 left-1/2 transform -translate-x-1/2 ">
              Copiado!
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
