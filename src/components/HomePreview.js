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

        <div className="absolute bottom-44 left-14 sm:block hidden">
          <img className="w-2/5  " src={movie?.movietextimage}></img>
          <span className=" sm:inline-block w-2/5 py-6 text-xl text-white font-netflixsansregular ">
            {movie?.description}
          </span>
          <div className="flex flex-row">
            <button className="flex bg-white px-6 py-2 rounded-md hover:bg-opacity-80 items-center">
              <PlayIcon width={25} height={25} color={"black"} />
              <span className="ml-3 text-black  font-netflixsansmedium text-md">
                Oynat
              </span>
            </button>
            <button className="flex bg-netflix-gray bg-opacity-70 px-6 py-2 rounded-md ml-2 hover:bg-opacity-50">
              <InfoIcon width={25} height={25} color={"white"} />
              <span className="ml-3 text-white  font-netflixsansmedium ">
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
