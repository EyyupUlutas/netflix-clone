import { useState, useRef, useEffect } from "react";

const { innerWidth } = window;

var PADDINGS = 80; //15; //52;

function checkPaddings(width) {
  if (width >= 0 && width < 780) {
    PADDINGS = 52;
  } else if (width >= 780 && width < 1024) {
    PADDINGS = 15;
  } else {
    PADDINGS = 80;
  }
}

checkPaddings();

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  const [paddings, setPaddings] = useState(80);
  const [width, setWidth] = useState(innerWidth ? innerWidth : 0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      if (newWidth >= 0 && newWidth < 780) {
        setPaddings(52);
      } else if (newWidth >= 780 && newWidth < 1024) {
        setPaddings(15);
      } else {
        setPaddings(80);
      }
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  console.log("paddings => ", paddings);
  console.log("width => ", width);
  // checkPaddings(width);

  useEffect(() => {
    // const containerWidth = containerRef.current.clientWidth - paddings;
    const containerWidth = width - paddings;

    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
  }, [containerRef.current]);

  const handlePrev = () => {
    checkPaddings();
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    checkPaddings();
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  const slideProps = {
    style: {
      transform: `translate3d(${distance}px, 0, 0)`,
    },
  };

  console.log("viewed => ", viewed);
  const hasPrev = distance < 0;
  // const hasNext = viewed + 0.5 + totalInViewport < countElements;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
