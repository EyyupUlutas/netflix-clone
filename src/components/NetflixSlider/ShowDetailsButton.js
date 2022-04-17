import React from "react";
import IconArrowDown from "./../Icons/IconArrowDown";
import "./ShowDetailsButton.css";

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
