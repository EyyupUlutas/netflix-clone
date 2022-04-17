import React, { Component } from "react";
import Slider from "../components/NetflixSlider";

const movies = [
  {
    id: 1,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image:
      "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/Queens-Gambit-DMFM-Kapak.jpg?fit=1589%2C1689&ssl=1",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default HomePage;
