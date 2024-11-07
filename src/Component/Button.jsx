import React from "react";

const Button = ({ children, className, size, ...props }) => {
  const btnStyle = `flex items-center border transition-all 
  hover:shadow-xl 
  ${
    size === "m"
      ? " p-1 w-[20px] h-[20px] mx-auto rounded-full hover:text-accent-blue hover:border-accent-blue"
      : ""
  }
  ${size === "l" ? "px-4 py-2 rounded-lg" : ""}
  ${className}`;

  return (
    <button className={btnStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
