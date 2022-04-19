import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import "./Item.css";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;
      console.log("movie => ", isActive);
      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
        >
          <img src={movie.image} alt="" />
          <ShowDetailsButton
            movie={movie}
            onClick={() => onSelectSlide(movie)}
          />
          {isActive && <div>aasdasd</div>}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
