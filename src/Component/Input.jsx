import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`p-0 border-0 border-b-2 focus:border-accent-blue ${className}`}
      {...props}
    />
  );
};

export default Input;
