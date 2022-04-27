import React from "react";
import DownArrowIcon from "./../Icons/DownArrowIcon";
import "./SlideButton.css";

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <DownArrowIcon color="white" className="w-8 h-8 sm:w-10 sm:h-10" />
    </span>
  </button>
);

export default SlideButton;
