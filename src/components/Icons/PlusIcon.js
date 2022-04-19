import React from "react";

const PlusIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    class="Hawkins-Icon Hawkins-Icon-Standard"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
      fill={color}
    ></path>
  </svg>
);

export default PlusIcon;
