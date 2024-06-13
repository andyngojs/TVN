"use client";
import React from "react";
import Slider from "react-slick";

const DEFAULT_SETTINGS = {
  dots: true,
  infinite: true,
  arrow: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function Carousel({ children, className, setting }) {
  return (
    <Slider {...DEFAULT_SETTINGS} className={className} {...setting}>
      {children}
    </Slider>
  );
}

export default Carousel;
