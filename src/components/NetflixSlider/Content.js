import React, { Component } from "react";
// import IconCross from "./../Icons/IconCross";
import PlayIcon from "../Icons/PlayIcon";
import PlusIcon from "../Icons/PlusIcon";
import LikeIcon from "../Icons/LikeIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import MutedIcon from "../Icons/MutedIcon";
import AudioIcon from "../Icons/AudioIcon";
import CrossIcon from "../Icons/CrossIcon";
import Card from "../Card";

import "../../styles/index.css";

import movies from "../../data.json";

function scrollToDetail() {
  const divElement = document.getElementById("detail");
  divElement.scrollIntoView({ behavior: "smooth" });
}

function renderItem(data) {
  return data.map((c, index) => (
    <a key={index} className="hover:underline hover:cursor-pointer">
      {c}
      {data.length == 1 || index == data.length - 1 ? null : ", "}
    </a>
  ));
}

function renderSection(sections) {
  return sections.map((section, index) => (
    // bg-netflix-gray bg-opacity-20
    <div className="flex flex-row border-y-[1px] rounded-md border-netflix-gray-2 sm:pl-8 sm:pr-16 py-8 items-center hover:cursor-pointer  ">
      <div className="mr-5 font-netflixsansregular text-2xl">{index + 1}</div>
      <img
        className="w-16 h-10 sm:w-32 sm:h-20  rounded-md"
        src={section?.image}
      ></img>
      {/* w-32 h-20 */}
      <div className="pl-3 w-full">
        <div className="flex flex-row justify-between">
          <div className="font-netflixsansmedium">{section?.title}</div>
          <div className="font-netflixsansregular ml-3 sm:ml-0">
            {section?.duration}
          </div>
        </div>
        <div className="text-opacity-80 text-xs sm:text-sm text-white pt-2">
          {section?.description}
        </div>
      </div>
    </div>
  ));
}
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: false,
    };
  }

  render() {
    const { movie, onClose } = this.props;
    return (
      <div className="fixed flex justify-center top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] overflow-y-auto">
        <div className="absolute bg-netflix-black-2 z-[1000] w-[98%] lg:w-7/12 rounded-md top-5">
          <div className="h-full w-full relative">
            <button
              onClick={onClose}
              className="flex absolute top-4 right-4 justify-center items-center  bg-netflix-black-2  w-9 h-9 rounded-full z-20"
            >
              <CrossIcon width={18} height={18} color="white" />
            </button>
            <img className="rounded-t-md" src={movie?.detailimage}></img>

            <div className="absolute w-full flex flex-row justify-between bottom-10 px-10 z-10">
              <div>
                <img className="w-2/5 pb-12" src={movie?.movietextimage}></img>
                <div className="flex flex-row items-center gap-x-1 ">
                  <button className="flex bg-white px-6 py-2 rounded-[4px] hover:bg-opacity-80 items-center">
                    <PlayIcon width={25} height={25} color={"black"} />
                    <span className="ml-3 text-black  font-netflixsansmedium text-lg">
                      Oynat
                    </span>
                  </button>

                  <button className="flex justify-center items-center  border-netflix-gray  w-11 h-11 border-2 rounded-full ml-2 hover:border-white">
                    <PlusIcon width={20} height={20} color="white" />
                  </button>
                  <button className=" flex justify-center items-center  border-netflix-gray  w-11 h-11 border-2 rounded-full ml-2 hover:border-white ">
                    <LikeIcon width={20} height={20} color="white" />
                  </button>
                </div>
              </div>
              <div
                onClick={() => {
                  if (this.state.muted) {
                    this.setState({ muted: false });
                  } else {
                    this.setState({ muted: true });
                  }
                }}
                className="absolute bottom-0 right-2 sm:right-10 "
              >
                <button className="flex justify-center items-center border-opacity-70 fill-netflix-gray border-netflix-gray  w-10 h-10 border-2 rounded-full ml-2 transition-all duration-500	 hover:border-white hover:bg-netflix-gray hover:bg-opacity-30 hover:fill-white hover:opacity-100">
                  {this.state.muted ? (
                    <MutedIcon width={19} height={19} />
                  ) : (
                    <AudioIcon width={19} height={19} />
                  )}
                </button>
              </div>
            </div>

            <div className="w-full bottom-0 absolute flex p-28   bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
          </div>
          <div className="w-full bg-transparent flex flex-row px-7 py-5">
            <div className="flex-1 flex flex-col gap-y-5 text-white px-4">
              <div className="flex flex-row text-lg font-netflixsansregular text-left  items-center flex-wrap gap-x-2">
                {movie?.matchscore ? (
                  <span className="text-green-500 font-netflixsansmedium text-base font-bold">
                    {movie.matchscore}
                  </span>
                ) : null}

                <span className="px-1.5 text-base">2022</span>
                {movie?.maturitynumber ? (
                  <span className="px-1.5 border-netflix-gray text-base border-[1px]">
                    {movie.maturitynumber}+
                  </span>
                ) : null}
                {movie?.duration ? (
                  <span className="text-base">{movie.duration}</span>
                ) : null}
              </div>

              <span className="text-lg pr-20">{movie?.description}</span>
            </div>
            <div className="flex-[0.5]  text-white">
              <div className="flex flex-col items-center text-sm gap-y-4 text-left">
                {movie?.cast?.length > 0 ? (
                  <div className="w-full">
                    <span className="text-netflix-gray">Oyucu kadrosu: </span>
                    {renderItem(movie?.cast)}
                    <span
                      onClick={scrollToDetail}
                      className="italic  pl-1 hover:underline hover:cursor-pointer"
                    >
                      daha fazla
                    </span>
                  </div>
                ) : null}

                {movie?.genres?.length > 0 ? (
                  <div className="w-full">
                    <span className="text-netflix-gray">Türler: </span>
                    {renderItem(movie?.genres)}
                  </div>
                ) : null}

                {movie?.contents?.length > 0 ? (
                  <div className="w-full">
                    <span className="text-netflix-gray">Bu içerik: </span>
                    {renderItem(movie?.contents)}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Sections */}

          {movie?.sections?.length > 0 ? (
            <div className="p-10 text-white ">
              <div className="flex flex-row justify-between pb-5">
                <span className="text-2xl text-white font-netflixsansmedium">
                  Bölümler
                </span>
                <span className="text-lg text-white font-netflixsansregular">
                  {movie?.duration}
                </span>
              </div>
              {renderSection(movie?.sections)}
              {movie?.sections?.length >= 3 ? (
                <div className="w-full relative border-netflix-gray border-opacity-50 border-b-2">
                  <div className="w-full bottom-0 absolute flex p-10 bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
                  <div className="absolute flex justify-center items-center text-center bottom-[-18px] z-50 w-full ">
                    <button className="flex justify-center items-center  border-netflix-gray bg-[#404040] bg-opacity-60   w-9 h-9 border-2 rounded-full ml-2 hover:border-white ">
                      <DownArrowIcon width={18} height={18} color="white" />
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Similars */}
          <div className="p-10">
            <span className="text-2xl text-white font-netflixsansmedium">
              Benzerleri
            </span>
            <div className="grid gap-3 sm:gap-5 max-h-netflix  grid-cols-3 relative	overflow-hidden w-full pt-5">
              {movies.map((movie) => (
                <Card movie={movie}></Card>
              ))}
            </div>
            {movies.length >= 9 ? (
              <div className="w-full relative border-netflix-gray border-opacity-50 border-b-2">
                <div className="w-full bottom-0 absolute flex p-10 bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
                <div className="absolute flex justify-center items-center text-center bottom-[-18px] z-50 w-full ">
                  <button className="flex justify-center items-center  border-netflix-gray bg-[#404040] bg-opacity-60   w-9 h-9 border-2 rounded-full ml-2 hover:border-white ">
                    <DownArrowIcon width={18} height={18} color="white" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Details */}
          <div id="detail" className="p-10 flex flex-col">
            <span className="text-white  text-2xl font-netflixsansmedium pb-5">
              {movie?.name}{" "}
              <span className="font-netflixsansregular">Hakkında</span>
            </span>
            <div className="flex flex-col items-center text-sm gap-y-2  text-left text-white">
              {movie?.creators?.length > 0 ? (
                <div className="w-full">
                  <span className="text-netflix-gray">Yaratıcılar: </span>
                  {renderItem(movie?.creators)}
                </div>
              ) : null}

              {movie?.cast?.length > 0 ? (
                <div className="w-full">
                  <span className="text-netflix-gray">Oyucu kadrosu: </span>
                  {renderItem(movie?.cast)}
                </div>
              ) : null}
              {movie?.genres?.length > 0 ? (
                <div className="w-full">
                  <span className="text-netflix-gray">Türler: </span>
                  {renderItem(movie?.genres)}
                </div>
              ) : null}

              {movie?.contents?.length > 0 ? (
                <div className="w-full">
                  <span className="text-netflix-gray">Bu içerik: </span>
                  {renderItem(movie?.contents)}
                </div>
              ) : null}

              <div className="w-full gap-x-3 flex flex-wrap">
                <span className="text-netflix-gray">Yetişkinlik Düzeyi: </span>
                <span className="px-1.5 border-netflix-gray text-sm border-[1px]">
                  {movie?.maturitynumber}+
                </span>
                <span>{movie?.specificratingreason}</span>
                <span>
                  {movie?.maturitynumber} yaş ve üzerindeki izleyiciler için
                  uygun
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
