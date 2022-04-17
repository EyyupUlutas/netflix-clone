import React, { Component } from "react";

import SliderSlick from "react-slick";

var settings = {
  infinite: true,
  slidesToShow: 3.1,
  slidesToScroll: 1,
  cssEase: "linear",
  arrows: true,
};

class Slider extends Component {
  render() {
    return (
      <div className="w-full">
        <SliderSlick {...settings}>
          <div style={{ backgroundColor: "blue" }}>
            <h3
              style={{
                width: "100%",
                height: 100,
                backgroundColor: "red",
              }}
            >
              1
            </h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </SliderSlick>
      </div>
    );
  }
}

export default Slider;
