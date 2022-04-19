import React from "react";

const CrossIcon = ({ width, height, color }) => (
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
      d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
      fill={color}
    ></path>
  </svg>
);

export default CrossIcon;
