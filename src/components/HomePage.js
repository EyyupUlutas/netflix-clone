import React, { Component } from "react";
import Slider from "../components/NetflixSlider";
import Header from "../components/Header";
import HomePreview from "./HomePreview";
import Footer from "./Footer";
import movies from "../data.json";

class HomePage extends Component {
  render() {
    return (
      <div className="flex justify-center flex-col pb-6 ">
        <Header />
        <div>
          <HomePreview movies={movies} />
          <div
            className="flex sm:absolute "
            style={{
              bottom: -100,
            }}
          >
            <Slider zindex={100} title="Eyyüp, İzlemeye Devam Et">
              {movies.map((movie, index) => (
                <Slider.Item movie={movie} key={index}></Slider.Item>
              ))}
            </Slider>
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
