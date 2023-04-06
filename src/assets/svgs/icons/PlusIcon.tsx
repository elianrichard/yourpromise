import React from "react";

const PlusIcon = ({ strokeColor }: { strokeColor?: string }) => {
  return (
    <svg fill="none" viewBox="0 0 34 41" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 23.3902C10.4785 19.6958 22.4573 15.7402 32.7195 15.9268"
        stroke={strokeColor || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14.061 1.00014C14.5462 0.925503 18.4271 31.3762 20.5915 39.2501"
        stroke={strokeColor || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default PlusIcon;
