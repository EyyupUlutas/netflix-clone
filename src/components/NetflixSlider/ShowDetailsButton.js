import React from "react";
import IconArrowDown from "./../Icons/IconArrowDown";
import "./ShowDetailsButton.css";
import PlayIcon from "../Icons/PlayIcon";
import AddListIcon from "../Icons/AddListIcon";
import LikeIcon from "../Icons/LikeIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";

import "../../styles/index.css";

function dot() {
  return (
    <div className="w-1 h-1 flex justify-center items-center text-center  rounded-full bg-netflix-gray mx-1"></div>
  );
}

const ShowDetailsButton = ({ onClick }) => (
  <div className="show-details-button shadow-lg">
    <div className="flex flex-col text-left w-full h-full rounded-b-lg  bg-netflix-black-2 py-2">
      <div className="flex flex-row text-xs p-2 px-4 justify-between">
        <div>
          <button className="flex justify-center items-center bg-white border-white  w-8 h-8 border-2 rounded-full hover:bg-opacity-90">
            <PlayIcon width={15} height={15} color="black" />
          </button>
          <button className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full ml-2 hover:border-white">
            <AddListIcon width={15} height={15} color="white" />
          </button>
          <button className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full ml-2 hover:border-white">
            <LikeIcon width={15} height={15} color="white" />
          </button>
        </div>

        <button
          onClick={onClick}
          className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full hover:border-white"
        >
          <DownArrowIcon width={15} height={15} color="white" />
        </button>
      </div>
      <div className="flex flex-row text-sm font-netflixsansregular text-left p-2 px-4 items-center">
        <span>Drama</span>
        {dot()}
        <span>Duygusal</span>
      </div>
    </div>
  </div>
);

export default ShowDetailsButton;
