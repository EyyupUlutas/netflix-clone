import React, { Component } from "react";
import PlayIcon from "./Icons/PlayIcon";
import InfoIcon from "./Icons/InfoIcon";
class HomePreview extends Component {
  render() {
    const { movies } = this.props;
    const movie = movies[5];
    return (
      <div className="w-[100%] z-20 flex justify-center ">
        <img className="object-cover " src={movie?.trailerimage}></img>

        <div className="absolute md:bottom-44 top-32 left-3 md:left-4 lg:left-14 block">
          <img className="w-2/5  " src={movie?.movietextimage}></img>
          <span className="hidden md:inline-block w-2/5 py-6 text-sm lg:text-xl text-white font-netflixsansregular ">
            {movie?.description}
          </span>
          <div className="flex flex-row pt-4 md:pt-0">
            <button className="flex bg-white px-3 py-1 md:px-6 md:py-2 rounded-md hover:bg-opacity-80 items-center">
              <PlayIcon color={"black"} className="w-4 h-4 md:w-6 md:h-6" />
              <span className="ml-1 md:ml-3 text-black  font-netflixsansmedium text-xs md:text-base">
                Oynat
              </span>
            </button>
            <button className="flex bg-netflix-gray bg-opacity-70 px-3 p-2 md:px-6 md:py-2 rounded-md ml-2 hover:bg-opacity-50">
              <InfoIcon color={"white"} className="w-4 h-4 md:w-6 md:h-6 " />
              <span className="ml-1 md:ml-3 text-white text-xs   font-netflixsansmedium md:text-base">
                Daha Fazla Bilgi
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePreview;
