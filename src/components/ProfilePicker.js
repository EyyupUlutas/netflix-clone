import React, { Component } from "react";
import "../styles/profilepicker.css";
import logo from "../assets/logo.png";
import plus from "../assets/plus-icon.png";
class ProfilePicker extends Component {
  render() {
    function Redirect() {
      window.location.href = "/browse";
    }
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="absolute top-0  w-full shadow-xl  shadow-gray">
          <img src={logo} className="w-24 sm:w-32 p-5"></img>
        </div>
        <span className="text-white text-3xl font-netflixsansregular mb-5">
          Kim İzliyor ?
        </span>
        <div className="flex flex-row ">
          <div
            onClick={() => {
              Redirect();
            }}
            className="container hover:cursor-pointer"
          >
            <div
              className="w-22 h-22 sm:w-32 sm:h-32 rounded-md bg-cover "
              style={{
                backgroundImage: `url("https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbU9eqkBgvU1DIIchQhvQn9qyCbirDHVaDIdYNRKmqlLfqAkOLSvufpEGOAYDKtlG0ie0L0oP-pd-UFx4MiOB2I9rWX_.png?r=9fe")`,
              }}
            ></div>
            <div className="text-center mt-3 mr-0 text-xs sm:text-sm font-netflixsansregular">
              Eyyüp
            </div>
          </div>
          <div
            onClick={() => {
              Redirect();
            }}
            className="container ml-5 hover:cursor-pointer"
          >
            <div
              className="w-22 h-22 sm:w-32 sm:h-32 rounded-md bg-cover "
              style={{
                backgroundImage: `url("https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT5ixFQbYisnc8BoIn1xc_zMKDXVUUZsRdfNhsya9b89L6TukHzcbTefYwHzK-81f0E1jrC-R9AK9KRRBwGCLxs6FtBY.png?r=8f0")`,
              }}
            ></div>
            <div className="text-center mt-3 mr-0 text-xs sm:text-sm font-netflixsansregular">
              Çocuk
            </div>
          </div>

          <div
            onClick={() => {
              Redirect();
            }}
            className="container ml-5 hover:cursor-pointer"
          >
            <div
              className="w-22 h-22 sm:w-32 sm:h-32 rounded-md bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: `url(${plus})`,
                backgroundSize: 50,
              }}
            ></div>
            <div className="text-center mt-3 mr-0 text-xs sm:text-sm font-netflixsansregular">
              Profil Ekle
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            Redirect();
          }}
          className="mt-12 p-1 font-netflixsanslight border-netflix-gray px-7 text-sm border-[1px] hover:border-white hover:text-white hover:cursor-pointer"
        >
          Profil Yönetimi
        </div>
      </div>
    );
  }
}

export default ProfilePicker;
