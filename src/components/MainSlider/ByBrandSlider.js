import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import brand1 from "@/assets/brands-logo/asuki.png";
import brand2 from "@/assets/brands-logo/bullsone.png";
import brand3 from "@/assets/brands-logo/mk.png";
import brand4 from "@/assets/brands-logo/Denso-Logo.jpg";
import brand5 from "@/assets/brands-logo/TYC.png";

import asuki from "@/assets/brands-logo/asuki.webp";
import mk from "@/assets/brands-logo/mk.webp";
import denso from "@/assets/brands-logo/denso.webp";
import tyc from "@/assets/brands-logo/TYC.webp";
import bullsone from "@/assets/brands-logo/bullsone.jpg";

const ByBrandSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" my-12">
      <div className="bg-[#20409a]">
        <h2 className=" text-[2rem] font-bold px-6 py-2 text-white">
          PARTS BY BRAND
        </h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[320px]">
              <Image className=" w-[120px] mx-auto mb-10 mt-3" src={brand1} />
              <Image src={asuki} />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[320px]">
              <Image className=" w-[100px] mx-auto mb-4 mt-3" src={brand3} />
              <Image src={mk} />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[320px]">
              <Image className=" w-[100px] mx-auto mb-10 mt-3" src={brand4} />
              <Image src={denso} />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[320px]">
              <Image className=" w-[110px] mx-auto mb-8 mt-3" src={brand5} />
              <Image src={tyc} />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[320px]">
              <Image className=" w-[100px] mx-auto mb-8 mt-3" src={brand2} />
              <Image src={bullsone} />
            </div>
          </div>
        </Slider>
      </div>
      <div className=" flex justify-center items-center">
        <button className=" bg-[#5c88ff] mt-2 mx-auto text-[20px] text-white px-12 py-2">
          View More
        </button>
      </div>
    </div>
  );
};

export default ByBrandSlider;
