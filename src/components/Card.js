import React, { Component } from "react";
import LikeIcon from "./Icons/LikeIcon";
import PlusIcon from "./Icons/PlusIcon";
class Card extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="bg-netflix-gray-2 rounded-md">
        <div className="relative">
          <img className="rounded-t-md" src={movie?.image}></img>
          <span className="absolute top-2 right-3 text-white ">
            {movie?.duration}
          </span>
        </div>
        <div className="p-4 flex flex-col gap-y-5 ">
          <div className="flex flex-row items-center">
            <div className="  flex-1">
              <span className="text-green-500 font-netflixsansmedium text-base ">
                {movie?.matchscore}
              </span>
              <div className="flex flex-row text-lg font-netflixsansregular text-left  items-center flex-wrap gap-x-2 text-white">
                <span className="px-1.5 border-netflix-gray text-base border-[1px]">
                  {movie?.maturitynumber}+
                </span>
                <span className="text-base">{movie?.release}</span>
              </div>
            </div>

            <button className=" flex justify-center items-center  border-netflix-gray  w-11 h-11 border-2 rounded-full ml-2 hover:border-white ">
              <PlusIcon width={15} height={15} color="white" />
            </button>
          </div>

          <span className="text-sm text-white text-opacity-80 line-clamp-6">
            {movie?.description}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
