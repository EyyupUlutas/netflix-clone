import React, { Component } from "react";
// import IconCross from "./../Icons/IconCross";
import "./Content.css";
import PlayIcon from "../Icons/PlayIcon";
import PlusIcon from "../Icons/PlusIcon";
import LikeIcon from "../Icons/LikeIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import MutedIcon from "../Icons/MutedIcon";
import AudioIcon from "../Icons/AudioIcon";
import CrossIcon from "../Icons/CrossIcon";
import Card from "../Card";

import "../../styles/index.css";

function scrollToDetail() {
  const divElement = document.getElementById("detail");
  divElement.scrollIntoView({ behavior: "smooth" });
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
      <div className="fixed  flex justify-center top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] overflow-y-auto">
        <div className="absolute bg-netflix-black-2 z-[1000] w-7/12 rounded-md top-5">
          <div className="h-full w-full relative">
            <button
              onClick={onClose}
              className="flex absolute top-4 right-4 justify-center items-center  bg-netflix-black-2  w-9 h-9 rounded-full"
            >
              <CrossIcon width={18} height={18} color="white" />
            </button>
            <img
              className="rounded-t-md"
              src="https://occ-0-778-784.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcL2iWNIx4vi4cc0PT0PTlMcuXiOrJcg0UujHyeug-6AETl6AmELWTiRI0nzrJ4MyTI-mPSFzuSnLTH63iJyJxMIVp5M.jpg?r=038"
            ></img>

            <div className="absolute flex flex-row justify-between bottom-10 px-10 ">
              <div>
                <img
                  className="w-2/5 pb-12"
                  src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcKrFBGTCBvScMtWc-og890uVGAY17bX1Ubji7aF45di0ImJWVrTpv3uMzv7A_Ka113nAT8MKrcF7NbCgmlsZuXrWapkT68Qoq9B92KjEGxv_l-OTBIwV5t5DjxFPn9AaiB18Bsh76OyFJaNdJKWOKK9xWR9kQllQ_qMx9_dKO_QsA.png?r=a7f"
                ></img>

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
                className="absolute bottom-0 right-10"
              >
                <button className="flex justify-center items-center opacity-60 fill-netflix-gray border-netflix-gray  w-10 h-10 border-2 rounded-full ml-2 transition-all duration-500	 hover:border-white hover:bg-netflix-gray hover:bg-opacity-30 hover:fill-white hover:opacity-100">
                  {this.state.muted ? (
                    <MutedIcon width={19} height={19} />
                  ) : (
                    <AudioIcon width={19} height={19} />
                  )}
                </button>
              </div>
            </div>
            <div className="w-full bottom-0 absolute flex p-5   bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
          </div>
          <div className="w-full bg-transparent flex flex-row px-7 py-5">
            <div className="flex-1 flex flex-col gap-y-5 text-white px-4">
              <div className="flex flex-row text-lg font-netflixsansregular text-left  items-center flex-wrap gap-x-2">
                {movie?.metadata?.matchScore ? (
                  <span className="text-green-500 font-netflixsansmedium text-base font-bold">
                    {movie.metadata.matchScore}
                  </span>
                ) : null}

                <span className="px-1.5 text-base">2022</span>
                {movie?.metadata?.maturityNumber ? (
                  <span className="px-1.5 border-netflix-gray text-base border-[1px]">
                    {movie.metadata.maturityNumber}+
                  </span>
                ) : null}
                {movie?.metadata?.duration ? (
                  <span className="text-base">{movie.metadata.duration}</span>
                ) : null}
              </div>

              <span className="text-lg pr-20">
                {movie?.metadata?.movieDesc}
              </span>
            </div>
            <div className="flex-[0.5]  text-white">
              <div className="flex flex-col items-center text-sm gap-y-4 text-left">
                <div className="w-full">
                  <span className="text-netflix-gray">Oyucu kadrosu: </span>
                  <span className="hover:underline">Anya Taylor-Joy, </span>
                  <span className=" hover:underline">Marielle Heller,</span>
                  <span
                    onClick={scrollToDetail}
                    className="italic  pl-1 hover:underline"
                  >
                    daha fazla
                  </span>
                </div>

                <div className="w-full">
                  <span className="text-netflix-gray">Türler: </span>
                  <span className="hover:underline">
                    Kitaplardan Uyarlanan Diziler,{" "}
                  </span>
                  <span className=" hover:underline">Drama Dizileri</span>
                </div>

                <div className="w-full">
                  <span className="text-netflix-gray">Bu içerik: </span>
                  <span className="hover:underline">Samimi, </span>
                  <span className=" hover:underline">Duygusal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="p-10 text-white ">
            <div className="flex flex-row justify-between pb-5">
              <span className="text-2xl text-white font-netflixsansmedium">
                Bölümler
              </span>
              <span className="text-lg text-white font-netflixsansregular">
                Mini Dizi
              </span>
            </div>

            <div className="flex flex-row border-y-[1px] rounded-md border-netflix-gray-2 pl-8 pr-16 py-8 items-center hover:cursor-pointer">
              <div className="mr-5 font-netflixsansregular text-2xl">1</div>
              <img
                className="w-32 h-20 rounded-md"
                src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoUMGbeWUC86HFBV2EosNdHlHokJ56YNK4tEhcvH4fM2-gL21YQAw2T8TWjE-vnLSu4uTCdeHbpaPKiqXhJ0uBDHBqQxso6O54yVBrvgnqRYF40.jpg?r=d5f"
              ></img>
              <div className="pl-3 w-full">
                <div className="flex flex-row justify-between">
                  <div className="font-netflixsansmedium">Açılışlar</div>
                  <div className="font-netflixsansregular">59 dk.</div>
                </div>
                <div className="text-opacity-80 text-sm text-white pt-2">
                  9 yaşındayken yetimhaneye gönderilen Beth olağanüstü bir
                  satranç becerisi geliştirir. Ancak çocuklara verilen yeşil
                  sakinleştiriciye karşı bağımlılığı da giderek artar.
                </div>
              </div>
            </div>

            <div className="flex flex-row border-y-[1px] rounded-md border-netflix-gray-2 pl-8 pr-16 py-8 items-center bg-netflix-gray bg-opacity-20 hover:cursor-pointer">
              <div className="mr-5 font-netflixsansregular text-2xl">2</div>
              <img
                className="w-32 h-20 rounded-md"
                src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoUMGbeWUC86HFBV2EosNdHlHokJ56YNK4tEhcvH4fM2-gL21YQAw2T8TWjE-vnLSu4uTCdeHbpaPKiqXhJ0uBDHBqQxso6O54yVBrvgnqRYF40.jpg?r=d5f"
              ></img>
              <div className="pl-3 w-full">
                <div className="flex flex-row justify-between">
                  <div className="font-netflixsansmedium">Açılışlar</div>
                  <div className="font-netflixsansregular">59 dk.</div>
                </div>
                <div className="text-opacity-80 text-sm text-white pt-2">
                  9 yaşındayken yetimhaneye gönderilen Beth olağanüstü bir
                  satranç becerisi geliştirir. Ancak çocuklara verilen yeşil
                  sakinleştiriciye karşı bağımlılığı da giderek artar.
                </div>
              </div>
            </div>

            <div className="flex flex-row border-y-[1px] rounded-md border-netflix-gray-2 pl-8 pr-16 py-8 items-center hover:cursor-pointer">
              <div className="mr-5 font-netflixsansregular text-2xl">3</div>
              <img
                className="w-32 h-20 rounded-md"
                src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoUMGbeWUC86HFBV2EosNdHlHokJ56YNK4tEhcvH4fM2-gL21YQAw2T8TWjE-vnLSu4uTCdeHbpaPKiqXhJ0uBDHBqQxso6O54yVBrvgnqRYF40.jpg?r=d5f"
              ></img>
              <div className="pl-3 w-full">
                <div className="flex flex-row justify-between">
                  <div className="font-netflixsansmedium">Açılışlar</div>
                  <div className="font-netflixsansregular">59 dk.</div>
                </div>
                <div className="text-opacity-80 text-sm text-white pt-2">
                  9 yaşındayken yetimhaneye gönderilen Beth olağanüstü bir
                  satranç becerisi geliştirir. Ancak çocuklara verilen yeşil
                  sakinleştiriciye karşı bağımlılığı da giderek artar.
                </div>
              </div>
            </div>
          </div>

          {/* Similars */}
          <div className="p-10">
            <span className="text-2xl text-white font-netflixsansmedium">
              Benzerleri
            </span>
            <div className="grid gap-5 max-h-netflix  grid-cols-3 relative	overflow-hidden w-full pt-5">
              <Card></Card>
              <Card></Card>
              <Card
                data={
                  "yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğundağa yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğundağapdsapdasdaspdkyeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda yeteneği sergiler. Ancak yıldızlığa uzanan umulmadık yolculuğunda"
                }
              ></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>

            <div className="w-full relative border-netflix-gray border-opacity-50 border-b-2">
              <div className="w-full bottom-0 absolute flex p-10 bg-gradient-to-t from-netflix-black-2 to-transparent"></div>
              <div className="absolute flex justify-center items-center text-center bottom-[-18px] z-50 w-full ">
                <button className="flex justify-center items-center  border-netflix-gray bg-[#404040] bg-opacity-60   w-9 h-9 border-2 rounded-full ml-2 hover:border-white ">
                  <DownArrowIcon width={18} height={18} color="white" />
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div id="detail" className="p-10 flex flex-col">
            <span className="text-white  text-2xl font-netflixsansmedium pb-5">
              The Queen's Gambit{" "}
              <span className="font-netflixsansregular">Hakkında</span>
            </span>
            <div className="flex flex-col items-center text-sm gap-y-2  text-left text-white">
              <div className="w-full">
                <span className="text-netflix-gray">Yaratıcılar: </span>
                <span className="hover:underline">Anya Taylor-Joy, </span>
                <span className=" hover:underline">Marielle Heller,</span>
              </div>
              <div className="w-full">
                <span className="text-netflix-gray">Oyucu kadrosu: </span>
                <span className="hover:underline">Anya Taylor-Joy, </span>
                <span className=" hover:underline">Marielle Heller,</span>
              </div>

              <div className="w-full">
                <span className="text-netflix-gray">Türler: </span>
                <span className="hover:underline">
                  Kitaplardan Uyarlanan Diziler,{" "}
                </span>
                <span className=" hover:underline">Drama Dizileri</span>
              </div>

              <div className="w-full">
                <span className="text-netflix-gray">Bu içerik: </span>
                <span className="hover:underline">Samimi, </span>
                <span className=" hover:underline">Duygusal</span>
              </div>
              <div className="w-full gap-x-3 flex flex-wrap">
                <span className="text-netflix-gray">Yetişkinlik Düzeyi: </span>
                <span className="px-1.5 border-netflix-gray text-sm border-[1px]">
                  {movie.metadata.maturityNumber}+
                </span>
                <span>cinsellik, argo, madde kullanımı, intihar</span>
                <span>18 yaş ve üzerindeki izleyiciler için uygun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
