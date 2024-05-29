import React from "react";

import { useStateContext } from "../contexts/ContextProvider";

const Button = ({ bgColor, color, size, text }) => {
  return (
    <button
      type="button"
      
      className={` text-${size} p-3 hover:drop-shadow-xl rounded-lg`}
      style={{ backgroundColor: bgColor, color }}
    >
      {text}
    </button>
  );
};

export default Button;
