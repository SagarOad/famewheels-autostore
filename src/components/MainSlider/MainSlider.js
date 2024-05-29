import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="main-banner-landing2 border-[#6c0202] px-14 py-28 grid"></div>
        </div>
        <div>
          <div className="main-banner-landing border-[#6c0202] px-14 py-28 grid"></div>
        </div>
        <div>
          <div className="main-banner-landing3 border-[#6c0202] px-14 py-28 grid"></div>
        </div>
      </Slider>
    </>
  );
};

export default MainSlider;
