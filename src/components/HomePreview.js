import React, { Component } from "react";
import PlayIcon from "./Icons/PlayIcon";
import InfoIcon from "./Icons/InfoIcon";
class HomePreview extends Component {
  render() {
    return (
      <div className="w-[100%] z-20 flex justify-center ">
        <img
          className="object-cover "
          src="https://occ-0-778-784.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcL2iWNIx4vi4cc0PT0PTlMcuXiOrJcg0UujHyeug-6AETl6AmELWTiRI0nzrJ4MyTI-mPSFzuSnLTH63iJyJxMIVp5M.jpg?r=038"
        ></img>

        <div className="absolute bottom-44 left-14">
          <img
            className="w-2/5 "
            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcKrFBGTCBvScMtWc-og890uVGAY17bX1Ubji7aF45di0ImJWVrTpv3uMzv7A_Ka113nAT8MKrcF7NbCgmlsZuXrWapkT68Qoq9B92KjEGxv_l-OTBIwV5t5DjxFPn9AaiB18Bsh76OyFJaNdJKWOKK9xWR9kQllQ_qMx9_dKO_QsA.png?r=a7f"
          ></img>
          <span className="inline-block w-2/5 py-6 text-xl text-white font-netflixsansregular ">
            1950'lerde bir yetimhanede, küçük bir kız müthiş bir satranç
            yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda
            bağımlılıkla mücadele etmek zorunda kalır.
          </span>
          <div className="flex flex-row">
            <button className="flex bg-white px-6 py-2 rounded-md hover:bg-opacity-80">
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
