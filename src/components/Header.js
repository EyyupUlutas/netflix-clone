import React, { Component } from "react";
import logo from "../assets/logo.png";
import downArrowIcon from "../assets/down-arrow-icon.png";
import notificationIcon from "../assets/notification-icon.png";
import searchIcon from "../assets/search-icon.png";
import "../styles/index.css";

class Header extends Component {
  state = { className: "" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.className) {
        this.setState({ className: "bg-black" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "" });
      }
    }
  };
  render() {
    return (
      <div
        ref={(r) => (this.ref = r)}
        className={`w-full h-16 fixed flex flex-row justify-between transition-all duration-500	items-center px-14 top-0 z-50 header ${this.state.className}`}
      >
        <div className="flex flex-row ">
          <img src={logo} width={90} height={90}></img>
          <span className="font-netflixsansmedium text-white text-sm ml-10">
            Ana Sayfa
          </span>
          <span className="font-netflixsansregular text-white text-sm ml-5">
            Diziler
          </span>
          <span className="font-netflixsansregular text-white text-sm ml-5">
            Filmler
          </span>
          <span className="font-netflixsansregular text-white text-sm ml-5">
            Yeni ve Popüler
          </span>
          <span className="font-netflixsansregular text-white text-sm ml-5">
            Listem
          </span>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <img src={searchIcon} width={20} height={20}></img>
          </div>
          <span className="text-white text-sm ml-6 font-netflixsansregular">
            Çocuk
          </span>
          <div className="ml-6">
            <img src={notificationIcon} width={20} height={20}></img>
          </div>
          <div className="flex  items-center ml-6">
            <img
              src="https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbU9eqkBgvU1DIIchQhvQn9qyCbirDHVaDIdYNRKmqlLfqAkOLSvufpEGOAYDKtlG0ie0L0oP-pd-UFx4MiOB2I9rWX_.png?r=9fe"
              width={30}
              height={30}
              className="rounded-sm"
            ></img>
            <div className="ml-2">
              <img
                src={downArrowIcon}
                width={15}
                height={15}
                className="rounded-sm"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
