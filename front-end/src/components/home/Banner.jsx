import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../ConstentData/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      autoPlaySpeed={2000}
      infinite={true}
      autoPlay={true}
    >
      {bannerData.map((img) => (
        <div>
          <img src={img.url} style={{ width: "100%" }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
