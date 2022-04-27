import React, { Component } from "react";
import "./ShowDetailsButton.css";
import PlayIcon from "../Icons/PlayIcon";
import PlusIcon from "../Icons/PlusIcon";
import LikeIcon from "../Icons/LikeIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";

import "../../styles/index.css";

function renderContents(data) {
  return data.map((element, index) => {
    if (index == 0) {
      return <span>{element}</span>;
    } else {
      return (
        <>
          <div className="w-1 h-1 flex justify-center items-center text-center  rounded-full bg-netflix-gray mx-1"></div>
          <span>{element}</span>
        </>
      );
    }
  });
}

class ShowDetailsButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: null,
    };
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="show-details-button shadow-lg">
        <div className="flex flex-col text-left w-full h-full rounded-b-lg  bg-netflix-black-2 py-2">
          <div className="flex flex-row text-xs p-2 px-4 justify-between">
            <div>
              <button className="flex justify-center items-center bg-white border-white  w-8 h-8 border-2 rounded-full hover:bg-opacity-90">
                <PlayIcon width={15} height={15} color="black" />
              </button>
              <button className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full ml-2 hover:border-white">
                <PlusIcon width={15} height={15} color="white" />
              </button>
              <button className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full ml-2 hover:border-white">
                <LikeIcon width={15} height={15} color="white" />
              </button>
            </div>

            <button
              onClick={this.props.onClick}
              className="flex justify-center items-center  border-netflix-gray  w-8 h-8 border-2 rounded-full hover:border-white"
            >
              <DownArrowIcon width={15} height={15} color="white" />
            </button>
          </div>
          <div className="flex flex-row text-sm font-netflixsansregular text-left p-2 px-4 items-center flex-wrap gap-x-2">
            {movie?.matchscore ? (
              <span className="text-green-500 font-netflixsansmedium text-[13px]">
                {movie.matchscore}
              </span>
            ) : null}

            {movie?.maturitynumber ? (
              <span className="px-1.5 border-netflix-gray text-[13px] border-[1px]">
                {movie.maturitynumber}+
              </span>
            ) : null}
            {movie?.duration ? (
              <span className="text-[13px]">{movie.duration}</span>
            ) : null}
          </div>
          <div className="flex flex-row text-[13px] font-netflixsansregular text-left p-2 px-4 items-center flex-wrap">
            {movie?.contents ? renderContents(movie.contents) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetailsButton;
