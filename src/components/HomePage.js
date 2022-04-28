import React, { Component } from "react";
import Slider from "../components/NetflixSlider";
import Header from "../components/Header";
import HomePreview from "./HomePreview";
import Footer from "./Footer";
import movies from "../data.json";
import "../styles/index.css";

class HomePage extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div className="flex justify-center flex-col pb-6 ">
        <Header />

        <div>
          <div
            style={{
              zIndex: 100,
            }}
          >
            <HomePreview movies={movies} />
          </div>

          <Slider zindex={99} title="Gündemdekiler">
            {movies.reverse().map((movie, index) => (
              <Slider.Item movie={movie} key={index}></Slider.Item>
            ))}
          </Slider>

          <Slider zindex={98} title="Eleştirmenlerden Tam Not Alan Filmler">
            {movies
              .reverse()
              .slice(0, 2)
              .map((movie, index) => (
                <Slider.Item movie={movie} key={index}></Slider.Item>
              ))}
          </Slider>

          <Slider zindex={97} title="Eleştirmenlerden Tam Not Alan Diziler	">
            {movies
              .filter((x) => x.sections.length > 0)
              .reverse()
              .map((movie, index) => (
                <Slider.Item movie={movie} key={index}></Slider.Item>
              ))}
          </Slider>

          <Slider zindex={96} title="Eyyüp İçin En İyi Seçimler">
            {movies.map((movie, index) => (
              <Slider.Item movie={movie} key={index}></Slider.Item>
            ))}
          </Slider>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
