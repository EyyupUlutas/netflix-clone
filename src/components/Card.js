import React, { Component } from "react";
import LikeIcon from "./Icons/LikeIcon";
import PlusIcon from "./Icons/PlusIcon";
class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="bg-netflix-gray-2 rounded-md">
        <div className="relative">
          <img
            className="rounded-t-md"
            src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQEMZLp0CAny0RTQHCC9js0pSisx_yKycPRMUvwidHKSLS8fmyvzj9cLOpsupslve4K7VKL3tqNkT_294MH-LCr29YNLQLVhwWsUzvBxL8h4TbYu.webp?r=82c"
          ></img>
          <span className="absolute top-2 right-3 text-white ">1 Sezon</span>
        </div>
        <div className="p-4 flex flex-col gap-y-5 ">
          <div className="flex flex-row items-center">
            <div className="  flex-1">
              <span className="text-green-500 font-netflixsansmedium text-base ">
                %96 Eşleşme
              </span>
              <div className="flex flex-row text-lg font-netflixsansregular text-left  items-center flex-wrap gap-x-2 text-white">
                <span className="px-1.5 border-netflix-gray text-base border-[1px]">
                  21+
                </span>
                <span className="text-base">2022</span>
              </div>
            </div>

            <button className=" flex justify-center items-center  border-netflix-gray  w-11 h-11 border-2 rounded-full ml-2 hover:border-white ">
              <PlusIcon width={15} height={15} color="white" />
            </button>
          </div>

          <span className="text-sm text-white text-opacity-80 line-clamp-6">
            {data
              ? data
              : `1950'lerde bir yetimhanede, küçük bir kız müthiş bir satranç
            yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda`}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
