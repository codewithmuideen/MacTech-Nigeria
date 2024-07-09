import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ styles, text }) => {
  return (
    <div>
      <button
        type="button"
        className={`${styles} flex justify-center items-center gap-3 md:gap-2`}
      >
        {text} <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;
