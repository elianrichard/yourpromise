import React from "react";

const PercentIcon = ({ strokeColor }: { strokeColor?: string }) => {
  return (
    <svg fill="none" viewBox="0 0 48 66" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.8261 4.39112C20.7732 3.26563 19.8656 2.03122 19.0305 0.760498C13.1489 5.26247 13.0763 22.9073 23.351 18.0423C32.1008 13.9034 25.0211 2.64842 18.2318 1.9586"
        stroke={strokeColor || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M1.24121 50.3913C16.4898 46.1797 34.9697 32.456 47.2412 27.4094"
        stroke={strokeColor || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M36.349 56.4179C35.1146 55.365 33.9165 55.3287 32.8273 56.2364C26.1833 80.1259 58.9678 46.7242 35.1509 52.7873"
        stroke={strokeColor || "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default PercentIcon;
