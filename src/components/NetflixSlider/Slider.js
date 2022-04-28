import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Content from "./Content";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import DownArrowIcon from "../Icons/DownArrowIcon";
import "./Slider.css";



const Slider = ({ children, activeSlide, zindex, title }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSliding(width, React.Children.count(children));

  const handleSelect = (movie) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <div>
      <SliderContext.Provider value={contextValue}>
        <SliderWrapper>
          <div
            style={{ zIndex: zindex }}
            className={cx(`slider`, {
              "slider--open": currentSlide != null,
            })}
          >
            {title ? (
              <div className="flex text-xs sm:text-sm md:text-lg  absolute top-[-40px]   text-white font-netflixsansmedium  group  items-center pr-5 left-3  lg:left-14">
                <div className="relative flex flex-row items-center justify-center w-full">
                  <span>{title ? title : ""}</span>
                  <span className=" -rotate-90 group-hover:visible group-hover:translate-x-[6.5rem] group-hover:translate-y-0.5   transition-all duration-1000 ">
                    <DownArrowIcon className="w-5 h-5 group-hover:w-3 group-hover:h-3 fill-white" />
                  </span>

                  <span className="text-xs  transition-all duration-1000  translate-y-0.5 invisible opacity-0   group-hover:opacity-100 group-hover:visible -translate-x-5 group-hover:translate-x-1">
                    Tümüne Göz At
                  </span>
                </div>
              </div>
            ) : null}

            <div
              ref={containerRef}
              className="slider__container"
              {...slideProps}
            >
              {children}
            </div>
          </div>
          {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
          {hasNext && <SlideButton onClick={handleNext} type="next" />}
        </SliderWrapper>
      </SliderContext.Provider>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </div>
  );
};

export default Slider;
